import { connection } from '../database/connection.js'
import { filmes } from '../model/filmes.js'

export const getIndex = async (req, res) => {
    const vis = await connection.query('SELECT * FROM filmes', {
        model: filmes
    });
    console.log(vis)
    res.render('index.ejs')
}