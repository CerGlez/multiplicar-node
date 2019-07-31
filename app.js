const argv = require('./config/yargs').argv;
var colors = require('colors');

const { creaTexto, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':

        creaTexto(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.gray(archivo)}`))
            .catch(e => console.log(e));


        break;
    default:
        console.log('comando no reconocido');
}