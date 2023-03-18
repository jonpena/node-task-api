"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (customError, res, error) => {
    console.log(error);
    res.status(400);
    res.send({ customError, error });
};
exports.handleHttp = handleHttp;
