import React from 'react';
import { FEATURES } from '.';

const Feature = () => {
    return (
        <section className="flex-col flex-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
            style={{ backgroundImage: "url('/assets/feature-bg.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <img
                        src="/assets/phone.png"
                        alt="phone"
                        width={440}
                        height={1000}
                        className="feature-phone"
                    />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className='relative'>
                        <img
                            src="/assets/camp.svg"
                            alt="camp"
                            width={50}
                            height={50}
                            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
                        />
                        <h2 className="font-bold text-5xl">Our Features</h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-20">
                        {FEATURES.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                title={feature.title}
                                icon={feature.icon}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ title, icon, description }) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 lg:p-7 bg-green-500">
                <img src={icon} alt="map" width={28} height={28} />
            </div>
            <h2 className="font-bold text-lg lg:text-2xl mt-5 capitalize">
                {title}
            </h2>
            <p className="mt-5 text-gray-700 lg:mt-[30px]">
                {description}
            </p>
        </li>
    );
};

export default Feature;
