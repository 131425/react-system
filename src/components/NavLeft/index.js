
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuConfig from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['sub1'],
      rootSubmenuKeys: []
    }
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item)=>{
      this.state.rootSubmenuKeys.push(item.key);
      if(item.children){
        return (
          <SubMenu key={item.key} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    });
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  handleClick = (e) => {
    console.log('click', e);
  }
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ height: '100vh' }}
      >
        {this.state.menuTreeNode}
      </Menu>
    );
  }
}