import styled from 'styled-components'
import { useRouter } from 'next/router'

const Before = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 16px;
    border: 0;
    background-color: white;
    .beforeImgSize {
        height: 35px;
        width: 35px;
    }
    position: absolute; //하단에 메뉴 고정
    bottom: 80px;
    left: 18px;
`;

const BeforeButton = () => {
    const router = useRouter() //이전 버튼
    return (
        <Before onClick={() => router.back()}>
            <img className='beforeImgSize' src={'/images/chevron-left.svg'} alt="profile" />
        </Before>
    )
}

export default BeforeButton