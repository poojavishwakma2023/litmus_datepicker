import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NgbModule,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    
    NgxDaterangepickerMd.forRoot({
      applyLabel: `Apply`,
      cancelLabel:'reset',
      format: 'YYYY-MM-DD', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
      displayFormat: 'MM/DD/YYYY', // default is format value
      direction: 'ltr', // could be rtl
      weekLabel: 'W',
    }),
         NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

