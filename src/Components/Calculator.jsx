import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [num,setNum]=useState(0)
  const [Oldnum,setOldNum]=useState(0)
  const [operator,setOperator]=useState(0)
  const inputNum = e =>{
    let input = e.target.value
    if(num ===0 ){
      setNum(input)
    }else{
      
      setNum(num + input )
    }
  }
  const opert = (e) => {
    let oper = e.target.value
    setOperator(oper)
    setOldNum(num)
    setNum(0)
    console.log(oper)
  }
  const clear = () => {
    setNum(0)
  }
  const remov = () => {
    setNum(0)
  }
  const calculate = () => {
   if(operator === '-'){
     setNum(parseFloat(Oldnum) - parseFloat(num))
   }
   else if(operator === '+'){
     setNum(parseFloat(Oldnum) + parseFloat(num))
   }
   else if(operator === 'x'){
     setNum(parseFloat(Oldnum) * parseFloat(num))
   }
   else if(operator === '÷'){
     setNum(parseFloat(Oldnum) / parseFloat(num))
   }
  }
  return (

    <div className='menu'>
        <div className="result">
          <h1 className='posN'>{num}</h1>
        </div>
          <div className="btnP">
          <button className='Remo' onClick={clear}>AC</button>
          <button className='func' onClick={opert} value='()'>()</button>
          <button className='func'>%</button>
          <button className='func'  onClick={opert} value='÷'>÷</button>
          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button className='func'  onClick={opert} value='x'>x</button>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button className='func'  onClick={opert} value='-'>-</button>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button className='func'  onClick={opert} value='+'>+</button>
          <button onClick={inputNum} value={0}>0</button>
          <button onClick={inputNum} value={'.'}>.</button>
          <button onClick={remov}>⌫</button>
          <button className='equal' onClick={calculate}>=</button>

          </div>
    </div>
  )
}

export default Calculator