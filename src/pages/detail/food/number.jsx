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
            <h1>고양이는 하루에 몇끼 먹을까?</h1>
          </HeadBlock>
          <Intro>
            <div>원래 고양이는 야생에서 먹이를 잡아먹다 보니 칼로리가 높지 않아 8~10끼를 먹는다해요.</div>
            <div>여러번 자주 먹는 습성을 생각해보면 자율급식이 좋을 것 같다는 생각이 들어요.</div><br/>
            <div>하지만 무제한 급식을 하게되면 비만묘가 되기 쉽고 활동량을 채우지 못해 문제행동을 하기도 해요.</div>
            <div>공복감을 느낄 시간이 없기 때문에 무기력감을 느낄 수 있어요.</div><br/>
            <h3>1. 제한 급식</h3>
            <div>성묘 기준으로 하루에 두끼가 적당해요.</div>
            <div>여기에 추가로 사냥본능을 해결할 수 있는 식이방법도 필요해요.</div><br/>
            <div>+ 고양이는 보통 12시간 이상 공복상태가 유지되면 속쓰림, 공복 구토를 할 수 있어요.</div><br/>
            <img className='catImgSize' src={'/images/number.jpg'} alt="profile"/><br/><br/>
            <h3>2. 자세한 예시</h3>
            <div>- 고양이를 한마리만 키우는 경우</div>
            <div>✅ 아침 7시 : 습식캔 반절 급여 </div>
            <div>✅ 아침 8시 : 건사료 조금 급여</div><br/>
            <div>총 칼로리로 보면 한끼를 준 것과 마찬가지예요.</div>
            <div>두번에 나눠서 주는 이유는 밤새 배고픔으로 인해서 급하게 먹게되면 사료토를 하는 경우가 생겨요.</div><br/>
            <div>✅ 건사료와 간식을 집안 곳곳에 숨겨놓고 외출하기</div><br/>
            <div>이것이 사냥본등을 해결하는 식이방법이에요~! </div><br/>
            <div>✅ 저녁 7시 : 아침에 주고 남은 습식캔 반절 급여</div>
            <div>✅ 저녁 9~10시 : 건사료 급여</div>
            <div>✅ 사냥놀이 후 간식 급여</div>
            <div>✅ 취침 전 간식 숨겨두고 취침</div><br/>
            <div>만약 보호자의 출퇴근이 일정하지 않다면 자율급식기로 정해진 시간에 급여하시면 돼요!</div><br/>
            <div>- 다묘가정의 경우</div>
            <div>다묘가정에서는 집안에 간식을 숨겨놓아도 누가 얼마나 먹는지 파악하기가 어려워요.</div>
            <div>보호자가 각자의 것을 먹도록 감시하거나 소량을 숨겨주세요.</div>
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