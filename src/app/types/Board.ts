export interface Square {
    isActive: boolean,
    isFlag: boolean,
    isMine: boolean
    content: number
}

export type GameStatus = 'playing' | 'won' | 'lost';