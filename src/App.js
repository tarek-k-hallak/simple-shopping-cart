import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Cart from './pages/Cart'
import Photo from './pages/Photos'

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route exact path={"/"}>
                        <Photo />
                    </Route>
                    <Route path={"/cart"}>
                        <Cart />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
