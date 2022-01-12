import mysql from "mysql2";

export default class MySqlEfinfo {
  private pool: any;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.EFINFO_DB_HOST as string | "",
      database: process.env.EFINFO_DB_DATABASE as string | "",
      user: process.env.EFINFO_DB_USER as string | "",
      password: process.env.EFINFO_DB_PASSWORD as string | "",
    });
  }

  getPool(): any {
    return this.pool.promise();
  }
}
