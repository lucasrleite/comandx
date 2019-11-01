const PratoDAO = require('../dao/pratoDAO');
const pratoDAO = new PratoDAO();
const swal = require('sweetalert');


class PratoController {
    renderPrato() {
        return function(req, res) {
            res.render('views/formPrato',
            {pratos: {}
        });
        }
    }
    editPrato() {
        return function(req, res) {
            res.render('views/formPratos');
            
        }
    }
    addPrato() {
        return function(req, res) {


            let prato = {
                nome: req.body.nomePrato,
                descricao: req.body.descPrato,
                preco: req.body.precoPrato,
                categoria: req.body.categoriaP
            };

            pratoDAO.adicionar(prato).then(() => {
                res.redirect('/pratos/add')


            }).catch(erro => {

                res.redirect('/');
            });
        }
    }
    
    editar() {
        return function(req, res) {
            let id = req.params.id;
            
            let prato = {
                nome: req.body.nomePrato,
                descricao: req.body.descPrato,
                preco: req.body.precoPrato,
                categoria: req.body.categoriaP,
                idpratos: id
            };

            pratoDAO.editar(prato).then(() => {
                
                res.status(200).send("OK")


            }).catch((erro => {
                console.log(erro);
                res.status(404).send("ERRO")

            }))
        };
    }


    formEditar(){
        return function(req,res){
            
            let id = req.params.id;
            console.log(id)
            pratoDAO.buscarPorId(id).then( prato=>{
                res.render('views/formPrato',{
                    pratos: prato
                });
            }).catch(erro=>{
                res.rendirect('/add')
                
            })
        }
    }

    listar() {
        return function(req, res) {

            pratoDAO.listar().then(prato => {

                res.render('views/editPratos', {
                    pratos: prato
                });
            }).catch(erro => {
                console.log(erro) });
        }

    }
    delete() {
        return function(req, res) {

            const id = req.params.id;
            pratoDAO.excluir(id).then(
                res.status(200).send("OK")

            ).catch((erro) =>
                res.status(404).send('ERRO: ' + erro)
            )

        }
    }
}

module.exports = PratoController;