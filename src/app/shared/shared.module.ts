import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { RegistreComponent } from './components/registre/registre.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [RegistreComponent],
    exports:[RegistreComponent]
})
export class SharedModule { }
