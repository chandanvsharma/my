import './App.css';
import Page from './components/Page';
// import NavBar from './components/NavBar';

// import { BasketProvider } from './context/BasketContext';
// import store from './data/store'
// import { Provider } from 'react-redux'
// import {
//   addItemToCart,
//   removeItemFromCart,
//   increaseCartData,
//   decreaseCartItem
// } from './data/actions'
function App() {

  // store.dispatch(addItemToCart({ name: "aman", quantity: 1 }))
  return (
    // <Provider store={store}>

    <Page />
    /* <BasketProvider>
      
    </BasketProvider> */


    // </Provider>
  );
}

export default App;
