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
            <h1>고양이에게 좋은 사료란?</h1>
          </HeadBlock>
          <Intro>
            <div>고양이는 평생 사료를 먹고 살아요. 그만큼 중요한 부분인데요.</div>
            <div>수 많은 사료 중 어떤 사료를 고르면 좋을지 선택 기준에 대해 알려드릴게요!</div><br/>
            <h3>1. 좋은 사료의 기준</h3>
            <div>✅ 기호성 </div><br/>
            <div>아무리 영양이 좋아도 맛없어서 먹지 않으면 아무 소용이 없겠죠?ㅎㅎ</div><br/>
            <div>✅ 영양학적 밸런스가 좋은 사료 </div><br/>
            <div>단백질이 풍부하고, 필수 아미노산, 필수 지방산이 충분히 들어간 사료가 좋아요.</div><br/>
            <div>✅ 소화 흡수율이 좋은 사료</div><br/>
            <div>사료 안에 들어가 있는 영양소가 잘 흡수돼야 해요.</div>
            <div>이를 집에서 확인 하는 방법은 사료를 먹고 화장실을 갔을 때 잘 살펴보시는 거예요. </div>
            <div>대변이 질지 않고 적당한 경도의 작은 대변이라면 소화 흡수율이 좋은거예요. </div><br/>
            <div>✅ 안전한 원료를 사용</div><br/>
            <img className='catImgSize' src={'/images/chooseFood.jpg'} alt="profile"/><br/><br/>
            <h3>2. 참고</h3>
            <div>사실 소비자 입장에서는 어떤 원료가 어떤 형태로 들어가있는지 모르기 때문에 판단이 힘들어요.</div>
            <div>그래서 사료를 고를 때 큰 비중을 두지 않아도 되는 키워드를 준비했어요.</div><br/>
            <div>✅ 유기농</div>
            <div>✅ 그레인프리</div>
            <div>✅ Non-GMO</div>
            <div>✅ 야채 사료</div>
            <div>✅ 과일 함유 사료</div>
            <div>✅ 채식 사료</div><br/>
            <div>위의 키워드가 적힌 사료는 고양이게 도움이 되지 않는다고 생각하셔도 돼요.</div>
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