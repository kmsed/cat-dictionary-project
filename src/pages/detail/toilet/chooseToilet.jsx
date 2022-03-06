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
            <h1>고양이 화장실 선택 방법!</h1>
          </HeadBlock>
          <Intro>
            <div>고양이에게는 화장실이 굉장히 중요해요.</div>
            <div>화장실 생활 습관에 딱 맞는 화장실을 선택하는게 중요해요!</div><br/>
            <h3>1. 좋은 화장실 특징</h3><br/>
            <img className='catImgSize' src={'/images/chooseToilet.png'} alt="profile"/><br/><br/>
            <div>✅ 화장실의 크기는 고양이 몸 길이의 1.5배 이상</div><br/>
            <div>이정도 길이로 선택하셔야 고양이가 편하게 볼일을 보고 자신의 배설물을 밟지 않게돼요</div>
            <div>만약 비좁다면 배설물을 덮는 행동도 하기 힘들겠죠?</div><br/>
            <div>우리집 고양이가 화장실을 나올때 점프하듯 튀어나오거나 배설물을 묻지 않고 화장실 사용을 꺼린다면 좁다는 신호일 수 있어요!</div><br/>
            <div>✅ 지붕이 없는 화장실</div><br/>
            <div>지붕이 있는 화장실은 고양이에게 습하고 냄새가 나는 공간이라는 인식을 주게 됩니다.</div><br/>
            <div>✅ 입구가 적당히 낮은 화장실</div><br/>
            <div>어린 고양이, 노령묘, 비만묘 등 모두 쉽게 들어가고 나올 수 있도록 입구가 낮은 것이 좋아요.</div><br/>
            <div>✅ 모래의 높이가 2.5 ~ 7cm</div>
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