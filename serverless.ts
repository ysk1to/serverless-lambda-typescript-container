import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'hoge',
  frameworkVersion: '2',
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
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
