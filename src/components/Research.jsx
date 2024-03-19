import React from 'react'
import nagapasa402 from '../assets/whendy.png';

// import { useState } from 'react'

const Research = () => {

    // const [isReadMoreShown, setReadMoreShown] = useState(false)

    // const toggleBtn = () => {
    //     setReadMoreShown(prevState => !prevState)
    // }

    return (
        <section id="research">
        <div className='research'>
            {/* {isReadMoreShown ? children : children.substr(0, 200)}
            <button onClick={toggleBtn}>Read More</button> */}

            <div className='w-full bg-[#186e18] py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid mb-4'>
                        <img className='w-[500px] mx-auto my-4' src={nagapasa402} alt='/' />
                    <div className='flex flex-col mt-7 justify-center'>
                            <p className='text-[#00df9a] font-bold '>WE ARE PROUD TO INTRODUCE OUR PROJECT</p>
                            <h1 className='md:text-4xl sm:text-3xl mb-6 text-2xl font-bold py-2'>Nagapasa_402</h1>
                            <p>
                            Nagapasa_402 is an advanced AUV designed for underwater exploration. 
                            It incorporates mapping and obstacle avoidance systems, 
                            with four horizontal thrusters and three vertical thrusters for precise maneuverability. 
                            The AUV's HDPE body, produced using CNC machines, ensures stability during underwater navigation. 
                            Equipped with a Rockchip RK3399, power supply, Pixhawk 2.4.8, 
                            BLDC motors, Brushless ESC, Tilt Camera, Pixhawk default GPS, MS5837 Depth Sensor, 
                            and telemetry, Nagapasa_402 can accurately gather underwater environmental data. 
                            Its obstacle avoidance system enhances safety during mapping and search and rescue missions. 
                            With dimensions of 407.842 x 154.66 x 522.670 mm, Nagapasa_402 excels at locating debris while maneuvering past obstacles.
                            </p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mt-10 mx-auto md:mx-0 py-3'>Support Our Research</button>
                    </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Research