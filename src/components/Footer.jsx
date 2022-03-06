import styled from 'styled-components'
import Link from 'next/link'
import setting from '../utils/setting'

const FooterInner = styled.div`
  padding: 20px ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: #D9E8F5;
  .menu {
      cursor: pointer;
      height: 30px;
      width: 70px;
  }
  height: 30px;
  /* position: fixed; //하단에 메뉴 고정
  bottom: 0;
  left: 0;
  right: 0; */
  /* left: 100%; */
  /* right: 100%; */
`;

const Footer = () => {
  return (
    <FooterInner>
      <Link id='Hello' href="/">
        <a>
            <img className='menu' src={'/images/home-alt2.svg'} alt="profile"/>
        </a>
      </Link>
      <Link href={`/book${setting.extention}`}>
        <a>
            <img className='menu' src={'/images/book-opened.svg'} alt="profile" />
        </a>
      </Link>
      <Link href={"/chat"+setting.extention}>
        <a>
            <img className='menu' src={'/images/chat.svg'} alt="profile"/>
        </a>
      </Link>
    </FooterInner>
  )
}

export default Footer
