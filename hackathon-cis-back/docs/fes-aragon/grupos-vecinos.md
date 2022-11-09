# Dado un grupo devuelve los grupos siguientes y anterior

**URL** : `/3/:semestre/:carrera/:grupo`

**Metodo** : `GET`

**Requiere autenticacion** : NO

## Respuestas de exito

**Codigo** : `200 OK`

**Contenido**

```json
[
  {
    "grupoA": "0",
    "grupoP": "1008"
  }
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
