"use strict";

export class Calculator {

    
    /**
    * Default constructor.
    */
    constructor() {

    }

    /**
    * Calculate sum of given numbers
    * 
    * @param {number[]} numbers Array of numbers.
    */
    sum(numbers: number[]) : number {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }

    /**
    * Check if given number is prime.
    * 
    * @param {number} number Number to check.
    */
    isPrime(number: number) : boolean {
        if (number % 1 != 0)
            return false; // only positive integers can be primes.
        for (var i = 2; i < number; i++)
            if (number % i === 0) return false;
        return number > 1;
    }
}