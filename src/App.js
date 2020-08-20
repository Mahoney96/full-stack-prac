import React,  from 'react';
import "./App.css";
import axios from 'axios';
import connect from 'react-redux'

import {addUser} from './redux/reducers/authReducer';



class App extends React.Component{
    componentDidMount() {
        axios 
        .get('./auth/session')
        .then(res => {
            if (res.data) {

            }
        })
        .catch(err => console.log(err));

    }
    
    render() {
        return (
            <main>
                <Auth />
                <Welcome />
            </main>
        )
    }
}