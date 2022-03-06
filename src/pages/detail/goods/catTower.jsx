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
            <h1>캣타워 고르는법!</h1>
          </HeadBlock>
          <Intro>
            <div>실내 생활을 하는 고양이에게는 캣타워가 필수템이죠!</div>
            <div>고양이는 높은 곳에 올라갔을 때 심적안정감을 느끼고</div>
            <div>높은 곳에서 아래를 내려다보며 관찰하는 습성이 있어요.</div>
            <div>그래서 생활공간에서 이런 수직공간은 매우 중요헤요.</div><br/>
            <div></div>
            <h3>1. 캣타워 종류</h3><br/>
            <div>✅ 캣타워</div><br/>
            <img className='catImgSize' src={'/images/catTower.jpg'} alt="profile"/><br/><br/>
            <div>✅ 캣워크</div><br/>
            <img className='catImgSize' src={'/images/catTower2.jpg'} alt="profile"/><br/><br/>
            <div>✅ 캣볼</div><br/>
            <img className='catImgSize' src={'/images/catTower3.jpg'} alt="profile"/><br/><br/>
            <h3>2. 고르는 법</h3>
            <div>✅ 안정성</div><br/>
            <div>캣타워를 고를 때 가장 먼저 봐야하는 부분이 얼마나 튼튼한가 입니다.</div>
            <div>높은 캣타워에 고양이가 올라가거나 내려올때 캣타워가 쓰러지게 된다면 </div>
            <div>다칠 수 있는 상황이 생기겠죠?</div>
            <div>간혹 흔들리는 캣타워가 있는데 올라갔을 때 불안감이 느껴져서 불편함을 느낄거예요.</div>
            <div>그래서 무게감이 어느정도 있고 밑단이 굵은 디자인의 원목캣타워를 추천드려요.</div>
            <div>✅ 고양이 나이</div><br/>
            <div>어린 나이에 너무 큰 캣타워를 사거나 노령묘에게 너무 높은 캣타워를 사주면 안되겠죠</div>
            <div>6개월 미만의 아기 고양이는 점프력이 약하고 착지가 불안정해서 다칠 수 있어요.</div>
            <div>노령묘의 경우에는 노화로 인해 관절이 약해져서 점프를 할때 무리가 갈 수 있어요.</div>
            <div>✅ 고양이 성향</div><br/>
            <div>평소 우리집 고양이가 어떤 종류의 스크래처를 많이 사용하는지 관찰해보시면 좋아요.</div>
            <div>평평한 스크래처를 좋아했는지 수직적인 것을 좋아했는지 취향을 고려해서 구매하시면 돼요.</div><br/>
            <h3>3. 소재 종류</h3>
            <div>✅ 천, 종이, 골판지</div><br/>
            <div>내구성이 조금 떨어지지만 가성비가 좋아요</div><br/>
            <div>✅ 원목</div><br/>
            <h3>4. 캣타워 위치</h3>
            <div>✅ 창문 근처</div><br/>
            <div>고양이는 캣타워 위에서 창밖을 바라보는 걸 즐겨요.</div><br/>
            <div>각자의 환경이나 취향에 맞는 캣타워를 구매하시면 좋을 것 같아요!</div>
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