/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import styled from 'styled-components';
import backgroundImage from '../assets/images/trash_cleanup.jpg';

export const MemberHeader = styled.div.attrs({
    className: 'section'
})`

`;

export const Breadcrumb = styled.div.attrs({
    className: 'py-sm-5 py-4'
})`
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.33)), url(${backgroundImage});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media (min-width: 576px) {
        .pb-sm-5, .py-sm-5 {
            padding-botton: 3rem !important;
        }
    };

    @media (min-width: 576px) {
        .pb-sm-5, .py-sm-5 {
            padding-top: 3rem !important;
        }
    };
`;

export const HeaderContainer = styled.div.attrs({
    className: 'container py-lg-3'
})`
    // width: 100%;
    // padding-right: 15px;
    // padding-left: 15px;
    // margin-right: auto;
    // margin-left: auto;
`;

export const HeaderH2 = styled.h2`
    font-size: 45px;
    color: #fff;
    font-weight: 700;
`;

export const HeaderP = styled.p`
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
`;

export const HomeLink = styled.a`
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
`;

/* Events Grid */
export const EventsGridSection = styled.div.attrs({
    className: 'section'
})`
`;

export const EventsGridMain = styled.div`
    padding: 70px 0;
    background: #f6f6f6;
`;

export const EventsGridContainer = styled.div.attrs({
    className: 'container'
})`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    &.@media (min-width: 1200px) {
        .container, .container-sm, .container-md, .container-lg, .container-xl {
            max-width: 1140px;
        }
    }
    @media (min-width: 992px) {
        .container, .container-sm, .container-md, .container-lg {
            max-width: 960px;
        }
    }
    @media (min-width: 768px) {
        .container, .container-sm, .container-md {
            max-width: 720px;
        }
    }
    @media (min-width: 576px) {
        .container, .container-sm {
            max-width: 540px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }
    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }
    }
    @media (min-width: 768px) {
        .container {
            max-width: 720px;
        }
    }
    @media (min-width: 576px) {
        .container {
            max-width: 540px;
        }
    }
`;

export const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    grid-row-gap: 50px;
`;

export const GridItem = styled.div`
    background: #fff;
    padding: 30px 30px;
`;

export const GridItemCard = styled.div`
    position: relative;
    border: none;

    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
`;

export const EventDetailsLink = styled.a`
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
`;

export const EventDetailsLinkSpan = styled.span`
    color: #fff;
    padding: 8px 10px;
    font-size: 23px;
    line-height: 28px;
    display: block;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
`;

export const EventItemImage = styled.img`
    border-radius: 4px;
    max-width: 100%;
    display: block;
`;

export const GridItemColumn2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #203936;
    width: 70px;
    height: 70px;
`;

export const GridItemDateUL = styled.ul.attrs({
    className: 'image-caption'
})`
    margin: 0;
    padding: 0;
`;

export const GridItemDateLI = styled.li`
    list-style: none;
    display: inline-block;
`;

export const EventDetailsLinkLI = styled.a`
    color: #fff;
    padding: 8px 10px;
    font-size: 23px;
    line-height: 28px;
    display: block;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
`;

export const GridItemBody = styled.div`
    padding: 0;
    min-height: 1px;
`;  

export const GridItemCardTitle = styled.h4`
    display: block;
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
    display: inline-block;
    margin: 15px 0 5px;
    color: var(--title-color);
`;

export const GridItemSubBody = styled.div`
`;

export const GridItemSubBodyColumn1 = styled.div`
`;

export const GridItemSubBodyColumn1P = styled.p`
    margin-top: 6px;
    margin-bottom: 20px;
`;

export const GridItemSubBodyColumnLink = styled.a.attrs({
    className: 'btn btn-secondary'
})`
    background-color: #203936;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    transition: 0.3s ease-in;
    border: 0;
`;