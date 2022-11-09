const axios = require("axios");
const cheerio = require("cheerio");
const url =
    "https://www.aragon.unam.mx/horarios/horarios/index_archivos/php/queysA.php?";
const urlTipo = "&tipo=",
    urlSem = "&sem=",
    urlCarr = "&carr=",
    urlGrupo = "&grupo=";

const controller = {
    getFromTipo: (req, res) => {
        let params = req.params;
        axios(url + urlTipo + params.tipo)
            .then(response => {
                return res.status(200).send(response.data);
            })
            .catch(error => {
                return res.status(500).send(error);
            });
    },
    getGroupsCarreer: (req, res) => {
        let params = req.params;
        axios(
            url +
                urlTipo +
                params.tipo +
                urlSem +
                params.sem +
                urlCarr +
                params.carr
        )
            .then(response => {
                return res.status(200).send(response.data);
            })
            .catch(error => {
                return res.status(500).send(error);
            });
    },
    getGroupSchedule: (req, res) => {
        let params = req.params;
        axios(
            url +
                urlTipo +
                params.tipo +
                urlSem +
                params.sem +
                urlCarr +
                params.carr +
                urlGrupo +
                params.grupo
        )
            .then(response => {
                return res.status(200).send(response.data);
            })
            .catch(error => {
                return res.status(500).send(error);
            });
    }
};

module.exports = controller;
