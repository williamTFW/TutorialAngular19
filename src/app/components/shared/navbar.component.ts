import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [
        RouterLink,
        RouterLinkActive
    ]
})

export class NavbarComponent{}