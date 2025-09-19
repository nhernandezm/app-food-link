import { Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { MenudonanteComponent } from './menudonante/menudonante.component';
import { HacerdonacionComponent } from './hacerdonacion/hacerdonacion.component';

export const routes: Routes = [
    { path: '', component: SelectUserComponent },
    { path: 'donate', component: DonateComponent},
    { path: 'beneficiario', component: BeneficiariosComponent},
    { path: 'menu-donante', component: MenudonanteComponent},
    { path: 'hacer-donante', component: HacerdonacionComponent}
];
