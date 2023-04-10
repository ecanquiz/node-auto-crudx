// https://github.com/salsita/node-pg-migrate/blob/master/src/db.ts
// import { ClientBase, Client, ClientConfig, QueryResult, QueryArrayConfig, QueryConfig } from 'pg'
import { QueryArrayResult, QueryConfig } from 'pg'

import client from '../config/db'

type tQry = {
    schema: string
    tableDetail: string
    tableMaster: string
}

class DB {

    constructor() {
        client.connect()
    }

    async exeQry ( queryConfig: QueryConfig, isEnd = false)
    : Promise<QueryArrayResult<any[]>> {
        let resp = await client.query({
            rowMode: 'array',
            text: queryConfig.text 
        })
        if (isEnd)
            await client.end()
        return resp
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

    async getSchemasAndTablesOfBDSelect( isEnd = false )
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

    async getSchemasOfBDSelect( isEnd = false )
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

    async getTableDetailForeignKeysAssocSelect(
        values: string[],
        isEnd = false,
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            name: 'get-name',
            values,
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
            AND A.table_name='presentations'
            AND B.table_name='presentations'
            AND A.table_schema='public'
            AND B.table_schema='public'
            AND C.table_schema='public'
            AND A.constraint_schema='public'
            AND B.constraint_schema='public'
            AND C.constraint_schema='public'
            AND B.column_name NOT IN (SELECT B.column_name
                                      FROM information_schema.table_constraints A
                                      JOIN information_schema.key_column_usage AS B
                                      ON A.constraint_name = B.constraint_name
                                      JOIN information_schema.constraint_column_usage C
                                      ON A.constraint_catalog = C.constraint_catalog
                                      AND A.constraint_schema = C.constraint_schema
                                      AND A.constraint_name = C.constraint_name
                                      AND C.table_schema IN ('$1')
                                      AND C.table_name IN ('$2')
                                      WHERE lower(A.constraint_type) IN ('foreign key')
                                      AND A.table_name='$2' );
            `
            },
            isEnd
        )
    }

    /*async getTableDetailForeignKeysAssocSelect(
        {
           toClose = false
        }: Partial<tExeQry>,
        {
            schema = 'public',
            tableMaster,
            tableDetail
        }: Partial<tQry>
    ): Promise<QueryArrayResult<any[]>>{
        return await this.exeQry({
            qry: `SELECT  B.column_name,
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
            AND A.table_name='${tableDetail}'
            AND B.table_name='${tableDetail}'
            AND A.table_schema='${schema}'
            AND B.table_schema='${schema}'
            AND C.table_schema='${schema}'
            AND A.constraint_schema='${schema}'
            AND B.constraint_schema='${schema}'
            AND C.constraint_schema='${schema}'
            AND B.column_name NOT IN (SELECT B.column_name
                                      FROM information_schema.table_constraints A
                                      JOIN information_schema.key_column_usage AS B
                                      ON A.constraint_name = B.constraint_name
                                      JOIN information_schema.constraint_column_usage C
                                      ON A.constraint_catalog = C.constraint_catalog
                                      AND A.constraint_schema = C.constraint_schema
                                      AND A.constraint_name = C.constraint_name
                                      AND C.table_schema IN ('[${schema}]')
                                      AND C.table_name IN ('[${tableMaster}]')
                                      WHERE lower(A.constraint_type) IN ('foreign key')
                                      AND A.table_name='${tableDetail}' );
            `,
            toClose
        })
    }*/


}

export default new DB;
