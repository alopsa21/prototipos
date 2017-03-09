import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { Saludo } from './saludo';
import { SaludoDataService } from './saludo-data.service';

@Component({
    moduleId: module.id,
    selector: 'my-saludo-detail',
    templateUrl: './saludo-detail.component.html',
    styleUrls: ['./saludo-detail.component.css']
})
export class SaludoDetailComponent implements OnInit {
    saludo: Saludo;

    constructor(
        private saludoService: SaludoDataService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.saludoService.getSaludo(+params['id']))
            .subscribe(saludo => this.saludo = saludo);

    }
    goBack(): void {
        this.location.back();
    }
}
