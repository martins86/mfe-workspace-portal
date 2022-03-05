import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'mfe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.btnAnimate();
  }

  btnAnimate(): void {
    let menuToggle: HTMLElement = document.querySelector(
      '.toggle'
    ) as HTMLElement;

    menuToggle.onclick = () => {
      menuToggle?.classList.toggle('active');
    };
  }
}
