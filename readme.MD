# Desciption
Simple RESTful application for calculating sum of given number and checking for prime numbers.  
Frontend repository: https://github.com/HessuRessu/calculator-frontend

# Development install (Optional)

To install required packages please use following command after cloning the repository:
```
npm install
```

To run application in development mode use command:
```
npm run dev
```

Application is served at port 8081 in development mode.

# Building Docker Image

Execute following command to build docker image:
```
docker build -t calculator-backend .
```

Alternatively, for Windows use provided run.bat batch script to build:
```
run build
```

# Running in Docker

Execute following command to run application:
```
docker run -d --name calculator-backend -p 8081:8081 calculator-backend
```

Alternatively, for Windows use provided run.bat batch script to run container:
```
run start
```

# Docker Cleanup

Execute following command to cleanup running container:
```
docker stop calculator-backend && docker rm calculator-backend
```

Or by forcefully stop & remove running container:
```
docker rm -f calculator-backend
```

Alternatively, for Windows use provided run.bat batch script to cleanup running container:
```
run stop
```

# Usage (Docker)

By default, container will expose port 8081, which may be accessed by browser or REST client such as Postman.

Service offers two different API endpoints:

* /api/sum?numbers=1,2,3  
    Endpoint returns sum of given numbers and boolean value if result is a prime number or not.
* /api/prime?number=1  
    Endpoint returns boolean value if given number is a prime number or not.

Additionally, service exposes swagger 2.0 documentation, which may be used to test operations with any Swagger UI compatible parser such as Firefox "Swagger UI console":  
http://localhost:8081/docs
