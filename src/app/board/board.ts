import { Component, computed, input, signal } from '@angular/core';
import { Square } from "../square/square";
import { Board as BoardClass } from '../utils/Board';

@Component({
  selector: 'app-board',
  imports: [Square],
  templateUrl: './board.html',
  styles: ``
})
export class Board {

  rows = input.required<number>()
  cols = input.required<number>()
  mines = input.required<number>()
  board = computed<BoardClass>(() => new BoardClass(this.rows(), this.cols(), this.mines()));


  handleChangeSquare(index: number, isRightClick: boolean) {
    if (isRightClick) {
      this.board().toggleFlag(index)
    } else {
      this.board().activeSquare(index)
    }
  }
}
