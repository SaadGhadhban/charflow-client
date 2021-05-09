
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
// routing
import PrivateRoute from './components/routing/PrivateRoute';
import DashboardRoute from './components/routing/DashboardRoute';

//screens 
import Sidebar from './components/screens/Sidebar'
import HeaderScreen from './components/screens/HeaderScreen';
import MainScreen from "./components/screens/MainScreen";
import ContactScreen from './components/screens/ContactScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import {AppProvider} from './UserContext';
import DashboardScreen from './components/screens/DashboardScreen';
import AddChartScreen from './components/screens/AddChartScreen';
import AboutScreen from './components/screens/AboutScreen';

const App = () =>{

  
  return (
    <Router>
      <div className="app">
        <Switch>
          <AppProvider>
            <HeaderScreen />
            <div className="main-container">
              <div className="sidebar-container">
                <Sidebar />
              </div>

              <DashboardRoute
                exact
                path="/dashboard"
                component={DashboardScreen}
              />
              <DashboardRoute
                exact
                path="/addChart"
                component={AddChartScreen}
              />

              <Route exact path="/" component={MainScreen} />
              <Route exact path="/login" component={RegisterScreen} />
              <Route exact path="/register" component={RegisterScreen} />
              <Route
                exact
                path="/forgotpassword"
                component={ForgotPasswordScreen}
              />
              <Route
                exact
                path="/resetpassword/:resetToken"
                component={ResetPasswordScreen}
              />
              <Route exact path="/contact" component={ContactScreen} />
              <Route exact path="/about" component={AboutScreen} />
            </div>
          </AppProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
