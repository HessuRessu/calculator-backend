[**calculator-backend v0.0.1**](../../../README.md)

***

[calculator-backend](../../../modules.md) / [controllers/HealthController](../README.md) / HealthController

# Class: HealthController

Defined in: [src/controllers/HealthController.ts:12](https://github.com/HessuRessu/calculator-backend/blob/9e0113add544d8bb9a8dd325db0bf2d995df2eea/src/controllers/HealthController.ts#L12)

Health check controller

Exposes endpoint for checking service health.

## Extends

- `Controller`

## Constructors

### Constructor

> **new HealthController**(): `HealthController`

#### Returns

`HealthController`

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

### getHealth()

> **getHealth**(): `Promise`\<\{ `date`: `Date`; `status`: `string`; `version`: `string`; \}\>

Defined in: [src/controllers/HealthController.ts:27](https://github.com/HessuRessu/calculator-backend/blob/9e0113add544d8bb9a8dd325db0bf2d995df2eea/src/controllers/HealthController.ts#L27)

Returns status of the service

#### Returns

`Promise`\<\{ `date`: `Date`; `status`: `string`; `version`: `string`; \}\>

JSON-object indicating service status.

#### Example

```ts
{
   *   "status": "ok",
   *   "version": "v1",
   *   "date": "2025-09-15"
   * }
```

***

### getStatus()

> **getStatus**(): `undefined` \| `number`

Defined in: node\_modules/@tsoa/runtime/dist/interfaces/controller.d.ts:8

#### Returns

`undefined` \| `number`

#### Inherited from

`Controller.getStatus`

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
