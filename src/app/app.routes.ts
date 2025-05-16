import { Routes } from '@angular/router';
import { HeroPageConponent } from './pages/hero/hero-page.component';
import { CountPageComponent } from './pages/count/count-page.component';
import { DragonBallPageComponent } from './pages/dragonBall/dragonBall-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonBallSuper/dragonBallSuper-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CountPageComponent
    },
    {
        path: 'hero',
        component: HeroPageConponent
    },
    {
        path: 'dragonBall',
        component: DragonBallPageComponent
    },
    {
        path: 'dbSuper',
        component: DragonBallSuperPageComponent
    }
];
