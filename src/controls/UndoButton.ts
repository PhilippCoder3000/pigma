import { createElement } from '../helpers/createElement';
import type { Control, Dispatch, State } from '../types';

export class UndoButton implements Control {
  dom: HTMLButtonElement;
  constructor(state: State, { dispatch }: { dispatch: Dispatch }) {
    this.dom = createElement<HTMLButtonElement>(
      'button',
      {
        onclick: () => dispatch({ undo: true }),
        disabled: state.done.length === 1,
      },
      'Отменить',
    );
  }
  syncState(state: State): void {
    this.dom.disabled = state.done.length === 1;
  }
}