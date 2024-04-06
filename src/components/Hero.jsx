import React from 'react';

const Hero = () => {
    return (
        <section className="max-container mx-[60px] padding-container grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14 lg:py-16 xl:flex-row mt-10">
            <div className='relative z-20'>
                <div className='mb-2'>
                    <img src="src/assets/camp.svg" alt="camp" width={50} height={50}
                        className="absolute left-[-5px] top-[-30px] bottom-4 w-10 lg:w-[50px] mb-[500px]"
                    />
                </div>
                <h1 className="font-bold text-4xl sm:text-6xl mb-4">Putuk Truno Camp Area</h1>
                <p className="regular-16 text-gray-700 mb-6 md:max-w-[520px]">
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
                </p>
                <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src="src/assets/star.svg"
                            alt={`Star ${index + 1}`}
                            width={24}
                            height={24}
                        />
                    ))}
                    <p className="bold-16  ">
                        <span className='font-bold text-lg'>  198k</span>

                        <span className="regular-16 font-bold md:regular-20 ml-1">Excellent Reviews</span>
                    </p>
                </div>
                <div className="flex flex-col w-full gap-3 sm:flex-row">

                    <button className="flex items-center p-4 bg-green-600 text-white gap-3 rounded-full border" type="button">

                        <span className="font-bold text-16 pr-3 whitespace-nowrap cursor-pointer">Download App</span>
                    </button>
                    <button className="flex items-center  gap-3 rounded-full border" type="button">
                        <img src="src/assets/play.svg" width='30px' alt="User Icon" />
                        <span className="font-bold text-16 pr-3 whitespace-nowrap cursor-pointer">How we work?</span>
                    </button>

                </div>
            </div>

            <div className="relative flex flex-1 items-start text-white mt-6 sm:mt-0" style={{ backgroundImage: "url('src/assets/hero.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="relative z-20 flex flex-col gap-4 rounded-3xl bg-black p-6 md:p-8 mx-6 md:mx-0">
                    <div className="flex items-center justify-between">
                        <p className="regular-16 text-gray-200">Location</p>
                        <img src="src/assets/close.svg" alt="close" width={24} height={24} />
                    </div>
                    <p className="bold-20 text-white text-2xl">Aguas Calientes</p>

                    {/* Include your 'camp.svg' here */}
                    {/* <img
                        src="src/assets/camp.svg"
                        alt="camp"
                        className="w-full h-auto mt-4 rounded-lg"
                    /> */}

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="regular-16 text-gray-200">Distance</p>
                            <p className="bold-20 font-bold text-white">173.28 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 text-gray-200">Elevation</p>
                            <p className="bold-20 font-bold text-white">2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
