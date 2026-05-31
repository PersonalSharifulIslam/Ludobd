import { create } from 'zustand'

interface GameRoom {
  id: string
  entry_fee: number
  platform_fee: number
  prize_amount: number
  player_count: number
  is_hot: boolean
}

interface GameState {
  board_state: number[]
  current_turn: number
  dice_value: number
  game_id: string
}

interface GameStore {
  currentGame: GameState | null
  rooms: GameRoom[]
  setCurrentGame: (game: GameState) => void
  setRooms: (rooms: GameRoom[]) => void
  updateBoardState: (board_state: number[]) => void
  rollDice: () => void
}

export const useGameStore = create<GameStore>((set) => ({
  currentGame: null,
  rooms: [],
  setCurrentGame: (game: GameState) => set({ currentGame: game }),
  setRooms: (rooms: GameRoom[]) => set({ rooms }),
  updateBoardState: (board_state: number[]) =>
    set((state) => ({
      currentGame: state.currentGame
        ? { ...state.currentGame, board_state }
        : null,
    })),
  rollDice: () =>
    set((state) => ({
      currentGame: state.currentGame
        ? { ...state.currentGame, dice_value: Math.floor(Math.random() * 6) + 1 }
        : null,
    })),
}))
