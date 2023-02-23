import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import Container from './components/principales/Container'
import Navbar from './components/principales/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container> 
      </Container>
    </>
  )
}

export default App
