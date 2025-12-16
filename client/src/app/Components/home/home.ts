import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  services = [
    {
      title: 'Interior Painting 🛋️',
      icon: 'house-door-fill', 
      description: 'From a single accent wall to whole-house makeovers! Cozy, fresh, and perfect color palettes.',
      cta: 'View Interior Gallery'
    },
    {
      title: 'Exterior Painting ☀️',
      icon: 'buildings-fill',
      description: 'Protect your investment and boost curb appeal with weather-resistant, durable finishes. Curb Appeal Champion!',
      cta: 'View Exterior Gallery'
    },
    {
      title: 'Cabinet Refinishing 🍽️',
      icon: 'lightbulb-fill',
      description: 'Give your kitchen a modern, brand-new look without the remodel cost. Sleek, durable finishes guaranteed.',
      cta: 'See Cabinet Finishes'
    }
  ];

}
