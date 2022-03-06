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
    /* height: 100%; */
    /* object-fit: cover; */

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

const Peritonitis = () => {
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
            <h1>고양이 코로나 바이러스<br/>복막염</h1>
          </HeadBlock>
          <Intro>
            <div>전염성 복막염(FIP)는 코로나 바이러스에 의해서 발병되는 전염병입니다.</div>
            <div>고양이가 코로나 바이러스에 단순 감염 됐다고 해서 복막염 이라는 질환이 발병하는것은 아닙니다.</div>
            <div>고양이에서 장염을 유발하는 장염형 코로나라에 감염이 되면 발생하게 됩니다. </div>
            <div>이는 대부분 설사만 유발하고 큰 위험은 없습니다.</div><br/>
            <div>하지만 돌연변이를 일으키면서 복막염 바이러스로 변하게 됩니다.</div>
            <div>원래 장염을 유발하는 코로나 바이러스는 장에만 존재해야 하는데 돌연변이를 일으키면서 몸 전체에 염증을 유발하며 죽음에 까지 이르게 합니다.</div><br/>
            <h3>1. 감염 원인</h3>
            <div>전염성 복막염은 다른 고양이의 분변, 침 등 채액을 통해 감염됩니다. </div>
            <div>그래서 다묘 가정이나 길냥이 출신인 고양이들이 감염률이 더 높은 편입니다.</div>
            <div>감염률이 높은 경우를 더 말해보자면 수컷 고양이, 4살 이하의 어린 고양이, 10살 이상의 노령 고양이에게 주로 발생합니다.</div><br/>
            <h3>2. 감염 증상</h3>
            <div>✅ 습성 타입 : 식욕부진, 구토, 발열, 기력 소실, 복수가 차며 배가 빵빵해짐</div><br/>
            <img className='catImgSize' src={'/images/peritonitis.jpg'} alt="profile"/><br/><br/>
            <div>갑자기 고양이의 배가 빵빵해졌다면 바로 내원하셔야 합니다. 습성 타입에 감염되면 보통 2주 이내 사망한다고 합니다.</div><br/>
            <div>✅ 건성 타입 : 기력 소실, 몸무게 저하, 발열, 포도막염 </div><br/>
            <div>건성 타입의 경우에는 보호자가 인지하기 어려운 증상들을 보입니다. 단순히 살이 조금 빠지고 밥을 조금 안먹는다 정도로 시작합니다.</div>
            <div>이후 안구 내에 염증이 발생하는 질환인 포도막염이 나타날 수 있습니다. 고양이 눈이 뿌옇고 탁하게 보이게 됩니다.</div>
            <div>건성 타입의 복막염은 병원에서 확실하게 진단을 내리기 어렵기 때문에 더욱 무서운 병입니다.</div>
            <div>감염되다면 보통 8개월 ~ 1년 이후에 사망한다 합니다.</div><br/>
            <h3>3. 치료 방법</h3>
            <div>안타깝게도 현재까지 전염성 복막염은 100%의 치사율이라 알려져있습니다.</div>
            <div>스테로이드 같은 염증을 억제해주는 약물이나 면역을 높일 수 있는 약물을 통해서 보조적인 치료를 위주로 관리를 해줍니다.</div>
            <div>하지만 현재 임상시험 중인 약물이 있으며 긍정적인 결과를 보이고 있습니다.</div>
            <div>조만간 전염성 복막염이 불치병이 아닌 치료 가능한 질환으로 바뀌지 않을까 합니다.</div><br/>
            <h3>3. 예방법</h3>
            <div>고양이 FIP 백신을 맞는것이 좋습니다.</div>
            <div>다른 백신보다는 예방률이 낮기 때문에 논란이 있지만 예방접종을 한 고양이가 발병률이 훨씬 낮아집니다.</div>
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
export default Peritonitis