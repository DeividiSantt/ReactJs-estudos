import React, { useState } from 'react'

function App() {

  const [tarefas, setTarefas] = useState(
    ['Pagar a conta de luz', 'estudar react hooks'])

  const [input, setInput] = useState("")

  function adicionarTarefa(){
    setTarefas([...tarefas, input])
  }

  return (
    <div>
      <ul>
        Tarefas:
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
        
      </ul>
      <input type='text' value={input} onChange={(adicionou) => setInput(adicionou.target.value)}></input>
      <button type='button' onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default App;
