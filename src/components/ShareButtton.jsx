import styled from 'styled-components'

const ShareButton = styled.div`
  width: 35px;
  height: 35px;
  /* border-radius: 16px; */
  border: 0;
  /* background-color: white; */
  .kakaoImgSize {
    height: 38x;
    width: 38px;
  }
  position: absolute; //하단에 메뉴 고정
  bottom: 130px;
  right: 20px;
`;

const Share = () => {
  const onClick = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    });
  };
  return (
        <>
          <ShareButton onClick={onClick}>
            <img className='kakaoImgSize' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F99F7DC3359E9878E0F6A7F"/>
          </ShareButton>
        </>
    )
}
//src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"

export default Share