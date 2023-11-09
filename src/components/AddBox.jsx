import React, { Component } from 'react';
import './AddBox.css';

export default class AddBox extends Component {
    render() {
        return (
            <div className='addBox'>
                <div className='addUser'>
                    <p>add user</p>
                </div>
                <div className='addTask'>
                    <p>add task</p>
                </div>
            </div>
        );
    }
};