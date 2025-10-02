"use strict";

/**
 * Calculator class implements methods for calculating sum of given sequence of numbers and checking if certain number is prime.
 * @class
 */
export class Calculator {

    /**
    * Calculate sum of given numbers
    * 
    * @param {number[]} numbers Array of numbers.
    * @returns {number}
    */
    sum(numbers: number[]): number {
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
    * @returns {boolean}
    */
    isPrime(number: number): boolean {
        if (number % 1 != 0 || number < 2)
            return false; // only positive integers greater than 1 can be primes.
        for (let i = 2; i < number; i++)
            if (number % i === 0) return false;
        return number > 1;
    }
}