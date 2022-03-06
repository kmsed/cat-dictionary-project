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
            <h1>우리집 고양이는<br/> 행복한가?</h1>
          </HeadBlock>
          <Intro>
            <h3>1. 야옹 야옹 울음소리 </h3>
            <div>고양이가 야옹 하고 우는 것은 보호자와 의사소통을 하기 위한 울음소리예요ㅎㅎ</div>
            <div>보호자에게 말을 걸고 싶고 대답하고 싶어하는 행복한 고양이랍니다.</div>
            <div>긍정적인 울음소리로는 골골송, 트럴링 등이 있어요.</div><br/>
            <h3>2. 그루밍을 느긋하게 한다.</h3><br/>
            <img className='catImgSize' src={'/images/happy4.gif'} alt="profile"/><br/><br/>
            <div>고양이는 시도떄도없이, 식사, 간식을 먹고난 뒤 그루밍을 해줘요.</div>
            <div>평소와 같이 몸전체를 느긋하게 그루밍 한다면 행복하다는 증거예요.</div>
            <div>다묘가정에서 서로를 그루밍해주는 알로그루밍을 한다면 서로 친근하고 행복한거랍니다.</div><br/>
            <h3>3. 꼬리의 각도가 높다.</h3><br/>
            <img className='catImgSize' src={'/images/happy2.jpg'} alt="profile"/><br/><br/>
            <div>행복한 고양이들의 꼬리의 각도는 U자형 이거나 90도로 바짝 올라간 모양을 보여요.</div>
            <div>기분이 좋은만큼 코리의 각도가 높아지고 살랑살랑 움직여요.</div>
            <div>탁탁 움지는게 아니라 유연하게 움직여요.</div><br/>
            <h3>4. 집사를 반긴다.</h3>
            <div>보호자가 집에 왔을 때 달려오거나 잠에서 깨서 벌러덩 눕는 아이들이 있죠</div>
            <div>다리사이를 왔다갔다 하며 자신의 냄새를 묻히기고 하고 얼굴을 부딪히기도 해요.</div>
            <div>이 모든게 보호자를 향한 애정표현인데요. 행복하다는 증거예요. </div><br/>
            <h3>5. 새로운 물건에 호기심을 가진다.</h3>
            <div>집안에 새로운 물건을 들이면 달려들어 냄새를 맡고 궁금해해요.</div>
            <div>보호자가 평소에 하지 않는 행동을 할때 지켜보고 호기심을 갖는 것도 포함이겠죠?</div><br/>
            <h3>6. 편안하게 휴식을 즐긴다.</h3>
            <div>집안에서 사람의 발길이 많이 닿는 거실 같은 집의 중앙에서 느긋하게 쉬는 모습을 보인다면 행복하다는 증거예요.</div>
            <div>우리 집안에서 안정감을 느끼고 있다는 증거랍니다.</div><br/>
            <h3>7. 사람의 스킨십을 좋아한다.</h3><br/>
            <img className='catImgSize' src={'/images/happy3.gif'} alt="profile"/><br/><br/>
            <div>보호자의 옆을 피하지 않고 스킨십을 즐긴다면 좋은 유대감을 가지고 있는거예요.</div>
            <div>스킨십을 해주면 골골송과 꾹꾹이를 하기도 해요.</div>
            <div>행복도가 높은 우리집 고양이를 위해 위의 사항들을 체크해보세요!</div>
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