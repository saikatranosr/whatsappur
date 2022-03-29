import './App.css';
import { useState } from 'react'

function App() {
    const [number, setNumber] = useState("")
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        window.open(`//wa.me/91${number}`)
    }
    const handleOnNumberChange = (e)=>{
        if (e.target.value.length < 11) setNumber(e.target.value)
    }
    const handleOnPlusClick = ()=>{
        setNumber(String(parseInt(number) + 1).substring(0, 10))
    }
    const handleOnMinusClick = ()=>{
        setNumber(String(parseInt(number) - 1))
    }
    
  return (
      <>
    <nav className="bg-green-500 drop-shadow-md dark:bg-slate-800">
        <h1 className="text-lg font-bold py-3 select-none px-3 text-slate-100">WhatsAppur</h1>
    </nav>
    <div className="container mx-auto select-none">
        <form onSubmit={handleOnSubmit} className="w-fit flex flex-col space-y-5 mx-auto mt-10 shadow-md dark:border dark:border-slate-800 p-5">
            <label className="text-slate-800 dark:text-slate-200" htmlFor="number">Enter WhatsApp Number</label>
            <div className="relative">
                <span className="absolute w-fit inset-2 pl-2 text-slate-500 font-bold text-lg tracking-[0.6rem]">+91</span>
                <input 
                className="bg-white dark:bg-slate-800 text-green-500 font-bold rounded-full pl-20 pr-4 w-72 text-lg outline outline-2 outline-slate-500 tracking-[0.6rem] focus:outline-green-500 placeholder:text-slate-500 py-2" 
                onChange={handleOnNumberChange} 
                name="number" 
                value={number}
                type="number" 
                placeholder="0000000000"
                />
            </div>
            {<div className="flex justify-between">
                <div className="space-x-5">
                    <button type="button" onClick={handleOnMinusClick} disabled={!(number.length === 10)} className="bg-green-500 hover:shadow-md active:bg-green-700 disabled:bg-slate-500 transition-all w-fit py-3 px-4 text-lg text-green-100 rounded-full">- 1</button>
                    <button type="button" onClick={handleOnPlusClick} disabled={!(number.length === 10)} className="bg-green-500 hover:shadow-md active:bg-green-700 disabled:bg-slate-500 transition-all w-fit py-3 px-4 text-lg text-green-100 rounded-full">+ 1</button>
                </div>
                <button disabled={!(number.length === 10)} className="bg-green-500 hover:shadow-md active:bg-green-700 disabled:bg-slate-500 transition-all w-fit px-3 py-2 text-lg text-green-100 rounded-full" type="submit">Open Chat</button> 
            </div> }
        </form>
    </div>
    </>
  );
}

export default App;