import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
    render() {
        return <h1>Hello world! {this.props.name}</h1>;
    }
}

class MySecondComponent extends React.Component {
    render() {
        return (
            <MyComponent name="Hahahs"/>
        );
    }
}

ReactDOM.render(
    <MySecondComponent />, 
    document.getElementById('root')
);