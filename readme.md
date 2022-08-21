# NestJS Couse

## Setup From Scratch

``` 
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2                            
``` 
+ common: majority of funcions, classes from nest
+ platform-express: HTTP webserver; can be replaced
+ reflect-metadata: decorator stuff
+ typescript: TS compiler


### Nest basic structure

+ package.json
+ tsconfig.json

### Running

+ npx ts-node-dev src/main.ts     

# NestJS Tools

+ (required) Controller: Handles request/response
+ Services: Handles data access and business logic
+ (required) Module; Groups code together
+ Pipe: Validates incoming data
+ Filter: Handle errors 
+ Guards: Handles authentication
+ Interceptors: Adds extra logic to requests or responses
+ Repositories: Handles data stored in DB

# CLI

+ `npm install -g @nestjs/cli`
+ `nest new yourapp`