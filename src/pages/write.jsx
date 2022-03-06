import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../components/Footer'

// import s from '../../public/images/chat.svg'

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
  text-align: center;
  flex: 1; // footer가 차지하는 부분을 뺸 나머지 부분을 차지하게 된다.
  overflow-y: scroll;
  overflow-x: hidden; //x축 스크롤
`;

const HeadBlock = styled.div`
  padding: 40px;
  background-color: #D9E8F5;
`;

const Intro = styled.div`
  height: auto;
  /* margin-top: 60px; */
`;

const RegisterButton = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  background-color: aliceblue;
  cursor: pointer;
  &:focus {
    background-color: #A5C5F5;;
  }
  bottom: 65px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  /* background-color: pink; */
  #nickname {
    width:100%;
    height:80px;
    /* font-size:px; */
    border:none;
    outline:none; //클릭 시 테두리 없애기
  }
  #content {
    width:100%;
    height:200px;
    border:none;
    outline:none;
  }
`;

const write = () => {
  return (
    <Page>
      <PageInner>
        <Template>
          <HeadBlock>
            <h1>자유 수다방</h1>
          </HeadBlock>
          <Intro>
            <Content>
              <input id='nickname' name='author' type='string' placeholder=' 닉네임을 입력해주세요 '  />
              <input id='content' name='contents' type='string' placeholder=' 내용을 입력해주세요 '  />
            </Content>
            <RegisterButton type='submit'>등록 하기</RegisterButton>
          </Intro>
        </Template>
        <Footer />
      </PageInner>
    </Page>

    )
}
export default write