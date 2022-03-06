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


const Health = () => {
  return (
    <>
      <Content>
        <img className='imgsize' src={'/images/정보1.png'} alt="profile"/>
        <div className='font'> 고양이 감기 <br/> 허피스(헤르페스) </div>
        <Link href={"/detail/health/herpes"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat1.png'} alt="profile"/>
        <div className='font'> 고양이 코로나 바이러스<br/> 복막염 </div>
        <Link href={"/detail/health/peritonitis"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat2.png'} alt="profile"/>
        <div className='font'>범백혈구 감소증</div>
        <Link href={"/detail/health/panleukopenia"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat3.png'} alt="profile"/>
        <div className='font'>고양이 방광염</div>
        <Link href={"/detail/health/cystitis"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat10.png'} alt="profile"/>
        <div className='font'>고양이 심장에 사는<br/> 심상사상충</div>
        <Link href={"/detail/health/heartworm"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat11.png'} alt="profile"/>
        <div className='font'>고양이 피부병</div>
        <Link href={"/detail/health/skinDisease"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>
      <Content>
        <img className='imgsize' src={'/images/cat12.png'} alt="profile"/>
        <div className='font'>고양이 턱드름</div>
        <Link href={"/detail/health/blackhead"+setting.extention}>
          <ReadButton>읽어 보기</ReadButton>
        </Link>
      </Content>

    </>
  )
}
export default Health
