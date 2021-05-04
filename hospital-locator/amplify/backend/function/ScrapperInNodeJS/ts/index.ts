import { Callback, Context, Handler } from "aws-lambda";
import ScrapperMP = require("./scrappers/ScrapperMP");

interface TriggerEvent {
  dataSet: string;
}
export const handler: Handler<TriggerEvent, string> = (
  event: TriggerEvent,
  context: Context,
  callback: Callback<string>
) => {
  let data;
  if (event.dataSet === "MP") {
    (async () => {
      data = await ScrapperMP.scrapData();
    })();
  } else {
    throw new Error("Unknown Data Set");
  }
  callback(null, "Success");
};
