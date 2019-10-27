import React, { Component,Fragment } from 'react';
import api from '../Core/apiService';
import Nav from '../Core/Nav';
import Banner from '../Core/Banner';
import RegisterDetail from './Register';
import BoxDetail from './BoxDetail';
import Store from './DetailLeft';

class Index extends Component {
  state  = {
    navbarItems: [],
    duration: '',
    detail:'',
    condition:'',
  }

  componentDidMount = async () =>{
    let data = await api.getData();
    this.handleData(data.data);
  }

  handleData = async (items) => {
    this.setState({
      navbarItems : items.navbarItems,
      duration: items.duration,
      detail: items.detail,
      condition: items.condition
    })
  }
  render() {
    const { navbarItems, duration, detail, condition } = this.state;
    return (
      <Fragment>
        <Nav navbarItems={navbarItems}/>
        <Banner/>
        <RegisterDetail duration={duration}/>
        <BoxDetail detail={detail} condition={condition}/>
        <Store/>
      </Fragment>
    );
  }
}

export default Index;