import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-lambda-typescript',
  frameworkVersion: '2',
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'ap-northeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      image: 'xxx'
    }
  }
}

module.exports = serverlessConfiguration;
