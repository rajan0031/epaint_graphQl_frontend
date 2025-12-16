import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corosal',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './corosal.html',
  styleUrls: ['./corosal.css'],
})
export class Corosal {
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg',
    'assets/img5.jpg',
    'assets/img6.jpg',
    'assets/img7.jpg',
    'assets/img8.jpg'
  ];
}
