import React, { Component } from 'react';
import './app.css';
import GoogleMapReact from 'google-map-react';
import {Grid, Row, ButtonToolbar, Button} from 'react-bootstrap';

import Header from './header';
import Footer from './footer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class contact extends Component {
    static defaultProps = {
        center: {
          lat: 20.044867,
          lng: 99.894464
        },
        zoom: 17
    };

    render() {
        return (
            <div>
                <Header/>
                <Grid className="grid-map">
                    <Row>
                        <h3>ติดต่อเรา</h3>
                        <div style={{ height: '70vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyCyEshCfJAulU1ymZEHwa7KY_JG2Iz6xcA' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}>
                            <AnyReactComponent
                                lat={20.044867}
                                lng={99.894464}
                            />
                            </GoogleMapReact>
                        </div>
                        <p className="contact-space">
                            333 หมู่ 1 ต.ท่าสุด อ.เมือง จ. เชียงราย 57100<br/>
                            Tel : +66(0) 5391 6741-2, Fax: +66(0) 5391 6743 <br/>
                            Email: cs.itschool@mfu.ac.th<br/>
                        </p>
                        <hr/>
                        <h3>ติดต่อเราผ่าน Facebook</h3>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" href="https://www.facebook.com/messages/t/CSMFU">Send</Button>
                        </ButtonToolbar>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default contact;