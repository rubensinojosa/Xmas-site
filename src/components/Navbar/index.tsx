import { useState } from 'react';
import Brand from '../Brand';

import './styles.css';

function Navbar() {

    const [mobileToggle, setMobileToggle] = useState(false);


    return (
        <header>
            <div className="container">
                <Brand />

                <div className={mobileToggle ? 'menu-section on' : 'menu-section'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <div className="menu-toggle">
                        <div className="one"></div>       
                        <div className="two"></div>       
                        <div className="three"></div>     
                    </div>

                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="/">Início</a>
                            </li>
                            <li>
                                <a href="#accessories">Acessórios</a>
                            </li>
                            <li>
                                <a href="#donation">Doação</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;