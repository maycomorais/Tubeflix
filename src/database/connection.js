import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

// console.log(process.env.DB_USER);

export const connection = new Sequelize(
    'postgres://filmes_cf5x_user:GOp4QvDPHwnvBiLBYV7A0d1NVQZjIDkX@dpg-c9sos1nho1kik8cb6f9g-a/filmes_cf5x', {
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

