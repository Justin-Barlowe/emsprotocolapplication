import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdultallergyComponent } from './adultallergy/adultallergy.component';
import { AdultasystoleComponent } from './adultasystole/adultasystole.component';
import { HomeComponent } from './home/home.component';
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
import { AdultlvadComponent } from './adultlvad/adultlvad.component';
import { MonotachyComponent } from './monotachy/monotachy.component';
import { PolytachyComponent } from './polytachy/polytachy.component';
import { PostintubationComponent } from './postintubation/postintubation.component';
import { PostresusComponent } from './postresus/postresus.component';
import { AdulttachycardiaComponent } from './adulttachycardia/adulttachycardia.component';
import { TeamcprComponent } from './teamcpr/teamcpr.component';
import { AdultvfibComponent } from './adultvfib/adultvfib.component';

@NgModule({
  declarations: [
    AppComponent,
    AdultallergyComponent,
    AdultasystoleComponent,
    HomeComponent,
    AdultbradycardiaComponent,
    AdultcardiacarrestComponent,
    AdultchestpainComponent,
    AdultchfComponent,
    SogComponent,
    AdultChildbirthComponent,
    AdultcopdComponent,
    CprterminationComponent,
    AdultdiabeticComponent,
    AdultdialysisComponent,
    DrugassistedComponent,
    AdulthypertensionComponent,
    AdulthypotensionComponent,
    AdultlvadComponent,
    MonotachyComponent,
    PolytachyComponent,
    PostintubationComponent,
    PostresusComponent,
    AdulttachycardiaComponent,
    TeamcprComponent,
    AdultvfibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
