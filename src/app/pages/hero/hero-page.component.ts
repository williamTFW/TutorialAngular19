import { Component, computed, signal } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html'
})


export class HeroPageConponent {
    name = signal('IronMan');
    age = signal(45);


    // Señales computadas
    heroDescription = computed(() => {
        const descrip = `${this.name()} -- ${this.age()}`;
        return descrip;
    });

/*     getHeroDescription() {
        return `${this.name()} -- ${this.age()}`;
    } */

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm() {
        this.name.set("IronMan");
        this.age.set(45);
    }
}