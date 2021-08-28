#Step01_Hello_Lambda
1. Download data from official repo [link](https://github.com/panacloud-modern-global-apps/full-stack-serverless-cdk/tree/main/step01_hello_lambda)
2. `npm install aws-cdk -g`
3. update package.json (file)
    * `npm install aws-cdk -g`
    * update packages
        * update cdk version keys
        * devDependencies:{}
        * dependencies:{}
4. .gitignore (File)
    ```
    *.js
    !jest.config.js
    *.d.ts
    node_modules

    # CDK asset staging directory
    .cdk.staging
    cdk.out

    # Parcel default cache directory
    .parcel-cache
    ```        
5. `npm install`
    * this command will be create **node_module** folder where all dependancies and parents dependances will be installed.
6. `tsc`, <br> `npm run build`
7. `cdk bootstrap`
8. `cdk synth`
9. `cdk deploy`
    * Coply link
    * curl url
10. `cdk destroy`    