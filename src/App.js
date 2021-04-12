import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Eyes from "./Components/Eyes/Eyes.js"
import Face from "./Components/Face/Face.js"
import Lips from "./Components/Lips/Lips.js"
import Header from  "./Header.js"

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it


const homeImages = [
  { id: 1,
    url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F05%2F14%2F051320-fenty-beauty-sale-lead.jpg"
  },
  { id: 2,
    url:"https://i.pinimg.com/564x/ae/aa/e7/aeaae7043ac0dd58720c3245a2ce7b9f.jpg"
  },
  { id: 3,
url:"https://i.pinimg.com/564x/d5/8f/61/d58f61a551cf7d7bef7d08ccc0d3d9f4.jpg"
  },
  {},
]



export default function App () {
  return (
    <Router>
      <div className="App">
      
      <Navbar/>
      <Header/>
    
      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/eye">

          <Eyes></Eyes>

        
        </Route>
        <Route path="/face">
          <Face></Face>
        </Route>
        <Route path="/lip">
          <Lips></Lips>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}
