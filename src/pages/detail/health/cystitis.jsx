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
            <h1>고양이 방광염</h1>
          </HeadBlock>
          <Intro>
            <div>고양이들이 방광염에 걸리면 너무 고통받고 계속 재발하기 때문에 질병에 대해 미리 알아두셔야 합니다! </div><br/>
            <h3>1. 방광염의 종류</h3>
            <div>✅ 원인을 알 수 있는 방광염</div>
            <div>- 결석이 있는 경우</div>
            <div>- 종양</div>
            <div>- 세균 감염</div><br/>
            <div>✅ 원인을 알 수 없는 방광염 (특발성 방광염)</div>
            <div>검사를 해도 원인은 없는데 방광에 염증이 있는 경우이다.</div>
            <div>다수의 고양이가 이 경우에 속한다.</div><br/>
            <h3>2. 감염 증상</h3><br/>
            <img className='catImgSize' src={'/images/cystitis.jpg'} alt="profile"/><br/><br/>
            <div>✅ 적은 양으로 잦은 소변보기 시작</div><br/>
            <div>염증이 생기면 통증이 생겨서 방광이 부풀지 못한다.</div>
            <div>그래서 방광에 조금만 오줌이 생겨도 화장실에 가게됩니다.</div>
            <div>또는 화장실이 아닌 곳에 조금씩 소변을 누기도 합니다.</div><br/>
            <div>수컷의 경우 생식기에 염증 물질이 끼게되고 그 곳에 자극이 있다보니 계속 핥아서 빨갛게 부풀거나 혈뇨를 보는 경우도 생깁니다.</div><br/>
            <div>✅ 화장실은 갔지만 소변이 없기 시작</div><br/>
            <div>앞서 말한 증상은 초기 증상이며 이는 더욱 심해진 단계입니다. </div>
            <div>이때부터는 폐쇄성 방광염 이라 부르며 신장까지 위험해질 수 있습니다.</div><br/>
            <div>폐쇄형이 잦은 수컷 고양이의 경우 생식기 끝을 절제하는 수술을 감행하게 됩니다.</div>
            <div>암컷의 생식기처럼 만들게 되면 요도가 막히는 응급상황은 감소합니다.</div>
            <div>이런 상태가 되기 전에 관리해주는 것이 좋겟죠?</div><br/>
            <h3>3. 병원 내원시 받는 검사</h3>
            <div>✅ X-ray 검사</div>
            <div>방광 크기가 괜찮은지, 방광 내에 결석이 있는지 확인하기 위한 검사</div><br/>
            <div>✅ 초음파 검사</div>
            <div>방광 내부가 얼마나 부어있느지, 찌꺼기가 있는지 확인하기 위한 검사</div><br/>
            <div>✅ 소변 검사</div>
            <div>세균이 있는지 확인하기 위한 검사</div><br/>
            <div>✅ 혈액 검사 (상황에 따라)</div><br/>
            <h3>4. 홈케어 방법</h3>
            <div>✅ 음수량 늘리기</div>
            <div>✅ 처방식 사료 급여</div><br/>
            <h3>5. 특발성 방광염의 원인</h3>
            <div>✅ 스트레스</div>
            <div>고양이가 방광염에 걸리는 원인은 스트레스가 대표적이다.</div>
            <div>스트레스를 많이 받는 시기는 환절기 입니다. </div>
            <div>계절이 변함에 따라 새로운 환경에 적응하기 위한 스트레스가 생기며 이때 많이 발병합니다.</div><br/>
            <div>두번쨰는 명절 시즌 입니다.</div>
            <div>보호자가 집을 비우는 상황이 발생하며 고양이의 생활패턴이 깨지고</div>
            <div>미흡한 화장실 관리로 인해 스트레스가 발생합니다.</div><br/>
            <div>이외에도 수직공간(캣타워) 부족, 창밖을 볼 수 있는 시간 부족이 있습니다.</div>
            <div>결국 보호자의 환경 관리와 규칙적인 생활이 최고의 예방법 입니다!</div>
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