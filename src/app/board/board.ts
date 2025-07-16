import { Component, signal } from '@angular/core';
import { Square } from "../square/square";
import { Board as BoardClass } from '../utils/Board';

@Component({
  selector: 'app-board',
  imports: [Square],
  templateUrl: './board.html',
  styles: ``
})
export class Board {


  board = signal<BoardClass>(new BoardClass(8, 8, 4));


  handleChangeSquare(index: number, isRightClick: boolean) {
    console.log(isRightClick)
    if (isRightClick) {
      this.board().togleFlag(index)
    } else {
      this.board().activeSquare(index)
    }
  }
}
