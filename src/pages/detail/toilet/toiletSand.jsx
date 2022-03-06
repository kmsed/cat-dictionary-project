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
            <h1>화장실 모래 어떤게 좋을까?</h1>
          </HeadBlock>
          <Intro>
            <div>좋은 화장실을 선택하셨다면 그에 맞는 모래도 고르면 좋겠죠?</div>
            <div>필수 아이템인 화장실 모래에 대해 알아보세요.</div><br/>
            <h3>1. 모래 종류 </h3>
            <div>✅ 벤토나이트</div>
            <div>✅ 두부 모래</div><br/>
            <h3>2. 벤토나이트 </h3><br/>
            <img className='catImgSize' src={'/images/toiletSand.jpg'} alt="profile"/><br/><br/>
            <div>- 장점</div>
            <div>✅ 소변을 보면 모래가 응고되는 형태예요.</div>
            <div>✅ 일반 모래에 가장 가까운 형태예요.</div>
            <div>✅ 응고력이 좋아요.</div>
            <div>✅ 응고된 부분만 버리는거라 편리해요. </div><br/>
            <div>- 단점</div>
            <div>✅ 먼지가 일어나기 쉬워요.</div>
            <div>✅ 사막화가 잘 일어나요.</div><br/>
            <div></div>
            <h3>3. 두부 모래 </h3><br/>
            <img className='catImgSize' src={'/images/toiletSand2.jpg'} alt="profile"/><br/><br/>
            <div>- 장점</div>
            <div>✅ 벤토나이트 보다 먼지가 덜 나요.</div><br/>
            <div>먼지가 덜 나기 때문에 결막염 같은 안구 문제가 있는 고양이들이 사용하면 좋아요.</div><br/>
            <div>✅ 물에 녹는 재질이라 변기에 버릴 수 있어요.</div>
            <div>✅ 가는 입자, 굵은 입자를 선택할 수 있어요.</div><br/>
            <div>- 단점</div>
            <div>✅ 벤토나이트에 비해 응고력이 약해요 </div>
            <div>✅ 배변을 치울 때 부스러기가 잘 생겨요.</div>
            <div>✅ 습기에 약하고 곰팡이나 악취의 위험이 있어요.</div><br/>
            <div>두 종류의 차이점을 알아도 선택하기 쉽지 않을 수도 있어요.</div>
            <div>참고로 조금 더 보편적이고 많이 사용하는 모래는 벤토나이트예요.</div>
            <div>두 가지 종류 모두 사용해보시고 보호자와 고양이 모두 만족할 수 있는 모래를 찾기 바랄게요!</div>
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