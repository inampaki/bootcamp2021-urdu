#!/usr/bin/env node
var fs = require("fs");
var project_name = process.argv.splice(2)[0];
fs.mkdirSync(project_name);
fs.mkdirSync(project_name + "/src");
fs.mkdirSync(project_name + "/dist");
var config_data = "{\n    \"compilerOptions\": {\n        \"target\": \"es2018\",\n        \"outDir\": \"./dist\",\n        \"rootDir\": \"./src\",\n        \"module\": \"commonjs\"\n    }\n}";
var package_data1 = "{\n    \"name\": \"";
var package_data2 = "\",\n\"version\": \"1.0.0\",\n\"description\": \"\",\n\"main\": \"index.js\",\n\"scripts\": {\n  \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n},\n\"keywords\": [],\n\"author\": \"\",\n\"license\": \"ISC\"\n}";
var package_data = package_data1 + project_name + package_data2;
var default_code = "console.clear();\nconsole.log(\"Hello World!\");";
fs.writeFileSync(project_name + "/tsconfig.json", config_data);
fs.writeFileSync(project_name + "/package.json", package_data);
fs.writeFileSync(project_name + "/src/index.ts", default_code);
