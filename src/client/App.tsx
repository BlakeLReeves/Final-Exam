import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './public/Home';
import Navbar from './shared/Navbar';

export default class IApp extends React.Component<IAppProps, IAppState> {

    render () {
        return (
            <Route>
                <>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </div>
                </>
            </Route>
        )
    }
}

interface IAppProps { }

interface IAppState { }