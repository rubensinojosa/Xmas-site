import Brand from '../Brand';

import Twitter from '../../assets/images/twitter.svg';
import Youtube from '../../assets/images/youtube.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';

import './styles.css';

function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="contact__brand">
                    <Brand />
                </div>

                <div className="contact__social-media">
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Youtube} alt="Youtube" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;