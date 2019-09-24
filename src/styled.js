import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const bodyBg = '#2e94a2';

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
		background: ${bodyBg};
		border-top: 5px solid #fda54a;
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

export const Wrapper = styled.div`
	display: block;
	width: 940px;
	height: 75px;
	margin: 0 auto;
	background-color: #2e94a2;
	${media.tablet`
		width: 100%;
    `}
	${media.phone`
		display: none;
	`}
`;

export const Button = styled.button`
	display: inline-block;
	width: calc(100% / 4);
	padding: 0;
	height: 75px;
	margin: 0 auto;
	background: ${props => `url('assets/button-normal-${props.index}.png')`};
	background-size: cover;
	background-position: center;
	border: 0;
	.topHeader {
		display: block;
		height: 75px;
	}
	:hover {
		background: ${props => `url('assets/button-hover-${props.index}.png') no-repeat, linear-gradient(to bottom, #34dde6, #2480c1)`};
		background-size: cover;
		background-position: center;
	}
	&.active {
		background: ${props => `url('assets/button-hover-${props.index}.png') no-repeat, linear-gradient(to bottom, #ffd749, #ff8922)`};
		background-size: cover;
		background-position: center;
	}
`;
