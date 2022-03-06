import styled from 'styled-components'
import Footer from '../../../components/Footer'
import { useRef } from 'react';
import { useRouter } from 'next/router'
import ShareButton from '../../../components/ShareButtton'

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
  /* text-align: center; */
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
const Before = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 16px;
  border: 0;
  background-color: white;
  .beforeImgSize {
    height: 35px;
    width: 35px;
  }
  position: absolute; //하단에 메뉴 고정
  bottom: 80px;
  left: 18px;
`;

const Herpes = () => {
  const TemplateComponent = useRef(null)
  const handleClick = () => {
    console.log(TemplateComponent.current.scrollTo(0,0)) //맨 위로 올리는 역할
    console.log(TemplateComponent.current)
  }

  const router = useRouter() //이전 버튼

  return (
    <Page>
      <PageInner>
        <Template ref={TemplateComponent}>
          <HeadBlock>
            <h1>고양이 감기 허피스<br/>(헤르페스)</h1>
          </HeadBlock>
          <Intro>
            <div>흔히 '고양이 감기' 라 불리는 허피스는 사람의 감기와 증상이 비슷하지만 임신한 엄마 고양이가 감염되면 새끼를 잃을 수도 있는 무서운 바이러스 입니다. </div>
            <div>또한 다묘 가정의 경우 전염성이 매우 강하기 때문에 주의해야합니다.</div><br/>
            <h3>1. 감염 원인</h3>
            <div>허피스는 감염된 고양이의 콧물, 침 등 분비물 접촉을 통해 전파됩니다. 직접 만지거나 닿지 않아도 감염된 고양이가 마신 물, 식기를 통해 감염도 가능합니다.</div><br/>
            <h3>2. 감염 증상</h3>
            <div>고양이 감기라 불리는 만큼 사람의 감기와 증상이 매우 비슷합니다.</div><br/>
            <img className='catImgSize' src={'/images/herpes.jpg'} alt="profile"/><br/><br/>
            <div>✅ 콧물</div>
            <div>✅ 재채기</div>
            <div>✅ 눈꼽, 눈물, 눈 충혈, 눈을 제대로 뜨지 못함</div>
            <div>✅ 열 (정상 체온 : 37.5 ~ 38.5)</div>
            <div>✅ 식욕 감소</div>
            <div>✅ 거친 숨소리</div>
            <div>✅ 입 안 궤양</div>
            <div>✅ 설사, 구토</div><br/>
            <h3>3. 치료 방법</h3>
            <div>허피스 바이러스는 한 번 감염이 되면 완치가 불가능합니다. 치료를 통해 증상을 완화시키는 것일 뿐 언제든지 재발할 수 있어요. </div><br/>
            <div>병원에 방문하시면 고양이의 증상에 따라 치료 방법이 달라집니다.</div>
            <div>가벼운 결막염, 비염 증상이라면 안약과 항생제를 처방해주며 탈수 증상이 나타난다면 수액도 처방해줍니다.</div>
            <div>증상에 따라 다르지만 보통 1~3주 동안 회복기를 가집니다.</div><br/>
            <h3>3. 예방법</h3>
            <div>감염 증상을 약화시키기 위해서는 백신 예방접종이 필수입니다! 생후 9주, 12주에 1회씩 접종하는 것이 일반적입니다.</div>
            <div>추가적으로 허피스에 감염된 적이 있어도 예방접종은 필수입니다. </div><br/>
            <UpButton onClick={handleClick}>
              <img className='upImgSize' src={'/images/chevrons-up.svg'} alt="profile" />
            </UpButton>
            <ShareButton/>
            <Before onClick={() => router.back()}>
              <img className='beforeImgSize' src={'/images/chevron-left.svg'} alt="profile" />
            </Before>
          </Intro>
        </Template>
        <Footer/>
      </PageInner>
    </Page>
  )
}
export default Herpes