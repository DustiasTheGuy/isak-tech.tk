import { iProduct } from 'src/app/Interfaces/all.interfaces';

export const products: iProduct[] = [
    {
        label: "Application",
        price: 1299,
        selected: 0,
        description: `
            When you need a little extra to meet your business needs. 
            This is the right option for you! Custom built from scratch with your unique business in mind.
            Includes either a web application, desktop application or native android application.`,
        images: [
            '/assets/images/product_images/application/pexels-chelsey-horne-4590387.jpg',
            '/assets/images/product_images/application/pexels-format-1029757.jpg',
            '/assets/images/product_images/application/pexels-photomix-company-106344.jpg',
            '/assets/images/product_images/application/pexels-photomix-company-230544.jpg'
        ]
    },
    {
        label: "Webshop",
        price: 599,
        selected: 0,
        description: `
            Purchase your own online web shop, built with your unique business in mind. 
            Manage your own web store with a very nice and easy to use administration user-interface.
            Custom built during certain circumstances. 
            Pricing might vary depending on the scale of your webshop.`,
        images: [
            '/assets/images/product_images/webshop/pexels-karolina-grabowska-5632403.jpg',
            '/assets/images/product_images/webshop/pexels-pavel-danilyuk-7191160.jpg',
            '/assets/images/product_images/webshop/pexels-photomix-company-230544_1.jpg',
            '/assets/images/product_images/webshop/pexels-pixabay-264547.jpg'
        ]
    },
    {
        label: "Website",
        price: 449,
        selected: 0,
        description: `
            Get your own Website. Display your products, show your brick and mortar store location.
            It's crucial for every business to have a strong online presence. 
            What's a better way than with a modern online website for your customers to get to know more about you and your business?`,
        images: [
            '/assets/images/product_images/website/pexels-markus-spiske-177598.jpg',
            '/assets/images/product_images/website/pexels-negative-space-160107.jpg',
            '/assets/images/product_images/website/pexels-pixabay-270360.jpg',
            '/assets/images/product_images/website/pexels-tranmautritam-69432.jpg'
        ]
    }
]