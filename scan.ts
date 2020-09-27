import * as ts from 'byots';
// import fs from 'fs';
const fs = require('fs');
let file = fs.readFileSync('./index.js');

let str = file.toString();

const scanner = ts.createScanner(ts.ScriptTarget.Latest, true);

function initializeState(text: string) {
    scanner.setText(text);
    scanner.setScriptTarget(ts.ScriptTarget.ES5);
    scanner.setLanguageVariant(ts.LanguageVariant.Standard);
}

// const str = `const foo = 123;
// var b = foo + foo;
// console.log('c', b)
// let a = 32`;

initializeState(str);

let token = scanner.scan();
while (token != ts.SyntaxKind.EndOfFileToken) {
    console.log('token', token, ' ',ts.Debug.formatSyntaxKind(token));
    token = scanner.scan();
} 

function printAllChildren(node: ts.Node, depth = 0) {
    console.log(new Array(depth + 1).join('----'), ts.Debug.formatSyntaxKind(node.kind), node.pos, node.end)
    depth++;
    node.getChildren().forEach(c => printAllChildren(c, depth))
}

var sourceFile = ts.createSourceFile('foo.ts', str, ts.ScriptTarget.ES5, true);
// printAllChildren(sourceFile)
// console.log('sourceFile1', sourceFile);

console.log('sourceFile', sourceFile);
// ts.bindSourceFile(sourceFile,{})
console.log('sourceFile21', sourceFile.statements[0].locals);
// console.log('sourceFile21', sourceFile.statements[0].end);
