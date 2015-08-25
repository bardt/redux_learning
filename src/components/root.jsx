// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { findDOMNode, Component, PropTypes } from 'react';
import store from '../store';
import App from './app';

export default class Root extends Component {
    render() {
        return (
            <div>
                <App state={this.props.state}/>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            </div>
        );
    }
}
