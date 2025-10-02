**calculator-backend v0.0.1**

***

# Calculator Backend

Simple calculator microservice demonstration.
Calculator can calculate simple equations and check if given number is prime.

As said, this is a demonstration service, which requirements are following:
* Application must be able to sum up 1-n numbers and indicate if sum is prime
* Application must be able to indicate if given number is prime
* Application must have separate frontend and backend components

  ![Build Status](https://github.com/HessuRessu/calculator-backend/actions/workflows/build-test.yml/badge.svg)
  ![SAST Scan](https://github.com/HessuRessu/calculator-backend/actions/workflows/sast-scan.yml/badge.svg)
  ![Docker publish](https://github.com/HessuRessu/calculator-backend/actions/workflows/docker-publish.yml/badge.svg)

---

## 📦 Installation

``` bash
git clone https://github.com/HessuRessu/calculator-backend.git
cd calculator-backend
npm install
```

---

## ⚙️ Environment variables

This project uses a `.env` file. Example:  

``` ini
PORT=8080
NODE_ENV=dev
LOG_LEVEL=debug
SERVICE_NAME=calculator-backend
APP_VERSION=v1
```

---

## ▶️ Usage

### Development mode

``` bash
npm run dev
```

API will be available at:  
- ✅ Health check: http://localhost:3000/api/v1/health  
- 📖 Swagger UI: http://localhost:3000/docs/v1  

### Production mode

``` bash
npm run build
npm start
```

---

## 📚 API Documentation

Swagger documentation is auto-generated with tsoa.

- `http://localhost:3000/docs` — interactive Swagger UI  
- `http://localhost:3000/swagger/swagger.json` — OpenAPI JSON  

---

## 🧪 Tests

``` bash
npm test
```

---

## 📑 Documentation

### Swagger / OpenAPI

Generate swagger.json and routes:  

``` bash
npm run swagger
npm run routes
```

Swagger UI is available at:  

`/docs/{APP_VERSION}`

### Typedoc

Generate Typedoc documentation:  

``` bash
npm run docs
```

Output will be available in the `docs/` folder.

---

## 🐳 Docker

### Build & run

``` bash
docker build -t rest-api .
docker run -p 8080:8080 --env-file .env rest-api
```

### Docker Compose

``` bash
docker-compose up --build
```

---

## 📂 Project structure

``` text
.
├── src/
│   ├── ___tests___/      # Unit tests
│   ├── classes/          # Service classes
│   ├── controllers/      # TSOA controllers
│   ├── middleware/       # Middleware handlers
│   ├── routes/           # Generated routes
│   ├── utils/            # Utility modules
│   ├── app.ts            # Express app initialization
│   └── index.ts          # Entry point
├── scripts/              # Helper scripts (e.g., TSOA basePath)
├── swagger/              # Generated swagger specs
├── Dockerfile
├── docker-compose.yml
├── tsoa.json             # TSOA configuration
├── typedoc.json          # TypeDoc configuration
├── tsconfig.json
└── README.md
```

---

## 🩺 Health & Monitoring

### Endpoints

- **Health Check**  
  `GET /api/v0/health`  
  Returns simple service health information.

- **Metrics**  
  `GET /api/v0/metrics`  
  Returns Prometheus-formatted metrics, including:
  - Default Node.js process metrics (CPU, memory, GC, event loop delay)  
  - `http_requests_total` counter (by method, route, status)  
  - `service_health_status` gauge (1 = healthy, 0 = unhealthy)  

---

### 📊 Monitoring with Prometheus & Grafana

Extend `docker-compose.yml` to add Prometheus and Grafana:

``` yaml
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./infra/prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
```

Prometheus config (`infra/prometheus.yml`):

``` yaml
scrape_configs:
  - job_name: 'rest-boilerplate'
    static_configs:
      - targets: ['host.docker.internal:3000']
```

---

## 🤖 CI/CD

- **build-test.yml** → Linting, build, and test pipeline  
- **sast-scan.yml** → Static Application Security Testing (SAST)  
- **docker-public.yml** → Docker image build and publish to registry  
- **Dependabot** → Automated dependency updates  

---

## 📜 License

MIT
