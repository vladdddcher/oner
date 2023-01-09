
const accordion = () => {
    const btns = document.querySelectorAll('[data-accordion]');
    
    btns.forEach(item => {
        let content = item.nextElementSibling;
        // let content = item.setPointerCapture
        item.addEventListener('click', () => {
            if (content.classList.contains('footer__inner-list--active') && item.classList.contains('footer__inner-title--active')) {
                item.classList.remove('footer__inner-title--active');
                content.classList.remove('footer__inner-list--active');
            } else {
                item.classList.add('footer__inner-title--active');
                content.classList.add('footer__inner-list--active');
            }
        })
    })
}












export default accordion