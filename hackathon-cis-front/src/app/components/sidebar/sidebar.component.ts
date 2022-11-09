import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuToOpen: string = '';

  escuelas = new Map();

  constructor(private consultasService: ConsultasService) {}

  ngOnInit(): void {}

  openMenu(escuela: string) {
    if (!this.escuelas.get(escuela)) {
      this.consultasService
        .consultarCarreras(escuela)
        .subscribe((data: any) => {
          this.escuelas.set(escuela, data);
        });
    }

    if (this.menuToOpen === escuela) {
      this.menuToOpen = '';
    } else {
      this.menuToOpen = escuela;
    }
  }
}
