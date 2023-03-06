import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() sideNavStatus:boolean = false;

  list=[{
    number:'1',
    name:'',
    icon:'fa-solid fa-bars',
  },
  {
    number:'2',
    name:'Buscar item',
    icon:'fa-solid fa-magnifying-glass',
  },
  {
    number:'3',
    name:'Tela Inicial',
    icon:'fa-solid fa-house',
  },
  {
    number:'4',
    name:'Favoritos',
    icon:'fa-regular fa-star',
  },
  {
    number:'6',
    name:'Atendimento',
    icon:'fa-regular fa-envelope',
  },
  {
    number:'7',
    name:'Cadastro',
    icon:'fa-regular fa-address-card',
  },


  ];

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;


  SideNavToggled(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
constructor() {}

ngOnInit(): void{

}
}
