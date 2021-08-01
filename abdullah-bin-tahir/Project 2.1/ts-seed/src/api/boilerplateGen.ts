import * as fs from "fs";
import * as process from "process";

class boilerplateGen {
  makeProjectDir(dir: string) {
    // make a directory in the location from where this cli is called
    fs.mkdirSync(dir);
  }

  makeTSConfig(dir: string) {
    // fs.writeFile('<fileName>',<contenet>, callbackFunction)
    process.chdir(dir);
    const content = `{
        "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src",
        "module": "commonjs"
        }
       }
       `;
    fs.writeFileSync("tsconfig.json", content);
  }

  makeSrc(dir: string) {
    process.chdir(dir);
    fs.mkdirSync("/src");
  }

  makeDist(dir: string) {
    process.chdir(dir);
    fs.mkdirSync("/dist");
  }

  makeIndexTS(dir: string) {
    process.chdir(dir);
    process.chdir("./src");
    // create empty file for entry point
    fs.writeFileSync("index.ts", "");
  }

  makePackageJSON(dir: string) {
    process.chdir(dir);
    const content = `{
        "name": "application-name",
        "version": "0.0.1",
        "private": true,
        "scripts": {
          "start": "node app"
        },
        "dependencies": {
          "package-name": "ver",

        }
      }`;
    fs.writeFileSync("package.json", content);
  }
}

const boilerplate = new boilerplateGen();
export default boilerplate;
