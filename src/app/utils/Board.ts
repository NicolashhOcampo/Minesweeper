import { Square } from "../types/Square";

export class Board {
    squares: Square[]
    row: number
    col: number

    constructor(row: number, col: number, countMines: number) {
        this.row = row
        this.col = col
        this.squares = this.createBoard(row, col, countMines)
    }

    activeSquare(index: number) {
        const newSquares = [...this.squares]

        if (newSquares[index].isActive) {
            let countFlagsAround = 0

            const rowIndex = Math.floor(index / this.col);
            const colIndex = index % this.col;


            const isSquareLeft = colIndex > 0;
            const isSquareRight = colIndex < this.col - 1;
            const isSquareUp = rowIndex > 0;
            const isSquareBottom = rowIndex < this.row - 1;

            if (isSquareLeft && newSquares[index - 1].isFlag) {
                countFlagsAround++
            }
            if (isSquareRight && newSquares[index + 1].isFlag) {
                countFlagsAround++
            }
            if (isSquareUp && newSquares[index - this.col].isFlag) {
                countFlagsAround++
            }
            if (isSquareBottom && newSquares[index + this.col].isFlag) {
                countFlagsAround++
            }
            if (isSquareUp && isSquareLeft && newSquares[index - this.col - 1].isFlag) {
                countFlagsAround++
            }
            if (isSquareUp && isSquareRight && newSquares[index - this.col + 1].isFlag) {
                countFlagsAround++
            }
            if (isSquareBottom && isSquareLeft && newSquares[index + this.col - 1].isFlag) {
                countFlagsAround++
            }
            if (isSquareBottom && isSquareRight && newSquares[index + this.col + 1].isFlag) {
                countFlagsAround++
            }

            console.log(countFlagsAround)

            if (countFlagsAround === newSquares[index].content) {
                if (isSquareLeft && !newSquares[index - 1].isActive) {
                    this.activeSquare(index - 1)
                }
                if (isSquareRight && !newSquares[index + 1].isActive) {
                    this.activeSquare(index + 1)
                }
                if (isSquareUp && !newSquares[index - this.col].isActive) {
                    this.activeSquare(index - this.col)
                }
                if (isSquareBottom && !newSquares[index + this.col].isActive) {
                    this.activeSquare(index + this.col)
                }
                if (isSquareUp && isSquareLeft && !newSquares[index - this.col - 1].isActive) {
                    this.activeSquare(index - this.col - 1)
                }
                if (isSquareUp && isSquareRight && !newSquares[index - this.col + 1].isActive) {
                    this.activeSquare(index - this.col + 1)
                }
                if (isSquareBottom && isSquareLeft && !newSquares[index + this.col - 1].isActive) {
                    this.activeSquare(index + this.col - 1)
                }
                if (isSquareBottom && isSquareRight && !newSquares[index + this.col + 1].isActive) {
                    this.activeSquare(index + this.col + 1)
                }
            }

            return
        }

        if (newSquares[index].isFlag) return

        newSquares[index].isActive = true
        this.squares = newSquares

        if (newSquares[index].content === 0) {
            const rowIndex = Math.floor(index / this.col);
            const colIndex = index % this.col;


            const isSquareLeft = colIndex > 0;
            const isSquareRight = colIndex < this.col - 1;
            const isSquareUp = rowIndex > 0;
            const isSquareBottom = rowIndex < this.row - 1;

            if (isSquareLeft && !newSquares[index - 1].isActive) {
                this.activeSquare(index - 1)
            }
            if (isSquareRight && !newSquares[index + 1].isActive) {
                this.activeSquare(index + 1)
            }
            if (isSquareUp && !newSquares[index - this.col].isActive) {
                this.activeSquare(index - this.col)
            }
            if (isSquareBottom && !newSquares[index + this.col].isActive) {
                this.activeSquare(index + this.col)
            }
            if (isSquareUp && isSquareLeft && !newSquares[index - this.col - 1].isActive) {
                this.activeSquare(index - this.col - 1)
            }
            if (isSquareUp && isSquareRight && !newSquares[index - this.col + 1].isActive) {
                this.activeSquare(index - this.col + 1)
            }
            if (isSquareBottom && isSquareLeft && !newSquares[index + this.col - 1].isActive) {
                this.activeSquare(index + this.col - 1)
            }
            if (isSquareBottom && isSquareRight && !newSquares[index + this.col + 1].isActive) {
                this.activeSquare(index + this.col + 1)
            }
        }
    }

    toggleFlag(index: number) {
        const newSquares = [...this.squares]
        if (newSquares[index].isActive) return

        newSquares[index].isFlag = !newSquares[index].isFlag
        this.squares = newSquares
    }

    createBoard(row: number, col: number, countMines: number): Square[] {

        const board: Square[] = Array.from({ length: row * col }, () => ({
            isActive: false,
            isFlag: false,
            isMine: false,
            content: 0
        }))

        for (let i = 0; i < countMines; i++) {
            let index: number;
            do {
                index = Math.floor(Math.random() * board.length);
            } while (board[index].isMine);

            board[index] = {
                isActive: false,
                isFlag: false,
                isMine: true,
                content: 9
            }

            const rowIndex = Math.floor(index / col);
            const colIndex = index % col;


            const isSquareLeft = colIndex > 0;
            const isSquareRight = colIndex < col - 1;
            const isSquareUp = rowIndex > 0;
            const isSquareBottom = rowIndex < row - 1;

            if (isSquareLeft) {
                board[index - 1].content++;
            }
            if (isSquareRight) {
                board[index + 1].content++;
            }
            if (isSquareUp) {
                board[index - col].content++;
            }
            if (isSquareBottom) {
                board[index + col].content++;
            }
            if (isSquareUp && isSquareLeft) {
                board[index - col - 1].content++;
            }
            if (isSquareUp && isSquareRight) {
                board[index - col + 1].content++;
            }
            if (isSquareBottom && isSquareLeft) {
                board[index + col - 1].content++;
            }
            if (isSquareBottom && isSquareRight) {
                board[index + col + 1].content++;
            }
        }


        return board

    }
}
