
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Header/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Registar from './Pages/Login/Registar/registar';

import Location from './Pages/Home/Location/Location';
import Addplans from './Pages/Addplans/Addplans';
import Manageplans from './Pages/Manageplans/Manageplans';
import BookedTravelPlans from './Pages/BookedTravelPlans/BookedTravelPlans';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>

      <AuthProvider>

        <Router>
          <Header>
          </Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>



            <Route path="/registar">
              <Registar></Registar>
            </Route>

            <Route path="/locations">
              <Location></Location>
            </Route>

            <Route path="/addplan">
              <Addplans></Addplans>
            </Route>

            <PrivateRoute path="/travellers">
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">

              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/manageservice">
              <Manageplans></Manageplans>
            </PrivateRoute>

            <PrivateRoute path="/addplan">
              <Addplans></Addplans>
            </PrivateRoute>


            <PrivateRoute path="/booking">
              <BookedTravelPlans></BookedTravelPlans>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>


      </AuthProvider>





    </div>
  );
}

export default App;
