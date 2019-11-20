import React, { Component } from 'react';

export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div className="container center-ver">
                <h1>Contact Me</h1>
                <p>Feel free to check out any of following:</p>
                <ul>
                    <li><a href='https://github.com/christianmcfar' target="_blank"
                        rel="noopener noreferrer">GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/christian-mcfarland/' target="_blank"
                        rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        );
    }
}