const db = require('./db');

class FuncDAO {
    constructor() {
        this.db = db;
    }
    adicionar(funcionario) {
        return new Promise((resolve, reject) => {
            this.db.query(
                "insert into func set ?", [funcionario],
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
            this.db.query("SELECT idfunc,nome,email,permissao,user,senha from func WHERE idfunc = ?",
                [id],//parâmetros na ordem
                (erro, func) => {
                    if(erro)
                        return reject("Erro ao buscar a tarefa. " + erro);
                    return resolve(func[0]);//tarefa[0] pois o select retorna sempre um array e quero a 1a linha
                }
            )
        });

    }
    editar(prato){
        return new Promise((resolve,reject) => {
            this.db.query(
                //1º parâmetro - query sql
                'UPDATE func SET nome = ?, email = ?, permissao = ?, user=?, senha WHERE idpratos = ?',
                //2º parâmetro - parâmetros da query
                [
                    prato.nome,
                    prato.descricao,
                    prato.preco,
                    prato.categoria,
                    prato.idprato
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
            this.db.query('select idfunc,nome,email,permissao,user from func', [], (err, func) => {
                if (err) {
                    reject("Não foi possivel listar os pratos!");
                }

                resolve(func);
            })

        });
    }
    excluir(id) {
        return new Promise((resolve, reject) => {

            this.db.query('DELETE FROM func WHERE idfunc = ?', [id],
                (erro) => {
                    if (erro)
                        return reject('Não foi possivel excluir o funcionario :' + erro);
                    return resolve();
                }

            )
        })
    }
}

module.exports = FuncDAO;