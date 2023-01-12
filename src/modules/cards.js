

const cards = () => {
    
    // дать кнопкам активный класс
    const basketBtns = document.querySelectorAll('.card__basket');
    
    basketBtns.forEach(item => {
       item.addEventListener('click', () => {
            item.classList.toggle('card__basket--active')
       }); 
    });
    
    
    
    // Звездный рейтинг
    const ratings = document.querySelectorAll('.rating')

    if (ratings.length > 0) {
        initRatings();
    }

    function initRatings() {
        let ratingActive, ratingValue;
        // проходимся по всем рейтингам на странице
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        };
        
        // Инициализируем конкретный рейтинг
        function initRating(rating) {
            initRatingVars(rating);
            
            setRatingActiveWidth()
        };
        
        // инициализация переменных
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        };
        
        // Изменяем ширину активный звезд
        
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`
        }
    }
    
    
    
    
    
    
    
    
    
    
    
};










export default cards