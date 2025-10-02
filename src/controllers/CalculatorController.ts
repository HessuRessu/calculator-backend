"use strict";

import { Calculator } from "../classes/Calculator";
import { Controller, Get, Query, Response, Route, Tags } from "tsoa";
import { ICalculationResult, IMessage } from "../types";

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
    * @param numbers Array of comma separated number that we will be calculating.
    * @returns {"result": number, "prime": boolean} JSON-object indicating if input was prime.
    * @returns {"message": string} JSON-object indicating calculation error.
    */
    @Get("/sum")
    @Response<ICalculationResult>("200", "ok", {
        result: 1, 
        prime: true
    })
    @Response<IMessage>("400", "bad request", {
        message: "Invalid numbers provided.", 
    })
    public async sum(
        @Query() numbers: string
    ): Promise<{ result: number, isPrime: boolean } | { message: string }> {
        const numberArray: number[] = String(numbers).split(",").map(Number);
        const sum = calculator.sum(numberArray);
        if (Number.isNaN(sum)) {
            this.setStatus(400);
            return { message: "Invalid numbers provided." };
        }
        else {
            this.setStatus(200);
            return { result: sum, isPrime: calculator.isPrime(sum) };
        }
    }

    /**
    * Controller method for checking if number is prime.
    * @param number Number that we will be checking.
    * @returns {"result": number, "prime": boolean} JSON-object indicating if input was prime.
    * @returns {"message": string} JSON-object indicating calculation error.
    */
    @Get("/prime")
    @Response<ICalculationResult>("200", "ok", {
        result: 2,
        prime: true
    })
    @Response<IMessage>("400", "bad request", {
        message: "Invalid numbers provided.", 
    })
    public async isPrime(
        @Query() number: number
    ): Promise<{ result: number, prime: boolean } | { message: string }> {
        if (Number.isNaN(Number(number))) {
            this.setStatus(400);
            return { message: "Invalid number provided!" };
        } else {
            this.setStatus(200);
            return { result: number, prime: calculator.isPrime(number) };
        }
    }
}