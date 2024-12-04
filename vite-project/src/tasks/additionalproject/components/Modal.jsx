import React from "react";

export default function Modal({back,firstInput,handleAddNewOne,handleChange}) {
  return (
    <div className="container">
      <div className="newModal">
        <div className="modal-content">
          <h3>Edit Transaction</h3>
          <label htmlFor="editFirst">From:</label>
          <input value={firstInput.from} onChange={handleChange} type="text" name="from" id="from"  className="editFirst" />
          <label htmlFor="editSecond">To:</label>
          <input value={firstInput.to} onChange={handleChange} type="text" name="to" id="to" className="editSecond" />
          <label htmlFor="editAmount">Amount:</label>
          <input value={firstInput.amount} onChange={handleChange} type="number" name="amount" id="amount" className="editAmount" />
          <div className="modalButtons">
            <button className="addButton" onClick={handleAddNewOne} >Add</button>
            {/* <button className="keepButton">Keep</button> */}
            <button className="backButton" onClick={back}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

