import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {

        const[formula,setFormula] = useState('')
        const[input,setInput] = useState('0')
        const valueInput = (e)=>{
          
          const userInput = e.target.innerText;
          const check = formula.split('').filter((equals)=> equals==='=').length;
          if(check>0){
            if(userInput==="+" || userInput==="-" || userInput==="x" || userInput==="/"){
            setFormula(()=>input + userInput)
            setInput(()=>  userInput)
            }
            else{
              if(userInput==='.'){
                setFormula(()=> '0.')
                setInput(()=> '0.')
              }
              else{
                setFormula(()=> userInput)
                setInput(()=> userInput)
              }
            }
          }
          else{

          if(formula.length<18 && input.length<18){
          const userInput = e.target.innerText;
          if(formula===''){

          if(input==='0' && userInput==='.') {
              setFormula(()=>'0.')
              setInput(()=>'0.')
          }
          else{
            if(userInput!=='/' && userInput!=='+' && userInput!=='x'){
              setInput((input)=>{
              let newValue= input+=userInput
                if(newValue.length>1 && newValue[0]==='0' && newValue[1]!=='.'){
                  return newValue.slice(1)
                }
                else{
                return newValue
                }
              })
              setFormula((formula)=>{
                let newValue= formula+=userInput
                if(input[0]===0 && formula===''){
                return userInput
                }
                else{
                return newValue 
                }
              })
            }
          }
        }
  
  else{

        const regexOp = /\D/
        const check = regexOp.test(userInput)
        const check2 = regexOp.test(input)

        if( check2 && !check && input.length===1){
            setInput(()=> userInput )
            setFormula((formula)=> formula+=userInput)
            }
        else{
        if(check2 && input.length===1 && userInput==='.'){
          setInput(()=> "0.")
          setFormula((formula)=> formula + "0.")
        }
        else{
        const lastDigit = input.length -1
        const regexOp = /\D/
        const check = regexOp.test(userInput)

        if(input.length>=1 && input[lastDigit]!=='.' && check && userInput!=='.'&& input[lastDigit]!=='-'){
          const fLastD = formula.length-1
          if(formula[fLastD]==='x' && userInput==='-'){
            setInput(()=> userInput)
            setFormula((formula)=> formula + userInput)
                }
          else{
          const formulaL= formula.length -1
          if(formula[formulaL]==='-' || formula[formulaL]==='+' || formula[formulaL]==='x' || formula[formulaL]==='/' ){
            setInput(()=>userInput)
            setFormula(()=>{
            return formula.substring(0,formula.length-1) + userInput
          })
            }
        else{
          setInput(()=>userInput)
          setFormula((formula)=> formula+=userInput)
          }
        }
        }
        else{

          if(input==="-" && input.length===1){
            if(userInput==="-" || userInput==="." ){

              setInput((input)=> input)
              setFormula((formula)=> formula)
              }
              else
              {
              if(formula[formula.length-2] === 'x'){

                setInput(()=> userInput)
                setFormula((formula)=> formula.substring(0,formula.length-2) + userInput)
              }
              else{
              setInput(()=> userInput)
              setFormula((formula)=> formula.substring(0,formula.length-1) + userInput)}
              }
            }
          else{
            const lastDigit = input.length -1
            const regexOp = /\D/
            const check = regexOp.test(userInput)
              if(input[lastDigit]==='.' && check){
                setFormula((formula)=>formula)
                setInput((input)=>input)
              }
          else{
                const verify = input.split('').filter((dots)=>dots===".").length
                if(userInput==="." && verify>0) {
                    setInput((input)=> input)
                    setFormula((formula)=>formula)
                  }
          else{
              setInput((input)=>{
              let newValue= input+=userInput
              if(newValue.length>1 && newValue[0]==='0' && newValue[1]!=='.'){
                  return newValue.slice(1)
                }
          else{
                return newValue
              }
            })
              setFormula((formula)=>{
              let newValue= formula+=userInput
              if(newValue.length>1 && newValue[0]==='0' && newValue[1]!=='.'){
              return newValue.slice(1)
            }
      else{
              return newValue 
              }
            })
            }
          }
        }
      }
     }
    }
    }
  }
  }
}

const reset = ()=>{
  setFormula('')
  setInput('0')
}

const cal = ()=>{
  const check = formula.split('').filter((equals)=> equals==='=').length;
  const lastDigit = input.length -1
  const regexOp = /\D/
  const checkSign = regexOp.test(input[lastDigit])
  if(!check>0 && !checkSign && formula!==''){
  const result = formula
  const modifiedR = result.replace(/x/,'*')
  // eslint-disable-next-line
  const answer = String(eval(modifiedR)).split('')
  const decimals = answer.includes('.')
   if(decimals){
  // eslint-disable-next-line 
    const dPlace = String(eval(modifiedR)).split('.')[1].length
    if(dPlace>4){
  // eslint-disable-next-line
  setInput(()=> eval(modifiedR).toFixed(4))
   // eslint-disable-next-line
  setFormula((formula)=> formula + '=' + eval(modifiedR).toFixed(4))
    }
    else{
  // eslint-disable-next-line
  setInput(()=> eval(modifiedR))
  // eslint-disable-next-line
 setFormula((formula)=> formula + '=' + eval(modifiedR))
    }
   }else{
    // eslint-disable-next-line
  setInput(()=> eval(modifiedR))
   // eslint-disable-next-line
  setFormula((formula)=> formula + '=' + eval(modifiedR))
  }
}
}
const del = ()=>{
  const check = formula.split('').filter((equalSign)=> equalSign==='=').length
 if(check>0){
  setFormula(()=> '')
  setInput(()=> "0")
 }
 else{ 
  if(formula.length===1 && input.length===1){
 setInput(()=> '0')
 setFormula(()=> '')
  }
  else{
  setFormula((formula)=> formula.substring(0,formula.length-1))
  setInput((input)=> input.substring(0,input.length-1))
  }
 }
}
 const themeChange = (e)=>{
  const switchbotton = e.target.id
  switch(switchbotton){
    case "r2":
  document.documentElement.style.setProperty('--main_background', 'hsl(0, 0%, 90%)');
  document.documentElement.style.setProperty('--toggle-keypad_background', 'hsl(0, 5%, 81%)');
  document.documentElement.style.setProperty('--screen_background','hsl(0, 0%, 93%)');
  document.documentElement.style.setProperty('--key_background','hsl(45, 7%, 89%)');
  document.documentElement.style.setProperty('--box_shadow1',' 0 4px 0 0 hsl(35, 11%, 61%)');
  document.documentElement.style.setProperty('--del-reset_background','hsl(185, 42%, 37%)');
  document.documentElement.style.setProperty('--del-reset_shadow','0 4px 0 0 hsl(185, 58%, 25%)');
  document.documentElement.style.setProperty('--equal_background','hsl(25, 98%, 40%)');
  document.documentElement.style.setProperty('--equal_shadow','0 4px 0 0 hsl(25, 99%, 27%)')
  document.documentElement.style.setProperty('--key_color',' hsl(60, 10%, 19%)' );
  document.documentElement.style.setProperty('--body_color',' hsl(60, 10%, 19%)' );
  document.documentElement.style.setProperty('--del_reset_active','hsl(184, 39%, 66%)');
  document.documentElement.style.setProperty('--equal_active','hsl(25, 74%, 63%)');
  document.documentElement.style.setProperty('--equal_color','hsl(0, 0%, 100%)')
  document.documentElement.style.setProperty('--key_background_active','hsl(0, 0%, 100%)');
  document.getElementById("secondbtn").style.opacity="0.9";
  document.getElementById("firstbtn").style.opacity="0";
  document.getElementById("thirdbtn").style.opacity="0";
  break;
  case "r3":
  document.documentElement.style.setProperty('--main_background', 'hsl(268, 75%, 9%)');
  document.documentElement.style.setProperty('--toggle-keypad_background', 'hsl(268, 71%, 12%)');
  document.documentElement.style.setProperty('--screen_background','hsl(268, 71%, 12%');
  document.documentElement.style.setProperty('--key_background','hsl(268, 47%, 21%)');
  document.documentElement.style.setProperty('--box_shadow1',' 0 4px 0 0 hsl(290, 70%, 36%)');
  document.documentElement.style.setProperty('--del-reset_background','hsl(281, 89%, 26%)');
  document.documentElement.style.setProperty('--del-reset_shadow','0 4px 0 0 hsl(285, 91%, 52%)');
  document.documentElement.style.setProperty('--equal_background','hsl(176, 100%, 44%)');
  document.documentElement.style.setProperty('--equal_shadow','0 4px 0 0 hsl(177, 92%, 70%)')
  document.documentElement.style.setProperty('--key_color','hsl(52, 100%, 62%)' );
  document.documentElement.style.setProperty('--body_color','  hsl(52, 100%, 62%)' );
  document.documentElement.style.setProperty('--del_reset_active','hsl(281, 59%, 64%)');
  document.documentElement.style.setProperty('--equal_active','hsl(177, 65%, 69%)')
  document.documentElement.style.setProperty('--equal_color','hsl(198, 20%, 13%)');
  document.documentElement.style.setProperty('--key_background_active','hsl(268, 45%, 51%)');
  document.getElementById("secondbtn").style.opacity="0";
  document.getElementById("firstbtn").style.opacity="0";
  document.getElementById("thirdbtn").style.opacity="0.9";
  break;
  default:
  document.documentElement.style.setProperty('--main_background', 'hsl(222, 26%, 31%)');
  document.documentElement.style.setProperty('--toggle-keypad_background', 'hsl(223, 31%, 20%)');
  document.documentElement.style.setProperty('--screen_background','hsl(224, 36%, 15%)');
  document.documentElement.style.setProperty('--key_background','hsl(30, 25%, 89%)');
  document.documentElement.style.setProperty('--box_shadow1',' 0 4px 0 0 hsl(28, 16%, 65%)');
  document.documentElement.style.setProperty('--del-reset_background','hsl(225, 21%, 49%)');
  document.documentElement.style.setProperty('--del-reset_shadow','0 4px 0 0  hsl(224, 28%, 35%)');
  document.documentElement.style.setProperty('--equal_background',' hsl(6, 63%, 50%)');
  document.documentElement.style.setProperty('--equal_shadow','0 4px 0 0 hsl(6, 70%, 34%)')
  document.documentElement.style.setProperty('--key_color','hsl(221, 14%, 31%)' );
  document.documentElement.style.setProperty('--body_color','  hsl(0, 0%, 100%)' );
  document.documentElement.style.setProperty('--del_reset_active','hsl(226, 32%, 69%)');
  document.documentElement.style.setProperty('--equal_active','hsl(6, 74%, 64%)')
  document.documentElement.style.setProperty('--equal_color','hsl(0, 0%, 100%)');
  document.documentElement.style.setProperty('--key_background_active','hsl(0, 0%, 100%)');
  document.getElementById("secondbtn").style.opacity="0";
  document.getElementById("firstbtn").style.opacity="0.9";
  document.getElementById("thirdbtn").style.opacity="0";
  }
}
  return (<main>
  <div className="container">
    <div className="cal_box">
    <div className="nav_container"> <span style={{fontSize: '32px', marginLeft: '10px'}}>calc</span>
      <div className="theme_toggle"> <span style={{fontSize: '11px',fontWeight: '700'}}>THEME</span>
      <div className="toggle_container">
        <div className="text"><span style={{fontSize: '12px'}}>1&emsp;&nbsp;2&emsp;&nbsp;3</span></div>
       <div className="toggle_background">
        <label id="firstbtn" onChange={themeChange} className="toggle_btn" htmlFor="r1"><input type='radio' id="r1" name='toggle' defaultChecked/> </label>
        <label id="secondbtn" onChange={themeChange} className="toggle_btn" htmlFor="r2"><input type='radio' id="r2" name='toggle'/> </label>
        <label id="thirdbtn" onChange={themeChange} className="toggle_btn" htmlFor="r3"><input type='radio' id="r3" name='toggle'/> </label>
      </div>
      </div> 
      </div>
    </div>
    <div className="screen"><div>{formula}</div><div>{input}</div></div>
    <div className="grid_container">
      <button
       className="seven box" 
       onClick={valueInput} >
        7
        </button>
      <button 
      className="eight box" 
      onClick={valueInput}>
        8
        </button>
      <button
      className="nine box" 
      onClick={valueInput}>
        9
        </button>
      <button 
      className="delete box"
       onClick={del}>
        DEL
        </button>
      <button 
      className="four box" 
      onClick={valueInput}>
        4
        </button>
      <button 
      className="five box" 
      onClick={valueInput}>
        5
        </button>
      <button
       className="six box"
        onClick={valueInput}>
          6
          </button>
      <button
       className="plus box" 
       onClick={valueInput} >
        +
        </button>
      <button
       className="one box" 
       onClick={valueInput}>
        1
        </button>
      <button
       className="two box" 
       onClick={valueInput}>
        2
        </button>
      <button
       className="three box"
        onClick={valueInput}>
          3
          </button>
      <button 
      className="minus box" 
       onClick={valueInput}>
        -
        </button>
      <button 
      className="dot box"
       onClick={valueInput}>
        .
        </button>
      <button 
      className="zero box" 
      onClick={valueInput}>
        0
        </button>
      <button 
      className="slash box" 
      onClick={valueInput}>
        /
        </button>
      <button
       className="asteric box" 
       onClick={valueInput}>
        x
        </button>
      <button
       className="reset box2"
        onClick={reset}>
          RESET
          </button>
      <button
       className="equal box2" 
       onClick={cal}>
        =
        </button>
    </div>
    </div>
  </div>
</main>);
}

export default App;
