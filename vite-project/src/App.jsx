import './App.css'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Work from './pages/workExamples/Work'
import AppProject from './tasks/additionalproject/AppProject'
import AppTask1 from './tasks/task1/AppTask1'
import AppTask2 from './tasks/task2/AppTask2'
import AppTask3 from './tasks/task3/AppTask3'
import AppTask4 from './tasks/task4/AppTask4'
import AppTask5 from './tasks/task5/AppTask5'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>

      {/* <AppTask1/> */}
      {/* <AppTask2/> */}
      {/* <AppTask3/> */}
      {/* <AppTask4/> */}
      {/* <AppProject/> */}
      {/* <AppTask5/> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="workExamples/*" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
