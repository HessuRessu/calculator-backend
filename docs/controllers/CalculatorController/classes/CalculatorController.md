[**calculator-backend v0.0.1**](../../../README.md)

***

[calculator-backend](../../../modules.md) / [controllers/CalculatorController](../README.md) / CalculatorController

# Class: CalculatorController

Defined in: [src/controllers/CalculatorController.ts:15](https://github.com/HessuRessu/calculator-backend/blob/9e0113add544d8bb9a8dd325db0bf2d995df2eea/src/controllers/CalculatorController.ts#L15)

Calculator controller

Exposes endpoints for performing simple calculations and prime checking.

## Extends

- `Controller`

## Constructors

### Constructor

> **new CalculatorController**(): `CalculatorController`

#### Returns

`CalculatorController`

#### Inherited from

`Controller.constructor`

## Methods

### getHeader()

> **getHeader**(`name`): `undefined` \| `string` \| `string`[]

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:11

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `string` \| `string`[]

#### Inherited from

`Controller.getHeader`

***

### getHeaders()

> **getHeaders**(): `object`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:12

#### Returns

`object`

#### Inherited from

`Controller.getHeaders`

***

### getStatus()

> **getStatus**(): `undefined` \| `number`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:8

#### Returns

`undefined` \| `number`

#### Inherited from

`Controller.getStatus`

***

### isPrime()

> **isPrime**(`number`): `Promise`\<\{ `result`: `boolean`; \} \| \{ `message`: `string`; \}\>

Defined in: [src/controllers/CalculatorController.ts:46](https://github.com/HessuRessu/calculator-backend/blob/9e0113add544d8bb9a8dd325db0bf2d995df2eea/src/controllers/CalculatorController.ts#L46)

Controller method for checking if number is prime.

#### Parameters

##### number

`number`

Number that we will be checking

#### Returns

`Promise`\<\{ `result`: `boolean`; \} \| \{ `message`: `string`; \}\>

JSON-object indicating if input was prime.

***

### setHeader()

#### Call Signature

> **setHeader**\<`H`\>(`name`, `value?`): `void`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:9

##### Type Parameters

###### H

`H` *extends* keyof `OutgoingHttpHeaders`

##### Parameters

###### name

`H`

###### value?

`HeaderValue`\<`H`\>

##### Returns

`void`

##### Inherited from

`Controller.setHeader`

#### Call Signature

> **setHeader**(`name`, `value?`): `void`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:10

##### Parameters

###### name

`string`

###### value?

`string` | `string`[]

##### Returns

`void`

##### Inherited from

`Controller.setHeader`

***

### setStatus()

> **setStatus**(`statusCode`): `void`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:7

#### Parameters

##### statusCode

`number`

#### Returns

`void`

#### Inherited from

`Controller.setStatus`

***

### sum()

> **sum**(`numbers`): `Promise`\<\{ `isPrime`: `boolean`; `result`: `number`; \} \| \{ `message`: `string`; \}\>

Defined in: [src/controllers/CalculatorController.ts:24](https://github.com/HessuRessu/calculator-backend/blob/9e0113add544d8bb9a8dd325db0bf2d995df2eea/src/controllers/CalculatorController.ts#L24)

Controller method for calculating sum.

#### Parameters

##### numbers

`string`

Comma separated list of numbers.

#### Returns

`Promise`\<\{ `isPrime`: `boolean`; `result`: `number`; \} \| \{ `message`: `string`; \}\>

JSON-object consisting of calculation results.
