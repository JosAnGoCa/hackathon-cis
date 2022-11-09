# Consultar el horario de un grupo en una carrera

**URL** : `/2/:semestre/:carrera/:grupo`

**Metodo** : `GET`

**Requiere autenticacion** : NO

## Respuestas de exito

**Codigo** : `200 OK`

**Contenido**

```json
[
    {
        "nomb_prof": "GONZALEZ HERNANDEZ MARIA GABRIELA",
        "clv_materia": "0003",
        "nomb_cmateria": "INGENIERIA DE SOFTWARE II",
        "grupo": "1007",
        "LU": "",
        "MA": "15:45<br />17:45",
        "MI": "",
        "JU": "15:45<br />17:45",
        "VI": "",
        "SA": "",
        "clv_salon": "A8118",
        "cupo": "30",
        "tipoclase": "P"
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
