import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counting: '',
      input: 0,
      lastInput : 0,
      display: 0,
      lastOperater: '',
    };
  }

  calcOperater = (children)=>{
    const {input, lastOperater, counting} = this.state;
    if(children === '÷'){
      this.setState({
        lastOperater: '/',
      })
    }else if(children === '×'){
      this.setState({
        lastOperater: '*',
      })
    }else if(children === '+'){
      this.setState({
        lastOperater: '+',
      })
    }else if (children === '–'){
      this.setState({
        lastOperater: '-',
      })
    }
    //'='運算子不變，input可改
    else if (children === '='){
      const lastInput = this.state.lastInput;
      const equation = `${counting}${lastOperater}${lastInput}`;
      const output = eval(equation);
      const decimal = Math.abs(7-(parseInt(output).toString().length));
      const finalOutput = parseFloat(output.toFixed(decimal))
      if(parseInt(finalOutput).toString().length>7){
        this.setState({
          input:'',
          lastInput: lastInput,
          counting: 9999999,
          display: 9999999,
        })
      }else{
      this.setState({
        input: '',
        lastInput: lastInput,
        counting: finalOutput,
        display: finalOutput,
      })}
    }
    //'=' end here

    //如果沒有input（連案運算子）
    if(input === ''){
      return false;
    }
    //計算
      const lastInput = input;
      const equation = `${counting}${lastOperater}${lastInput}`;
      const output = eval(equation);
      const decimal = Math.abs(7-(parseInt(output).toString().length));
      const finalOutput = parseFloat(output.toFixed(decimal));
      if(parseInt(finalOutput).toString().length>7){
        this.setState({
          input:'',
          lastInput: lastInput,
          counting: 9999999,
          display: 9999999,
        })
      }else{
      this.setState({
        input:'',
        lastInput: lastInput,
        counting: finalOutput,
        display: finalOutput,
      })}
  }

  calcNumber = (children)=>{
    const {input} = this.state;
    if(input.toString().length<7){
    if(parseInt(input) === 0){
      this.setState({
        input: ''+children,
        display: ''+children,
      })
    }else{
    this.setState({
      input: input+children,
      display: input+children,
    })}
   }else{
     return false;
   }
  }

  resetState = ()=> {
    this.setState({
      counting: '',
      input: 0,
      lastInput : 0,
      display: 0,
      lastOperater: '',
    })
  }
  showNotImplemented=()=> {
    console.warn('我不做function啦！JoJo！')
    this.setState({
      display: 'No!JoJo!',
    })
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton onClick={this.calcOperater} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.calcNumber} className="calc-number">7</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">8</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">9</CalcButton>
            <CalcButton onClick={this.calcOperater} className="calc-operator">×</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.calcNumber} className="calc-number">4</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">5</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">6</CalcButton>
            <CalcButton onClick={this.calcOperater} className="calc-operator">–</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.calcNumber} className="calc-number">1</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">2</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">3</CalcButton>
            <CalcButton onClick={this.calcOperater} className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.calcNumber} className="bigger-btn">0</CalcButton>
            <CalcButton onClick={this.calcNumber} className="calc-number">.</CalcButton>
            <CalcButton onClick={this.calcOperater} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
