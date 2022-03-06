import styled from 'styled-components'
import Link from 'next/link'
import setting from '../utils/setting'

const Content = styled.div`
  width: 100%;
  height: 100px; // 이렇게 해두되나
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; // 1:2:! 비율
  align-items: center;
  .imgsize {
    width: auto;
    height: 100px;
    display: block; //이미지 가운데 정렬
    margin: 0px auto //이미지 가운데 정렬
  }
  margin-top: 25px;
  .font {
    font-size: 15px; // 기본 div가 15인거
  }
`;

const ReadButton = styled.button`
  width: 80px;
  height: 20px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  /* margin-left: 5px; */
`;
const Action = () => {
  return (
    <>
      <Content>
        <img className='imgsize' src={'/images/cat16.png'} alt="profile"/>
        <div className='font'>우리집 고양이는<br/> 행복한가?</div>
        <Link href={"/detail/action/happy"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat17.png'} alt="profile"/>
        <div className='font'>우리집 고양이는<br/> 불행할까?</div>
        <Link href={"/detail/action/unhappy"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat18.png'} alt="profile"/>
        <div className='font'>우리집 고양이는<br/> 나를 엄마로 생각할까?</div>
        <Link href={"/detail/action/thinkMom"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
    </>
  )
}
export default Action
// , 소리 별 의미,
// 밥먹고 모으는 행동 . 물마시기전에 긁는 행동,