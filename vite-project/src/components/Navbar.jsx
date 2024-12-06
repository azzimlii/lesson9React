import React from 'react'
import {
    Link,
  } from "react-router-dom";
  import "./styles.css/";
export default function Navbar() {
  return (
    <nav>
       <Link className="link" to="/">About</Link>
       <Link className="link" to="/contact">Contact</Link>
       <Link className="link" to="/workExamples">Work Examples</Link>
    </nav>
  )
}
