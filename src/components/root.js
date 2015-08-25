// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { findDOMNode, Component, PropTypes } from 'react';
import store from '../store';

export default class Root extends Component {
    render() {
        return React.createElement(
            'div',
            {},
            'Hello, world!',
            React.createElement(
                DebugPanel,
                {},
                React.createElement(
                    DevTools,
                    {
                        store: store,
                        monitor: LogMonitor
                    }
                )
            )
        );
            // <DebugPanel top right bottom>
            //     <DevTools store={store} monitor={LogMonitor} />
            // </DebugPanel>
    }
}
