import React from 'react'
import './Card.sass'
import pc_case from '../../img/case.webp'

const Card = () => {
    return (
        <div className='Card'>
            <img src={pc_case} alt=""/>
            <div className='info'>
                <p className="title"> Gamer Essential Esport</p>
                <p className="os">Windows 10 Home</p>
                <p className="text">AMD Ryzen 5 3600 Processor</p>
                <p className="text">GeForce® RTX 2070 SUPER™ 8GB GDDR6</p>
                <p className="text">16GB Vengeance 3000MHz RAM</p>
                <p className="text">ASUS PRIME X570-P RGB Motherboard</p>
                <p className="text">500GB WD Blue SN550 Series PCIe NVMe</p>
            </div>
            <div className="bottom-container">
                <p className="price">$ 1235</p>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Card
