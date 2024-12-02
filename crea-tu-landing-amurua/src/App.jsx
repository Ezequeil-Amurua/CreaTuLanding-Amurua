import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer bienvenida= "Estos son los vuelos que tenemos para vos..."/>
    </>
  )
}

export default App
