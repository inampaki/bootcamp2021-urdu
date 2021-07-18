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
