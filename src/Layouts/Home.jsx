import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-5'><LatestNews></LatestNews></section>
            <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className='left-nav'></section>
                <section className='main-content'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
            <footer></footer>
        </div>
    );
};

export default Home;