// Хранение сохраненных рецептов
let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
const notification = document.getElementById('notification');
const savedCount = document.getElementById('saved-count');

// Обновление счетчика сохраненных рецептов
function updateSavedCount() {
    if (savedCount) {
        savedCount.textContent = savedRecipes.length;
    }
}

// Показать уведомление
function showNotification(message) {
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Инициализация кнопок сохранения
function initSaveButtons() {
    const saveButtons = document.querySelectorAll('.save-recipe-btn');
    
    saveButtons.forEach(button => {
        const recipeCard = button.closest('.recipe-card');
        if (!recipeCard) return;
        
        const recipeId = recipeCard.dataset.recipeId;
        
        // Проверяем, сохранен ли уже рецепт
        if (savedRecipes.includes(recipeId)) {
            button.classList.add('saved');
            button.innerHTML = '<i class="fas fa-bookmark"></i>';
        }
        
        // Добавляем обработчик клика
        button.addEventListener('click', function() {
            const isSaved = savedRecipes.includes(recipeId);
            
            if (isSaved) {
                // Удаляем из сохраненных
                savedRecipes = savedRecipes.filter(id => id !== recipeId);
                button.classList.remove('saved');
                button.innerHTML = '<i class="far fa-bookmark"></i>';
                showNotification('Рецепт удален из сохраненных!');
            } else {
                // Добавляем в сохраненные
                savedRecipes.push(recipeId);
                button.classList.add('saved');
                button.innerHTML = '<i class="fas fa-bookmark"></i>';
                showNotification('Рецепт добавлен в сохраненные!');
            }
            
            // Сохраняем в localStorage
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            
            // Обновляем счетчик
            updateSavedCount();
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateSavedCount();
    initSaveButtons();
    
    // Анимация для карточек при загрузке
    const cards = document.querySelectorAll('.recipe-card, .category-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Активация пункта меню на основе текущей страницы
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


