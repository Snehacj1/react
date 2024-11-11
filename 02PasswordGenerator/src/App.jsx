import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])//even if i dont pass anything it will run atleast once

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()

  }

  return (
    <div className='flex flex-col bg-teal-800 m-20 p-20 justify-center items-center'>
      <h1 className='text-3xl font-extrabold pb-4'>
        Password Generator
      </h1>
      <div>
        <input type="text"
          value={password}
          className='outline-none'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='ml-10 bg-blue-800 pr-2 pl-2 rounded-md font-semibold cursor-pointer'>Copy</button>
      </div>
      <div>
        <div className='pt-2'>
          <input type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="" />
          <label htmlFor='length' className='p-4'>Length:{length}</label></div>
      </div>
      <div>
        <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => { setNumberAllowed((prev) => !prev) }}
          name=''
          id='' />
        <label htmlFor="number">Numbers</label>
        <div className='sm:inline sm:pl-4 '>
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => { setCharAllowed((prev) => !prev) }}
            name=''
            id='' />
          <label htmlFor="character">character</label>
        </div>
      </div>


    </div>
  )
}

export default App
