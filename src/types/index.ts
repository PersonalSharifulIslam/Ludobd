export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  wallet_balance: number
  bonus_balance: number
  referral_code: string
  referred_by: string | null
  win_streak: number
  is_banned: boolean
  created_at: string
}

export interface Game {
  id: string
  player1_id: string
  player2_id: string
  entry_fee: number
  platform_fee: number
  prize_amount: number
  status: 'pending' | 'active' | 'completed'
  winner_id: string | null
  admin_control_active: boolean
  admin_winner_id: string | null
  created_at: string
}

export interface GameState {
  id: string
  game_id: string
  board_state: number[]
  current_turn: number
  dice_value: number
  created_at: string
}

export interface Transaction {
  id: string
  user_id: string
  type: 'deposit' | 'withdrawal'
  method: 'bkash' | 'nagad' | 'rocket'
  amount: number
  transaction_id: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}

export interface AdminSettings {
  id: string
  key: string
  value: string
}

export interface Notification {
  id: string
  user_id: string
  message: string
  is_read: boolean
  created_at: string
}
