/*
    Para usarmos o banco de dados, devemos configurar a conexão com o servidor.

    Primeiro, devemos instalar o módulo mysql:

    npm install -s mysql

    Após, devemos importar o módulo [linha 11].
*/

const mysql = require('mysql');

const banco = 'comandx';

const db = mysql.createConnection({
    host: 'localhost',
    //user e password dependem do valor que você configurou na instalação do seu mysql no micro.
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'comandx',
    multipleStatements: true
});

/*
O express tenta se conectar ao banco de dados. Se ocorrer um erro, ele "lança [throw] uma exceção. Quando dizemos que lançamos uma exceção, estamos disparando um erro na aplicação. Esse erro deve ser capturado por alguém. No nosso caso, a captura (catch) está no controller [ }).catch(erro => console.log(erro)); ].
Senão ele devolve uma mensagem no console de conexão com sucesso"

*/

db.connect((erro) => {
    if (erro) {
        console.log(erro);
        throw erro;
    }
    console.log("Conectado ao banco de dados [" + banco + "]");
});

global.db = db;

module.exports = db;