[**calculator-backend v0.0.1**](../../../README.md)

***

[calculator-backend](../../../modules.md) / [controllers/CalculatorController](../README.md) / CalculatorController

# Class: CalculatorController

Defined in: [src/controllers/CalculatorController.ts:16](https://github.com/HessuRessu/calculator-backend/blob/e0992c3a3096d7e0eb2c13a5cb20d034b7065c2a/src/controllers/CalculatorController.ts#L16)

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

> **isPrime**(`number`): `Promise`\<\{ `prime`: `boolean`; `result`: `number`; \} \| \{ `message`: `string`; \}\>

Defined in: [src/controllers/CalculatorController.ts:61](https://github.com/HessuRessu/calculator-backend/blob/e0992c3a3096d7e0eb2c13a5cb20d034b7065c2a/src/controllers/CalculatorController.ts#L61)

Controller method for checking if number is prime.

#### Parameters

##### number

`number`

Number that we will be checking.

#### Returns

`Promise`\<\{ `prime`: `boolean`; `result`: `number`; \} \| \{ `message`: `string`; \}\>

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

Defined in: [src/controllers/CalculatorController.ts:32](https://github.com/HessuRessu/calculator-backend/blob/e0992c3a3096d7e0eb2c13a5cb20d034b7065c2a/src/controllers/CalculatorController.ts#L32)

Controller method for calculating sum.

#### Parameters

##### numbers

`string`

Array of comma separated number that we will be calculating.

#### Returns

`Promise`\<\{ `isPrime`: `boolean`; `result`: `number`; \} \| \{ `message`: `string`; \}\>

JSON-object indicating if input was prime.
