import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

  }

  @Input() categoria: string = '';

  click(categoria: string) {
    this.display = true;
    this.categoria = categoria;
  }
}
