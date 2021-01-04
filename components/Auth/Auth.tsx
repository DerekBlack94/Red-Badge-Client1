import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface Props {
    clearToken:() => void
}

const Auth = (props: Props) => {
    return (
        <div>
            
                <Link to='/login'><Button>LOG IN</Button></Link>
                <Link to='/signup'><Button>SIGN UP</Button></Link>
                <Button onClick={props.clearToken}>LOG OUT</Button>
            
        </div>
    )
}

export default Auth;