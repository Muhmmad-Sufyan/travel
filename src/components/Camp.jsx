import React from 'react';
import { PEOPLE_URL } from '.'; // Ensure correct path

const Camp = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="flex flex-col lg:flex-row w-full gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                {[
                    { title: 'Putuk Truno Camp', subtitle: 'Prigen, Pasuruan', backgroundImage: '//assets/img-1.png' },
                    { title: 'Mountain View Camp', subtitle: 'Somewhere in the Wilderness', backgroundImage: '//assets/img-2.png' },
                ].map(({ title, subtitle, backgroundImage }, index) => (
                    <div key={index} className='flex-1 h-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl' style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-green-500 p-4">
                                    <img
                                        src="//assets/folded-map.svg"
                                        alt="map"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-bold text-white text-lg">{title}</h4>
                                    <p className="text-white">{subtitle}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="flex -space-x-4 overflow-hidden">
                                    {PEOPLE_URL.map((url) => (
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={url}
                                            key={url}
                                            alt="person"
                                        />
                                    ))}
                                </span>
                                <p className="font-bold text-white">50+ Joined</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex-end mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-500 p-8 max-w-[734px] rounded-[50px] px-4 py-6 md:px-6 md:py-8 w-full">
                    <h2 className="font-bold text-white text-2xl md:text-3xl 2xl:text-5xl capitalize mb-4">
                        <strong>Feeling Lost</strong> And Not Knowing The Way?
                    </h2>
                    <p className="text-white mb-4">
                        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
                    </p>
                    <img
                        src="//assets/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>

        </section>
    );
};

export default Camp;
