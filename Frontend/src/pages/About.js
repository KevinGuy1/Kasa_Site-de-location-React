import React from 'react';
import Banner from "../components/Banner"
import Drop from "../components/Drop"
import Callapses from "../callapses.json"

function About() {
    return (
        <div className='about'>
            <Banner />
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