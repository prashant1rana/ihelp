import { Callback, Context, Handler } from "aws-lambda";

const AWS = require("aws-sdk");

AWS.config.region = process.env.REGION;

const lambda = new AWS.Lambda();

interface TriggerEvent {}

const loadDataSet = async (dataSet: string) => {
  const env = process.env.ENV;
  console.log(`Loading ${dataSet} Data for Env: ${env}`);
  const params = {
    FunctionName: `ScrapperInNodeJS-${env}`, // the lambda function we are going to invoke
    InvocationType: "Event",
    Payload: JSON.stringify({ dataSet }),
  };
  await lambda.invoke(params).promise();
  console.log(`Invoked lambda to load ${dataSet} Data`);
};

export const handler: Handler<TriggerEvent, string> = (
  event: TriggerEvent,
  context: Context,
  callback: Callback<string>
) => {
  // Loading MP Dataset
  loadDataSet("MP");
  callback(null, "Success");
};
