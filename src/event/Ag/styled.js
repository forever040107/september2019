import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const white = "#FFF"
const table = {
    tdFontColor: '#547377',
    thColorOne: '#c9ff6f',
    thColorTwo: '#35d7cf',
    thColorThree: '#a26dec',
    thColorFour: '#ff5757',
    thColorFive: '#ffbf47',
    tdColorOne: '#f1ffcf',
    tdColorTwo: '#d0fff5',
    tdColorThree: '#dec7fd',
    tdColorFour: '#f8c5c5',
    tdColorFive: '#fff3dc'
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
        background-color: #0b075b;
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
	background: url('assets/clf-bg-ag.png') no-repeat;
	background-position: top center;
	background-size: 100%;
	padding-top: 30%;
    position: relative;
    ${media.tablet`
        padding-top: 28%;
	`}
    ${media.phone`
        background: url('assets/clf-bg-small-ag@2x.png') no-repeat;
        background-size: 100%;
        padding-top: 62%;
	`}
`;

export const Main = styled.main`
	width: 940px;
	margin: 0 auto;
    text-align: left;
    color: ${white};
    position: relative;
    ${media.tablet`
        padding: 15px 0;
		width: calc(100% - 30px);
    `}
    h2 {
        display: inline-block;
        position: relative;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        ${media.phone`
            font-size: 15px;
        `}
    }
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    ${media.tablet`
        grid-template-columns: 1fr 1fr;
	`}
`;

export const Section = styled.section`
    padding: 15px 30px;
    width: 100%;
    border: 4px solid ${white};
	border-radius: 10px;
	position: relative;
    font-size: 15px;
    font-weight: bold;
	line-height: 1.5;
    letter-spacing: normal;
    p {
        margin: 5px 0 0;
    }
    &:first-child {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        text-align: center;
        box-shadow: 0 0 5px 5px rgba(0, 233, 246, 0.7), inset 0 0 5px 5px rgba(0, 233, 246, 0.7);
        h2, p {
            text-shadow: 0 0 3px #00e9f6;
        }
    }
    &:nth-child(2) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        text-align: center;
        box-shadow: 0 0 5px 5px rgba(60, 246, 0, 0.7), inset 0 0 5px 5px rgba(60, 246, 0, 0.7);
        h2, p {
            text-shadow: 0 0 3px #3cf600;
        }
    }
    &:nth-child(3) {
        grid-row: 1 / 2;
        grid-column: 3 / 6;
        box-shadow: 0 0 5px 5px rgba(255, 174, 0, 0.7), inset 0 0 5px 5px rgba(255, 174, 0, 0.7);
        h2, p {
            text-shadow: 0 0 3px #ffae00;
        }
    }
    &:nth-child(4) {
        grid-row: 2 / 3;
        grid-column: 1 / 6;
        box-shadow: 0 0 5px 5px rgba(246, 0, 166, 0.7), inset 0 0 5px 5px rgba(246, 0, 166, 0.7);
        h2, p {
            text-shadow: 0 0 3px #f600a6
        }
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
    color: #156235;
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
            background-color: ${table.thColorTwo};
            color: #0a6964;
        }
        :nth-child(3) {
            background-color: ${table.thColorThree};
            color: #39008a;
        }
        :nth-child(4) {
            background-color: ${table.thColorFour};
            color: #690101;
        }
        :nth-child(5) {
            background-color: ${table.thColorFive};
            color: #774f05;
        }
        ${media.phone`
            padding: 2px;
        `}
    }
    & td {
        padding: 6px;
        background-color: ${table.tdColorOne};
        font-weight: normal;
    }
`;

export const ListWrapper = styled.div`
    padding: 20px 30px;
    color: #75a0ff;
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

export const Button = styled.a`
    display: block;
    margin: 10px auto;
    background: url('assets/clf-btn-normal-ag.png') no-repeat;
    width: 145px;
    height: 40px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: url('assets/clf-btn-hover-ag.png') no-repeat;
    }
    ${media.phone`
        background: url('assets/clf-mobile-btn-normal-ag@2x.png') no-repeat;
        background-size: 100%
        width: 320px;
        &:hover {
            background: url('assets/clf-mobile-btn-hover-ag@2x.png') no-repeat;
            background-size: 100%
        }
	`}
`;
