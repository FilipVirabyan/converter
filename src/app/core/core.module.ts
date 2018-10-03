import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from './services/counter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CounterService]
})
export class CoreModule { }
