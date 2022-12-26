import React from 'react'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Catalogue from './Catalogue';
export default function validate() {
    const cookie=Cookies.get('authToken');
    if(cookie!=null) {
        console.log(jwt_decode(cookie))
    }else{
        console.log("Invalid")
    }
    return (
        <Catalogue/>
        )
}
