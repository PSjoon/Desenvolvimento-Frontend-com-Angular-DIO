import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent implements OnInit, OnChanges {
  nome: string = 'pedro';

  constructor() {
    console.log('Constructor ');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
}
