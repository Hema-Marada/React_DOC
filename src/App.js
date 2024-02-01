/* global ThemeContext */
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import LifecycleExample from './LifecycleExample ';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import Hooks from './Hooks'
import ThemeContext from './ThemeContext';
import MyForm from './MyForm';
import Destructuring from './Destructuring';
import Events from './Events';
import ClassEvents from './ClassEvents';
import ChangeEvent from './ChangeEvent';
import OnSubmitEvent from './OnSubmitEvent';
import MouseEvents from './MouseEvents';
import FocusBlurEvents from './FocusBlurEvents';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';




const App = () => {
  
  return (
    <div>
       <Router>
      <Routes>
     
      
     
      <ThemeContext.Provider value="red">
        <Hooks />
      </ThemeContext.Provider>
      

<MyForm />
<Events />
<ClassEvents />
<ChangeEvent />
<OnSubmitEvent />
<MouseEvents />
<FocusBlurEvents />
     
        <Route path="/" element={<Home />} />
        <Route path="/funComp" element={ <FunctionalComponent message="Hello from functional component!" />
} />        <Route path="/classComp" element={ <ClassComponent />} />
        <Route path="/lifecycle" element={< LifecycleExample />} />
        <Route path="/parentcomp" element={ < ParentComponent />} />
        <Route path="/destructuring" element={<Destructuring name="John Doe" age={25} city="New York" />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />


        <Route path="/about" element={<About />} >
        <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
     
      
    </div>
  );
};

export default App;
