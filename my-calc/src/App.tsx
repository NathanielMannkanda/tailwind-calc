import { useState } from "react"
import CalcButton from "./ClacButton"

export default function App() {
  const [display, setDisplay] = useState("0")

  const handleNumber = (num: string) => {
    setDisplay(prev => (prev === "0" ? num : prev + num))
  }

  const handleOperator = (op: string) => {
    setDisplay(prev => prev + " " + op + " ")
  }

  const handleClear = () => {
    setDisplay("0")
  }

  const handleEquals = () => {
    try {
      const result = eval(display.replace("×", "*").replace("÷", "/"))
      setDisplay(String(result))
    } catch {
      setDisplay("Error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 bg-gray-900 rounded-2xl p-4 shadow-xl">
        
        {/* Display */}
        <div className="
          mb-4 h-20 p-4
          flex items-end justify-end
          bg-black text-white
          text-3xl font-mono
          rounded-lg
        ">
          {display}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <CalcButton variant="secondary" onClick={handleClear}>AC</CalcButton>
          <CalcButton variant="secondary">±</CalcButton>
          <CalcButton variant="secondary">%</CalcButton>
          <CalcButton variant="operator" onClick={() => handleOperator("÷")}>÷</CalcButton>

          <CalcButton onClick={() => handleNumber("7")}>7</CalcButton>
          <CalcButton onClick={() => handleNumber("8")}>8</CalcButton>
          <CalcButton onClick={() => handleNumber("9")}>9</CalcButton>
          <CalcButton variant="operator" onClick={() => handleOperator("×")}>×</CalcButton>

          <CalcButton onClick={() => handleNumber("4")}>4</CalcButton>
          <CalcButton onClick={() => handleNumber("5")}>5</CalcButton>
          <CalcButton onClick={() => handleNumber("6")}>6</CalcButton>
          <CalcButton variant="operator" onClick={() => handleOperator("-")}>−</CalcButton>

          <CalcButton onClick={() => handleNumber("1")}>1</CalcButton>
          <CalcButton onClick={() => handleNumber("2")}>2</CalcButton>
          <CalcButton onClick={() => handleNumber("3")}>3</CalcButton>
          <CalcButton variant="operator" onClick={() => handleOperator("+")}>+</CalcButton>

          <CalcButton className="col-span-2" onClick={() => handleNumber("0")}>0</CalcButton>
          <CalcButton onClick={() => handleNumber(".")}>.</CalcButton>
          <CalcButton variant="operator" onClick={handleEquals}>=</CalcButton>
        </div>
      </div>
    </div>
  )
}


//export default App
