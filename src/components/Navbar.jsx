import { links } from '#constants'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src='/images/logo.svg' alt='logo' />
                <p className='font-bold'>Dovudkhon's Portfolio</p>

                <ul>
                    {links.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar