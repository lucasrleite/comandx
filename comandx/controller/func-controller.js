const FuncDAO = require('../dao/funcDAO');
const funcDAO = new FuncDAO();
const swal = require('sweetalert');


class FuncController {
    renderFunc() {
        return function(req, res) {
            res.render('views/formFuncionario',
            {func: {}
        });
        }
    }
    editPrato() {
        return function(req, res) {
            res.render('views/formPratos');
            
        }
    }
    addFunc() {
        return function(req, res) {


            let funcionario = {
                nome: req.body.nomeFunc,
                email: req.body.emailFunc,
                permissao: req.body.permFunc,
                user: req.body.userFunc,
                senha: req.body.passFunc
            };

            funcDAO.adicionar(funcionario).then(() => {
                res.redirect('/')


            }).catch(erro => {

                res.redirect('/');
            });
        }
    }
    
    editar() {
        return function(req, res) {
            let id = req.params.id;
            
            let func = {
                nome: req.body.nomeFunc,
                email: req.body.emailFunc,
                permissao: req.body.permFunc,
                user: req.body.userFunc,
                senha: req.body.passFunc,
                idfunc: id
            };

            funcDAO.editar(prato).then(() => {
                res.redirect('/pratos')


            }).catch((erro => {
                console.log(erro);
                res.redirect('/');
            }))
        };
    }


    formEditar(){
        return function(req,res){
            
            let id = req.params.id;
            console.log(id)
            funcDAO.buscarPorId(id).then( funcionarios=>{
                console.log(funcionarios);
                res.render('views/formFuncionario',{
                    
                    func: funcionarios
                });
            }).catch(erro=>{
                res.rendirect('/add')
                
            })
        }
    }

    listar() {
        return function(req, res) {

            funcDAO.listar().then(func => {

                res.render('views/editFunc', {
                    funcionarios: func
                });
            }).catch(erro => {
                console.log(erro) });
        }

    }
    delete() {
        return function(req, res) {

            const id = req.params.id;
            funcDAO.excluir(id).then(
                res.status(200).send("OK")

            ).catch((erro) =>
                res.status(404).send('ERRO: ' + erro)
            )

        }
    }
}

module.exports = FuncController;