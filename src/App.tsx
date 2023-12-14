import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const isPressed = useRef(false)
  const [count, setCount] = useState(0)
  const [key, setKey] = useState(``)
  const keyUp = ({ code }: KeyboardEvent) => {
    setKey(code)
  }
  const keyDown = (evt: KeyboardEvent) => {
    isPressed.current = true
    if (evt.altKey) console.log(`alt key + space`)
  }
  const keyPressed = (evt: KeyboardEvent) => {
    evt.code === `Space` && console.log(evt.code)
  }
  useEffect(() => {
    document.addEventListener(`keyup`, keyUp)
    document.addEventListener(`keydown`, keyDown)
    document.addEventListener(`keypress`, keyPressed)
    return () => {
      document.removeEventListener(`keyup`, keyUp)
      document.removeEventListener(`keydown`, keyDown)
      document.removeEventListener(`keypress`, keyPressed)
    }
  }, [])
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <button
        onClick={async () => {
          await navigator.keyboard.lock()
          document.documentElement.requestFullscreen({ navigationUI: 'show' })
        }}
      >
        lock the keyboard
      </button>
      <button
        onClick={() => {
          document.fullscreenElement && document.exitFullscreen()
          navigator.keyboard.unlock()
        }}
      >
        Unlock the keyboard
      </button>
      <h2 className='key'>
        <span>{key}</span>
      </h2>
    </>
  )
}

export default App
