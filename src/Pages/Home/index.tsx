import { useRef, useState } from 'react'
import { useTheme } from '../../Hooks/Theme'

import Menu from '../../Components/Menu'
import Button from '../../Components/Button'


export default function Home() {
  const { theme, setDarkTheme, setLightTheme } = useTheme()

  const counterRef = useRef(0)
  const inputValueRef = useRef('')

  const [counter, setCounter] = useState(0)
  const [isTrue, setIsTrue] = useState(false)

  function quandoClicar() {
    setCounter((state) => state +1) // aumenta um no contador

    setIsTrue((state) => !state) // altera o estado, quando true vira false, quando false vira tru

    counterRef.current++ // incrementa no ref para lembrar do valor
  }

  console.log('renderizei')
  console.log(counterRef.current)

  return (
    <div>

      <Menu />
      <h1 
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}> 
        Home 
      </h1>
      <span  
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      > 
      Tema escolhido: {theme}
      </span>
      <br />

      <Button
        onClick={() => {
          theme === 'light' ? setDarkTheme() : setLightTheme();
        }}
      >
        Alternar temas
      </Button>
      <br />
      <br />
      

      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Contador: {counter}
      </p>
      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Valor na ref: {counterRef.current}
      </p>
      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        IsTrue: {isTrue.toString()}
      </p>

      <Button onClick={quandoClicar}> Meu botão </Button>
      
      <br />
      <br />

      <input 
        type="text" 
        onChange={(event) => {
          inputValueRef.current = event.target.value
        }} 
      />

      <p> Valor digitado: {inputValueRef.current} </p>

    </div>

  )
}