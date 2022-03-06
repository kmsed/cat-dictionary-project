import styled from 'styled-components'
import Link from 'next/link'
import Health from '../components/Health'
import Food from '../components/Food'
import Toilet from '../components/Toilet'
import Action from '../components/Action'
import Goods from '../components/Goods'
import Game from '../components/Game'
import Guide from '../components/Guide';
import { useRef, useState, useEffect } from 'react';
import setting from '../utils/setting'
import { useRouter } from 'next/router'
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

const Template = styled.div` //Template를 기준으로 스크롤을 변경한다.
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  flex: 1; // footer가 차지하는 부분을 뺸 나머지 부분을 차지하게 된다.
  overflow-y: ${({menu}) => menu !== 'Guide' ? 'scroll' : 'hidden'}; //변수 넣기, 가이드 화면이 아니면 스크롤 생성, 아니면 숨기기
  overflow-x: hidden; //x축 스크롤
`;

const HeadBlock = styled.div`
  padding: 40px;
  background-color: #D9E8F5;
`;

const Intro = styled.div`
  height: auto;
  margin-top: 20px;
  .imgSize {
    width: 100%;
    height: auto;
  }
  .fontSize {
    font-size: 16px;
  }
`;

const Footer = styled.div`
  padding: 20px ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: #D9E8F5;
  height: 30px;
  .menu {
    cursor: pointer;
    height: 30px;
    width: 70px;
  }
`;

const HealthButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  margin-right: 10PX;
  margin-bottom: 10px;
  cursor: pointer;
  &:focus {
    background-color: #A5C5F5;;
  }
`;
const FoodButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  margin-right: 10PX;
  cursor: pointer;
  &:focus {
    background-color: #A5C5F5;;
  }
`;
const ToiletButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  margin-right: 10PX;
  cursor: pointer;
  margin-bottom: 10px;
  &:focus {
    background-color: #A5C5F5;;
  }
`;
const ActionButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  margin-right: 10PX;
  cursor: pointer;
  &:focus {
    background-color: #A5C5F5;;
  }
`;
const GoodsButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  margin-right: 10PX;
  margin-bottom: 10px;
  cursor: pointer;
  &:focus {
    background-color: #A5C5F5;;
  }
`;
const GameButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  cursor: pointer;
  margin-right: 10PX;
  &:focus {
    background-color: #A5C5F5;
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
  right: 17px;
`;

const book = () => {
  const router = useRouter()

  const [menu, setMenu] = useState('Guide')
  const TemplateComponent = useRef(null) //위로버튼

  const components = {
    Guide: <Guide />,
    Health: <Health />,
    Food: <Food />,
    Toilet: <Toilet />,
    Action : <Action />,
    Goods: <Goods />,
    Game: <Game />,
  }

  useEffect(() => {
    if(JSON.stringify(router.query) === '{}') { //객체 판별
      setMenu('Guide')
    }
    else {
      setMenu(router.query.menu)
    }
  },[router.query])

  const handleClick = () => {
    TemplateComponent.current.scrollTo(0,0)//맨 위로 올리는 역할
  }

  const replace = (menu) =>{
    router.replace(`/book${setting.extention}?menu=${menu}`)
  }

  return (
  <Page >
    <PageInner >
      <Template ref={TemplateComponent} menu={menu}>
        {/*  menu={menu} => Template에서 변수로 만들어준 기능을 넣어준다. */}
        <HeadBlock>
          <h1>냥집사를 위하여</h1>
        </HeadBlock>
        <Intro>
          <HealthButton onClick={()=>replace('Health')}>건강 사전</HealthButton>
          <FoodButton onClick={()=> replace('Food')}>먹이 사전</FoodButton>
          <ToiletButton onClick={()=> replace('Toilet')}>화장실 사전</ToiletButton>
          <ActionButton onClick={()=> replace('Action')}>행동 사전</ActionButton>
          <GoodsButton onClick={()=> replace('Goods')}>물품 사전</GoodsButton>
          <GameButton onClick={()=> replace('Game')}>게임 사전</GameButton>
          {components[menu]}
        </Intro>
        {menu !== 'Guide' ? <UpButton onClick={handleClick}>
        <img className='upImgSize' src={'/images/chevrons-up.svg'} alt="profile" />
        </UpButton> : '' }
        {/* menu가 Guide가 아니면 버튼 생성되고 Guide는 안나타나도록 설정 */}
      </Template>


      <Footer>
        <Link id='Hello' href="/">
          <a>
            <img className='menu' src={'/images/home-alt2.svg'} alt="profile"/>
          </a>
        </Link>
        <Link href={"/book"+setting.extention} >
          <a onClick={()=> setMenu('Guide')}>
            <img className='menu' src={'/images/book-opened.svg'} alt="profile" />
          </a>
        </Link>
        <Link href={"/chat"+setting.extention}>
          <a>
            <img className='menu' src={'/images/chat.svg'} alt="profile"/>
          </a>
        </Link>
      </Footer>
    </PageInner>
  </Page>
  )
}
export default book

// menu={menu} -> 스타일 컴포넌트 변수로 만든거 가져오기