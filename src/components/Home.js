import React from 'react';
import Nav from './Nav'
import { SecondComponent } from './MultipleComponent';

function Home(){
    return(
        <div>
            <Nav/>
            <SecondComponent/>
            <h1>Welcome To Hone Page</h1>
        </div>
    )
}

export default Home