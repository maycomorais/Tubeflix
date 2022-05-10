import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

// console.log(process.env.DB_USER);

export const connection = new Sequelize(
        process.env.DB_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
    // process.env.DB_BASE, //Database
    // process.env.DB_USER, //Usuário
    // process.env.DB_PASS, //Senha
    // {
    //     host: process.env.DB_LOCAL, //URL banco de Dados
    //     port: 5432, //Porta que roda o banco de Dados
    //     dialect: 'postgres' //Qual banco de dados o sequelize está trabalahando
    // }
);

