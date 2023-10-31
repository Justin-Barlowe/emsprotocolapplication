import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdultallergyComponent } from './adultallergy/adultallergy.component';
import { AdultasystoleComponent } from './adultasystole/adultasystole.component';
import { AdultbradycardiaComponent } from './adultbradycardia/adultbradycardia.component';
import { AdultcardiacarrestComponent } from './adultcardiacarrest/adultcardiacarrest.component';
import { AdultchestpainComponent } from './adultchestpain/adultchestpain.component';
import { AdultchfComponent } from './adultchf/adultchf.component';
import { SogComponent } from './sog/sog.component';
import { AdultChildbirthComponent } from './adult-childbirth/adult-childbirth.component';
import { AdultcopdComponent } from './adultcopd/adultcopd.component';
import { CprterminationComponent } from './cprtermination/cprtermination.component';
import { AdultdiabeticComponent } from './adultdiabetic/adultdiabetic.component';
import { AdultdialysisComponent } from './adultdialysis/adultdialysis.component';
import { DrugassistedComponent } from './drugassisted/drugassisted.component';
import { AdulthypertensionComponent } from './adulthypertension/adulthypertension.component';
import { AdulthypotensionComponent } from './adulthypotension/adulthypotension.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'sog',
    component: SogComponent
  },
  {
    path: 'adultallergy',
    component: AdultallergyComponent
  },
  {
    path: 'adultasystole',
    component: AdultasystoleComponent
  },
  {
    path: 'adultbradycardia',
    component: AdultbradycardiaComponent
  },
  {
    path: 'adultcardiacarrest',
    component: AdultcardiacarrestComponent
  },
  {
    path: 'adultchestpain',
    component: AdultchestpainComponent
  },
  {
    path: 'adultchf',
    component: AdultchfComponent
  },
  {
    path: 'adultchildbirth',
    component: AdultChildbirthComponent
  },
  {
    path: 'adultcopd',
    component: AdultcopdComponent
  },
  {
    path: 'cprtermination',
    component: CprterminationComponent
  },
  {
    path: 'adultdiabetic',
    component: AdultdiabeticComponent
  },
  {
    path: 'adultdialysis',
    component: AdultdialysisComponent
  },
  {
    path: 'drugassisted',
    component: DrugassistedComponent
  },
  {
    path: 'adulthypertension',
    component: AdulthypertensionComponent
  },
  {
    path: 'adulthypotension',
    component: AdulthypotensionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
