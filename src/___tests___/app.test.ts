import request from 'supertest';
import createApp from "../app";

const appVersion = process.env.APP_VERSION || "v0";

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
const nonPrimeNumbers = [-2, -1, 0, 1, 4, 6, 8, 9, 10, 12, 14];
const zeroSum = [-10, 20, -5, 10, -15];

describe(`GET /api/${appVersion}/health`, () => {

  it('returns ok', async () => {
    const app = createApp();
    const res = await request(app).get(`/api/${appVersion}/health`);
    expect(res.status).toBe(200);
    expect(res.body.status).toEqual("ok");
  });

});

describe(`GET /api/${appVersion}/calculate/sum`, () => {

  it('returns result of 6', async () => {
    const app = createApp();
    const res = await request(app).get(`/api/${appVersion}/calculate/sum`).query({ numbers: "1,2,3" });
    expect(res.status).toBe(200);
    expect(res.body.result).toEqual(6);
  });

  it('returns result of 0', async () => {
    const app = createApp();
    const res = await request(app).get(`/api/${appVersion}/calculate/sum`).query({ numbers: zeroSum.join(",") });
    expect(res.status).toBe(200);
    expect(res.body.result).toEqual(0);
  });

  it('returns error message', async () => {
    const app = createApp();
    const res = await request(app).get(`/api/${appVersion}/calculate/sum`).query({ numbers: "Not a Number" });
    expect(res.status).toBe(400);
    expect(res.body.message).toEqual("Invalid numbers provided.");
  });

});

describe(`GET /api/${appVersion}/calculate/prime`, () => {

  it('returns result of true values', async () => {
    const app = createApp();
    for (let i = 0; i < primeNumbers.length; i++) {
      const res = await request(app).get(`/api/${appVersion}/calculate/prime`).query({ number: primeNumbers[i] });
      expect(res.status).toBe(200);
      expect(res.body.prime).toEqual(true);
    }
  });

  it('returns result of false values', async () => {
    const app = createApp();
    for (let i = 0; i < nonPrimeNumbers.length; i++) {
      const res = await request(app).get(`/api/${appVersion}/calculate/prime`).query({ number: nonPrimeNumbers[i] });
      expect(res.status).toBe(200);
      expect(res.body.prime).toEqual(false);
    }
  });

});
