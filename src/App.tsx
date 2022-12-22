import Container from './components/Container'
import Navbar from './components/Navbar'

import Test from './Test'

function App() {

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="main">
        <Container>
          <div>
            <Test></Test>
          </div>
        </Container>
        
      </div>
    </div>
  )
}

export default App
