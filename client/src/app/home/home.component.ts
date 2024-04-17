import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() products?: Product[];


  customOptionsCategories: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    margin: 20,
    startPosition: 0,
    nav: true,
    // navText: [ '<img src="../../assets/images/landing/left-arrow.svg"></img>', '<img src="../../assets/images/landing/right-arrow.svg"></img>' ],
    responsive: {
      0: {
        items: 2.5,
        margin: 10,

      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1000: {
        items: 6,
      },
      1200: {
        items: 6,
      }
    }
  }

}
