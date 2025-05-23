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

    name = signal("");
    power = signal(0);

    characters = signal<IDragonBallPageCharacter[]>([
        { id: 1, name: 'Goku', power: 9000 },
    ]);

    addCharacter() {
        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        const newCharacter: IDragonBallPageCharacter = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }

        this.characters.update((prev) => [...prev, newCharacter]);
        this.resectFiles();

    }

    resectFiles() {
        this.name.set("");
        this.power.set(0);
    }
}