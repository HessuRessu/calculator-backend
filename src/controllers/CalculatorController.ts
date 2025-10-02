"use strict";

import { Calculator } from "../classes/Calculator";
import { Controller, Get, Query, Route, Tags } from "tsoa";

const calculator = new Calculator();

/**
 * Calculator controller
 *
 * Exposes endpoints for performing simple calculations and prime checking.
 */
@Tags("Calculator")
@Route("calculate")
export class CalculatorController extends Controller {

    /**
    * Controller method for calculating sum.
    * @param numbers Comma separated list og numbers.
    * @returns {"result": number, "isPrime": boolean} JSON-object consisting of calculation results.
    */
    @Get("/sum")
    public async sum(
        @Query() numbers: string
    ): Promise<{ result: number, isPrime: boolean } | { message: string }> {
        const numberArray: number[] = String(numbers).split(",").map(Number);
        const sum = calculator.sum(numberArray);
        if (Number.isNaN(sum)) {
            this.setStatus(400);
            return { message: "Invalid numbers provided!" };
        }
        else {
            this.setStatus(200);
            return { result: sum, isPrime: calculator.isPrime(sum) };
        }
    }

    /**
    * Controller method for checking if number is prime.
    * 
    * @param {Request} request express http request.
    * @param {Response} response express http response.
    */
    @Get("/prime")
    public async isPrime(
        @Query() number: number
    ): Promise<{ result: boolean } | { message: string }> {
        if (Number.isNaN(Number(number))) {
            this.setStatus(400);
            return { message: "Invalid number provided!" };
        } else {
            this.setStatus(200);
            return { result: calculator.isPrime(number) };
        }
    }
}