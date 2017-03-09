import { Component, OnInit } from '@angular/core';
import { Saludo } from './saludo';
import { SaludoDataService } from './saludo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SaludoDataService]
})
export class AppComponent implements OnInit {
  title = 'Elija una opción!';
  nombre = '';
  saludoSeleccionado: Saludo;

  saludos: Saludo[];

  constructor(private router: Router, private saludoService: SaludoDataService) { }

  getSaludos(): void {
    this.saludoService.getAllSaludos().then(saludos => this.saludos = saludos);
  }

  ngOnInit(): void {
    this.getSaludos();
  }

  onSelect(saludo: Saludo): void {
    this.saludoSeleccionado = saludo;
    saludo.seleccionado = true;
    this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.saludoSeleccionado.id]);
  }
}
