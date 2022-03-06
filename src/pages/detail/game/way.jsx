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
            <h1>사냥놀이 하는 방법</h1>
          </HeadBlock>
          <Intro>
            <div>요즘에는 고양이 혼자 놀 수 있는 장난감도 존재하지만</div>
            <div>고양이랑 함께 놀아주면 보호자와 유대감도 형성되면서 관계가 더 돈독해질 수 있습니다.</div><br/>
            <div>고양이랑 놀이를 하고 싶은데 어떻게 해야 할지 모르겠는 초보 집사님들을 위해 준비해봤습니다.</div><br/>
            <h3>1. 포인트</h3>
            <div>✅ 고양이의 사냥 본능</div><br/>
            <div>고양이와 놀이를 할 때 중요한 포인트는 고양이의 사냥 본능을 충족시켜주는 것인데요.</div>
            <div>고양이는 움직이는 물체를 쫓고 싶어하고 사냥하고 싶어하는 본능이 있습니다.</div><br/>
            <div>✅ 살아 있는 듯한 움직임</div><br/>
            <div>살아있는 듯이 요리조리 변칙적으로 움직여 고양이가 쫓을 수 있게 해주면 훌륭한 놀이가 될 수 있습니다</div><br/>
            <h3>2. 장난감</h3>
            <div>✅ 고양이 낚싯대</div><br/>
            <img className='catImgSize' src={'/images/way.jpg'} alt="profile"/><br/><br/>
            <div>고양이가 물건을 낚을 수 있게 해주세요.</div>
            <div>따로 장난감을 구매하지 않아도 기다란 작대기에 끈을 연결하여 고양이가 점프하면 닿을만한 높이에서 흔들어주세요.</div><br/>
            <div>✅ 빈 욕조에 탁구공</div>
            <div>탁구공 여러 개 넣어주면 이리저리 쫓아가며 신나게 놀 수 있어요.</div><br/>
            <div>✅ 막대기</div>
            <div>이불 아래 무언가 있는 것처럼 이리저리 움직여보세요. 고양이가 눈을 반짝이며 막대기를 쫓아올 거예요.</div><br/>
            <div>✅ 레이저 포인터</div><br/>
            <img className='catImgSize' src={'/images/way2.jpg'} alt="profile"/><br/><br/>
            <div>하지만 잡을 수 없는 허상으로 놀아주는 것은 고양이에게 무력감을 안겨 줄 수도 있다는 견해도 있습니다.</div><br/>
            <div>한 종류의 놀이감으로 놀아주면 쉽게 질려할 수 있어요.</div>
            <div>여러 종류의 사냥감을 준비하시면 아이에게 좋을거예요!</div>
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