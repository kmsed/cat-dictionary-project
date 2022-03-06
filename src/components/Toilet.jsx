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
const Toilet = () => {
  return (
    <>
      <Content>
        <img className='imgsize' src={'/images/cat7.png'} alt="profile"/>
        <div className='font'>고양이 화장실 선택 방법!</div>
        <Link href={"/detail/toilet/chooseToilet"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat15.png'} alt="profile"/>
        <div className='font'>화장실 모래 어떤게 좋을까?</div>
        <Link href={"/detail/toilet/toiletSand"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
    </>
  )
}
export default Toilet