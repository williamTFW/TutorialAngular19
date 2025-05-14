import { Component, signal } from "@angular/core";

interface IDragonBallPageCharacter {
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonBall-page.component.html'
})

export class DragonBallPageComponent {

    characters = signal<IDragonBallPageCharacter[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 18000 },
        { id: 3, name: 'Gohan', power: 1100 },
        { id: 4, name: 'Piccolo', power: 1300 },
        { id: 5, name: 'Frieza', power: 500000 }
    ]);
}