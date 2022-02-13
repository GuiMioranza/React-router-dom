import { useRef, useState } from 'react'
import './styles.css'
import Menu from '../../Components/Menu'
import Button from '../../Components/Button'
import { v4 as uuid} from 'uuid'

interface Student {
  id: string;
  name: string;
}

export default function ClassList() {
  const [students, setStudents] = useState<Student[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const inputValueRef = useRef('')

  function handleInputOnChange(event: any) {
    inputValueRef.current = event.target.value;
  }

  function handleButtonOnClick() {
    const name = inputValueRef.current
    setStudents((state) => [
      ...state,
      {
        id: uuid(),
        name: name,
      },
    ])
    inputValueRef.current = ''
  }

  return (
    <>
      <Menu />
      <div className='container'>
        <div className='form-container'>
          <input 
          ref={inputRef}
          type="text"
          placeholder="Digite o nome do aluno"
          onChange={handleInputOnChange}
          />
          <Button onClick={handleButtonOnClick}> Enviar </Button>
        </div>
        <div className='list-container'>
          {students.map((student, index) => (
            <div key={student.id}> {`${index + 1}) ${student.name}`} </div>
          ))}
        </div>
      </div>
    </>
  )
}