## Intro

Egg.js for Hasura.


## Api

- /api/user/login

```HTTP
POST /api/user/login HTTP/1.1
Host: localhost
Content-Type: application/json
cache-control: no-cache

{
	"username": "", 
	"password": ""
}
```

**response**

```js
{
    "data": {
        "user": {
            "id": ,
            "username": "",
            "nickname": "",
            "userrole": "",
            "salt": "",
            "hash": ""
        },
        "token": ""
    }
}
```

- /api/user/register

```HTTP
POST /api/user/register HTTP/1.1
Host: localhost
Content-Type: application/json
cache-control: no-cache

{
	"username": "", 
	"nickname": "",
	"userrole": "",
	"password": ""
}
```

**response**

```js
{
    "data": {
        "user": {
            "id": 8,
            "nickname": "",
            "username": "",
            "userrole": "",
            "salt": "",
            "hash": ""
        }
    }
}
```