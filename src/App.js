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
import ClassRefs from './ClassRefs';
import FunctionalRefs from './FunctionalRefs';
import Integration from './Integration';
import PostAPI from './PostAPI';
import Task from './Task'
import PutAPI from './PutAPI';
import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import withAuthentication from './withAuthentication';
import HocComponent from './HocComponent';
import OAuthExample from './OAuthExample';



const App = () => {

  return (
    <div>
      <Router>
        <ThemeContext.Provider value="red">
          <Routes>

             {/* Default route */}
            <Route path="/" element={<Home />} />

            <Route path="/hook" element={<Hooks />} />
            <Route path="/funComp" element={<FunctionalComponent message="Hello from functional component!" />} /> 
            <Route path="/classComp" element={<ClassComponent />} />
            <Route path="/lifecycle" element={< LifecycleExample />} />
            <Route path="/parentcomp" element={< ParentComponent />} />
            <Route path="/childcomp" element={< ChildComponent />} />
            <Route path="/destructuring" element={<Destructuring name="John Doe" age={25} city="New York" />} />
            <Route path="/form" element={<MyForm />} />
            <Route path="/events" element={<Events />} />
            <Route path="/classevents" element={<ClassEvents />} />
            <Route path="/changeevent" element={<ChangeEvent />} />
            <Route path="/submitevent" element={<OnSubmitEvent />} />
            <Route path="/mouseEvents" element={<MouseEvents />} />
            <Route path="/focusEvents" element={<FocusBlurEvents />} />
            <Route path="/ClassRefs" element={<ClassRefs />} />
            <Route path="/FunctionalRefs" element={<FunctionalRefs />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/post" element={<PostAPI />} />
            <Route path="/put" element={<PutAPI />} />
            <Route path="/hoc" element={<HocComponent />} />
            <Route path="auth" element={<OAuthExample />} />


     

            <Route path="/task" element={<Task />} />
            {/* parent component */}
            <Route path="/about" element={<About />} >
              {/* child component */}
            <Route path="contact" element={<Contact />} />
            </Route>
            
            {/* wild route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeContext.Provider>
      </Router>
      {/* <hello/> */}

    </div>
  );
};

export default App;
