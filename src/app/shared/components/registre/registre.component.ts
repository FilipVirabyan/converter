import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  public Text:string = 'cvfr';
    public post(){
      console.log(this.Text);
    }
  constructor() { }

  ngOnInit() {
  }

}
