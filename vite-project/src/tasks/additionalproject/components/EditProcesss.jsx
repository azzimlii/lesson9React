import React from 'react';

export default function EditProcesss({ data, handleRemove, handleEdit }) {
  return (
    <ul>
      <li>
        from: {data.from} to: {data.to} amount: {data.amount}
        <div className="buttons">
          <button className="editing" onClick={() => handleEdit(data)}>Edit</button>
          <button className="removing" onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      </li>
    </ul>
  );
}

