import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Sobre from './components/Sobre/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Sobre/>
    </>
  )
}

export default App
