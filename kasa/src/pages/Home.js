import React from 'react';
import img1 from '@/img/source1.svg'

const Home = () => {
    return (
        <section className='hbanner'>
            <div className='banner'>
                <img src={img1} alt='Une montagne en bord de mer' className='banner__img1' />
                <div className='banner__text'>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </section>
    );
};

export default Home;