import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoDetailComponent } from './saludo-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: SaludoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
