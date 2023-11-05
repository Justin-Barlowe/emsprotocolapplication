import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harnett County EMS Protocols';

  constructor(private renderer: Renderer2) { }

  closeNavbar(): void {
    const navbarMenu = this.renderer.selectRootElement('#navbarNavDropdown', true);
    this.renderer.removeClass(navbarMenu, 'show');
  }
}
