import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../assets/icons/icon-subset';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  title = 'Sistema Vehicular';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
  ) {
    titleService.setTitle(this.title);
    iconSetService.icons = { ...iconSubset}
  }

  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)){
          return;
        }
      })
  }
}
