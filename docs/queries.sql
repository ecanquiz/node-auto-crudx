/*
// 1- get_dbnames_list.sql

const query = `
  SELECT row_number() OVER (ORDER BY datname), datname FROM pg_database WHERE datname NOT IN ('template0', 'template1') order by 1;
`;
*/

/*
// 2- get_schemas_and_tables_of_bd_select.sql

const query = `
SELECT table_schema, table_schema, table_name, table_name 
FROM information_schema.tables 
WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
AND table_type = 'BASE TABLE' ORDER BY 1,3
`;
*/

/*
// 3- get_schemas_of_bd_select.sql

const query = `SELECT distinct table_schema, table_schema
FROM information_schema.tables 
WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
AND table_type = 'BASE TABLE' ORDER BY 1;
`;
*/

/*
// 4- get_table_detail_foreign_keys_assoc_select.sql

const query = `
SELECT  B.column_name,
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
AND A.table_name='{fld:table_detail}'
AND B.table_name='{fld:table_detail}'
AND A.table_schema='{fld:schema}'
AND B.table_schema='{fld:schema}'
AND C.table_schema='{fld:schema}'
AND A.constraint_schema='{fld:schema}'
AND B.constraint_schema='{fld:schema}'
AND C.constraint_schema='{fld:schema}'
AND B.column_name NOT IN (SELECT B.column_name
                          FROM information_schema.table_constraints A
                          JOIN information_schema.key_column_usage AS B
                          ON A.constraint_name = B.constraint_name
                          JOIN information_schema.constraint_column_usage C
                          ON A.constraint_catalog = C.constraint_catalog
                          AND A.constraint_schema = C.constraint_schema
                          AND A.constraint_name = C.constraint_name
                          AND C.table_schema IN ('{fld:schema}')
                          AND C.table_name IN ('{fld:table_master}')
                          WHERE lower(A.constraint_type) IN ('foreign key')
                          AND A.table_name='{fld:table_detail}' );
`;
*/

/*
// 5- get_table_detail_of_master_select.sql

const query =`SELECT A.table_name, B.column_name AS id_foreign_key, C.column_name AS id_master
FROM information_schema.table_constraints A
JOIN information_schema.key_column_usage AS B
ON A.constraint_name = B.constraint_name
JOIN information_schema.constraint_column_usage C
ON A.constraint_catalog = C.constraint_catalog
AND A.constraint_schema = C.constraint_schema
AND A.constraint_name = C.constraint_name
AND C.table_schema IN ('{fld:schema}')
AND C.table_name IN ('{fld:table}')
WHERE lower(A.constraint_type) IN ('foreign key');
`;
*/

/*
// 6- get_table_foreign_keys_assoc_master_detail_select.sql

SELECT B.column_name
    FROM information_schema.table_constraints A
    JOIN information_schema.key_column_usage AS B ON A.constraint_name = B.constraint_name
    JOIN information_schema.constraint_column_usage C ON A.constraint_catalog = C.constraint_catalog
        AND A.constraint_schema = C.constraint_schema AND A.constraint_name = C.constraint_name
        AND C.table_schema IN ('{fld:schema}') AND C.table_name IN ('{fld:table_master}')
    WHERE lower(A.constraint_type) IN ('foreign key') AND A.table_name='{fld:table_detail}' ;
*/

/*
// 7- get_table_master_foreign_keys_assoc_select.sql
SELECT  B.column_name,
        C.table_name AS foreign_table_name,
        C.column_name AS foreign_column_name,
        A.constraint_name,
        A.table_schema
FROM information_schema.table_constraints AS A
JOIN information_schema.key_column_usage AS B ON A.constraint_name = B.constraint_name
JOIN information_schema.constraint_column_usage AS C ON C.constraint_name = A.constraint_name
WHERE  constraint_type = 'FOREIGN KEY'
AND A.table_name='{fld:table}'
AND B.table_name='{fld:table}'
AND A.table_schema='{fld:schema}'
AND B.table_schema='{fld:schema}'
AND C.table_schema='{fld:schema}'
AND A.constraint_schema='{fld:schema}'
AND B.constraint_schema='{fld:schema}'
AND C.constraint_schema='{fld:schema}';
*/

/*
// 8- get_table_primary_key_select.sql

SELECT B.column_name
FROM information_schema.table_constraints AS A
JOIN information_schema.key_column_usage AS B
ON A.constraint_name = B.constraint_name
WHERE A.table_schema='{fld:schema}'
AND A.table_name='{fld:table}'
AND constraint_type = 'PRIMARY KEY'
AND B.constraint_schema='{fld:schema}';
*/

/*
// 9- get_table_structure_select.sql

SELECT column_name, data_type, character_maximum_length , is_nullable, column_default
FROM information_schema.columns
WHERE table_schema='{fld:schema}' AND table_name='{fld:table}'
ORDER BY ordinal_position ASC;
*/

/*
// 10- get_table_unique_constraint_get_select.sql

SELECT B.column_name
FROM information_schema.table_constraints AS A
JOIN information_schema.key_column_usage AS B
ON A.constraint_name = B.constraint_name
WHERE A.table_schema='{fld:schema}'
AND A.table_name='{fld:table}'
AND constraint_type = 'UNIQUE'
AND B.constraint_schema='{fld:schema}';
*/

/*
// 11- get_tables_of_bd_select.sql

SELECT table_name, table_name 
FROM information_schema.tables 
WHERE table_schema NOT IN ('pg_catalog', 'information_schema') 
AND table_type = 'BASE TABLE' 
AND table_schema = '{fld:schema}' 
ORDER BY 1;
*/



