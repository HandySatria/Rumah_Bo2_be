# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "handy",
  "password": "password",
  "name": "handy satria"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "handy",
    "name": "handy satria"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username Already Registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "handy",
  "password": "password"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or Password Wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "handy satria B", //optional
  "password": "new password" //optional
}
```

Response Body Error :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "handy",
    "name": "handy satria"
  }
}
```

Response Body Error :

```json
{
  "errors": "UnAuthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "errors": "UnAuthorized"
}
```
