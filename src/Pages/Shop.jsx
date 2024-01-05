import React from 'react' //6.9k (gzipped: 2.7k)
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
        </div>
    )
}

export default Shop