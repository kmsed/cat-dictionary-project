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
            <h1>우리집 고양이는<br/> 나를 엄마로 생각할까?</h1>
          </HeadBlock>
          <Intro>
            <h3>1. 보호자 신체 일부에 꾹꾹이를 한다. </h3>
            <div>이 행동은 집사를 보호자, 엄마로 생각할 때 나타나는 행동이예요.</div>
            <div>아기 고양이가 어미의 젖을 먹을 때 하는 행동이 꾹꾹이 인데요.</div>
            <div>이를 엄마라 생각드는 집사에게 하는거죠</div><br/>
            <h3>2. 야옹 걸며 응석을 부리고 안아주길 원해요. </h3>
            <div>엄마 고양이와 나누는 스킨십을 하듯이 집사 품에 안겨 골골송을 부르기도 해요.</div>
            <div>안정감과 행복감을 느낄때 하는 행동이에요.</div><br/>
            <h3>3. 같은 공간에서 자요. </h3><br/>
            <img className='catImgSize' src={'/images/thinkMom3.jpg'} alt="profile"/><br/><br/>
            <div>고양이가 집사와 함께 자려고 하는 행동은 엄마와 같이 가까운 존재로 생각하고 신뢰감이 깊다는 뜻이에요.</div><br/>
            <h3>4. 집사에게 말을 걸며 잘 운다. </h3>
            <div>대화를 시도하려고 하며 집사의 관심을 끌기위한 귀여운 행동이죠</div><br/>
            <h3>5. 머리를 비비거나 박치기를 한다. </h3><br/>
            <img className='catImgSize' src={'/images/thinkMom.jpg'} alt="profile"/><br/><br/>
            <div>이 행동은 번팅이라 하며 애정과 존경의 존재에게만 하는 특별한 행동이에요.</div>
            <div>자신의 몸에 있는 페로몬을 묻히는 것이죠</div><br/>
            <h3>6. 등, 어깨, 무릎 등에 올라가려고 한다. </h3><br/>
            <img className='catImgSize' src={'/images/thinkMom2.jpg'} alt="profile"/><br/><br/>
            <div>고양이가 응석을 부릴때 하는 행동으로 엄마라고 생각하는 대상에게 해요.</div>
            <div>집사를 믿고 신뢰하기 때문에 할 수 있는 행동이에요.</div><br/>
            <h3>7. 집사의 신체를 핥는다.</h3>
            <div>아기 고양이가 어미 고양이를 핥는 것과 비슷한 행동이죠</div><br/>
            <h3>8. 부르면 대답하거나 뛰어온다. </h3>
            <div>야생에서 어미 고양이의 말을 안듣거나 불음에 달려가지 않으면 위험한 상황에 빠질 수 있죠</div>
            <div>이를 본능적으로 알고 하는 행동이에요.</div><br/>
            <h3>9. 무서울 때 집사 뒤에 숨는다.</h3>
            <div>낯선 환경에 오거나 무서운 상황에 처했을 때 집사의 뒤에 숨는다면 엄마로 생각하고 있는거에요.</div>
            <div>스스로 도망가서 숨지 않아도 집사가 자신을 지켜줄거라는 강한 믿음이 있는거죠</div>
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