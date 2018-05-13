import styled from 'styled-components';

import { Input, InputGroupAddon } from 'reactstrap'

export const InputGeneral = styled(Input)`
	border-right:none
`;

export const Append = styled(InputGroupAddon)`
	span {
		border-right: 1px solid #ced4da;
	    border-left: none;
	    padding: 0.8rem!important;
	    color: #868686;
	    font-size: 1.35rem;
	    position: absolute;
	    right: -1px;
	}
`;


export default Input