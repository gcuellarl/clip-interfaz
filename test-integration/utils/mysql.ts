import mysql from "mysql2";

export default class MySql {
  private pool: any;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST as string | "",
      database: process.env.DB_DATABASE as string | "",
      user: process.env.DB_USER as string | "",
      password: process.env.DB_PASSWORD as string | "",
    });
  }

  getPool(): any {
    return this.pool.promise();
  }

  async cleanMediums() {
    const pool = this.getPool();
    await pool.query("DELETE FROM medios");
    pool.end();
  }
}
