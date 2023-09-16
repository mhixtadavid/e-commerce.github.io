import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Kaydee',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Joanna',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Dave slim shirt',
            category: 'Books',
            image: '/images/ebooks.png',
            price: 120,
            countInStock: 15,
            brand: 'Dave',
            rating: 4.5,
            numReviews: 13,
            description: 'high quality product',
        },
        {
            name: 'Dave slim pants',
            category: 'Books',
            image: '/images/edu.jpeg',
            price: 70,
            countInStock: 0,
            brand: 'Dave',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Gab slim shirt',
            category: 'Books',
            image: '/images/edu2.jpeg',
            price: 140,
            countInStock: 13,
            brand: 'Gab',
            rating: 2.5,
            numReviews: 5,
            description: 'high quality product',
        },
        {
            name: 'Dave fit pant',
            category: 'Books',
            image: '/images/elearning.png',
            price: 129,
            countInStock: 5,
            brand: 'Dave',
            rating: 3.2,
            numReviews: 18,
            description: 'high quality product',
        },
        {
            name: 'Dave fit shirt',
            category: 'Books',
            image: '/images/contact2.jpeg',
            price: 100,
            countInStock: 6,
            brand: 'Dave',
            rating: 4.0,
            numReviews: 22,
            description: 'high quality product',
        },
        {
            name: 'Joan slim shirt',
            category: 'Books',
            image: '/images/artificial-intel-2.png',
            price: 80,
            countInStock: 20,
            brand: 'Joan',
            rating: 4.8,
            numReviews: 20,
            description: 'high quality product',
        },
    ],
}

export default data;