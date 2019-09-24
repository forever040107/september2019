import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const fontColor = '#FFF';

export const GlobalStyle = createGlobalStyle `
	* {
        font-family: 'PingFangSC-Regular', 'Microsoft YaHei', sans-serif;
        box-sizing: border-box;
	}
	body {
		margin: 0; 
		-webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
        background-color: #4ab902;
        border: 0;
		text-align: center;   
	}
	a, button {
		outline: none;
		text-decoration: none;
	}
	.break-on-desktop {
		display: block;
		@media(max-width:767px){
			display: none;
		}
	}
	.break-on-mobile {
		display: none;
		@media(max-width:576px){
			display: block;
		}
	}
`

const sizes = {
  desktop: 1024,
  tablet: 991,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
  return acc;
}, {});

const toVw = w => `${((w / 375) * 100).toFixed(2)}vw`;

export const Wrapper = styled.div`
	background: url('/assets/clf-bg-im.png') no-repeat;
	background-position: top center;
	background-size: 100%;
	padding-top: 26%;
	position: relative;
    ${media.phone`
        background: url('/assets/clf-mobile-bg-small-im@2x.png') no-repeat;
        background-size: 100%;
        padding-top: 165%;
	`}
`;

export const Main = styled.main`
	width: 940px;
	margin: 0 auto;
	text-align: left;
    position: relative;
    ${media.tablet`
        padding: 15px 0;
		width: calc(100% - 30px);
    `}
    ${media.phone`
		width: calc(100% - 20px);
    `}
    h2 {
        display: inline-block;
        position: relative;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: ${fontColor};
        ${media.phone`
            font-size: 15px;
        `}
    }
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    ${media.tablet`
        grid-template-columns: 1fr 1fr;
	`}
`;

export const Section = styled.section`
    padding: 15px 30px;
	width: 100%;
	border-radius: 10px;
    background:  linear-gradient(98deg, #255ef5, #8665fc);
    box-shadow: 0 7px 10px -2px rgba(0, 0, 0, 0.2);
	position: relative;
    font-size: 15px;
    font-weight: bold;
	line-height: 1.5;
    letter-spacing: normal;
    p {
        margin: 10px 0 0;
        color: ${fontColor};
    }
    &:first-child {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    &:nth-child(2) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    &:nth-child(3) {
        grid-row: 1 / 2;
        grid-column: 3 / 6;
    }
    &:nth-child(4) {
        grid-row: 2 / 3;
        grid-column: 1 / 6;
    }
    ${media.tablet`
        padding: 15px;
        &:first-child {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }
        &:nth-child(2) {
            grid-row: 1 / 2;
            grid-column: 2 / 3;
        }
        &:nth-child(3) {
            grid-row: 2 / 3;
            grid-column: 1 / 3;
        }
        &:nth-child(4) {
            grid-row: 3 / 4;
            grid-column: 1 / 3;
        }
        p, li {
            font-size: 13px;
        }
    `}
    ${media.phone`
        padding: 15px 6px;
    `}
`;

export const Table = styled.table`
    margin: 20px 0;
    width: 100%;
    border-spacing: 0;
    color: #767676;
    text-align: center;
    font-size: 15px;
    overflow: hidden;
    ${media.phone`
        font-size: 13px;
	`}
    & th {
        padding: 8px;
        background-color: #fffb42;
        font-weight: normal;
        ${media.phone`
            padding: 6px;
        `}
    }
    & td {
        padding: 8px;
        background-color: #fffedf;
        font-weight: normal;
    }
`;

export const ColorBg = styled.div`
    padding-bottom: 20px;
    background-color: #2652d9;
`

export const ListWrapper = styled.div`
    width: 940px;
	margin: 20px auto;
    padding: 20px 30px;
    color: ${fontColor};
    h3 {
        margin: 0 0 20px;
        font-size: 18px;
        text-align: left;
    }
    ul {
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.63;
        letter-spacing: normal;
        padding-left: 15px;
        margin: 10px;
        ${media.tablet`
            padding-left: 10px;
            margin: 10px;
        `}
        li {
            text-align: left;
            margin: 10px 0;
            list-style: decimal;
            ${media.phone`
                margin: ${toVw(10)} 0;
                font-size: 13px;
            `}
        }
    }
    ${media.tablet`
        padding: 15px;
        width: calc(100% - 30px);
    `}
`;

export const Button = styled.a`
    display: block;
    margin: 0 auto;
    background: url('/assets/clf-btn-normal-im.png') no-repeat;
    width: 140px;
    height: 35px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: url('/assets/clf-btn-hover-im.png') no-repeat;
    }
    ${media.phone`
        background: url('/assets/clf-mobile-btn-normal-im@2x.png') no-repeat;
        background-size: 100%
        width: 320px;
        &:hover {
            background: url('/assets/clf-mobile-btn-hover-im@2x.png') no-repeat;
            background-size: 100%
        }
	`}
`;
