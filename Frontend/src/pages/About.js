import React from 'react';
import Banner from "../components/Banner"
import Drop from "../components/Drop"
import Callapses from "../callapses.json"
import bg from "../images/bg_banner_about.png"

function About() {
    return (
        <div className='about'>
            <Banner bg={bg} />
            <div className='callapses'>
                {Callapses.map((call) => (
                    <Drop
                        key={call.title}
                        title={call.title}
                        content={call.content}
                    />))}
            </div>
        </div>
    );
}

export default About;