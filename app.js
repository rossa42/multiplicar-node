const argv = require('./config/yargs').argv;
const colors = require('colors');

/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 23,
            alias: 'l'
        }
    }).command('crear', 'Imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 23,
            alias: 'l'
        }
    })
    .help()
    .argv;
*/
const { crearArchivo, listarTabla: listar } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arhivo => console.log('Archivo creado!'.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}