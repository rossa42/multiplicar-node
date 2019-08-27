const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 23,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', opciones)
    .command('crear', 'Imprime en consola tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}