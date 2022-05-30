import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import TopStats from '../components/TopStats';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

function LandingPage() {

    return(
        <>
                <main>
                    <About />
                    <TopStats />
                    {/*
                    <LogIn />
                    <SignUp />
                    */}
                </main>
        </>
    );

}

export default LandingPage;