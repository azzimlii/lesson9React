import React, { useEffect, useState } from 'react';
// import './styles.css/';
import EditProcesss from './components/EditProcesss';
import Modal from './components/Modal';
export default function AppProject() {
    const [state, setState] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [firstInput, setFirstInput] = useState({
        from: '',
        to: '',
        amount: ''
    });
    useEffect(() => {
        fetch('https://acb-api.algoritmika.org/api/transaction')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setState(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });

    }, []);
    const handleRemove = (id) => {

        fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                return response.json()
            })
            .then(() => {
                setState((prev) => prev.filter((item) => item.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting transaction:', error);
            });
    };
   
    const handleAddNewOne = () => {
        fetch('https://acb-api.algoritmika.org/api/transaction', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(firstInput),
        })
            .then(res =>
                res.json())


            .then((newTransaction) => {
                setState((prev) => [...prev, newTransaction]);
                setShowModal(false);
                setFirstInput({ from: '', to: '', amount: '' });
            })


            .catch((error) => {
                console.error('Error adding transaction:', error);
            });

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFirstInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditing = (id) => {
        fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(firstInput),
        })
            .then(response => {
                return response.json();
            })
            .then(updatedTransaction => {
                setState((prev) =>
                    prev.map((item) =>
                        item.id === id ? updatedTransaction : item
                    )
                );
                setShowModal(false);
                setEditingId(null)
            })
            .catch((error) => {
                console.log('Error updating transaction:', error);
            });
    };

    const handleEdit = (data) => {
        setFirstInput(data); 
        setEditingId(data.id); 
        setShowModal(true);
    };
    const render = state.map(item => <EditProcesss key={item.id} data={item} handleRemove={handleRemove}  handleEdit={handleEdit}/>)
    return (
        <>
            <h1>Algoritmika</h1>
            <div className="btns">
                <button className="btn1" onClick={() => setShowModal(true)}>Add New One</button>
            </div>
            {render}
            {showModal && (
                <Modal
                    back={() => setShowModal(false)}
                    handleChange={handleChange}
                    firstInput={firstInput}
                    handleAddNewOne={editingId ? () => handleEditing(editingId) : handleAddNewOne}  
                />
            )}
        </>
    )
}
