import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  wallet_balance: number
  bonus_balance: number
  referral_code: string
  win_streak: number
  is_banned: boolean
}

interface AuthStore {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, referralCode?: string) => Promise<void>
  logout: () => Promise<void>
  updateUser: (user: Partial<User>) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single()
    set({ user: profile })
  },
  register: async (email: string, password: string, name: string, referralCode?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    const { data: profile } = await supabase
      .from('users')
      .insert([
        {
          id: data.user?.id,
          email,
          name,
          role: 'user',
          wallet_balance: 0,
          bonus_balance: 20,
          referred_by: referralCode,
        },
      ])
      .select()
      .single()
    set({ user: profile })
  },
  logout: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },
  updateUser: (user: Partial<User>) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...user } : null,
    }))
  },
}))
