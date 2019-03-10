import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Alerts } from './containers';
import { AppRouter } from './router';

class AppLayout extends React.Component {
    public render() {
        return (
            <BrowserRouter basename="/tower">
                <React.Fragment>
                    <Alerts />
                    <AppRouter />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export const App = AppLayout;
