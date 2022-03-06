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
            <h1>고양이 먹이 건사료와 습사료</h1>
          </HeadBlock>
          <Intro>
            <div>고양이는 사람이 먹는 음식의 대부분은 먹지 못해요.</div>
            <div>그래서 사료 의존도가 높은 편이예요.</div>
            <div>사료만 먹으니 건사료와 습사료의 장단점을 알아야겠죠?</div><br/>
            <h3>1. 건사료</h3><br/>
            <img className='catImgSize' src={'/images/foodType.jpg'} alt="profile"/><br/><br/>
            <div>건사료는 우리에게 익숙한 알갱이 형태의 마른 사료예요.</div><br/>
            <div>- 장점</div>
            <div>✅ 섬유질이 많다.</div>
            <div>✅ 영양학적 발란스가 좋다.</div>
            <div>✅ 씹어먹는 과정에서 턱 근육 발달, 치아 건강에 도움을 준다.</div>
            <div>✅ 보존성이 좋아 장기보관 가능</div>
            <div>✅ 비용이 저렴</div><br/>
            <div>- 단점</div>
            <div>✅ 탄수화물 함량이 높다.</div><br/>
            <div>그래서 건사료를 줄 때 반드시 많은 양의 물과 함께 주는것이 중요해요. </div><br/>
            <h3>2. 습사료</h3><br/>
            <img className='catImgSize' src={'/images/foodType2.png'} alt="profile"/><br/><br/>
            <div>캔, 파우치에 밀폐된 형태예요.</div><br/>
            <div>- 장점</div>
            <div>✅ 성분의 70% 이상이 수분</div>
            <div>✅ 구성물의 대부분이 단백질, 지방으로 탄수화물 함량은 10% 미만</div>
            <div>✅ 항상 촉촉하고 부드러움</div>
            <div>✅ 풍미가 좋아 먹는 즐거움을 줄 수 있다. </div>
            <div>✅ 고양이의 모질과 건강에 기여</div><br/>
            <div>고양이는 체중당 35~45ml 정도의 물을 마셔야해요.</div>
            <div>그래서 물을 잘 먹지 않는 고양이의 경우 습사료를 많이 챙겨주셔야해요.</div><br/>
            <div>매끼니 습사료를 급여하는것이 좋지만 비용이나 관리 측면에서 건사료와 병행하시는게 좋아요.</div>
            <div>건사료 50%, 습사료 50% 비율로 주는것을 권장해요.</div><br/>
            <h3>3. 칼로리 계산</h3>
            <div>습사료와 건사료의 칼로리를 계산할때 양으로 비교하시면 안돼요.</div>
            <div>건사료 칼로리 * 4 = 습사료 칼로리 라고 생각하시면 돼요.</div>
            <div>일반적으로 건사료보다 습사료를 많이 먹은 고양이의 건강상태가 좋다고 해요.</div>
            <div>눈, 피부가 마른느낌이 없고 활동성이 더욱 좋아요!</div>
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