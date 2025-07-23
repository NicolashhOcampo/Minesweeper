import { Component, computed, effect, ElementRef, input, OnInit, signal, viewChild, viewChildren } from '@angular/core';
import { Square } from "../square/square";
import { Board as BoardClass } from '../utils/Board';
import { Router } from '@angular/router';
import { MineIcon } from "../mine-icon/mine-icon";

@Component({
  selector: 'app-board',
  imports: [Square, MineIcon],
  templateUrl: './board.html',
  styles: ``
})
export class Board implements OnInit {
  rows = input.required<number>()
  cols = input.required<number>()
  mines = input.required<number>()
  boardId = input.required<number>()
  breakDefault = input<boolean>(true)

  time = signal<number>(0)

  formattedTime = computed(() => {
    const minutes = Math.floor(this.time() / 60);
    const seconds = this.time() % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  });

  ngOnInit() {
    setInterval(() => {
      if (this.board().gameStatus === 'playing') {
        this.time.set(this.time() + 1);
      }
    }, 1000);
  }

  board = computed<BoardClass>(() => new BoardClass(this.rows(), this.cols(), this.mines(), this.boardId()));

  constructor() {
    effect(() => {
      this.board();
      this.time.set(0);
    })
  }



  handleChangeSquare(index: number, isRightClick: boolean) {
    if (isRightClick && this.breakDefault() || !isRightClick && !this.breakDefault()) {
      this.board().toggleFlag(index)
      if(this.board().squares[index].isActive){
        this.board().activeSquare(index);
      }
    } else {
      this.board().activeSquare(index)
    }
  }

}
