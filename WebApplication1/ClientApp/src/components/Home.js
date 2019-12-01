import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;
    
    render () {
        return (
        <div>
            <div>
                <div className="homepageimage">
                    <div className="whitetext container center">
                        <h1>Christian McFarland</h1>
                        <h5>
                            Welcome to my web app! This application was built on my quest of continuously learning. 
                            I'm a recent graduate of Wilfrid Laurier University and when I'm not trekking the outdoors 
                            I'm looking to hone my skills, with a current focus on gaining a better understanding of web development.
                        </h5>
                    </div>
                </div>
            </div>
            <div className="black">
                <div className="whitetext container center-ver">
                    <h1>Projects</h1>
                    <ul>
                        <li>
                            <strong>Personal Web App</strong>
                            <p>
                                My first dive into the world of web developement. 
                                This application was built with:
                                <a href='https://get.asp.net/' target="_blank" rel="noopener noreferrer"> ASP.NET Core</a> and
                                <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' target="_blank" rel="noopener noreferrer"> C#</a> for cross-platform server-side code,
                                <a href='https://facebook.github.io/react/' target="_blank" rel="noopener noreferrer"> React</a> for client-side code, and
                                <a href='http://getbootstrap.com/' target="_blank" rel="noopener noreferrer"> Bootstrap</a> and
                                <a href='https://material-ui.com/' target="_blank" rel="noopener noreferrer"> Material-UI</a> for layout and styling.
                                Currently working on adding email feautres.
                            </p>
                        </li>
                        <li>
                            <strong>N-Queens Solution</strong>
                            <p>
                                Solution to 
                                <a href='https://en.wikipedia.org/wiki/Eight_queens_puzzle' target="_blank" rel="noopener noreferrer"> N-Queens </a> 
                                problem for chess board of up to 1 million queens using a 
                                <a href='https://en.wikipedia.org/wiki/Min-conflicts_algorithm' target="_blank" rel="noopener noreferrer"> Min-Conflicts </a> 
                                algorithm in C++, found on
                                <a href='https://github.com/christianmcfar/nqueens' target="_blank" rel="noopener noreferrer"> GitHub</a>. 
                                Currently working on visualizer to display solving in real time.
                            </p>
                        </li>
                        <li>
                            <strong>3D Rush Hour Game</strong>
                            <p>
                                Implemented a 3D Rush Hour game in C++ using
                                <a href='https://www.opengl.org/' target="_blank" rel="noopener noreferrer"> OpenGL </a> 
                                to render graphics and create lighting.
                            </p>
                        </li>
                    </ul>
                </div>        
            </div>
            <div className="white">
                <div className="container center-ver">
                    <h1>Coming soon!</h1>
                    <p>
                        Still working on this part. Check back later for more to come!  
                    </p>
                </div>  
            </div>
        </div>
        );
    }
}
