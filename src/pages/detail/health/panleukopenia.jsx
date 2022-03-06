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
            <h1>범백혈구 감소증</h1>
          </HeadBlock>
          <Intro>
            <div>범백혈구 감소증은 백혈구를 감소시키는 질병으로 바이러스성 전염병 입니다.</div>
            <div>이는 어려서 면역력이 약하거나 백신을 맞지 못한 고양이에게 취약한편이며 치사율이 50 ~ 90%인 굉장히 위험한 질병입니다.</div><br/>
            <h3>1. 감염 원인</h3>
            <div>범백에 걸린 고양이와 직접 접촉을 통해 감염되는것이 일반적이지만 </div>
            <div>이 바이러스는 공기중에 오래 살아남으며 알코올로 소독이 되지 않아 전염 위험도가 높은편 입니다. </div><br/>
            <h3>2. 감염 증상</h3><br/>
            <img className='catImgSize' src={'/images/panleukopenia.jpg'} alt="profile"/><br/><br/>
            <div>✅ 기력 저하, 식욕 저하</div><br/>
            <div>범백은 소화기능에 문제를 일으키기 때문에 기운이 없어지며 밥을 안먹게 됩니다.</div><br/>
            <div>✅ 구토, 설사</div><br/>
            <div>✅ 유산, 사산, 기형아 출산</div><br/>
            <div>범백혈구 감소증에 걸린 어미 고양이에게서 태어난 새끼 고양이는 뇌의 저형성증으로 다양한 후유증을 가질 수 있습니다.</div>
            <div>경련, 진전 등의 신경 증상을 보일 수 있습니다.</div><br/>
            <h3>3. 진단 방법</h3>
            <div>요즘에는 범백혈구 감소증 키트를 통해 쉽고 간단하게 진단할 수 있습니다.</div>
            <div>키트를 통해 음성 양성을 판단하게 되며 확진이 된 이후에는 혈액검사, 엑스레이 검사를 통해서 합병증은 없는지 백혈구 감소가 얼마나 진행되었는지 판단합니다.</div><br/>
            <h3>4. 치료 방법</h3>
            <div>보통의 바이러스 질병과 동일하게 바이러스를 직접 죽이는 치료는 거의 불가능합니다.</div>
            <div>그래서 보존적 치료를 많이 하게 됩니다. 고양이의 부족한 면역력을 높일 수 있는 약물을 처방하거나 당이나 전해질, 수분을 공급해주는 수액을 처방합니다.</div>
            <div>증상이 개선된 후에도 몇 주 동안에는 바이러스를 계속 배설하기 때문에 다묘 가정에서는 소독에 신경 쓰고 예방 접종을 완료 했는지 확인하셔야 합니다.</div>
            <div>특히 바이러스가 변에서 가장 많이 나오기 때문에 화장실 청결에 유의하셔야 합니다.</div><br/>
            <h3>3. 예방법</h3>
            <div>범백을 예방할 수 있는 최선의 방법은 백신입니다.</div>
            <div>어릴때 맞추는 종합백신에 범백바이러스가 포함되어 있기 때문에 종합 백신을 꼭 맞추셔야 합니다.</div>
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