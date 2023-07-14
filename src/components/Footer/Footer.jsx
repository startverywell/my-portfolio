import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Albert Cal'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://skype:live:.cid.60653e81c9b17a00?chat" target="_blank" rel="noopener noreferrer"><i className="fab fa-skype"></i></a>
                    <a href="https://github.com/startverywell/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://t.me/startverywell" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
                    <a href="mailto:startverywell@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);