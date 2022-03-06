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
            <h1>고양이 심장에 사는<br/> 심상사상충</h1>
          </HeadBlock>
          <Intro>
            <div>모기의 개체수가 늘어나는 여름이면 더욱 조심해야하는 심장사상충!</div>
            <div>이 질병에 대해 알아봅시다~</div><br/>
            <div></div>
            <h3>1. 심장사상충이란?</h3>
            <div>✅ 기생충</div>
            <div>원래는 개를 숙주로 하는 기생충이 개의 몸에서 성장하면서 유충이 되는데요.</div>
            <div>이 유충을 모기가 흡혈할 경우 모기의 몸에서도 유충이 계속 성장하게 돼요.</div>
            <div>말그대로 유충을 가진 모기가 매개체가 되고 다른 개체에 전염시키는 거에요!</div>
            <div>그러다 보니 모기가 많아지는 여름철에 더욱 신경 써주셔야 해요.</div><br/>
            <img className='catImgSize' src={'/images/heartworm.png'} alt="profile"/><br/><br/><br/>
            <h3>2. 주로 기생하는 부위</h3>
            <div>✅ 심장</div>
            <div>잔인하게도 폐동맥으로 나가는 곳에 기생해요. </div>
            <div>개의 경우에는 성충을 죽이는 약이 존재해요.</div>
            <div>하지만 고양이의 경우에는 성충을 죽여도 내포된 단백질 물질로 인해서 급성호흡기질환이 나타나요. </div>
            <div>결국 치료 자체가 조금 어렵다는 거죠..</div><br/>
            <h3>3. 심상사상충이 의심되는 경우</h3>
            <div>✅ 기침, 호흡곤란</div>
            <div>천식처럼 심하게 기침을 하거나 호흡곤란이 있다면 의심하셔야해요.</div><br/>
            <h3>3. 병원 내원시 받는 검사</h3>
            <div>증상이 의심되면 바로 심상사상충 키트 검사를 진행하게 돼요.</div><br/>
            <div>✅ 확진일 경우 </div>
            <div>- 면역억제제 투여</div>
            <div>- 예방 약을 투여하며 유충이 자라는걸 막아줘요.</div><br/>
            <h3>4. 예방법</h3>
            <div>고양이는 이 병을 완치하기 어렵고 급사할 가능성이 높기때문에 예방이 중요해요.</div><br/>
            <div>✅ 예방약 투여</div>
            <div>심상사상충은 여름뿐 아니라 추운 겨울에도 감염될 경우의 수는 존재해요.</div><br/>
            <div>그러니 매달 한달에 한번 예방약을 투여해야해요.</div>
            <div>목 뒷덜미에 바르면 되는데요. 그 이유는 그루밍으로 인한 섭취를 막기 위해서랍니다~</div><br/>
            <img className='catImgSize' src={'/images/heartworm2.jpg'} alt="profile"/><br/><br/>
            <div>다묘가정의 경우 다른 고양이가 핥으면 어떡하나 걱정이실텐데요.</div>
            <div>소량이니 큰 걱정은 안하셔도 돼요! 하지만 흡수되는 2~3시간 동안은 분리시키는게 좋겠죠? </div>
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