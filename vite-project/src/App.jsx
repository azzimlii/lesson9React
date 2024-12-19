import './App.css'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import About from './pages/portfolio/about/About'
import Contact from './pages/portfolio/contact/Contact'
import Work from './pages/portfolio/workExamples/Work'
import Clock from './pages/secondRouting/clock/Clock'
import StopWatch from './pages/secondRouting/stopWatch/StopWatch'
import Timer from './pages/secondRouting/timer/Timer'
import AppProject from './tasks/additionalproject/AppProject'
import AppTask1 from './tasks/customButton/AppTask1'
import AppTask2 from './tasks/employeeList/AppTask2'
import AppTask3 from './tasks/cardForm/AppTask3'
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
      {/* <AppTask3/>  index.html'da css'i acaq zehmet olmasa */}
      {/* <AppTask4/> */}
      {/* <AppProject/> */}
      {/* <AppTask5/> */}

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="workExamples/*" element={<Work />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="stopwatch/*" element={<StopWatch />} />
          <Route path="timer/*" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
