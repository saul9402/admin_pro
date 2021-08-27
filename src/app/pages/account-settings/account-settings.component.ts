import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {


    const linkTheme = document.querySelector("#theme");
    console.log(linkTheme);

    const url = `./assets/css/colors/${theme}`;

    linkTheme.setAttribute("href", url);

    console.log(linkTheme);

  }

}
