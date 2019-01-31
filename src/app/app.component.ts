import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Seccion5';

  nombre = 'Jero';

  array = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  pi = Math.PI;

  a = 0.234;

  activar = true;

  salario = 16000;

  objeto = {
    nombre: 'nombroso',
    apellido: 'apellidoso',
    edad: '25',
    direccion: {
      calle: 'primera',
      portal: '36',
    },
  };
}
