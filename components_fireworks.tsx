import { useEffect } from 'react'

export function Fireworks() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes explode {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
      }
      .firework {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: explode 1s ease-out forwards;
      }
    `
    document.head.appendChild(style)

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']

    const createFirework = () => {
      const firework = document.createElement('div')
      firework.className = 'firework'
      firework.style.left = `${Math.random() * 100}%`
      firework.style.top = `${Math.random() * 100}%`
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      document.body.appendChild(firework)

      setTimeout(() => {
        document.body.removeChild(firework)
      }, 1000)
    }

    const interval = setInterval(createFirework, 1000)

    return () => {
      clearInterval(interval)
      document.head.removeChild(style)
    }
  }, [])

  return null
}

