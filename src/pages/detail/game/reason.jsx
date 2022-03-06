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
            <h1>사냥놀이가 필수인 이유</h1>
          </HeadBlock>
          <Intro>
            <div>실내에서 생활하는 고양이는 먹이를 사냥하지 않고도 넘치는 에너지원을 공급받게 되는데요</div>
            <div>운동을 하지 않으면 비만을 예방할 수가 없어요.</div><br/>
            <div>그래서 사냥 놀이를 통한 고양이와 놀아주기는 비만을 예방하고 활력을 증강 시키며 집사와의 유대감도 높일 수 있기에 중요하죠!</div><br/>
            <h3>1. 어린 고양이의 경우</h3><br/>
            <img className='catImgSize' src={'/images/reason.jpg'} alt="profile"/><br/><br/>
            <div>특히 어린 고양이를 한마리만 키울 경우 고양이는 놀이를 전적으로 집사에게만 의지할 수 밖에 없어요.</div>
            <div>이때에는 집사가 진지하게 놀이에 임하여 자주 놀아주는 것이 특히 중요해요!.</div><br/>
            <div>우리가 보기에 어린 고양이의 사냥놀이는 우습고 귀엽게만 보일지 몰라도 그 아이에게는 실제로 동작 하나하나가 진지해요.</div><br/>
            <div>점프하는 법, 뛰는 법, 걷는 법 등을 놀이를 통해 조율하는 방법을 익히게 되며 냥냥펀치와 깨무는 것을 하면서 사냥에 필요한 감각들을 스스로 익혀 나가게 돼요.</div><br/>
            <div> 또한 놀아주실 때에는 반드시 낚싯대, 오뎅꼬치 같은 도구를 사용하여 놀아주셔야 해요.</div>
            <div> 손이나 발로 놀아주시는 것은 절대 안돼요.</div><br/>
            <div>아이를 놀아주는 방법은 다른 글을 참고해주세요!</div>
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