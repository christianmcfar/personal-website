import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div className="container center-ver">
                <h1>Contact Me</h1>
                <p>Feel free to check out any of following:</p>
                <ul>
                    <li>
                        <a href='https://github.com/christianmcfar' target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/christian-mcfarland/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
                <p>Or send me an email here!</p>
                <TextField
                    id="outlined-multiline-static"
                    label="Email"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <Grid container justify="center">
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </Grid>
            </div>
        );
    }
}