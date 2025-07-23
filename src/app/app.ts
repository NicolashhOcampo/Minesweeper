import { Component, signal } from '@angular/core';
import { Board } from './board/board';
import { CreateBoard } from "./create-board/create-board";
import { BoardConfig } from './types/BoardConfig';
import { SelectDefault } from "./select-default/select-default";

@Component({
  selector: 'app-root',
  imports: [Board, CreateBoard, SelectDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  breakDefault = signal<boolean>(true);
  nextBoardId = 0;

  createBoard = signal<BoardConfig>({
    id: this.nextBoardId,
    rows: 7,
    cols: 7,
    mines: 4
  })

  onCreateBoard(boardConfig: BoardConfig){
    console.log(boardConfig)
    this.createBoard.set({...boardConfig, id: this.nextBoardId});
    this.nextBoardId++;
  }

  updateBreakDefault(event: boolean) {
    this.breakDefault.set(event);
  }
}
