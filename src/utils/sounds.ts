export const playSound = (soundName: string) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const sounds: { [key: string]: () => void } = {
    diceRoll: () => playDiceRoll(audioContext),
    coinCollect: () => playCoinCollect(audioContext),
    epicWin: () => playEpicWin(audioContext),
    crowdCheer: () => playCrowdCheer(audioContext),
    loseThud: () => playLoseThud(audioContext),
    casinoBell: () => playCasinoBell(audioContext),
    chipTap: () => playChipTap(audioContext),
    cashRegister: () => playCashRegister(audioContext),
  }
  sounds[soundName]?.()
}

const playDiceRoll = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.setValueAtTime(800, now)
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.3)
  gain.gain.setValueAtTime(0.3, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)
  osc.start(now)
  osc.stop(now + 0.3)
}

const playCoinCollect = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.setValueAtTime(1200, now)
  osc.frequency.exponentialRampToValueAtTime(400, now + 0.15)
  gain.gain.setValueAtTime(0.3, now)
  gain.gain.exponentialRampToValueAtTime(0, now + 0.15)
  osc.start(now)
  osc.stop(now + 0.15)
}

const playEpicWin = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const frequencies = [523, 659, 784, 1047]
  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(freq, now + i * 0.1)
    gain.gain.setValueAtTime(0.2, now + i * 0.1)
    gain.gain.exponentialRampToValueAtTime(0, now + i * 0.1 + 0.3)
    osc.start(now + i * 0.1)
    osc.stop(now + i * 0.1 + 0.3)
  })
}

const playCrowdCheer = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const noise = ctx.createBufferSource()
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < buffer.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  noise.buffer = buffer
  const gain = ctx.createGain()
  noise.connect(gain)
  gain.connect(ctx.destination)
  gain.gain.setValueAtTime(0.2, now)
  gain.gain.exponentialRampToValueAtTime(0, now + 0.5)
  noise.start(now)
}

const playLoseThud = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.setValueAtTime(150, now)
  osc.frequency.exponentialRampToValueAtTime(50, now + 0.2)
  gain.gain.setValueAtTime(0.3, now)
  gain.gain.exponentialRampToValueAtTime(0, now + 0.2)
  osc.start(now)
  osc.stop(now + 0.2)
}

const playCasinoBell = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.setValueAtTime(2000, now)
  osc.frequency.exponentialRampToValueAtTime(1500, now + 0.15)
  gain.gain.setValueAtTime(0.3, now)
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.15)
  osc.start(now)
  osc.stop(now + 0.15)
}

const playChipTap = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.setValueAtTime(600, now)
  gain.gain.setValueAtTime(0.1, now)
  gain.gain.exponentialRampToValueAtTime(0, now + 0.1)
  osc.start(now)
  osc.stop(now + 0.1)
}

const playCashRegister = (ctx: AudioContext) => {
  const now = ctx.currentTime
  const frequencies = [800, 1200, 1600]
  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(freq, now + i * 0.08)
    gain.gain.setValueAtTime(0.2, now + i * 0.08)
    gain.gain.exponentialRampToValueAtTime(0, now + i * 0.08 + 0.1)
    osc.start(now + i * 0.08)
    osc.stop(now + i * 0.08 + 0.1)
  })
}
