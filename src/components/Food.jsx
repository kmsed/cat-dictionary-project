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
const Food = () => {
  return (
    <>
      <Content>
        <img className='imgsize' src={'/images/cat13.png'} alt="profile"/>
        <div className='font'>고양이는 하루에 몇끼 먹을까?</div>
        <Link href={"/detail/food/number"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat14.png'} alt="profile"/>
        <div className='font'>고양이 먹이 건사료와 습사료</div>
        <Link href={"/detail/food/foodType"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat6.png'} alt="profile"/>
        <div className='font'>고양이에게 좋은 사료란?</div>
        <Link href={"/detail/food/chooseFood"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
    </>
  )
}
export default Food
//간식 종류, 