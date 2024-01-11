import React from 'react';
import img1 from '@/img/source1.svg';
import logements from '@/components/logements.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className='hbanner'>
                <div className='banner'>
                    <img src={img1} alt='Une montagne en bord de mer' className='banner__img1' />
                    <div className='banner__text'>
                        <p>Chez vous, partout et ailleurs</p>
                    </div>
                </div>
            </section>
            <article className='card-article'>
                <div className='card-article__contenair'>
                    {logements.map((logement, index) => {
                        return (
                            <div key={index} className='card'>
                                <Link to={`/logements/${logement.id}`} className='card__navg'>
                                    <img src={logement.cover} alt={logement.title} />
                                    <div className='card__text'>{logement.title}</div>
                                </Link>
                            </div>
                            );
                        }
                    )};
                </div>
            </article>
        </div>
    );
};

export default Home;