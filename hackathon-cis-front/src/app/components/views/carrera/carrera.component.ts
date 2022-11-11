import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss'],
})
export class CarreraComponent implements OnInit {
  carrera: string = '';
  routeParams = { escuela: '', carrera: '' };
  semestres = [];
  escuelas = new Map();
  grupos = new Map();
  gruposJson: any = {};
  // escuela -> carrera -> semestre: [{ grupo: '', horarios []}]

  semestreElegido: string = '';

  constructor(
    public _route: ActivatedRoute,
    private consultasService: ConsultasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.routeParams['escuela'] = params['escuela'];
      this.routeParams['carrera'] = params['carrera'];
    });

    this.consultasService
      .consultarSemestres(this.routeParams['escuela'])
      .subscribe(
        (data: any) => {
          if (data.length < 1) {
            this.router.navigate(['/']);
          }
          this.semestres = data.reverse();
        },
        (error) => {
          this.router.navigate(['/']);
        }
      );
  }

  consultlarGrupos() {
    this.crearObjetoGruposVacio();

    if (
      this.gruposJson[this.routeParams['escuela']][this.routeParams['carrera']][
        this.semestreElegido
      ].length < 1
    ) {
      this.consultasService
        .consultarGrupos(
          this.routeParams['escuela'],
          this.semestreElegido,
          this.routeParams['carrera']
        )
        .subscribe(
          (data: any) => {
            this.gruposJson[this.routeParams['escuela']][
              this.routeParams['carrera']
            ][this.semestreElegido] = data;
            this.llenarGruposConHorarios();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  crearObjetoGruposVacio() {
    if (this.gruposJson[this.routeParams['escuela']] == undefined) {
      this.gruposJson[this.routeParams['escuela']] = {};
    }

    if (
      this.gruposJson[this.routeParams['escuela']][
        this.routeParams['carrera']
      ] == undefined
    ) {
      this.gruposJson[this.routeParams['escuela']][
        this.routeParams['carrera']
      ] = {};
    }

    if (
      this.gruposJson[this.routeParams['escuela']][this.routeParams['carrera']][
        this.semestreElegido
      ] == undefined
    ) {
      this.gruposJson[this.routeParams['escuela']][this.routeParams['carrera']][
        this.semestreElegido
      ] = [];
    }
  }

  llenarGruposConHorarios() {
    for (
      let i = 0;
      i <
      this.gruposJson[this.routeParams['escuela']][this.routeParams['carrera']][
        this.semestreElegido
      ].length;
      i++
    ) {
      this.consultasService
        .consultarHorarios(
          this.routeParams['escuela'],
          this.semestreElegido,
          this.routeParams['carrera'],
          this.gruposJson[this.routeParams['escuela']][
            this.routeParams['carrera']
          ][this.semestreElegido][i].grupo
        )
        .subscribe(
          (data: any) => {
            this.gruposJson[this.routeParams['escuela']][
              this.routeParams['carrera']
            ][this.semestreElegido][i].horarios = data;
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
