import { Component, signal } from "@angular/core";


@Component({
    templateUrl: './count-page.component.html'
})

export class CountPageComponent {
    up = signal(0);

    upSignal() {
        this.up.set(this.up() + 1);    
    }

    downSignal() {
        this.up.set(this.up() - 1);
    }
};