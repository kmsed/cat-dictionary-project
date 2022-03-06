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
            <h1>고양이 필수품 스크래쳐</h1>
          </HeadBlock>
          <Intro>
            <div>고양이가 어딘가를 긁고 발톱을 갉는 행동을 하는건 본능이며 매우 좋아하는 행동이에요~!</div>
            <div>그래서 고양이를 키우는 집사라면 필수로 구매해야해요.</div><br/>
            <h3>1. 스크래칭을 하는 이유</h3>
            <div>✅ 영역을 표시하기 위해</div>
            <div>✅ 스트레스를 풀기 위해</div>
            <div>✅ 오래된 발톱을 제거하기 위해</div>
            <div>✅ 놀기 전 준비운동</div><br/>
            <h3>2. 스크래쳐 종류</h3>
            <div>✅ 평판형 스크래쳐</div><br/>
            <img className='catImgSize' src={'/images/scratcher.jpg'} alt="profile"/><br/><br/>
            <div>가장 기본적인 모양으로 바닥에 평평하게 놓인 형태의 스크래쳐예요.</div><br/>
            <div>✅ 물결형 스크래쳐</div>
            <img className='catImgSize' src={'/images/scratcher2.jpg'} alt="profile"/><br/><br/>
            <div>구불구불한 웨이브 모양이 들어가 있어요. </div><br/>
            <div>✅ 쇼파형 스크래쳐</div><br/>
            <img className='catImgSize' src={'/images/scratcher3.jpg'} alt="profile"/><br/><br/>
            <div>쇼파 모양으로 중간중간 편하게 쉴 수 있는 공간이 되어줘요.</div><br/>
            <div>✅ 박스형 스크래쳐</div><br/>
            <img className='catImgSize' src={'/images/scratcher4.jpg'} alt="profile"/><br/><br/>
            <div>고양이가 사방이 막혀있는 박스를 좋아한다는건 아주 유명하죠?</div>
            <div>박스형은 안에서 휴식을 취하고 잠을 잘수도 있어요.</div>
            <div>스크래칭을 하다보면 종이 가루가 생기는데 바깥으로 나올일이 없다는 장점도 있어요.</div><br/>
            <div>✅ 스탠드형 스크래쳐</div>
            <img className='catImgSize' src={'/images/scratcher5.jpg'} alt="profile"/><br/><br/>
            <div>종종 집사의 다리를 타고 오르는 아이들이 있는데 그럴때 스탠드형을 두면 도움이 돼요.</div>
            <div>소파, 커튼 등 고양이가 자주가는 공간에 두면 돼요.</div><br/>
            <div>✅ 원형 스크래쳐</div>
            <img className='catImgSize' src={'/images/scratcher6.jpg'} alt="profile"/><br/><br/>
            <div>몸을 동그랗게 마는 것을 좋아하는 고양이에게 딱이겠죠?</div><br/>
            <div>각자의 상황과 취향에 맞는 스크래쳐를 구매하시고 아이들에게 행복감을 줍시다~</div>
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