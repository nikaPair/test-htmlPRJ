import React from 'react';
import './app.css';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import { store } from './store/store';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
        </Provider>
    );
}

export default App;
