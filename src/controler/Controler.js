import { connection } from '../database/connection.js'
import { filmes } from '../model/filmes.js'

export const getIndex = async (req, res) => {
    try {
    const listFilmes = await filmes.findAll();
    console.log(listFilmes[listFilmes.length-1].img);
    res.render('index.ejs', {
        listFilmes,
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
    res.render('cadastro.ejs', {toggle: false})
}

export const postCriar = async (req, res) => {
    const { nome, diretor, img, ano, duracao, genero, video } = req.body
    console.log({ nome, diretor, img, ano, duracao, video })
    try {
        if(!nome || !diretor || !img || !ano || !duracao || !genero || !video){
            res.send('Todos os campos são obrigatórios!')
        } else {
            await filmes.create({nome, diretor, img, ano, duracao, genero, video})
            res.render('cadastro.ejs', {toggle: true})
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
        const { nome, diretor, ano, img, duracao, genero, video } = req.body
        await filmes.update({
            nome: nome,
            diretor: diretor,
            ano: ano,
            img: img,
            duracao: duracao,
            genero: genero,
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