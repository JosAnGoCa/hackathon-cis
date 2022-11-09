# Consultar los semestres de la FES Aragon

**URL** : `/0`

**Metodo** : `GET`

**Requiere autenticacion** : NO

## Respuestas de exito

**Codigo** : `200 OK`

**Contenido**

```json
[
    {
        "id_semestre": "18",
        "nombre": "2019-1"
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
