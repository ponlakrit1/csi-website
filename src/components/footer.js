import React, { Component } from 'react';
import './app.css';
import {Grid, Row, Col} from 'react-bootstrap';

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="border-color"></div>
                <div className="App-footer">
                    <Grid className="grid-padding">
                        <Row>
                            <Col sm={1} md={1}>
                                <img src={require('./../img/icon.png')} className="img-fluid item-space" alt="CSI" />
                            </Col>
                            <Col sm={4} md={4}>
                                <p className="txt-white">
                                    <div className="font-20">Computer Science and Innovation</div>
                                </p>
                            </Col>
                            <Col sm={3} md={3}></Col>
                            <Col sm={4} md={4}>
                                <p className="txt-white">
                                    333 หมู่ 1 ต.ท่าสุด อ.เมือง จ. เชียงราย 57100<br/>
                                    Tel : +66(0) 5391 6741-2, Fax: +66(0) 5391 6743 <br/>
                                    Email: cs.itschool@mfu.ac.th<br/>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default footer;