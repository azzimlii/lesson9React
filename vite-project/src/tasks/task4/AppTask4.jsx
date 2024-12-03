import React, { useEffect, useState } from 'react'
import Workers from './components/Workers';
import './styles.css/'
export default function AppTask4() {
    const [state, setState] = useState([]);
    const [filteredVersion,setFilteredVersion]=useState([]);
    const [inputValue, setInputValue] = useState(''); 

    useEffect(() => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(response => response.json())
            .then(data => {
                setState(data);
                setFilteredVersion(data);
            })
            .catch(error => {
                console.log('Error', error);
            });
    }, [])
    const handleInfo= () => {
        setFilteredVersion(state.filter(item =>item.name.includes(inputValue)|| item.department.includes(inputValue)));
        setInputValue('');
    };
    const handleAllInfo=()=>{
        setFilteredVersion(state);
    }
    const render = filteredVersion.map(item => <Workers key={item.id} data={item} />)
  return (
    <>
    <div className='container'>
        <h2>List</h2>
        <div className='header'>
        <input placeholder="Search by name or department..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}></input>
        <button className='btn' onClick={handleInfo}>Enter</button>
        <button className='btn' onClick={handleAllInfo}>All</button>
        </div>
      {render}
    </div>

    </>
  )
}
