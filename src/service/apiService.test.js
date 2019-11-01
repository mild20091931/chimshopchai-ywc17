import Api from './apiService';
import { expect } from 'chai'

const mockData =
{
  "navbarItems": [
    {
      "label": "ลงทะเบียนเข้าร่วมมาตรการ",
      "href": "https://regist.ชิมช้อปใช้.com/Register/"
    },
    {
      "label": "ขั้นตอนการเข้าร่วม",
      "href": "https://www2.ชิมช้อปใช้.com/howto-register"
    },
    {
      "label": "ร้านค้าที่เข้าร่วม",
      "href": "https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province"
    }
  ],
  "duration": "27 ก.ย. - 31 ธ.ค. 62",
  "detail": "ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ",
  "condition": "1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br>2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br>3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล"
  }

describe('getData()', () => {
    test('"data" property of length of 4', async () => {
      const data = await Api.getData();
      expect(data.length).to.equal(mockData.length);
    })
    test('should have navbarItems field.', async () => {
      const data = await Api.getData();
      // eslint-disable-next-line no-unused-expressions
      expect(data.data.navbarItems).to.not.be.undefined;
    })
    test('should have duration field.', async () => {
      const data = await Api.getData();
      // eslint-disable-next-line no-unused-expressions
      expect(data.data.duration).to.not.be.undefined;
    })
    test('should have detail field.', async () => {
      const data = await Api.getData();
      // eslint-disable-next-line no-unused-expressions
      expect(data.data.detail).to.not.be.undefined;
    })
    test('should have condition field.', async () => {
      const data = await Api.getData();
      // eslint-disable-next-line no-unused-expressions
      expect(data.data.condition).to.not.be.undefined;
    })
})

