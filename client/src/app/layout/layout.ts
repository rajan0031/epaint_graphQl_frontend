import { Component } from '@angular/core';
import { Nav } from '../Components/nav/nav';
import { Footer } from '../Components/footer/footer';
import { Home } from '../Components/home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
