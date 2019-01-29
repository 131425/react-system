import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/index';
import axios from 'axios';
import { getWeather } from '../../config/api';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systemTime: '',
      weather: ''
    };
  }
  componentDidMount() {
    setInterval(() => {
      let systemTime = Util.formatDate(new Date().getTime());
      this.setState({
        systemTime
      });
    }, 1000);
    this.getWeather();
  }

  getWeather = async () => {
    // const res = await getWeather();
    // console.log(res.data.weatherinfo);
    // this.setState({
    //   weather:''
    // });
  }

  render() {
    return (
      <div>
        <Row className="header-admin">
          <Col span={24}>
            <span>欢迎，admin</span>
            <span className="exit">退出</span>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" className="header-bottom">
          <Col span={4}>首页</Col>
          <Col span={20} className="weather-box">
            <span>{this.state.systemTime}</span>
            <span className="weather">{this.state.weather}</span>
          </Col>
          <div className="iconSanjiao"></div>
        </Row>
      </div>
    )
  }
}