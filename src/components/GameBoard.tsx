'use client'

import React, { useState } from 'react'
import { useGameStore } from '@/store/gameStore'
import { playSound } from '@/utils/sounds'
import { createParticleBurst } from '@/utils/animations'

export const GameBoard: React.FC = () => {
  const { currentGame, rollDice, updateBoardState } = useGameStore()
  const [isRolling, setIsRolling] = useState(false)

  const handleRollDice = () => {
    if (isRolling) return
    setIsRolling(true)
    playSound('diceRoll')

    setTimeout(() => {
      rollDice()
      setIsRolling(false)
    }, 500)
  }

  const handlePlayerMove = (index: number) => {
    if (!currentGame) return
    const newBoardState = [...currentGame.board_state]
    newBoardState[index] = (newBoardState[index] + currentGame.dice_value) % 100
    updateBoardState(newBoardState)
    playSound('chipTap')
    createParticleBurst(window.innerWidth / 2, window.innerHeight / 2)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-b from-purple-900 to-indigo-900 rounded-lg shadow-2xl">
      <div className="grid grid-cols-10 gap-2 mb-6">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center font-bold text-sm cursor-pointer transition-all ${
              currentGame?.board_state.includes(i)
                ? 'bg-yellow-400 text-black scale-110'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            onClick={() => handlePlayerMove(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={handleRollDice}
          disabled={isRolling}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg disabled:opacity-50 transition-all"
        >
          {isRolling ? 'Rolling...' : `Roll Dice (${currentGame?.dice_value || 0})`}
        </button>
      </div>
    </div>
  )
}
