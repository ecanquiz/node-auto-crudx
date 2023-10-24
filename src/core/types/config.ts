export type Crud = {
    schema: string | undefined;
    tableMaster: string | undefined;
    tableMasterIsHelper: boolean;
    excludeFields: string[];
    generate: boolean;
    stackBackend: string | undefined;
    stackFrontend: string | undefined;
};

export type DBConfig = {
    host: string | undefined;
    port: number;
    database: string | undefined;
    user: string | undefined;
    password: string | undefined;
}

export type Config = {
    crud: Crud;    
    dbConfig: DBConfig;
    moduleName: string | undefined;
    pathBackend: string;
    pathFrontend: string;
    pathModule: string;
    pathUser: string | undefined;
}