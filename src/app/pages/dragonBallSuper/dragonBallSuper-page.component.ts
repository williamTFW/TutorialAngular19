import { Component, signal } from "@angular/core";
import { IDragonBallPageCharacter } from '../../interfaces/character-list.interfaces'
import { CharacterListComponent } from "../../components/dragonBS/character-list.component";



@Component({
    templateUrl: './dragonBallSuper-page.component.html',
    imports: [CharacterListComponent],
})

export class DragonBallSuperPageComponent {

    name = signal("");
    power = signal(0);

    characters = signal<IDragonBallPageCharacter[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 18000 }
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