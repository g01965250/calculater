import { useState } from 'react';

function Calculater (){
  const[sum, setSum] = useState(0);
  const[firstNum, setFirstNum] = useState('');
  const[seconNum, setSeconNum] = useState('');
  const[action, setAction] = useState('');


  const handleNum = (e) =>{    
    if (action){
      setSeconNum(seconNum + e.target.dataset.number )
    }else{
      setFirstNum(firstNum + e.target.dataset.number )
    }
  }
  const handleAction = (e) =>{
    setAction( e.target.dataset.action  )
  }
  const handleCalculation = (e) =>{
    if(action=='+'){
    setSum(
        Number(firstNum) + Number(seconNum)
    )}else if (action=='-'){
      setSum(
        Number(firstNum) - Number(seconNum)
    )}else if (action=='X'){
      setSum(
        Number(firstNum) * Number(seconNum)
      )}else if(action=='/'){
        setSum(
          Number(firstNum) / Number(seconNum)
        )}else {
          setSum("0")
        }

      setAction('')
      setSeconNum('')
      setFirstNum('')

    }
    const handleClear = () =>{
      setSum(0)
      setAction('')
      setSeconNum('')
      setFirstNum('')
    }
    const handleSign = () =>{
      if (action) {
        if(seconNum.charAt(0)==="-" ){
          setSeconNum(seconNum.replace("-",""))
        }else{
        setSeconNum("-"+seconNum)
        }
      } else {
        if(firstNum.charAt(0)==="-" ){
          setFirstNum(firstNum.replace("-",""))
        }else{
          setFirstNum("-"+firstNum)
        }
      }
    }
    const handlePercent = () =>{
      if (action) {
          setSeconNum(String(seconNum/100))
        }else{
          setFirstNum(String(firstNum/100))
        }
      }
    const handlePoint = () => {    
      if (action) {
        if(seconNum.indexOf(".")===-1){
          setSeconNum(seconNum+".")
        }else{
        setSeconNum(seconNum.replace(".",""))
      }
    } else {
      if(firstNum.indexOf(".")===-1){
        setFirstNum(firstNum+".")
      }else{
        setFirstNum(firstNum.replace(".",""))
      }
    }
  }
    const handleDel = () => {
    if (action) {
      if(seconNum){
        setSeconNum(seconNum.slice(0,-1))
      }else{
        setAction(action.slice(0,-1))
      }
    } else {
        setFirstNum(firstNum.slice(0,-1))
      }
    }


    const handleKeyDown = (e) => {
      let {key} = e
      if(key ==="Enter") {
        key = "="
        handleCalculation()
      }
      if (key==='Escape'){
        handleClear()
      }
      if (key==='Backspace'){
        handleDel()
      }
      if (key==='.'){
        handlePoint()
      }
        if (/^\d/.test(key)){
          if (action){
            setSeconNum(seconNum + key )
            }else{
            setFirstNum(firstNum + key )
            }
          }else if (key==='+'  ){
            setAction('+')
          }else if (key==='-'  ){
            setAction('-')
          }else if (key==='*'  ){
            setAction('X')
          }else if (key==='/'  ){
            setAction('/')
          }
        }
        return(
      <div className="computer_wrapper" onKeyDown={handleKeyDown} tabIndex={-1}>
        <div className='display' >
          {firstNum ? `${firstNum} ${action} ${seconNum}` : sum}
        </div>
        <div className='number' >
          <div className="but action" onClick={handleClear}>AC</div>
          <div className="but action" onClick={handleSign}>+/-</div>
          <div className="but action" onClick={handlePercent}>%</div>
          <div className="but action" onClick={handleAction} onKeyDown={handleAction} data-action="/">/</div>
          <div className="but" onClick={handleNum} data-number="9">9</div>
          <div className="but" onClick={handleNum} data-number="8">8</div>
          <div className="but" onClick={handleNum} data-number="7">7</div>
          <div className="but action" onClick={handleAction} data-action="X">X</div>
          <div className="but" onClick={handleNum} data-number="6">6</div>
          <div className="but" onClick={handleNum} data-number="5">5</div>
          <div className="but" onClick={handleNum} data-number="4">4</div>
          <div className="but action" onClick={handleAction} data-action="-">-</div>
          <div className="but" onClick={handleNum} data-number="3">3</div>
          <div className="but" onClick={handleNum} data-number="2">2</div>
          <div className="but" onClick={handleNum} data-number="1">1</div>
          <div className="but action" onClick={handleAction} data-action="+">+</div>
          <div className="but" onClick={handleNum} data-number="0">0</div>
          <div className="but" onClick={handlePoint} >.</div>    
          <div className="but" onClick={handleDel}>←</div>
          <div className="but sum" onClick={handleCalculation} >=</div>
        </div>
      </div>
    );
}

export default Calculater;