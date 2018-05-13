import styled from 'styled-components';


export const Button = styled.a`

	padding: 0.8rem;
	font-size: 1.2rem;
	width: 100%;
	text-align: center;
	text-decoration: none;
	border-radius: 5px;

	&:hover {
	    opacity: 0.8;
	}

`;

export const ButtonGoogle = Button.extend`
	background: #dd4b39;
	color: white;
`;

export const ButtonLinkedin = Button.extend`
	background: #007bb5;
	color: white;
`;

export default Button