import React, { Component } from 'react';
import './app.css';
import {Grid, Row} from 'react-bootstrap';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Header from './header';
import Footer from './footer';

class activity extends Component {
    render() {

        const images1 = [
            {
              original: require('./../img/activity/byenior/bn1.jpg'),
              thumbnail: require('./../img/activity/byenior/bn1.jpg'),
            },
            {
              original: require('./../img/activity/byenior/bn2.jpg'),
              thumbnail: require('./../img/activity/byenior/bn2.jpg')
            },
            {
              original: require('./../img/activity/byenior/bn3.jpg'),
              thumbnail: require('./../img/activity/byenior/bn3.jpg')
            },
            {
              original: require('./../img/activity/byenior/bn5.jpg'),
              thumbnail: require('./../img/activity/byenior/bn5.jpg')
            },
            {
              original: require('./../img/activity/byenior/bn6.jpg'),
              thumbnail: require('./../img/activity/byenior/bn6.jpg')
            },
            {
              original: require('./../img/activity/byenior/bn7.jpg'),
              thumbnail: require('./../img/activity/byenior/bn7.jpg')
            },
            {
              original: require('./../img/activity/byenior/bn8.jpg'),
              thumbnail: require('./../img/activity/byenior/bn8.jpg')
            }
        ]

        return (
            <div>
                <Header/>
                <Grid>
                    <Row className="activity-size">
                        <h3>Goodbye Senior</h3>
                        <hr/>
                        <center>
                           <ImageGallery items={images1} /> 
                        </center>
                        <hr/>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default activity;