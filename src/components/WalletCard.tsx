'use client'

import React from 'react'
import { formatCurrency } from '@/utils/currency'

interface WalletCardProps {
  balance: number
  bonus_balance: number
  onDeposit?: () => void
  onWithdraw?: () => void
}

export const WalletCard: React.FC<WalletCardProps> = ({
  balance,
  bonus_balance,
  onDeposit,
  onWithdraw,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white shadow-lg">
      <div className="mb-4">
        <p className="text-sm text-gray-200">Total Balance</p>
        <h2 className="text-3xl font-bold">{formatCurrency(balance)}</h2>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-200">Bonus Balance</p>
        <h3 className="text-2xl font-bold">{formatCurrency(bonus_balance)}</h3>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onDeposit}
          className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors"
        >
          Deposit
        </button>
        <button
          onClick={onWithdraw}
          className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
        >
          Withdraw
        </button>
      </div>
    </div>
  )
}
