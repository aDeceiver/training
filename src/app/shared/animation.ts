import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
export const sharedAnimate =
[
  trigger('colorChange', [
    // ...
    state('green', style({
      color: 'green'
    })),
    state('red', style({
      color: 'red'
    })),
    transition('green => red', [
      animate('1s')
    ]),
    transition('red => green', [
      animate('0.5s')
    ]),
  ]),
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ]),
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
    ])
  ]),
  trigger('counterChange', [
    transition(
      ':increment',[
      style({ transform: 'scale(1)' }),
      animate('200ms ease-in', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05m)', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 })
      ]))
      ])
  ])
]
