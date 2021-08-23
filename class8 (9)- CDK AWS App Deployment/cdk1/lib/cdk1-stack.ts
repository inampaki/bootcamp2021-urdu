import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'

export class Cdk1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, "qasim-bucket1", {versioned:true});

    // The code that defines your stack goes here
  }
}
