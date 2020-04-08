import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  p: number = 1;

  cadena: string = 'lzFeFXITj44';

  provincias = [
    { name: 'Monte Cristi', cConfim: '3', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Dajabón', cConfim: '1', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Elias Piña', cConfim: '0', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Independencia', cConfim: '1', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Pedernales', cConfim: '1', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Puerto Plata', cConfim: '34', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Valverde', cConfim: '10', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Santiago Rodríguez', cConfim: '18', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Santiago', cConfim: '194', deaths: '6', recup: '0', totalDesc: '3438' },
    { name: 'San Juan', cConfim: '11', deaths: '3', recup: '0', totalDesc: '3438' },
    { name: 'Bahoruco', cConfim: '1', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Barahona', cConfim: '12', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Espaillat', cConfim: '44', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'La Vega', cConfim: '109', deaths: '5', recup: '0', totalDesc: '3438' },
    { name: 'Azua', cConfim: '7', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Hermanas Mirabal', cConfim: '19', deaths: '2', recup: '0', totalDesc: '3438' },
    { name: 'María Trinidad Sánchez', cConfim: '10', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'Duarte', cConfim: '132', deaths: '25', recup: '0', totalDesc: '3438' },
    { name: 'Sánchez Ramírez', cConfim: '27', deaths: '2', recup: '0', totalDesc: '3438' },
    { name: 'Monseñor Nouel', cConfim: '30', deaths: '2', recup: '0', totalDesc: '3438' },
    { name: 'San José de Ocoa', cConfim: '0', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Peravia', cConfim: '7', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'Samaná', cConfim: '15', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'Monte Plata', cConfim: '4', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'San Cristóbal', cConfim: '32', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'Santo Domingo', cConfim: '257', deaths: '13', recup: '0', totalDesc: '3438' },
    { name: 'Distrito Nacional', cConfim: '665', deaths: '13', recup: '0', totalDesc: '3438' },
    { name: 'Hato Mayor', cConfim: '4', deaths: '0', recup: '0', totalDesc: '3438' },
    { name: 'San Pedro de Macorís', cConfim: '24', deaths: '4', recup: '0', totalDesc: '3438' },
    { name: 'El Seybo', cConfim: '1', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'La Romana', cConfim: '32', deaths: '1', recup: '0', totalDesc: '3438' },
    { name: 'La Altagracia', cConfim: '40', deaths: '0', recup: '0', totalDesc: '3438' }
  ];

  provArr = {
    name: '', 
    cConfim: '1745', 
    deaths: '82', 
    recup: '17', 
    totalDesc: '3438' 
  }

  press(src: string){
    this.cadena = src;
    var iframe: any = document.getElementById('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + this.cadena;
  }

  mapPress(){
    var id, index;
    var child: any = document.getElementById('rd-map').children;

    for(let i = 0; i < child.length; i++){
      child[i].addEventListener('click', (element) => {
        id = document.getElementById('rd-map').children[i].id;
        index = this.provincias.findIndex((element) => element.name === id);
        this.provArr = this.provincias[index];
        for(let j = 0; j < child.length; j++){
          child[j].style.fill = 'rgb(124, 124, 124)';
        }
        child[i].style.fill = '#ccc';
      });
    }
  }

  ngOnInit(): void {
    var iframe: any = document.getElementById('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + this.cadena;
    this.mapPress();
  }

}
