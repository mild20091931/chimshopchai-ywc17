import React, { Component,Fragment } from 'react';
import api from '../Core/apiService';
import Nav from '../Core/Nav';
import Banner from '../Core/Banner';
import RegisterDetail from './Register';
import BoxDetail from './BoxDetail';
import BoxCall from './BoxCallCenter';
import Brand from './BoxBrand';
import Footer from './Footer';
import Store from './DetailLeft';
import Step from './DetailRight';


const content = `<p><strong>สิทธิต่อที่ 1 : รับเงินสนับสนุน 1,000 บาท<br/>
สิทธิต่อที่ 2 : รับเงินชดเชยคืน 15%-20% (สูงสุด 8,500 บาท)</strong></p>
<p>แบ่งเป็น <br/>1. 15% สำหรับยอดใช้จ่ายสะสมไม่เกิน 30,000 บาท<br/>
2. 20% สำหรับยอดใช้จ่ายสะสมส่วน 30,000 ถึง 50,000 บาท</p>`

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
        <Store subTitle="ค้นหารายชื่อร้านค้า" pathImg='img/banner_store.png' msgButton="รายชื่อร้านค้าที่เข้าร่วมโครงการ"/>
        <Step subTitle="ขั้นตอนการเข้าใช้งานผ่าน<br>แอปฯ “เป๋าตัง”" video="https://www.youtube.com/embed/ZkniwQLv_Xk" msgButton="ขั้นตอนทั้งหมด"/>
        <Store subTitle="เติมเงินเข้า “เป๋าตัง”<br/> (G-Wallet)" pathImg='img/banner_touup-GW.png' msgButton="ดูขั้นตอนทั้งหมด"/>
        <Step
          subTitle="ใช้จ่าย สะดวก ปลอดภัย <br/> “เป๋าตัง” (G-Wallet)"
          pathImg="img/download.png"
          content={content}
          pic1="img/AppStore.png"
          pic2="img/GooglePlay.png"
        />
        <BoxCall/>
        <Brand/>
        <Footer navbarItems={navbarItems}/>
      </Fragment>
    );
  }
}

export default Index;