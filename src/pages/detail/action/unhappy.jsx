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
            <h1>우리집 고양이는<br/> 불행한가?</h1>
          </HeadBlock>
          <Intro>
            <h3>1. 계속 잠을 잔다.</h3>
            <div>고양이는 성묘 기준 하루에 2/3을 자요. 굉장히 많이 자는편인데 여기서 더 많이 잔다?! 뭔가 문제가 생긴거예요..</div>
            <div>계속 잔다는 건 깨어있을 이유가 없다는 거고 무기력증에 빠졌다는 증거랍니다.</div>
            <div>일상생활에서 자극요소가 전혀 없다는 거예요.</div>
            <div>혼자 있을 때 혼자 놀수 있는 놀이감이나 간식을 숨겨 놓는 등 보호자의 노력이 필요해요.</div><br/> 
            <h3>2. 비만</h3><br/>
            <img className='catImgSize' src={'/images/unhappy.jpg'} alt="profile"/><br/><br/>
            <div>비만이 된 고양이들은 몸이 무거워지니 사냥놀이를 할 때 불편함을 느끼고 관절에도 무리가 가게돼요.</div>
            <div>살이 찌게 되면 고양이들 체질 자체가 염증이 나오는 상태로 변하게 돼서 특발성 방광염 등에 걸리게 돼요.</div>
            <div>움직이는 것이 피곤하고 힘들게 되면 행복할 이유가 사라지는 거예요.</div>
            <div>식단 조절과 운동을 병행해서 체중 관리를 꼭 해주셔야해요.</div><br/>
            <h3>3. 밤에 우는 고양이</h3>
            <div>특별히 원하는 것이 없음에도 지속적으로 울음소리는 내는건 불행하다는 증거예요.</div>
            <div>야옹 야옹 소리가 아닌 워어어웅 어어웅 등과 같은 소리를 내요.</div>
            <div>에너지를 소비하지 못해서 심심하고 잠은 오지 않을 때의 감정이 불안함으로 변하게 돼요. </div>
            <div>그래서 돌아다니며 울부짖는 모습이 보이면 불안감 때문이예요.</div><br/>
            <h3>4. 화장실 실수</h3>
            <div>스트레스를 받지 않는 고양이라면 정해진 화장실을 사용하는것이 정상적인 행동인데요.</div>
            <div>배변배뇨 실수가 없었던 고양이인데 갑자기 아무데나 실수를 한다면 불행하다는 증거예요.</div>
            <div>화장실 자체가 스트레스거나 불행의 요인이 있다는 거예요.</div>
            <div>집에 외부인이 자주 들어오거나 생활패턴이 깨졌는지 달라진 점이 무엇인지 살펴보셔야 해요.</div><br/> 
            <h3>5. 심인성 탈모</h3><br/>
            <img className='catImgSize' src={'/images/unhappy2.jpg'} alt="profile"/><br/><br/>
            <div>자신의 털을 뜯고 긁어서 원형의 탈모가 생긴다면 불안감으로 인해 자해를 하는거예요.</div>
            <div>특정 부위만 핥는다면 불안감이나 신체의 통증 때문에 그럴 수 있어요. </div>
            <div>이 경우에는 정신적인 요인인지 몸이 아픈게 아닌지 확인히셔야해요.</div><br/> 
            <div>우리집 고양이가 불행한 고양이 특징에 속한다면 보호자가 꼭 돌봐줘야 하는 상태예요. 다시 행복한 고양이가 될 수 있도록 해주세요.!</div>
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