# AWS-Hello World
[Official code](https://github.com/panacloud-modern-global-apps/full-stack-serverless-cdk/tree/main/step00_hello_cdk)

1. `npm install -g typescript`
2. `npm install -g aws-cdk`
3. Create Project (folder `cdk1`)
    * `cdk init app --language typescript`
    * Reviews code
        * /bin/cdk-1.ts
        * /lib/cdk-1-stack.ts
4. `npm install @aws-cdk/aws-s3`    
5. update file `/lib/cdk-1-stack.ts`
```
import * as cdk from '@aws-cdk/core';
++ import * as s3 from '@aws-cdk/aws-s3'

export class Cdk1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
++    new s3.Bucket(this, "qasim-bucket1", {versioned:true});
  }
}

```

Please remove ++ signup before save above code.

6. `npm run build`
7. `cdk synth`
8. optional `aws configure`
   * create aws IAM user and policy rights
9. cdk deploye
   * output: 
   ```
   
 ✅  Cdk1Stack

Stack ARN:
arn:aws:cloudformation:us-west-2:203856535362:stack/Cdk1Stack/6936f1a0-f851-11eb-bf43-02184d4f065d
   ```
