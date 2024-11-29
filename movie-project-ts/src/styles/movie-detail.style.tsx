import styled from "styled-components";

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const TopContainer = styled.div`
    color: white;
    height: 300px;
    position: relative;
`;

export const Gradient = styled.div` //그라데이션
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 20px; /* 이미지와 동일하게 테두리를 적용 */
        background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 50%, transparent 70%);
    }
`;

export const InfoWrapper = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 450px;
    height: 100%;
    border-bottom:2px solid white;
    overflow: hidden;
    .tagline {
        font-style: italic;
        font-weight: bold;
        font-size: 20px;
        padding: 15px 0;
    }
`;

export const BackdropPathWrapper = styled.div`
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        // object-fit: cover; /* div 크기에 맞춰 이미지가 꽉 차도록 */
        border-radius: 20px;
    }
     
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PeopleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
`;

export const PeopleWrapper = styled.div`
    display: flex;
    gap: 10px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
`

export const ProfileImgWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1.5px solid white;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지를 div에 딱 맞게 */
    }
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
        font-weight: bold;
        font-size: 13px;
    }
    .role {
        font-size: 11px;
        color: gray;
    }
`;

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export const ReviewWrapper = styled.div`
    display: flex;
    gap: 20px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }

    .author_info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .info_top {
        display: flex;
        gap: 10px;
    }
`