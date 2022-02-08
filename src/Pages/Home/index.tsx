import { useRef, useState } from 'react'
import Menu from '../../Components/Menu'
import Button from '../../Components/Button'

export default function Home() {

  const counterRef = useRef(0)
  const inputValueRef = useRef('')

  const [counter, setCounter] = useState(0)
  const [istrue, setIsTrue] = useState(false)

  function quandoClicar() {
    setCounter((state) => state +1) // aumenta um no contador

    setIsTrue((state) => !state) // altera o estado, quando true vira false, quando false vira tru

    counterRef.current++ // incrementa no ref para lembrar do valor
  }

  return (
    <div>
      <Menu />
      <h1> Home </h1>

      <p> Contador: {counter} </p>
      <p> Valor na Ref: {counterRef.current} </p>
      <p> IsTrue: {istrue.toString()} </p>
      <Button onClick={quandoClicar}> Meu botão </Button>
      
      <br />
      <br />

      <input type="text" onChange={(event) => {
        inputValueRef.current = event.target.value
      }} />

      <p> Valor digitado: {inputValueRef.current} </p>

    </div>

  )
}