# First we will build typescript project.
FROM node:alpine as ts-compiler
WORKDIR /usr/calculator-backend
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Next we will setup production-ready instance of backend.
FROM node:alpine as ts-remover
WORKDIR /usr/calculator-backend
COPY --from=ts-compiler /usr/calculator-backend/package*.json ./
COPY --from=ts-compiler /usr/calculator-backend/build ./
RUN npm install --only=production

# Finally we will build slim distroless image based on previous stages.
FROM gcr.io/distroless/nodejs:latest
WORKDIR /usr/calculator-backend
COPY --from=ts-remover /usr/calculator-backend ./
USER 1000
CMD ["server.js"]