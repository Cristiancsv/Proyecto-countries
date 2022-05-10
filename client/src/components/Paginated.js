import React from 'react';
import c from './Paginated.module.css';

export default function Paginated({countriesPerPage, allCountries, paginated}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return (
        <nav>
            <ul className={c.paginated}>
                {pageNumbers.length > 1 && 
                pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginated(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}