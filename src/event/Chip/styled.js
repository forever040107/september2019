import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const fontColor = '#FFF';
const titleBorder = '#c1f3f2'
const table = {
    tdFontColor: '#547377',
    thColorOne: '#dc46f4',
    thColorTwo: '#940eaf',
    thColorThree: '#c82ddc'
}

export const GlobalStyle = createGlobalStyle `
	* {
        font-family: 'PingFangSC-Regular', 'Microsoft YaHei', sans-serif;
        box-sizing: border-box;
	}
	body {
		margin: 0; 
		-webkit-font-smoothing: antialiased; 
		-moz-osx-font-smoothing: grayscale; 
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
		@media(max-width:767px){
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
	background: url('assets/clf-bg-chip.png') no-repeat;
	background-position: top center;
	background-size: 100%;
	padding-top: 35%;
	position: relative;
    ${media.phone`
        background: url('assets/clf-bg-small-chip@2x.png') no-repeat;
        background-size: 100%;
        padding-top: 95%;
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
    h2 {
        display: inline-block;
        position: relative;
        margin: 0;
        border-bottom: 5px solid ${titleBorder};
        font-size: 20px;
        font-weight: bold;
        color: #2e94a2;
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
    background-color: #d2fffc;
    box-shadow: 0 7px 10px -2px rgba(0, 0, 0, 0.2);
	position: relative;
    font-size: 15px;
    font-weight: bold;
	line-height: 1.5;
    letter-spacing: normal;
    p {
        margin: 10px 0 0;
        color: ${table.tdFontColor};
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
`;

export const Table = styled.table`
    margin: 20px 0;
    width: 100%;
    border-spacing: 0;
    border-left: 1px solid ${table.thColorThree};
    color: ${fontColor};
    text-align: center;
    font-size: 15px;
    overflow: hidden;
    ${media.phone`
        font-size: 13px;
	`}
    & th {
        padding: 8px;
        background-color: ${table.thColorOne};
        font-weight: normal;
        :nth-child(2) {
            background-color: ${table.thColorThree};
        }
        :nth-child(3) {
            background-color: #b21bcc;
        }
        :nth-child(4) {
            background-color: ${table.thColorTwo};
        }
    }
    & td {
        padding: 8px;
        color: ${table.thColorTwo};
        font-weight: normal;
        border: 1px solid ${table.thColorThree};
        border-width: 0 1px 1px 0;
    }
`;

export const ListWrapper = styled.div`
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
        margin: 0;
        padding: 15px;
	`}
`;

export const ButtonWrapper = styled.div`
    display: block;
    margin-top: 25px;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.2);
    ${media.phone`
        padding: 0;
	`}
`

export const Button = styled.a`
    display: block;
    margin: 0 auto;
    background: url('assets/clf-btn-normal.png') no-repeat;
    width: 140px;
    height: 35px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: url('assets/clf-btn-hover.png') no-repeat;
    }
    ${media.phone`
        background: url('assets/clf-mobile-btn-normal@2x.png') no-repeat;
        background-size: 100%
        width: 320px;
        &:hover {
            background: url('assets/clf-mobile-btn-hover@2x.png') no-repeat;
            background-size: 100%
        }
	`}
`;
