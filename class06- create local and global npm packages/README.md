# We will create local and global scope npm packages

# 1) Local scope package

1. Create new_folder **qasim** (you should use your name)
2. go to [https://www.npmjs.com/signup](https://www.npmjs.com/signup)

    *   Create your account
    *   login with credentials
    *   You have to verify email address after receiving email from **support@npmjs.com**

3. `npm init --scope=m.qasim077` (replace m.qasim077 with your-npmjs-user-name)    
    this command will be generated ** package.json ** file.
    ```
    {
    "name": "@m.qasim077/qasim",
    "version": "1.0.1",
    "description": "Bootcamp2021 First Package",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@types/node": "^16.3.3"
    }
    }
    ```

4. create new file **index.js**
    ```
    export function details(){
        return console.log("Hello World, From bootcamp-urdu-sesseion team");
    }
    ```
5. `npm install @types/node`
6. `npm adduser` login with npmjs user credentials
7. `npm publish --access public` you must verified email address before applied this command.

### Wow you have published your local scope package 

## Now we have to install above package in other or new projcet
1. Create New_Folder ** test-qasim **
2. code:
```
npm init --yes
npm i -save-dev @types/node
npm i @m.qasim077/qasim
```

** npm i @m.qasim/qasim ** @username/packagename 
** npm i @m.qasim/qasim ** @username/folder_name

3. index.ts
     ```
    import {detail} from "@m.qasim077/qasim";
    detail();
    ```

4. `tsc index.ts`
    ** output **
    `"Hello World, From bootcamp-urdu-sesseion team"`

### Wow you achieved your first success in npm world! now every one can you your package with your local-scope. Now ready for new big achievement or task.    





## You can apply following steps to create your own Global Package.

1. create new_folder(yournameCli) and open terminal (cli) in this root folder.
2. `npm init` press enter
    * this command created **package.json** file

3. `code .` press enter
4. create two new folders
    * new_folder/lib/
    * new_folder/bin/
5. create file **new_folder/lib/greeting.ts**

    ```
    export function greeting(name:string):string {
    return 'Dear ${name}, How are you!';
    }
    ```   
6. create file **new_folder/bin/index.ts**
    ```
    #!/usr/bin/env node

    import { greeting } from "../lib/greeting";

    let user = greeting("Muhammad Qasim");
    console.log(user);
    ```

7. transpile your code with this command `tsc ./bin/index.ts && tsc ./lib/greeting.ts`    
8. check your code or result `node ./bin/index.js` (this is javascript generated file)
    ** output **
    ```
    Dear Muhammad Qasim, How are you!
    ```
## update this version with get name from user with CLI (terminal)

9. install new package `npm i -save-dev @types/node' with this package we can get input from users in terminal or cli

10. update file **./bin/index.ts**
    ```
    #!/usr/bin/env node

    import { greeting } from "../lib/greeting";

    // let user = greeting("Muhammad Qasim");

    console.log(process.argv);

    let user=process.argv.splice(2)[0];
    console.log(user);
    ```
11. transpile and run your code gain 
    * `tsc ./bin/index.ts && tsc ./lib/greeting.ts`  
    * `node ./bin/index.js Inamul-haq Muhammad-Qasim Faheem`

    ** Output **
    ```
     '/usr/local/bin/node', '/usr/local/bin/greet', 'Inamul-haq', 'Muhammad-Qasim','Faheem' ] 
    Dear Inamul-haq, How are you!
    ```    
12. update ** package.json ** file
    ```
    {
    ...
    "main": "./lib/greeting.js",
    "bin": {
        "greet": "./bin/index.js"
    },
    ...

    ```    
13. `npm publish --access=public'
14. `npm i <New_folder> -g` (<New_folder> this will be replace with your packageName or folder name for example: `npm i qasimcli`)
15. code `greet Inamul-haq Muhammad-Qasim Faheem`

** Output **
```
    '/usr/local/bin/node', '/usr/local/bin/greet', 'Inamul-haq', 'Muhammad-Qasim','Faheem' ] 
Dear Inamul-haq, How are you!
``` 

## Wow congratulations! You have published your first global npm package well-done!
