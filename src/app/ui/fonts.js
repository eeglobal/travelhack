import { Poppins , Montserrat, Rubik_Mono_One, Inter, Hanken_Grotesk, Rubik, Red_Rose, } from 'next/font/google';

export const poppins = Poppins({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
});

export const inter = Inter({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
});

export const hanken = Hanken_Grotesk({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
});

export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

export const rubik = Rubik({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})
export const redrose = Red_Rose({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})