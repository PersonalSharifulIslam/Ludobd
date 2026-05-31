import { create } from 'zustand'
import { Game, GameState } from '@/types'

interface GameStoreState {
  currentGame: (Game & GameState) | null
  games: (Game & GameState)[]
  
  setCurrentGame: (game: Game & GameState) => void
  rollDice: () => void
  updateBoardState: (newState: number[]) => void
  addGame: (game: Game & GameState) => void
  removeGame: (gameId: string) => void
}

export const useGameStore = create<GameStoreState>((set) => ({
  currentGame: null,
  games: [],

  setCurrentGame: (game) => set({ currentGame: game }),

  rollDice: () =>
    set((state) => {
      if (!state.currentGame) return state
      const diceValue = Math.floor(Math.random() * 6) + 1
      return {
        currentGame: {
          ...state.currentGame,
          dice_value: diceValue,
        },
      }
    }),

  updateBoardState: (newState) =>
    set((state) => {
      if (!state.currentGame) return state
      return {
        currentGame: {
          ...state.currentGame,
          board_state: newState,
        },
      }
    }),

  addGame: (game) =>
    set((state) => ({
      games: [...state.games, game],
    })),

  removeGame: (gameId) =>
    set((state) => ({
      games: state.games.filter((g) => g.id !== gameId),
    })),
}))
