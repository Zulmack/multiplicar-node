const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');
const { argv } = require('./config/yargs.js');
// const fs = require('./fs');
console.log('INICIO DEL PROGRAMA\n---------------------------------------------------'.green);
let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`${comando} No es un comando reconocido`.red);
        break;
}
// let base = argv[2].split('=')[1];


console.log('---------------------------------------------------\nFIN DEL  PROGRAMA'.green);