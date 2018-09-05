import React, { Component } from 'react';
import './app.css';

import Header from './header';
import Footer from './footer';

class talent extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <center>
                        <img src={require('./../img/poster/it-talent.png')} className="img-fluid img-responsive poster-padding" alt="poster"/>
                    </center>
                <Footer/>
            </div>
        );
    }
}

export default talent;