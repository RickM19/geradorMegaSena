import { useState } from 'react'
import "./App.css"
import RandomNum from '../../components/RandomNum/Randomnum'
import { gerador } from '../../utils/gerador'
function App() {
  const [qtdNumeros, setQtdNumeros] = useState(0)
  const [numerosGerados, setNumerosGerados] = useState([])
  
  
  function handleGerador() {
      
      setNumerosGerados(gerador(+qtdNumeros))
      
  }

  function handleInputValue(e) {
    setQtdNumeros(e.target.value)
  }

  return (
    <div className='App'>
        <div className="container">
          <h1>Gerador MegaSena</h1>
          <label htmlFor="input">Quantidade de Números:</label>

          <input 
                id='input'
                type="number" 
                value={qtdNumeros} 
                placeholder='Digite a quantidade...' 
                onChange={handleInputValue} />
                
          <button onClick={handleGerador}>Gerar</button>
          
          <div className='numeros'>
            {
              numerosGerados.map(numero => {
                
                return (
                  <RandomNum key={numero} number={numero}/>
                )
              })
            }
          </div>
        </div>
       
    </div>
  )
}

export default App
