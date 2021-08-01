import * as fs from "fs";
import * as path from "path";
import * as process from "process";

class boilerplateGen {
  makeProjectDir(dir: string) {
    // make a directory in the location from where this cli is called
    fs.mkdirSync(dir);
    process.chdir(dir); // one time thing
  }

  makeTSConfig(dir: string) {
    // fs.writeFile('<fileName>',<contenet>, callbackFunction)
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

  makePackageJSON(dir: string) {
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

  makeSrc(dir: string) {
    fs.mkdirSync(path.join(__dirname, "src"));
  }

  makeDist(dir: string) {
    fs.mkdirSync(path.join(__dirname, "dist"));
  }

  makeIndexTS(dir: string) {
    process.chdir("src");
    // create empty file for entry point
    fs.writeFileSync("index.ts", "");
  }
}

const boilerplate = new boilerplateGen();
export default boilerplate;
