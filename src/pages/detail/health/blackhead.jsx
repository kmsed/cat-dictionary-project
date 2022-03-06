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
            <h1>고양이 피부병</h1>
          </HeadBlock>
          <Intro>
            <h3>1. 턱드름이란?</h3>
            <div>간단하게 말하자면 고양이의 턱 부분에 나는 여드름 이에요.</div>
            <div>사람코에 생기는 블랙헤드와 비슷하다고 생각하시면 돼요.</div>
            <div>이는 턱 부분에 발달된 피지선 때문에 생기는데 특별히 문제가 되지는 않아요.</div><br/>
            <img className='catImgSize' src={'/images/blackhead.jpg'} alt="profile"/><br/><br/>
            <div>단순히 턱 밑에 까맣게 생겼다고 해서 아이가 아프거나 하진 않아요.</div>
            <div>하지만 관리를 해주지 않으면 고름이 차는 등 심각해질 수 있어요..</div>
            <div>그러니 가벼운 관리를 해주시는게 좋겠죠?</div><br/>
            <h3>2. 관리법</h3>
            <div>✅ 수건에 따듯한 물을 적신다.</div>
            <div>✅ 턱 밑에 수건을 댄다.(30초 정도)</div>
            <div>✅ 처방 받은 소독약으로 닦아준다.</div><br/>
            <div>살살 문질러서 제거하시면 되는데 한번에 다 제거하려고 너무 세게 하시면 안돼요.</div>
            <div>생각보다 피부가 약하기 때문에 더욱 악화될 수 있어요.</div><br/>
            <img className='catImgSize' src={'/images/blackhead2.jpg'} alt="profile"/><br/><br/>
            <div>턱드름이 악화되면 위 사진 처럼 붓고 피나고, 염증이 생길 수 있어요.</div>
            <div>이런 단계가 되면 바로 내원하셔야해요.</div><br/>
            <div>✅ 항생제 처방</div>
            <div>✅ 오염된 털 제모</div>
            <div>✅ 소독, 연고 처방</div><br/>
            <div>이런 단계를 거치며 치료하게 돼요.</div><br/>
            <h3>3. 원인</h3>
            <div>✅ 플라스틱 밥그릇 사용</div><br/>
            <div>플라스틱에서 발생하는 세균으로 인해 턱드름이 생길 수 있어요. </div>
            <div>사기 밥그릇, 유리 밥그릇으로 교체해주시면 좋아요.</div>
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