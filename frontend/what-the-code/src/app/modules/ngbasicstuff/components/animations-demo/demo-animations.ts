import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state, sequence, stagger
} from '@angular/animations';

export const animateInputField = trigger('animateInputField', [
  state('inputState1', style({
    fontSize: '1em',
    width: '15em'
  })),
  state('inputState2', style({
    fontSize: '1.2em',
    width: '20em'
  })),
  transition('inputState1 <=> inputState2', [
    animate('250ms ease-out')
  ])
]);

export const animateButton = trigger( 'animateButton', [
  state('buttonState1', style({
    backgroundColor: 'white',
  })),
  state('buttonState2', style({
    backgroundColor: 'yellow'
  })),

  transition('buttonState1 <=> buttonState2', [
    animate('100ms', style({ fontSize: '1.1em' })),
    animate('100ms', style({ fontSize: '1em' }))
  ])
]);


export const flyInAndOut = trigger('flyInAndOut', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(200px)'
    }),
    animate('500ms', style({
      opacity: 1,
      transform: 'none'
    })),
  ]),
  transition(':leave', [
    animate('1s', style({
      opacity: 0
    }))
  ])
]);

export const pageAnimation = trigger('pageAnimations', [
  transition(':enter', [
    query('.demoItem, h1, input, button', [
      style({opacity: 0, transform: 'translateY(-100px)'}),
      stagger(-30, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ])
]);
