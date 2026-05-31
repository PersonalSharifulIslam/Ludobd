'use client'

import React from 'react'
import { User } from '@/types'

interface UserProfileProps {
  user: User
  onLogout?: () => void
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <p className="text-gray-400">{user.email}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold">
            {user.role}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-gray-400 text-sm">Win Streak</p>
          <p className="text-xl font-bold">{user.win_streak}</p>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-gray-400 text-sm">Referral Code</p>
          <p className="text-sm font-mono">{user.referral_code}</p>
        </div>
      </div>

      {user.is_banned && (
        <div className="bg-red-600 text-white p-3 rounded mb-4 text-sm font-semibold">
          ⚠️ Account Banned
        </div>
      )}

      <button
        onClick={onLogout}
        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
      >
        Logout
      </button>
    </div>
  )
}
