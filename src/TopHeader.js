import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { Wrapper, Button } from './styled.js'

const linkList = [
    {
        path: '/thirty'
    },
    {
        path: '/nationalday'
    },
    {
        path: '/chip'
    },
    {
        path: '/fifty'
    }
]

function TopHeaderComponent({location}) {
    const pathname = location.pathname
	return (
        <Wrapper>
            {linkList.map((link, index) => (
                <Button
                    index={index + 1}
                    key={`link_${index.toString()}`}
                    className={link.path === pathname && 'active'}
                >
                    <Link 
                        className="topHeader"
                        to={{pathname: link.path}}
                    />
                </Button>
            ))}
        </Wrapper>
	)
}

export default (withRouter(TopHeaderComponent))