"use strict";

import { Request, Response } from "express";
import { Calculator } from "./Calculator";
import swaggedDoc from "./docs/swagger.json";

const calculator = new Calculator();

/**
* Controller method for calculating sum.
* 
* @param {Request} request express http request.
* @param {Response} response express http response.
*/
export const sum = (request: Request, response: Response) => {
    let numbers: number[] = String(request.query.numbers).split(",").map(Number);
    let sum = calculator.sum(numbers);
    if (Number.isNaN(sum))
        response.status(400).json({message: "Invalid numbers provided!"});
    else
        response.status(200).json({result: sum, isPrime: calculator.isPrime(sum)});
}

/**
* Controller method for checking if number is prime.
* 
* @param {Request} request express http request.
* @param {Response} response express http response.
*/
export const isPrime = (request: Request, response: Response) => {
    if (Number.isNaN(Number(request.query.number)))
        response.status(400).json({message: "Invalid number provided!"});
    else
        response.status(200).json({isPrime: calculator.isPrime(Number(request.query.number))});
}

/**
* Controller method for serving swagger API documentation.
* 
* @param {Request} request express http request.
* @param {Response} response express http response.
*/
export const serveApiDocs = (request: Request, response: Response) => {
    swaggedDoc.host = request.headers.host as string;
    swaggedDoc.schemes[0] = request.protocol as string;
    response.status(200).json(swaggedDoc);
}
