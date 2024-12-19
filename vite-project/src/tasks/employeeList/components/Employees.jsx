import React from 'react'

export default function Employees({data}) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Department: {data.department}</p>
      <p>Role: {data.role}</p>
      <p>Alive: {data.alive}</p>
    </div>
  )
}
