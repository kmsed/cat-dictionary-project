import styled from 'styled-components'

const Tool = styled.div`
    /* width: 100%;
    height: auto; */
    margin-top: 50px;
    .img {
        width: 100%;
        height: auto;
    }
`;
// const Set = styled.div`
//     margin-top: 30px;
// `;
const Guide = () => {
    return (
        <>
        <Tool>
            <div>원하는 사전을 선택해 정보를 얻어가세요!</div>
            <img className='img' src={'/images/GuideCat.png'} alt="profile"/>
        </Tool>
        </>
    )
}
export default Guide