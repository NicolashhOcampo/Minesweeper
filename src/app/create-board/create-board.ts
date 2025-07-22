import { Component, output, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {BoardConfig} from '../types/BoardConfig'


@Component({
  selector: 'app-create-board',
  imports: [ReactiveFormsModule],
  templateUrl: './create-board.html',
  styles: ``
})
export class CreateBoard {
  boardForm = new FormGroup({
    rows: new FormControl<number>(5),
    cols: new FormControl<number>(5),
    mines: new FormControl<number>(3),
  })

  get maxMines(): number {
    const rows = this.boardForm.value.rows ?? 0;
    const cols = this.boardForm.value.cols ?? 0;
    return Math.floor(rows * cols * 1 / 3);
  }

  outputForm = output<BoardConfig>()

  onSubmit() {
    if(this.boardForm.valid){
      this.outputForm.emit({...this.boardForm.value, id: 0} as BoardConfig)
    }
  }

}
