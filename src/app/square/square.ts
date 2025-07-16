import { Component, input, output } from '@angular/core';
import { MineIcon } from "../mine-icon/mine-icon";
import { Square as S } from "../types/Square"
import { FlagIcon } from '../flag-icon/flag-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [MineIcon, FlagIcon, NgClass],
  templateUrl: './square.html',
  styles: ``
})
export class Square {
  square = input.required<S>()
  onClickSquare = output<boolean>()

  onClick(event: MouseEvent) {
    event.preventDefault()
    this.onClickSquare.emit(event.button == 2)
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault(); 
    this.onClickSquare.emit(true); 
  }
}
