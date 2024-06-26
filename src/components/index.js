import Header from "./Header";
import Hero from "./Hero";
import Guide from "./Guide";
import Camp from "./Camp";
import Footer from "./Footer";
import GetApp from "./GetApp";
import Feature from "./Feature";
export {
    Header,
    Hero,
    Guide,
    Camp,
    Footer,
    GetApp,
    Feature
}

export const PEOPLE_URL = [
    'src/assets/person-1.png',
    'src/assets/person-2.png',
    'src/assets/person-3.png',
    'src/assets/person-4.png',
];


export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Hilink',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us',
        ],
    },
    {
        title: 'Our Community',
        links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' },
        { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: [
        'src/assets/facebook.svg',
        'src/assets/instagram.svg',
        'src/assets/twitter.svg',
        'src/assets/youtube.svg',
        'src/assets/wordpress.svg',
    ],
};

export const FEATURES = [
    {
        title: 'Real maps can be offline',
        icon: 'src/assets/map.svg',
        variant: 'green',
        description:
            'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
        title: 'Set an adventure schedule',
        icon: 'src/assets/calendar.svg',
        variant: 'green',
        description:
            "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
        title: 'Technology using augment reality',
        icon: 'src/assets/tech.svg',
        variant: 'green',
        description:
            'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
        title: 'Many new locations every month',
        icon: 'src/assets/location.svg',
        variant: 'orange',
        description:
            'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
];