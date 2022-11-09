# Consultar los grupos de un semestre de la carrera elegida

**URL** : `/4/:semestre/:carrera`

**Metodo** : `GET`

**Requiere autenticacion** : NO

## Respuestas de exito

**Codigo** : `200 OK`

**Contenido**

```json
[
    {
        "grupo": "1007"
    },
    [...]
]
```

---

## Respuestas de error

**Condicion** : Si ocurre algun error extraño

**Codigo** : `500 ERROR INTERNO DEL SERVIDOR`

**Contenido** :

```json
    [error]
```
