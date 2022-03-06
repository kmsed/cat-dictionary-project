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
            <h1>고양이 밥그릇, 물그릇!</h1>
          </HeadBlock>
          <Intro>
            <div>우리 고양이들이 사용하는 식기도 좋을걸 해주고 싶은 집사의 마음을 담아</div>
            <div>고양이 밥그릇 종류에 대해 알려드릴게요!</div><br/>
            <h3>1. 밥그릇 종류</h3>
            <div>✅ 플라스틱 그릇</div><br/>
            <div>플라스틱 재질의 밥그릇은 사용하다 보면 미세한 기스가 생기에 되고 </div>
            <div>그 사이로 세균이 번식되기가 쉬워요.</div>
            <div>이 세균이 아이들의 턱드름을 유발시키고 악화시키는 요인이 돼요.</div><br/>
            <div>✅ 스테인레스 그릇</div>
            <div>✅ 유리, 사기 그릇</div><br/>
            <div>플라스틱 그릇을 제외한 것들 중 우리집 고양이가 선호하는걸로 준비하시면 돼요</div>
            <div>보통 제일 좋아한다고 알려져 있는건 유리, 사기 그릇이긴 해요 ㅎㅎ </div><br/>
            <div>+ 고양이는 수염으로 음식을 찾아내는 역할을 하기 때문에 음식에 수염이 닿지 않도록 넓은 형태의 그릇이면 더욱 좋아요.</div><br/>
            <h3>2. 밥그릇 높이</h3><br/>
            <img className='catImgSize' src={'/images/bowl.jpg'} alt="profile"/><br/><br/>
            <div>✅ 바닥에 가까울 경우</div><br/>
            <div>밥그릇의 높이가 낮은 경우 몸을 웅크리고 사료를 먹게 되는데요.</div>
            <div>이는 목을 자극하고 속을 더부룩하게 만드는 자세예요.</div>
            <div>이런 자세로 먹으로 구토를 하는 아이들도 있답니다.</div><br/>
            <div>✅ 10 ~ 15cm 정도의 높이</div><br/>
            <div>고양이의 키와 밥먹는 자세, 그릇의 깊이에 따라 조금씩 달라지지만 </div>
            <div>평균적으로 10 ~ 15cm 정도 높여주는게 좋아요.</div>
            <div>고양이가 편안해 보이는 자세로 조절해주시면 돼요.</div><br/>
            <h3>3. 밥그릇 위치</h3>
            <div>✅ 화장실과 멀리</div><br/>
            <div>화장실은 모래가 날리고 냄새가 날 수 있어서 멀리 떨어트려주는게 위생적으로 좋아요.</div><br/>
            <div>✅ 밥그릇과 물그릇은 멀리</div><br/>
            <div>고양이의 음수량을 늘리기 위해서는 깨끗한 물을 유지해주는게 좋아요.</div>
            <div>밥그릇과 물그릇이 가까울 경우에는 사료가 물에 빠지거나 흘리는 경우가 발생한답니다.</div><br/>
            <div>집사님들 고양이의 건강한 식습관을 위해서 그릇의 종류도 꼼꼼하게 살피고 위치도 고려하는 모습이 멋져요! 알맞는 식기 찾으세요~!</div>
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