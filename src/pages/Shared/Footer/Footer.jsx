import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Contact with me</h3>
                        <p className="mt-2">Mirpur-1, Dhaka</p>
                        <p>nahid.cse.diu.19@gmail.com</p>
                        <p>+8801750666272</p>
                    </div>
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Useful Links</h3>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <Link to="/about">About</Link>
                            </li>
                            
                            <li className="mb-2">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-lg font-semibold">Stay Connected</h3>
                        <p className="mt-2">Follow me on social media:</p>
                        <div className="flex mt-2">
                            <a href="https://web.facebook.com/na.hid.731135/" target='blank' className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.linkedin.com/in/md-nahiduzzaman-08395a179?mibextid=Zxz2cZ" target='blank' className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Nahiduzzamann" target='blank' className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://nahiduzzaman-portfolio.web.app/" target='blank' className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faWeebly} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800 my-6" />
                <div className="text-center text-sm">
                    <p>&copy; 2023 Roof's Calculate. All rights reserved.</p>
                    <p className="mt-2">
                        Designed and developed by {' '}
                        <a
                            href="https://nahiduzzaman-portfolio.web.app/"
                            className="text-white hover:text-gray-400 font-bold underline"
                            target='blank'
                        >
                            Md. Nahiduzzaman
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;