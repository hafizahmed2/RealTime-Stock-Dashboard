import { QueryTypes } from "sequelize";
import sequelize from "..";

export class BaseRepository<T extends Object> {
  protected selectColumnNamesGenerator = (columnNames?: string[]) => {
    if (!columnNames) return "*";
    return columnNames.join(",");
  };

  protected insertColumnNamesGenerator = (
    columnNames: string[],
    /* 
      isValues is there to transform values into ('','','') format
      while columns dont need to be formatted e.g. (user, email)
    */
    isValues?: boolean
  ) => {
    if (!isValues) return `(${columnNames.join(",")})`;
    return `(${columnNames
      .filter((item) => item)
      .map((item) => {
        switch (typeof item) {
          case "string":
            return `'${item}'`;
          case "number":
          case "bigint":
          case "boolean":
          case "symbol":
          case "undefined":
          case "object":
          case "function":
            return item;
        }
      })
      .join(",")})`;
  };

  protected tableName: string;
  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async create(data: T): Promise<void> {
    await sequelize.query(
      `insert into ${this.tableName} ${this.insertColumnNamesGenerator(
        Object.keys(data)
      )} values ${this.insertColumnNamesGenerator(Object.values(data), true)}`,
      {
        raw: true,
        type: QueryTypes.INSERT,
        logging: true,
      }
    );
  }

  async findAll(columns?: string[]): Promise<T[]> {
    return await sequelize.query<T>(
      `select ${this.selectColumnNamesGenerator(columns)} from ${
        this.tableName
      }`,
      {
        raw: true,
        type: QueryTypes.SELECT,
        logging: true,
      }
    );
  }

  async findById(id: number, columns?: string[]): Promise<T[]> {
    return await sequelize.query<T>(
      `select ${this.selectColumnNamesGenerator(columns)} from ${
        this.tableName
      } where id = ${id}`,
      {
        raw: true,
        type: QueryTypes.SELECT,
      }
    );
  }

  async deleteById(id: number): Promise<void> {
    await sequelize.query(`delete from ${this.tableName} where id = ${id}`, {
      raw: true,
      type: QueryTypes.DELETE,
    });
  }
}
