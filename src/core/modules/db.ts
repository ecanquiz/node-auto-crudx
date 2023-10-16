// https://github.com/salsita/node-pg-migrate/blob/master/src/db.ts
// import { ClientBase, Client, ClientConfig, QueryResult, QueryArrayConfig, QueryConfig } from 'pg'
import { QueryArrayResult, QueryConfig } from 'pg'
import { dbClient } from '@config/index'
import colors from 'colors'

class DB {
    constructor() {
        dbClient.connect((err) => { // if (err)  throw new Error('Uh oh!');
            if (err) {
                console.log(colors.bgRed(`ERROR: ${err}.`))
                process.exit();
            }
            console.log("Connected!");
        });
    }

    async exeQry ( queryConfig: QueryConfig, isEnd = false)
    : Promise<QueryArrayResult<any[]>> {
        let resp = await dbClient.query(queryConfig)
        if (isEnd)
          await dbClient.end()
        return resp
    }
  
    async getTableMasterExist(
      values: { schema: string, tableMaster: string },
      isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
      return await this.exeQry({
        values: Object.values(values),
        text: `SELECT DISTINCT table_name FROM information_schema.columns 
          WHERE table_name=$2 
          AND table_schema=$1;`            
        }, isEnd)
    }

    async getNamesList( isEnd = false )
    : Promise<QueryArrayResult<any[]>> { 
        return await this.exeQry({
            text: `SELECT row_number() OVER (ORDER BY datname), datname
                   FROM pg_database WHERE datname NOT IN ('template0', 'template1') ORDER BY 1;`
            },
            isEnd
        )
    }

    async getSchemasAndTablesOfBD( isEnd = false )
    : Promise<QueryArrayResult<any[]>> {
        return await this.exeQry({
            text: `SELECT table_schema, table_schema, table_name, table_name 
                FROM information_schema.tables 
                WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
                AND table_type = 'BASE TABLE' ORDER BY 1,3`
            },
            isEnd
        )
    }    

    async getSchemasOfBD( isEnd = false )
    : Promise<QueryArrayResult<any[]>> {
        return await this.exeQry({
            text: `SELECT distinct table_schema, table_schema
                FROM information_schema.tables 
                WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
                AND table_type = 'BASE TABLE' ORDER BY 1;`
            },
            isEnd
        )
    }

    async getTableDetailForeignKeysAssoc(
        values: { schema: string, tableMaster: string, tableDetail: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT  B.column_name,
                    C.table_name AS foreign_table_name,
                    C.column_name AS foreign_column_name,
                    A.constraint_name,
                    A.table_schema
            FROM information_schema.table_constraints AS A
            JOIN information_schema.key_column_usage AS B
            ON A.constraint_name = B.constraint_name
            JOIN information_schema.constraint_column_usage AS C
            ON C.constraint_name = A.constraint_name
            WHERE  constraint_type = 'FOREIGN KEY'
            AND A.table_name = $3
            AND B.table_name = $3
            AND A.table_schema = $1
            AND B.table_schema = $1
            AND C.table_schema = $1
            AND A.constraint_schema = $1
            AND B.constraint_schema = $1
            AND C.constraint_schema = $1
            AND B.column_name IN (SELECT B.column_name
                                      FROM information_schema.table_constraints A
                                      JOIN information_schema.key_column_usage AS B
                                      ON A.constraint_name = B.constraint_name
                                      JOIN information_schema.constraint_column_usage C
                                      ON A.constraint_catalog = C.constraint_catalog
                                      AND A.constraint_schema = C.constraint_schema
                                      AND A.constraint_name = C.constraint_name
                                      AND C.table_schema IN ($1)
                                      AND C.table_name IN ($2)
                                      WHERE lower(A.constraint_type) IN ('foreign key')
                                      AND A.table_name=$3 );`
        }, isEnd)
    }

    async getTableDetailsOfMaster(
        values: { schema: string, tableMaster: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT A.table_name, B.column_name AS id_foreign_key, C.column_name AS id_master
            FROM information_schema.table_constraints A
            JOIN information_schema.key_column_usage AS B
            ON A.constraint_name = B.constraint_name
            JOIN information_schema.constraint_column_usage C
            ON A.constraint_catalog = C.constraint_catalog
            AND A.constraint_schema = C.constraint_schema
            AND A.constraint_name = C.constraint_name
            AND C.table_schema IN ($1)
            AND C.table_name IN ($2)
            WHERE lower(A.constraint_type) IN ('foreign key');`            
        }, isEnd)
    }

    async getTableForeignKeysAssocMasterDetail(
        values: { schema: string, tableMaster: string, tableDetail: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT B.column_name
            FROM information_schema.table_constraints A
            JOIN information_schema.key_column_usage AS B ON A.constraint_name = B.constraint_name
            JOIN information_schema.constraint_column_usage C ON A.constraint_catalog = C.constraint_catalog
                AND A.constraint_schema = C.constraint_schema AND A.constraint_name = C.constraint_name
                AND C.table_schema IN ( $1 ) AND C.table_name IN ( $2 )
            WHERE lower(A.constraint_type) IN ('foreign key') AND A.table_name = $3 ;` 
        }, isEnd)
    }

    async getTableForeignKeysAssoc(
        values: { schema: string, tableMaster: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT  B.column_name,
            C.table_name AS foreign_table_name,
            C.column_name AS foreign_column_name,
            A.constraint_name,
            A.table_schema
            FROM information_schema.table_constraints AS A
            JOIN information_schema.key_column_usage AS B ON A.constraint_name = B.constraint_name
            JOIN information_schema.constraint_column_usage AS C ON C.constraint_name = A.constraint_name
            WHERE  constraint_type = 'FOREIGN KEY'
            AND A.table_name = $2
            AND B.table_name = $2
            AND A.table_schema = $1
            AND B.table_schema = $1
            AND C.table_schema = $1
            AND A.constraint_schema = $1
            AND B.constraint_schema = $1
            AND C.constraint_schema = $1 ;`            
        }, isEnd)
    }

    async getTablePrimaryKey(
        values: { schema: string, tableMaster: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT B.column_name
            FROM information_schema.table_constraints AS A
            JOIN information_schema.key_column_usage AS B
            ON A.constraint_name = B.constraint_name
            WHERE A.table_schema = $1
            AND A.table_name = $2
            AND constraint_type = 'PRIMARY KEY'
            AND B.constraint_schema = $1 ;`            
        }, isEnd)
    }

    async getTableStructure(
        values: { schema: string, tableMaster: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT column_name, data_type, character_maximum_length , is_nullable, column_default
            FROM information_schema.columns
            WHERE table_schema = $1 AND table_name = $2
            ORDER BY ordinal_position ASC;`            
        }, isEnd)
    }

    async getTableUniqueConstraint(
        values: { schema: string, tableMaster: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT B.column_name
            FROM information_schema.table_constraints AS A
            JOIN information_schema.key_column_usage AS B
            ON A.constraint_name = B.constraint_name
            WHERE A.table_schema = $1
            AND A.table_name = $2
            AND constraint_type = 'UNIQUE'
            AND B.constraint_schema = $1 ;`            
        }, isEnd)
    }

    async getTablesOfBD(
        values: { schema: string },
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            values: Object.values(values),
            text: `SELECT table_name, table_name 
            FROM information_schema.tables 
            WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
            AND table_type = 'BASE TABLE' 
            AND table_schema = $1 
            ORDER BY 1;`            
        }, isEnd)
    }

}

export default new DB;
