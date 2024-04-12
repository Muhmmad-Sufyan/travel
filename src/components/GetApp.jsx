import React from 'react';

const GetApp = () => {
    return (
        <section className=" w-full  grid md:grid-cols-2 grid-cols-1 px-9   bg-center" style={{ backgroundImage: "url('/assets/pattern.png')" }}>
            <div className=" py-[250px] ">
                <h2 className="font-bold text-[90px] text-white">Get for free now!</h2>
                <p className="text-16 text-[50px] text-gray-200 mb-5 lg:mb-0">Available on iOS and Android</p>
                <div className="flex w-full flex-col gap-3 lg:flex-row">
                    {Button('/assets/apple.svg', 'App Store')}
                    {Button('/assets/android.svg', 'Play Store')}
                </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
                <img src="/assets/phone.png" alt="phones" className="w-full h-auto lg:w-auto lg:h-full" />
            </div>
        </section>
    );
};

const Button = (iconSrc, storeName) => (
    <button className="flex items-center gap-3 text-center rounded-full border px-4 py-2" type="button">
        <img src={iconSrc} width='30px' alt="Store Icon" />
        <span className="font-bold text-base whitespace-nowrap cursor-pointer">{storeName}</span>
    </button>
);

export default GetApp;
