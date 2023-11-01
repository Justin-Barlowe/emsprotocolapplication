import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harnett County EMS Protocols';

  public isProtocolMenuOpen = false;

  toggleProtocolMenu() {
    this.isProtocolMenuOpen = !this.isProtocolMenuOpen;
  }

  toggleDropdown(event: Event) {
    let element = event.currentTarget as HTMLElement;
    element.parentElement?.classList.toggle('show');
    let dropdownMenu = element.nextElementSibling as HTMLElement;
    dropdownMenu?.classList.toggle('show');


  }

}
