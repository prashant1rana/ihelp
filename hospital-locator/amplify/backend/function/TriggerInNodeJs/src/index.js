"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const AWS = require("aws-sdk");
AWS.config.region = process.env.REGION;
const lambda = new AWS.Lambda();
const loadDataSet = async (dataSet) => {
    const env = process.env.ENV;
    console.log(`Loading ${dataSet} Data for Env: ${env}`);
    const params = {
        FunctionName: `ScrapperInNodeJS-${env}`,
        InvocationType: "Event",
        Payload: JSON.stringify({ dataSet }),
    };
    await lambda.invoke(params).promise();
    console.log(`Invoked lambda to load ${dataSet} Data`);
};
const handler = (event, context, callback) => {
    // Loading MP Dataset
    loadDataSet("MP");
    callback(null, "Success");
};
exports.handler = handler;
