import { iObjectImage, iPost } from 'src/app/Interfaces/all.interfaces';

const pageHeaderInitial = { title: 'Page Title', subtitle: 'Page Subtitle' };

const themeColorInitial: string = 'rgb(59, 59, 59)';

const headerTokenInitial: string = '5a02e4042cab4a50a491dbbc117a415756c8362a8014dabd5472ef77278503b9';

const categoriesInitial: string[] = [
    "Articles",
    "News",
    "Product Reviews",
    "Guides",
    "Uncategorized",
];

const contactFormInitial = { 
    inquiry: '', 
    fullName: '', 
    email: '', 
    message: '' 
};

const customerReviewsInitial = [
    {
      img: { src: '/assets/users/users-1.svg', alt: 'User Photo' },
      title: 'Mike Smith - Developer',
      description: 'When times were rough and I needed a skilled developer to solve my business challenges you came to my rescue.'
    },
    {
      img: { src: '/assets/users/users-2.svg', alt: 'User Photo' },
      title: 'John Mark - Entrepreneur',
      description: 'Isak helped me create an excellent website where customers can find out more about my business!'
    },
    {
      img: { src: '/assets/users/users-3.svg', alt: 'User Photo' },
      title: 'Stephany Philips - Graphic Designer',
      description: 'Fast and very professional, would love to work with him again!'
    },
    {
      img: { src: '/assets/users/users-4.svg', alt: 'User Photo' },
      title: 'John Markus - CEO',
      description: 'Knows how to please customers with great software solutions!'
    }
];

const newsLetterInitial = { 
    email: '', 
    fullName: '' 
};

const imgObjectInitial: iObjectImage = {
    date: new Date(),
    id: 0,
    post_id: 0,
    thumbnail: 1, // is the image a thumbnail? 0/1
    url: 'https://i.ibb.co/3d3gpFW/example-featured.png'
};
  
const postInitial: iPost = {
    id: 0,
    title: 'Loading...',
    post: '',
    category: '',
    date: new Date(),
    archived: 0,
    images: [],
    thumbnail: 'https://i.ibb.co/3d3gpFW/example-featured.png',
    user_id: 1,
    total_images: 0
};

export const InitialValues = {
    pageHeaderInitial,
    themeColorInitial,
    headerTokenInitial,
    categoriesInitial,
    contactFormInitial,
    customerReviewsInitial,
    newsLetterInitial,
    imgObjectInitial,
    postInitial
};
