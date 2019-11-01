import React, { Component, Fragment } from 'react';
import api from '../../service/apiService';
import Nav from '../Core/Nav';
import Banner from '../Core/Banner';
import RegisterDetail from './Register';
import BoxDetail from './BoxDetail';
import BoxCall from './BoxCallCenter';
import Brand from './BoxBrand';
import Footer from './../Core/Footer';

class Index extends Component {
  _isMounted = false;
  state = {
    navbarItems: [],
    duration: '',
    detail: '',
    condition: '',
  };

  componentDidMount = async () => {
    this._isMounted = true;
    if (this._isMounted) {
      let data = await api.getData();
      this.handleData(data.data);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleData = items => {
    this.setState({
      navbarItems: items.navbarItems,
      duration: items.duration,
      detail: items.detail,
      condition: items.condition,
    });
  };

  render() {
    const { navbarItems, duration, detail, condition } = this.state;
    return (
      <Fragment>
        <Nav navbarItems={navbarItems} />
        <Banner />
        <RegisterDetail duration={duration} />
        <BoxDetail detail={detail} condition={condition} />
        <BoxCall />
        <Brand />
        <Footer navbarItems={navbarItems} />
      </Fragment>
    );
  }
}

export default Index;
