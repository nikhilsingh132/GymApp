import './Bmi.css';
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = ((weight*10000) / (height * height))
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18) {
        setMessage('You are underweight')
      } else if (bmi >= 18 && bmi < 25) {
        setMessage('You are healthy')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h1 className='center'>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
 
        <div>
          <h2>Weight (kgs)</h2>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <h2>Height (cm)</h2>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h2>Your BMI is: {bmi}</h2>
        <h2 className='message'>{message}</h2>
      </div>
    </div>
  </div>
  );
}
 
export default App;