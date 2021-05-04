"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const ScrapperMP = require("./scrappers/ScrapperMP");
const handler = (event, context, callback) => {
    let data;
    if (event.dataSet === "MP") {
        (async () => {
            data = await ScrapperMP.scrapData();
        })();
    }
    else {
        throw new Error("Unknown Data Set");
    }
    callback(null, "Success");
};
exports.handler = handler;
