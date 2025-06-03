import './App.css';
import { Layout, Row, Col } from 'antd';
import Banner from './components/Banner';
import InfoGrid from './components/InfoGrid';
import SectionContainer from './components/SectionContainer';
import Image from './components/CustomImage';
import Paragraph from './components/Paragraph';
import FRow from "./components/FRow";
import LeadFormSection from './components/LeadFormSection'; // Biểu mẫu đăng ký thông tin nhận bảng giá Vinhomes Green City
import HighlightGrid from './components/HighlightGrid';
import GreenCityRatioSection from './components/GreenCityRatioSection';
import ProjectOverview from './components/ProjectOverview';
import TopMenu from './components/TopMenu';
function App() {
  return (
    <Layout>
      <TopMenu />
      <SectionContainer backgroundColor={'#09261d'} anchorName={'gioi-thieu'}>
        <FRow align={'middle'} justify={'center'}>
          <Col xl={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  width: '100%',
                  maxWidth: '708px',
                  padding: '60px 40px',
                  color: 'white',
                  fontFamily: 'Segoe UI, sans-serif'
                }}>
                  <div style={{ color: '#61B15A', fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Vinhomes Green City
                  </div>
                  <div style={{ fontSize: '38px', fontWeight: 900, lineHeight: 1.4, textTransform: 'uppercase' }}>
                    Khu đô thị<br/>
                    "All-in-one"<br/>
                    đầu tiên tại<br/>
                    Tây Bắc TP.HCM
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '32px', fontStyle: 'italic', color: '#d8a36a' }}>
                    của Vinhomes
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <Paragraph>Xây dựng mô hình khu đô thị trên thị trường không hiếm, nhưng kiến tạo môi trường đáng sống
                  đúng nghĩa, mang đến những giá trị đích thực thì không phải dự án nào cũng làm được.
                  Những khu đô thị xanh của Nhà sáng lập Ecopark là ngoại lệ - nơi mọi chủ nhân đều tự hào về quyết định
                  sở hữu và đầu tư của mình.
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Image src={"main-banner/img.png"} preview={false}/>
          </Col>

        </FRow>
      </SectionContainer>
      <SectionContainer anchorName={'chinh-sach'}>
        <FRow gutter={16} align="middle" justify="center">
          <Col xl={12} md={24}>
            <Banner/>
          </Col>
          <Col xl={12} md={24}>
            <Row>
              <Col span={24}>
                <div style={{
                  width: '100%',
                  maxWidth: '567px',
                  padding: '30px',
                  fontFamily: 'Segoe UI, sans-serif',
                  color: '#1f3f2b'
                }}>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3aa655', lineHeight: 1.4 }}>
                    Chính thức ra mắt
                    <span style={{
                      fontFamily: 'Brush Script MT, cursive',
                      fontStyle: 'italic',
                      fontWeight: 'normal',
                      fontSize: '36px',
                      color: '#d8a36a',
                      marginLeft: '10px'
                    }}>
                      The Lake Villas
                    </span>
                  </div>
                  <div style={{
                    marginTop: '20px',
                    fontSize: '20px',
                    color: '#12372A'
                  }}>
                    <span style={{ color: '#3aa655', fontWeight: 'bold' }}>"Tuyệt tác biệt thự"</span> giữa thiên nhiên
                    và mặt hồ,
                    tâm điểm của đại đô thị Vinhomes Green City.
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <InfoGrid/>
              </Col>
            </Row>
          </Col>
        </FRow>
      </SectionContainer>
      <SectionContainer backgroundImage={'bg_ft_1603797835.png'} anchorName={'tien-ich'}>
        <FRow>
          <Col span={24}>
            <LeadFormSection
              title="Đăng ký nhận bảng giá"
              subtitle="Nhận thông tin chính thức từ Vinhomes Green City"
              description="Điền thông tin để được tư vấn chi tiết về giá bán, tiến độ và chính sách ưu đãi dự án Vinhomes Green City – khu đô thị 'all-in-one' đẳng cấp đầu tiên tại Tây Bắc TP.HCM. Số lượng giới hạn giai đoạn đầu!"
            />
          </Col>
          <Col span={24}>
            <HighlightGrid/>
          </Col>
        </FRow>
      </SectionContainer>
      <SectionContainer backgroundImage={'img.png'} anchorName={'quy-mo'}>
        <FRow>
          <Col span={24}>
            <GreenCityRatioSection/>
          </Col>
        </FRow>
      </SectionContainer>
      <SectionContainer anchorName={'dich-vu'}>
        <FRow gutter={16} align="middle" justify="center">
          <Col xl={12} md={24}>
            <Banner/>
          </Col>
          <Col xl={12} md={24}>
            <ProjectOverview/>
          </Col>
        </FRow>
      </SectionContainer>
    </Layout>
  );
}

export default App;
