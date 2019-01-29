import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './common.less';
import Home from './page/Home';

export default class Admin extends Component {
  render() {
    return (
      <Row>
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="container">
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}