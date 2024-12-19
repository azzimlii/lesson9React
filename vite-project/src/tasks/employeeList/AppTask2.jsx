import React, { useEffect, useState } from 'react'
import Employees from './components/Employees';

export default function AppTask2() {
    const [state, setState] = useState([]);
    const [filterState, setFilterState] = useState('');
    useEffect(() => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(response => response.json())
            .then(data => {
                data.map((item) => {
                    if (item.id < 3) {
                        item.alive = 'alive';
                    } else {
                        item.alive = 'death';
                    }
                })
                setState(data);
            })
            .catch(error => {
                console.log('Error', error);
            });
    }, [])

    const render = state
        .filter(item => {
            if (filterState === 'true') {
                return item.alive === 'alive';
            }
            if (filterState === 'false') {
                return item.alive === 'death';
            }
            return true;
        })
        .map(item =>
            <Employees key={item.id} data={item} />)
    return (
        <div>
            {render}
            <button className='btn' onClick={() => setFilterState('true')}>Show alive ones</button>
            <button className='btn' onClick={() => setFilterState('false')}>show death ones</button>
        </div>
    )
}
