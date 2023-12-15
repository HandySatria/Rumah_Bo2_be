# Contact API Spect

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "handy",
  "last_name": "satria",
  "email": "handy@gmail.com",
  "phone": "0812323232323"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "handy",
    "last_name": "satria",
    "email": "handy@gmail.com",
    "phone": "0812323232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "handy",
  "last_name": "satria",
  "email": "handy@gmail.com",
  "phone": "0812323232323"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "handy",
    "last_name": "satria",
    "email": "handy@gmail.com",
    "phone": "0812323232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "handy",
    "last_name": "satria",
    "email": "handy@gmail.com",
    "phone": "0812323232323"
  }
}
```

Response Body Error :

```json
{
  "errors": "contact is not found"
}
```

## Search Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Query params :

- name : Search by first_name or last_name. using like, optional
- email : search by email using like, optional
- phone : search by phone using like, optional
- page : number of page, default 1
- size : size per page, defauly 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "handy",
      "last_name": "satria",
      "email": "handy@gmail.com",
      "phone": "0812323232323"
    },
    {
      "id": 2,
      "first_name": "handy",
      "last_name": "satria",
      "email": "handy@gmail.com",
      "phone": "0812323232323"
    }
  ],
  "paging": 1,
  "total_page": 3,
  "total_items": 30
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Request Body :

Response Body Success :

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```
