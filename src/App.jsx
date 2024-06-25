import { FiSearch } from 'react-icons/fi'
import './Styles.css'

function App () {
  return (
    <div className='container'>
        <h1 className="title">Buscador de CEP</h1>
        <div className="containerInput">
          <input type="text" placeholder='Digite seu cep...'/>
          <button className="buttonSearch">
            <FiSearch size={25} color='#fff'/>
          </button>
        </div>

        <main className='main'>
          <h2></h2>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </main>
    </div>
  )
}

export default App
