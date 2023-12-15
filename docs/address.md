# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactid/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "jalan panjang",
  "city": "bogor",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "kode post"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panjang",
    "city": "bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode post"
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "jalan panjang",
  "city": "bogor",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "kode post"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panjang",
    "city": "bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode post"
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/addressId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panjang",
    "city": "bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode post"
  }
}
```

Response Body Error :

```json
{
    "errors": "contact is not found"

```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan panjang",
      "city": "bogor",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "kode post"
    },
    {
      "id": 2,
      "street": "jalan panjang",
      "city": "bogor",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "kode post"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/addressId

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
  "errors": "address is not found"
}
```
