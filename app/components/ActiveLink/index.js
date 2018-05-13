import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const Adefault = styled.a`
    text-transform: uppercase;
`;


const Aactive = Adefault.extend`
    background: #777777;
    border-radius: 5px;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.1s;
    @keyframes fadeInOpacity {
        0% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }
`;


const ActiveLink = ({ children, router, href, className }) => {
      
        const A = router.pathname === href ? Aactive : Adefault
        return (

             <Link href={href}>
                <A className={className}>{children}</A>
             </Link>   

        )
    
}

export default withRouter(ActiveLink)