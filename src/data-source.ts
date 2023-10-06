import { DataSource } from 'typeorm'; // or your specific ORM if not TypeORM
import dotenv from 'dotenv';
dotenv.config();

export const MyDataSource = new DataSource({
    "name": "mysql",
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": Number(process.env.DB_PORT),
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "logging": ["query", "error"],  // 쿼리와 에러 로그만 출력
    entities:[__dirname + "/entities/*.entity{.ts,.js}"],
    synchronize: true,
  },
);


// export const MyDataSource = new DataSource({
//     "name": "mysql",
//     "type": "mysql",
//     "host": "172.24.96.1",
//     "port": 3306,
//     "username": "root",
//     "password": "java",
//     "database": "test",
//     "logging": false,
//     entities:[__dirname + "/entities/*.entity{.ts,.js}"],
//     synchronize: true,
//   },
// );
