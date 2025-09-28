import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/featured.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/hamb-nav.css'
import '../styles/utils.css';

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.header__bars');
    const mobileMenu = document.querySelector('.hamb-nav');
    const mobileLinks = document.querySelectorAll('.hamb-nav__link');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            mobileMenu.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (event) => {
            if (mobileMenu.classList.contains('active') && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
});