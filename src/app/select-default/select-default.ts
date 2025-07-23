import { Component, input, output } from '@angular/core';
import { MineIcon } from "../mine-icon/mine-icon";
import { FlagIcon } from '../flag-icon/flag-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select-default',
  imports: [MineIcon, FlagIcon, NgClass],
  templateUrl: './select-default.html',
  styles: ``
})
export class SelectDefault {
  breakDefault = input.required<boolean>();
  optionSelected = output<boolean>();
  

  onClickMine() {
    this.optionSelected.emit(true);
  }

  onClickFlag() {
    this.optionSelected.emit(false);
  }
}
