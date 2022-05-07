import Sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const filmes = connection.define('filmes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    diretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    video: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

const initTable = async () => {
    await filmes.sync()
}

initTable();

// const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/uxR_sTZnBtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

// function clearIframe(teste){
//     const newString = teste.replace(/iframe/g, '').replace(/[<>/"]/g, '')
//     console.log(newString)
// }
