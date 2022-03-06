import styled from 'styled-components'
import Footer from '../components/Footer'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;

`;
const PageInner = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

const Template = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  flex: 1; // footer가 차지하는 부분을 뺸 나머지 부분을 차지하게 된다.

`;

const HeadBlock = styled.div`
  padding: 40px;
  /* border-bottom: 1px solid black; */
  background-color: #D9E8F5;
`;

const Intro = styled.div`
  height: auto;
  margin-top: 60px;
  /* border-bottom: 1px solid black; */
  .imgSize {
      width: 100%;
      height: auto;
      margin-top: 20px;
  }
  .fontSize {
    font-size: 16px;
  }
`;

const App = () => {
  return (
  <Page>
    <PageInner>
      <Template>
        <HeadBlock>
          <h1>냥집사를 위하여</h1>
        </HeadBlock>
        <Intro>
          <div className='fontSize'>초보 집사들을 위한 '고양이 사전'을 제공합니다💕</div>
          <div className='fontSize'>반려고양이를 위한 다양한 정보를 알아가세요. </div>
          <div className='fontSize'>다른 집사들과 소통할 수 있는 수다방도 제공합니다. </div>
          <div className='fontSize'>우리 집 고양이를 자랑해 보세요!</div>
          <img className='imgSize' src={'/images/HomeCat2.png'} alt="profile"/>
        </Intro>
      </Template>
      <Footer />
    </PageInner>
  </Page>
  )
}
export default App