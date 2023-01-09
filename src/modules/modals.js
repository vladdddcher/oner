
const modals = () => {
    function bindModal(triggerSelector, triggerSelectorAdd, modalSelector, modalSelectorAdd, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelectorAll(closeSelector);
        const modalAdd = modalSelectorAdd;
        const triggerAdd = triggerSelectorAdd;
        let scroll = calcScroll()

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.remove('none');
                setTimeout(() => {
                    modal.classList.add(modalAdd);
                    item.classList.add(triggerAdd);
                }, 300)
                document.body.classList.add('no-scroll');
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal()
            }
        });
        
        closeBtn.forEach(item => {
            item.addEventListener('click', () => {
                closeModal()
            });
        })
        
        function closeModal() {
            trigger.forEach(item => {
                item.classList.remove(triggerAdd);
            });
            modal.classList.remove(modalAdd);
                setTimeout(() => {
                    modal.classList.add('none');
            }, 300);
            document.body.classList.remove('no-scroll');
            document.body.style.marginRight = `0px`;
        }
        
        function calcScroll() {
            let div = document.createElement('div');
            
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }
        
    };
    
    bindModal('.header__bottom-btn', 'header__bottom-btn--active', '.header__categoty', 'header__categoty--active', 'w');
    bindModal('.header__inner-btn__menu', 'w', '.header__menu', 'header__menu--active', '.header__menu-close');
//bindModal('.кнопка вызова моадала','дать класс кнопки которой вызываем','модальное окно которое нужно вызвать','какой класс дать модальному окну','кнопка закрытия')
};

export default modals;