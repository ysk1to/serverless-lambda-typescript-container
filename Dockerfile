FROM amazon/aws-lambda-nodejs:12
COPY handler.ts package*.json tsconfig.json webpack.config.js ./
RUN npm install
RUN npx webpack
CMD [ "handler.hello" ]
