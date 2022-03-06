import styled from 'styled-components'
import Footer from '../../../components/Footer'
import { useRef } from 'react';
import ShareButton from '../../../components/ShareButtton'
import BeforeButton from '../../../components/BeforeButton';

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
  position: relative;
`;

const Template = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  flex: 1; // footer가 차지하는 부분을 뺸 나머지 부분을 차지하게 된다.
  overflow-y: scroll;
  overflow-x: hidden; //x축 스크롤
`;

const HeadBlock = styled.div`
  padding: 40px;
  background-color: #D9E8F5;
  text-align: center;

`;

const Intro = styled.div`
  height: auto;
  margin: 20px 10px;
  .okImgSize {
    height: 30px;
    width: 30px;
  }
  .catImgSize {
    width: 100%;
  }
`;

const UpButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 16px;
  border: 0;
  background-color: white;
  .upImgSize {
    height: 35px;
    width: 35px;
  }
  position: absolute; //하단에 메뉴 고정
  bottom: 80px;
  right: 18px;
`;

const Panleukopenia = () => {
  const TemplateComponent = useRef(null)
  const handleClick = () => {
    console.log(TemplateComponent.current.scrollTo(0,0)) //맨 위로 올리는 역할
    console.log(TemplateComponent.current)
  }

  return (
    <Page>
      <PageInner>
        <Template ref={TemplateComponent}>
          <HeadBlock>
            <h1>고양이 피부병</h1>
          </HeadBlock>
          <Intro>
            <h3>1. 곰팡이성 피부염</h3>
            <div>고양이 탈모의 원인 1위는 곰팡이성 피부병이에요.</div>
            <div>특히 피부 면역력이 약한 1살 미만 고양이에게 흔히 발병해요.</div><br/>
            <div>이 피부병이 무서운 이유 중 하나는 사람에게도 감염 되기 때문이에요.</div>
            <div>동그란 링의 형태로 감염된다 하여 링웜이라 불려요.</div><br/>
            <img className='catImgSize' src={'/images/skinDisease.jpg'} alt="profile"/><br/><br/>
            <div>가려운 증상을 보이니 병원에 내원하셔서 치료 받으셔야 해요!</div><br/>
            <h3>2. 치료방법</h3>
            <div>✅ 먹는 약</div>
            <div>✅ 약용 샴푸로 목욕</div><br/>
            <div>위 두 가지를 병행하면서 치료를 진행하게 돼요.</div>
            <div>앞서 말했듯 다른 고양이, 개, 사람에게도 감염이 가능하기 때문에 가능하다면 격리하는것이 좋아요.</div><br/>
            <div>곰팡이는 포자로 전파가 되가 때문에 집안 청소와 환기가 매우 중요해요!</div><br/>
            <img className='catImgSize' src={'/images/skinDisease2.jpg'} alt="profile"/><br/><br/>
            <div>다행이도 이 질병은 치료와 환경개선을 잘 하시면 치료가 잘 되니 너무 걱정 안하셔도 돼요~! </div>
            <UpButton onClick={handleClick}>
              <img className='upImgSize' src={'/images/chevrons-up.svg'} alt="profile" />
            </UpButton>
            <ShareButton/>
            <BeforeButton/>
          </Intro>
        </Template>
        <Footer/>
      </PageInner>
    </Page>
  )
}
export default Panleukopenia