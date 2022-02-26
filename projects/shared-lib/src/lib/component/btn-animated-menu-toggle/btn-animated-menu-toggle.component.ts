import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'lib-btn-animated-menu-toggle',
  templateUrl: './btn-animated-menu-toggle.component.html',
  styleUrls: ['./btn-animated-menu-toggle.component.css'],
})
export class BtnAnimatedMenuToggleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let menuToggle: HTMLElement = document.querySelector(
      '.toggle'
    ) as HTMLElement;
    menuToggle.onclick = () => {
      menuToggle?.classList.toggle('active');
    };
  }
}
