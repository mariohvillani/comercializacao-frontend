import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Componentes', action: this.navegar.bind(this) }
  ];

  private onClick(): void {
    this.router.navigateByUrl('');
  }

  private navegar(): void {
    this.router.navigateByUrl('/componente');
  }

}
