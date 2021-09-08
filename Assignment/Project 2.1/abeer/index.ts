#!/usr/bin/env node

const fs = require("fs");

let project_name = process.argv.splice(2)[0];

fs.mkdirSync(project_name);
fs.mkdirSync(project_name + "/src");
fs.mkdirSync(project_name + "/dist");

const config_data = `{
    "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src",
        "module": "commonjs"
    }
}`;

const package_data1 = `{
    "name": "`;
const package_data2 = `",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}`;

const package_data = package_data1 + project_name + package_data2;

const default_code = `console.clear();
console.log("Hello World!");`;

fs.writeFileSync(project_name + "/tsconfig.json", config_data);
fs.writeFileSync(project_name + "/package.json", package_data);
fs.writeFileSync(project_name + "/src/index.ts", default_code);
