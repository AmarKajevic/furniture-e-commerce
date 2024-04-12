import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  constructor(private router: Router, public bcService: BreadcrumbService){

  }


  isHomePage(): boolean{
    return this.router.url === '/';
  }

}
