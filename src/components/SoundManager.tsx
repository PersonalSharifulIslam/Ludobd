'use client'

import { useEffect } from 'react'
import { playSound } from '@/utils/sounds'

interface SoundManagerProps {
  sound?: string
}

export const SoundManager: React.FC<SoundManagerProps> = ({ sound }) => {
  useEffect(() => {
    if (sound) {
      playSound(sound)
    }
  }, [sound])

  return null
}
