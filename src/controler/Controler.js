import { connection } from '../database/connection.js'
import { filmes } from '../model/filmes.js'

export const getIndex = async (req, res) => {
    try {
    const listFilmes = await filmes.findAll();
    console.log(listFilmes);
    res.render('index.ejs', {
        listFilmes
    });
    } catch(error) {
        res.send(error.message)
    }
};
export const getDetalhes = async (req, res) => {
    try {
        const filmesDetalhes = await filmes.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            filmesDetalhes
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await filmes.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('cadastro.ejs')
}

export const postCriar = async (req, res) => {
    const { nome, diretor, ano, img, duracao, video } = req.body
    try {
        if(!nome || !diretor || !ano || !img || !duracao || !video){
            res.send('Todos os campos são obrigatórios!')
        } else {
            await filmes.create({nome, diretor, img, ano, duracao, video})
            res.render('criar.ejs')
        }
    }
    catch(error){
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const filmeAtual = await filmes.findByPk(req.params.id)
        res.render('edit.ejs', {
            filmeAtual
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const { nome, diretor, ano, img, duracao, video } = req.body
        await filmes.update({
            nome: nome,
            diretor: diretor,
            ano: ano,
            img: img,
            duracao: duracao,
            video: video
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}