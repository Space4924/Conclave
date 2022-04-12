import React from 'react'
import './normal.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="main">
            <div className="conclave">
                <div className='close'> Sustainability Conclave </div>
                <div className="line"></div>
            </div>
            <div className="lorem">Lorem ipsum dolor sit amet cum? Mollitia tempore aliquid ullam vitae libero fuga magnam. Id, doloremque animi. Magnam porro doloribus commodi iure, eligendi fuga error blanditiis, iste facilis sunt neque ad repellendus nobis ipsa vel earum voluptatem placeat laboriosam cum aperiam tempore, dolorum explicabo quasi. Amet deserunt odit consectetur, earum mollitia molestiae.
                <Link to='/Form'>Explore all event </Link>---</div>
            <div className="container">
                <div className="block">block-1</div>
                <div className="block">block-2</div>
                <div className="block">block-3</div>
                <div className="block">block-4</div>
                <div className="block">block-5</div>
                <div className="block">block-6</div>
                <div className="block">block-7</div>
 
            </div>
        </div>


    )
}

export default Home