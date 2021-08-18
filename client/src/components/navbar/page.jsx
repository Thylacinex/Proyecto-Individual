import React from 'react';
import styles from './style.css';

const Page = () => {
    
    return (
        <nav id="navlist">
            <a href="#">Home</a>
            ||
            <a href="#">Create</a>
                     
            <div class="search">
                <form action="#">
                    <input type="text" placeholder=" Search Pokemon" name="search" />
                    <button>
                        Go!
                    </button>
                </form>
            </div>
            <hr />
        </nav>
    )
}

export default Page;