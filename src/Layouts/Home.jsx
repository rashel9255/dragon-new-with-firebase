import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="w-11/12 mx-auto my-5">
                <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto my-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto my-5 grid grid-cols-4 gap-5">
                <aside className='col-span-1 sticky h-fit top-4'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main-content col-span-2">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-1 sticky h-fit top-4'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer></footer>
        </div>
    );
};

export default Home;