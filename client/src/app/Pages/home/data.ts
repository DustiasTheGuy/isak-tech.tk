export interface IData {
    title?: string;
    body?: string[];
    images?: string[];
    links?: any[];
}

export const data: IData[] = [
    {
        title: 'Missed Opportunities',
        body: [ 
            'Slow-loading websites cost online businesses US$ 2.6 billion in 2020.',
            'Website visitors only need half a second to form an opinion of the website they are visiting.' 
        ],
        images: undefined,
        links: undefined,
    },
    {
        title: undefined,
        body: undefined,
        images: [
            'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/5255251/pexels-photo-5255251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        links: undefined
    },
    {
        title: 'My Preferred Development Style Is Agile',
        body: [ 
            'Agile is an iterative approach to project management and software development that helps teams or individuals deliver value to their customers faster and with fewer headaches.',
            'Instead of betting everything on a "big bang" launch, an agile team delivers work in small, but consumable, increments.' 
        ],
        images: undefined,
        links: undefined
    },
    {
        title: 'Things You Should Know',
        body: [ 
            '53% of mobile website visits are abandoned if a mobile site takes longer than three seconds to load.',
            'For every one second delay in site load time, conversions fall by 12% (Google, 2018)',
            '84% of website users would abandon a purchase if their data were sent over an insecure connection.', 
            '87% of the world population uses mobile devices In 2020. 51% of small business owners increased the number of online interactions they had with clients.', 
            'The web is growing and more businesses are moving online' 
        ],
        images: [ 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ],
        links: [
            { href: 'https://www.marketingdive.com/', text: 'https://www.marketingdive.com/' },
            { href: 'https://www.oberlo.com/', text: 'https://www.oberlo.com/' },
            { href: '/#/services', text: 'my services' }
        ]
    },
]