import React, {useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll';

import '../styles/components/scrolltotop.sass'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint'
        });
    };

    return (
        showButton && (
            <a href="#" id='a-scroll' onClick={scrollToTop} className={showButton ? 'fade-enter' : 'fade-exit'}>
                <span>&#8593;</span>
            </a>
        )
    );
};

export default ScrollToTop;