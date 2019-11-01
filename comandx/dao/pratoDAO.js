const db = require('./db');

class PratoDAO {
    constructor() {
        this.db = db;
    }
    adicionar(prato) {
        return new Promise((resolve, reject) => {
            this.db.query(
                "insert into pratos set ?", [prato],
                (erro) => {
                    console.log('Passou');
                    if (erro)
                        reject("Não foi possivel cadastrar o prato" + erro);
                    resolve();
                }

            )
        });
    }
    buscarPorId(id){
        return new Promise((resolve,reject) => {
            this.db.query("SELECT  idpratos,nome,descricao,preco,categoria from pratos WHERE idpratos = ?",
                [id],//parâmetros na ordem
                (erro, prato) => {
                    if(erro)
                        return reject("Erro ao buscar a tarefa. " + erro);
                    return resolve(prato[0]);//tarefa[0] pois o select retorna sempre um array e quero a 1a linha
                }
            )
        });

    }
    editar(prato){
        return new Promise((resolve,reject) => {
            this.db.query(
                //1º parâmetro - query sql
                'UPDATE pratos SET nome = ?, descricao = ?, preco = ?, categoria=? WHERE idpratos = ?',
                //2º parâmetro - parâmetros da query
                [
                    prato.nome,
                    prato.descricao,
                    prato.preco,
                    prato.categoria,
                    prato.idpratos
                ],
                //3º parâmetro - Callback function
                (erro) => {
                    if(erro){
                        return reject('Erro ao editar a tarefa. ' + erro);
                    }
                    return resolve();
                }
            )
        });
    }

    listar() {
        return new Promise((resolve, reject) => {
            this.db.query('select idpratos,nome,descricao,preco,categoria from pratos', [], (err, prato) => {
                if (err) {
                    reject("Não foi possivel listar os pratos!");
                }

                resolve(prato);
            })

        });
    }
    excluir(id) {
        return new Promise((resolve, reject) => {

            this.db.query('DELETE FROM pratos WHERE idpratos = ?', [id],
                (erro) => {
                    if (erro)
                        return reject('Não foi possivel excluir a tarefa :' + erro);
                    return resolve();
                }

            )
        })
    }
}

module.exports = PratoDAO;