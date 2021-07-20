# bootCamp2021

**Essential Typescript4**

Step 1: Install Node.js(https://nodejs.org/en/download/) LTS.

Step 2: npm install --global typescript@4.2.2(write the code in terminal and run)

Step 3: Install a Programmer’s Editor (https://code.visualstudio.com)

Initializing the Project Folder Package.Json run this command (npm init --yes)

Creating the Compiler Configuration File tsconfig.json.write mentioned below code.

{
 "compilerOptions": {
 
 "target": "es2018",
 
 "outDir": "./dist",
 
 "rootDir": "./src",
 
 "module": "commonjs"
 }
}
Adding a TypeScript Code File index.ts in src folder.

Compiling the Code by "tsc"

Executing the Compiled Code by node ./dist/index.js.

**Using a Third-Party Package**

One of the joys of writing JavaScript code is the ecosystem of packages that can be incorporated into
projects. TypeScript allows any JavaScript package to be used but with the addition of static type support. I
am going to use the excellent Inquirer.js package to deal with prompting the user for commands and processing responses. 

Run Cooand = npm install inquirer@7.3.3

**Adding Type Declarations for the JavaScript Package**

There are two ways to provide TypeScript with the information that it requires for static typing. The
first approach is to describe the types yourself. I cover the features that TypeScript provides for describing
JavaScript code in Chapter 14. Manually describing JavaScript code isn’t difficult, but it does take some time
and requires good knowledge of the code you are describing.
The second approach is to use type declarations provided by someone else. The Definitely Typed
project is a repository of TypeScript type declarations for thousands of JavaScript packages, including the
Inquirer.js package. To install the type declarations, run the command shown in Listing 1-31 in the todo
folder.

Run Command = npm install --save-dev @types/inquirer

**Persistently Storing Data**

Lowdb is an excellent database package that stores data in a JSON file and that is used as the data
storage component for the json-server package, which I use to create HTTP web services in Part 3 of this
book.
To install the Lowdb package and the type definitions
that describe its API to TypeScript.

Run Commands.

npm install lowdb@1.0.0

npm install --save-dev @types/lowdb



