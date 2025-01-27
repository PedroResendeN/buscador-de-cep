import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Api from './services/Api'
import './Styles.css';

function App () {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 01310930/json/

    if (input === '') {
      alert('Informe um CEP!')
      return;
    }

    try {
      const response = await Api.get(`${input}/json`);
      setCep(response.data)
      setInput('')
    }catch{
      alert("Erro ao buscar")
      setInput('')
    }
  }

  return (
    <div className='container'>
        <h1 className="title">Buscador de CEP</h1>
        <div className="containerInput">
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder='Digite seu cep...'/>
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color='#fff'/>
          </button>
        </div>

        {Object.keys(cep).length > 0 && (

          <main className='main'>
            <h2>{cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </main>

        )};
        
    </div>
  )
}

export default App
