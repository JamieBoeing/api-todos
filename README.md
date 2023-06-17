# ToDo-API-Testing Homework Lab

    https://github.com/JamieBoeing/api-todos
## Description -

    This is an API built using express in node.js, and focuses on testing each endpoint and the overall function of the server. 

### Controllers - 

    A folder containing the file todo.js which contains all the CRUD methods that define our API Endpoints
    
    - GET/ todos- Get all the todo items
    - POST/ todos- Post a todo items
    - GET/ todos- Get a specific todo items
    - PUT/ todos- Update a specific todo items
    - DELETE/ todos- Delete a todo item

### Models
    a Todo Schema using Mongoose that creates an object model to apply the mongoose schema


### Routes
    The routes defines the routes and calls the router using express


### Server.js
    Connects to the server using Mongoose, and Mongodb and uses the route for the process.env file and calls the port

### App.js
    Uses the express server and connects to the routes

### Tests
    - GET/ todos- Get all the todo items
    - POST/ todos- Post a todo items
    - GET/ todos- Get a specific todo items
    - PUT/ todos- Update a specific todo items
    - DELETE/ todos- Delete a todo item

### artillery.yml
#### Artillery Tests the load for a GET and POST

 Started phase 0, duration: 60s @ 19:09:42(-0500) 2023-06-16
Report @ 19:09:52(-0500) 2023-06-16
Elapsed time: 10 seconds
  Scenarios launched:  199
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.04
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 199

Report @ 19:10:02(-0500) 2023-06-16
Elapsed time: 20 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.02
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 200

Report @ 19:10:12(-0500) 2023-06-16
Elapsed time: 30 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.02
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 200

Report @ 19:10:22(-0500) 2023-06-16
Elapsed time: 40 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.02
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 200

Report @ 19:10:32(-0500) 2023-06-16
Elapsed time: 50 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.02
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 200

Report @ 19:10:42(-0500) 2023-06-16
Elapsed time: 1 minute, 0 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 20.02
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 200

Report @ 19:10:42(-0500) 2023-06-16
Elapsed time: 1 minute, 1 second
  Scenarios launched:  1
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 2
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Errors:
    ECONNREFUSED: 1

All virtual users finished
Summary report @ 19:10:42(-0500) 2023-06-16
  Scenarios launched:  1200
  Scenarios completed: 0
  Requests completed:  0
  Mean response/sec: 19.85
  Response time (msec):
    min: NaN
    max: NaN
    median: NaN
    p95: NaN
    p99: NaN
  Scenario counts:
    0: 1200 (100%)
  Errors:
    ECONNREFUSED: 1200

➜  todo-api 