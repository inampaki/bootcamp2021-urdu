# You can apply following steps to create your own Global Package.

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

## Wow congratulation you have publish your first global npm package well-done!
