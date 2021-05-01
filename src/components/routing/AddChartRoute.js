import {Redirect,Route} from 'react-router-dom';
import {AppProvider} from '../../UserContext';
import {useUserContext} from '../../UserContext';


function AddChartRoute({component: Component, ...rest}) {
        
    return (
        <AppProvider value='hello'>
        <Route 
        
        {...rest}
        render={
            (props) => 
                localStorage.getItem("authToken")? (
                    <Component {...props}/>
                ) : (
                    <Redirect to="/register"/>
                )
            
        }
        
        />
        </AppProvider>
    )
}

export default AddChartRoute
