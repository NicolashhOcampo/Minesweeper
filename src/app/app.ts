import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './board/board';
import { CreateBoard } from "./create-board/create-board";
import { BoardConfig } from './types/BoardConfig';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board, CreateBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  createBoard = signal<BoardConfig>({
    rows: 7,
    cols: 7,
    mines: 4
  })

  onCreateBoard(boardConfig: BoardConfig){
    this.createBoard.set(boardConfig)
  }
}
