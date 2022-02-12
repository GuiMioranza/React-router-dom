import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid'
import './styles.css'

import Menu from '../../Components/Menu'
import Person from "./person";

export interface PersonInfos {
  id: string
  name: string
  cpf: string
  age: string
}

export default function PeopleList() {
  const nameValueRef = useRef('')
  const cpfValueRef = useRef('')
  const ageValueRef = useRef('')
  const [people, setPeople] = useState<PersonInfos[]> ([])

  // funções de handle ou ações do usuario pode ser feitas desta forma com função 
  function handleOnChangeName(event: any) {
    nameValueRef.current = event.target.value 
  }

  //e  também podem ser feitas com arrow function assim
  const handleOnChangeCpf = (event: any) => {
    cpfValueRef.current = event.target.value
  }

  function handleSubimmit() {
    setPeople((state) => [
      ...state, 
      {
        id: uuid(),
        name: nameValueRef.current,
        cpf: cpfValueRef.current,
        age: ageValueRef.current,
      },
    ])
  }

  function handleDelete (id: string) {
    setPeople((state) => state.filter((x) => x.id !== id))
  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="form-container">
          <input 
            type="text"
            placeholder="Digite um nome"
            onChange={handleOnChangeName}
          />
          <input 
            type="text"
            placeholder="Digite um cpf"
            onChange={handleOnChangeCpf}
          />
          <input 
            type="text"
            placeholder="Digite uma idade"
            // eventos do uduario podem ser feitas com funções
            // ou arow functions, ou deste modo direto no atributo
            onChange={(event) => {
              ageValueRef.current = event.target.value
            }}
          />
          <button onClick={handleSubimmit}> Enviar </button>
        </div>
        <div className="people-list-container">
          {people.map((person) => (
            <Person key={person.id} person={person} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  )
}