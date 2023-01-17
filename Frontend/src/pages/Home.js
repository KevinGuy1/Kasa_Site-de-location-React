import React from 'react';
import Card from "../components/Card"
import bg from "../images/bg_banner.png"
import Data from "../data.json"

function Home() {
    return (
        <div className='home'>
            <div className='home__banner'>
                <img src={bg} alt="banner"></img>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <section className='cards'>
                <div className='cards__grid'>
                    {Data.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            cover={item.cover}
                            pictures={item.pictures}
                            description={item.description}
                            hostName={item.host.name}
                            hostPicture={item.host.picture}
                            rating={item.rating}
                            location={item.location}
                            equipments={item.equipments}
                            tags={item.tags}
                        />))}
                </div>
            </section>
        </div>
    );
}

export default Home;