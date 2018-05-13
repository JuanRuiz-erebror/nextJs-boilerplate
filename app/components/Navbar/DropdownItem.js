import styled from 'styled-components';

import { DropdownItem } from 'reactstrap';

export default styled(DropdownItem)`
  	cursor: pointer;
  	padding:0 10px;
  	font-size: 0.9rem;
  	font-weight:300;

  	&hover: {
  		background:#000;
  	}
  	span {
  		vertical-align:text-top;
  	}

`;
