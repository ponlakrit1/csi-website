import React, { Component } from 'react';
import './app.css';
import {Grid, Row, Col} from 'react-bootstrap';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Card, CardHeader, CardBody } from "react-simple-card";
import FacebookProvider, { Page } from 'react-facebook';

import Header from './header';
import Footer from './footer';

class home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Grid className="grid-padding">
                    <Row className="bottom-padding-50">
                        <Slider autoplay={3000} infinite={true}>
                            <img src={require('./../img/slider/poster1.jpg')} className="img-fluid img-responsive" alt="poster"/>
                            <img src={require('./../img/slider/poster2.jpg')} className="img-fluid img-responsive" alt="poster"/>
                            <img src={require('./../img/slider/poster3.jpg')} className="img-fluid img-responsive" alt="poster"/>
                            <img src={require('./../img/slider/poster4.jpg')} className="img-fluid img-responsive" alt="poster"/>
                            <img src={require('./../img/slider/poster5.jpg')} className="img-fluid img-responsive" alt="poster"/>
                        </Slider>
                    </Row>
                    <Row>
                        <Col sm={9} md={9}>
                            <img src={require('./../img/notepad.png')} className="img-fluid cover" alt="poster"/>
                            <span className="txt-h0"> ประชาสัมพันธ์</span>
                            <hr/>
                            <Card>
                                <CardHeader><img src={require('./../img/new.png')} className="img-fluid cover" alt="poster"/>&nbsp;<h4>กิจกรรมที่ 1</h4></CardHeader>
                                <CardBody>
                                    เนื้อกิจกรรม .......................
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader><h4>กิจกรรมที่ 2</h4></CardHeader>
                                <CardBody>
                                    เนื้อกิจกรรม .......................
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} md={3}>
                            <FacebookProvider appId="533051553791055">
                                <Page href="https://www.facebook.com/CSMFU/" tabs="timeline" />
                            </FacebookProvider>
                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default home;