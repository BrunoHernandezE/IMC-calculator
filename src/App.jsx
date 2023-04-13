import React, {useState} from 'react'
import { ImcScreen } from "./components/IMCScreen"
import "./App.css"
import { DataForm } from "./components/DataForm"
function App() {

  const [IMC, setIMC] = useState(0)

  return (
    <div className="App">
      <ImcScreen
      imcResult={IMC}/>
      <DataForm setIMC={setIMC}/>
    </div>
  )
}

export default App
