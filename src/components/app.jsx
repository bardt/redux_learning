import React, { Component } from 'react';

export default class App extends Component {
    render() {
        const style = {
            color: 'red'
        };

        return (
            <p style={style}>
                Hello, Redux!
            </p>
        );
    }
}
