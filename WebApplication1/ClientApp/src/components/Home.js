import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;
    
    render () {
        return (
        <div>
            <div className="homepageimage" style={{ width: '100%', height: '100%' }}>
                <div className="whitetext container center-ver">
                    <h1>Hello, world!</h1>
                    <p>Welcome to your new single-page application, built with:</p>
                    <ul>
                      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                      <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                    </ul>
                    <p>To help you get started, we have also set up:</p>
                    <ul>
                      <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
                    </ul>
                    <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
                </div>
            </div>
            <div className="black">
                <div className="whitetext container center-ver">
                    <h1>Objective/About Me</h1>
                    <p>
                        Welcome to your new single-page application, built with: 
                        <a href='https://get.asp.net/'> ASP.NET Core</a> and 
                        <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'> C#</a> for cross-platform server-side code 
                        <a href='https://facebook.github.io/react/'> React</a> for client-side code 
                        <a href='http://getbootstrap.com/'> Bootstrap</a> for layout and styling 
                        To help you get started, we have also set up: 
                        <strong> Client-side navigation</strong>. For example, click <em> Counter</em> then <em> Back</em> to return here. 
                        <strong> Development server integration</strong>. In development mode, the development server from 
                        <code> create-react-app</code> runs in the background automatically, so your client-side resources are dynamically 
                        built on demand and the page refreshes when you modify any file. 
                        <strong> Efficient production builds</strong>. In production mode, development-time features are disabled, and your 
                        <code> dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files. 
                        The <code> ClientApp</code> subdirectory is a standard React application based on the <code> create-react-app </code> 
                        template. If you open a command prompt in that directory, you can run <code> npm</code> commands such as 
                        <code> npm test</code> or <code> npm install</code>.
                    </p>
                </div>        
            </div>
            <div>
                <div className="container center-ver">
                    <h1>If only I could be so grossly incandescent!</h1>
                    <p>
                        Now that I am Undead, I have come to this great land, the birthplace of Lord Gwyn, to seek my very own sun! 
                        The way I see it, our fates appear to be intertwined.
                        In a land brimming with Hollows, could that really be mere chance?
                        So, what do you say? Why not help one another on this lonely journey?
                        We are amidst strange beings, in a strange land.
                        The flow of time itself is convoluted; with heroes centuries old phasing in and out.
                        The very fabric wavers, and relations shift and obscure.
                        There's no telling how much longer your world and mine will remain in contact.
                        But, use this, to summon one another as spirits, cross the gaps between the worlds, and engage in jolly co-operation!
                        Of course, we are not the only ones engaged in this.
                        But I am a warrior of the sun! Spot my summon signature easily by its brilliant aura.
                        If you miss it, you must be blind!
                        Oh, hello there. I will stay behind, to gaze at the sun.
                        The sun is a wondrous body. Like a magnificent father!
                    </p>
                </div>  
            </div>
        </div>
        );
    }
}
