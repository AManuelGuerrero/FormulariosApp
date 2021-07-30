import { Component, OnInit } from '@angular/core';
interface Menu{
  title: string;
  menuitems: MenuItem[];
}
interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ];


  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'Login',
      ruta: './auth/login'
    },
    {
      texto: 'Registro',
      ruta: './auth/registro'
    }
  ];

  menu: Menu[] = [
    {
      title: 'template',
      menuitems: this.templateMenu
    },
    {
      title: 'reactive',
      menuitems: this.reactiveMenu
    },
    {
      title: 'validaciones',
      menuitems: this.authMenu
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
