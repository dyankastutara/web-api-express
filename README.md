# web-api-express
API web server

### ROUTE USERS

|METHODS|HTTP|DESCRIPTION|
|-------|----|-----------|
|POST|api/users/signup|Register new user|
|POST|api/users/signin|Sign in user for get token|
|GET|api/users/|Get All Data users. {Access : Admin}|
|GET|api/users/:id|Get detail user by id. {Access : Admin and User}|
|POST|api/users|Register new user, but access from Admin|
|PUT|api/users/:id|Edit/Update data user. {Access : Admin and User}|
|DELETE|api/users/:id|Delete data user. {Access : Admin}|


### ROUTE MEMO*

|METHODS|HTTP|DESCRIPTION|
|-------|----|-----------|
|GET|api/memos/|Get All Data memos. {Access : Admin and User}|
|GET|api/memos/:id|Get detail memo by id. {Access : Admin and User}|
|POST|api/memos|Register new memo, but access from Admin|
|PUT|api/memos/:id|Edit/Update data memo. {Access : Admin and User}|
|DELETE|api/memos/:id|Delete data memo. {Access : Admin and User}|

```
Note : for access route user and memo which have access, you must be signin for get token. Next, this token use in headers.
```