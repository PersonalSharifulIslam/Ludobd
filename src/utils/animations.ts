export const createCoinRainAnimation = () => {
  const coins = document.querySelectorAll('.coin-rain')
  coins.forEach((coin) => {
    coin.animate(
      [
        { transform: 'translateY(-100%) rotate(0deg)', opacity: '1' },
        { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    )
  })
}

export const createParticleBurst = (x: number, y: number) => {
  const particleCount = 20
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.style.position = 'fixed'
    particle.style.left = x + 'px'
    particle.style.top = y + 'px'
    particle.style.width = '10px'
    particle.style.height = '10px'
    particle.style.borderRadius = '50%'
    particle.style.backgroundColor = '#FFD700'
    particle.style.pointerEvents = 'none'
    particle.style.zIndex = '9999'
    document.body.appendChild(particle)

    const angle = (Math.PI * 2 * i) / particleCount
    const velocity = 5 + Math.random() * 5
    const vx = Math.cos(angle) * velocity
    const vy = Math.sin(angle) * velocity

    let px = x
    let py = y

    const animate = () => {
      px += vx
      py += vy
      particle.style.left = px + 'px'
      particle.style.top = py + 'px'
      particle.style.opacity = (1 - py / window.innerHeight).toString()

      if (py < window.innerHeight) {
        requestAnimationFrame(animate)
      } else {
        particle.remove()
      }
    }
    animate()
  }
}

export const rollNumberAnimation = (element: HTMLElement, finalValue: number, duration: number = 1000) => {
  const startValue = parseInt(element.textContent || '0')
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const currentValue = Math.floor(startValue + (finalValue - startValue) * progress)
    element.textContent = currentValue.toString()

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}
