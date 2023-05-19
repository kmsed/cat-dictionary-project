import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
// import cat from '../../public/images/cat1.png'

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
  background-color: #F2F2F2;
  margin-bottom: 100px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  background-color: white;
  .userFont {
    font-weight: bold;
    padding: 10px;
  }
  .chatFont {
    padding: 0 10px 10px 10px;
    text-align: justify;
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

const Input = styled.div`
  position: absolute; //하단에 메뉴 고정
  bottom: 80px; // 높이는 고정하고 가운데 정렬
  left: 50%;
  transform: translate(-50%, 0%);
`;

const InputInner = styled.input`
  background: #e0ecf5;
  padding: 3px;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  /* font-size: 18px; */
`;

const Submit = styled.input`
  background: #D3E3FE;
  border: none;
  border-radius: 10px;
  padding: 4px;
  color: #818384; //글씨 색
  &:hover {
    background: #A5C5F5;
  }
}
`;
//#C7D6E2, #8BA1BC / #C7D6E2, #e0ecf5  #C7D6E2;

const DeleteButton = styled.div`
  display: inline-block;
  margin-left: 90%;
  .deleteImg {
      cursor: pointer;
      height: 30px;
  }
`;

const chat = () => {
  const TemplateComponent = useRef(null)
  const handleClick = () => {
    console.log(TemplateComponent.current.scrollTo(0,0)) //맨 위로 올리는 역할
    console.log(TemplateComponent.current)
  }

  const [data, setData] = useState(null)
  // console.log(data?.data?.[0]?.chat)
  data?.data.reverse() //배열 역순으로 바꾸기(최근 채팅이 맨 밑에 가도록)
  // console.log(data?.data)

  // console.log(JSON.stringify(data))
  // console.log(data?.data)
  const getData = async () => {
    const response = await axios.get('https://yl10u5ucfh.execute-api.ap-northeast-2.amazonaws.com/')
    // setData(response?.data.reverse())
    setData(response)
    // console.log(response?.data[0].idx)
  }

  useEffect(() => {
    const refresh = setInterval(() => {
      getData()
    }, 5000);//5초마다 부르기
    return () => clearInterval(refresh)
  },[])

  const eventSubmit= (e) => {
    e.preventDefault()
    const submit = async () => {
      const request = await axios.post('https://yl10u5ucfh.execute-api.ap-northeast-2.amazonaws.com/',
      {
        chat: e.target.chat.value,
        user: e.target.nickName.value
      })
      console.log(request)
      console.log(e.target.chat)
    }
    submit()
  }

  const removeChat = (idx) => { //삭제 api
      console.log(idx)
      const remove = async () => {
        const request = await axios.delete('https://yl10u5ucfh.execute-api.ap-northeast-2.amazonaws.com/',
        {
          data: {
            idx: idx
          }
        })
        console.log(request)
    }
    remove()
  }

  return (
    <Page>
      <PageInner>
        <Template ref={TemplateComponent}>
          <HeadBlock>
            <h1>자유 수다방</h1>
          </HeadBlock>
          <Intro>
            {data === null ? (<p>입력중</p>) :'' }
            { data?.data.map((data) =>
              <Contents key={data.idx}>
                <div className='userFont'>{data.user}</div>
                <div className='chatFont'>{data.chat}</div>
                <DeleteButton onClick={() => removeChat(data.idx)}>
                  <img className='deleteImg' src={'/images/bin.svg'} alt="profile"/>
                </DeleteButton>
              </Contents>
            )}

            <Input>
              {/* <Tool> */}
                <form onSubmit={eventSubmit}>
                  <InputInner className='inputStyle' id='nickName' name='nickName' type='string' placeholder=' 닉네임을 입력해주세요 ' />
                  <InputInner id='chat' name='caht' type='string' placeholder=' 내용을 입력해주세요 ' /><br/>
                  <Submit type='submit' value='등록하기' />
                </form>
              {/* </Tool> */}
            </Input>
            <UpButton onClick={handleClick}>
              <img className='upImgSize' src={'/images/chevrons-up.svg'} alt="profile" />
            </UpButton>
          </Intro>
        </Template>
        <Footer/>
      </PageInner>
    </Page>
  )
}
export default chat