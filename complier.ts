import { realpath } from 'fs';
import { CompilerOptions, createPrinter, createProgram, EmitHint, transform, isImportDeclaration } from 'typescript';
import path from 'path';
const realPath = String.raw`${path.resolve(__dirname, 'index.js')}`.split('\\').join('/'); 
console.log('realpath', realPath);
console.log(String.raw`${realPath}`.split('\\').join('/'))
const program = createProgram([realPath],{
    allowJs:true
});
const sourceFiles = program.getSourceFiles().filter(e =>  {
    return  e.fileName == String.raw`${realPath}`.split('\\').join('/');
});
let statment = sourceFiles[0]['statements'][0];
console.log('isImportDeclaration', isImportDeclaration(statment));
// console.log('s', statment.moduleSpecifier);

// console.log('sourceFiles', isImportDeclaration(sourceFiles[0]['statements'][1]));
// console.log('sourceFiles', sourceFiles[0]['statements'][1]);
const typeChecker = program.getTypeChecker()


// console.log('typeChecker', typeChecker);
// const result = transform(sourceFiles, [
//     generateGenericPropAndState(typeChecker),
//     removeImportPropTypes(typeChecker),
//     removeStaticPropTypes(typeChecker),
//   ])
