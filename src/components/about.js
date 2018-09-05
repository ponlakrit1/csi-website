import React, { Component } from 'react';
import './app.css';

import Header from './header';
import Footer from './footer';

class about extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <center>
                        <img src={require('./../img/poster/about.jpg')} className="img-fluid img-responsive poster-padding" alt="poster"/>
                    </center>
                <Footer/>
            </div>
        );
    }
}

export default about;