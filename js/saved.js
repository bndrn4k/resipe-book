// Данные рецептов (такие же как в categories.js)
const recipes = [
    {
        id: 1,
        title: "Салат черепаха",
        category: "salads",
        time: "1,5 часа",
        servings: 6,
        difficulty: "medium",
        description: "Вкусный и сытный салат с курицей, грибами, орехами и черносливом.",
        image: "images/salat-cherepaha.webp",
        featured: true
    },
    {
        id: 2,
        title: "Яблочный пирог",
        category: "desserts",
        time: "1 час",
        servings: 8,
        difficulty: "easy",
        description: "Ароматный пирог с корицей и свежими яблоками из сада.",
        image: "images/sharlotka.webp"
    },
    {
        id: 3,
        title: "Вареники с картошкой",
        category: "main",
        time: "40 мин",
        servings: 4,
        difficulty: "hard",
        description: "Нежные вареники с картошкой и луком, подаются со сметаной.",
        image: "images/vareniki.webp",
        featured: true
    },
    {
        id: 4,
        title: "Борщ",
        category: "soups",
        time: "2 часа",
        servings: 6,
        difficulty: "medium",
        description: "Наваристый борщ со свеклой и говядиной, подается со сметаной и зеленью.",
        image: "images/borshch.webp"
    },
    {
        id: 5,
        title: "Оливье",
        category: "salads",
        time: "1 час",
        servings: 8,
        difficulty: "easy",
        description: "Классический салат оливье с докторской колбасой и майонезом.",
        image: "images/olivye.webp"
    },
    {
        id: 6,
        title: "Сырники",
        category: "desserts",
        time: "30 мин",
        servings: 4,
        difficulty: "easy",
        description: "Нежные сырники из творога, подаются со сметаной или вареньем.",
        image: "images/syrniki.webp"
    }
];

// Загрузка сохраненных рецептов
document.addEventListener('DOMContentLoaded', function() {
    const savedRecipesContainer = document.getElementById('saved-recipes-container');
    const emptyState = document.getElementById('empty-state');
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    updateSavedCount();
    
    if (savedRecipes.length === 0) {
        if (savedRecipesContainer) savedRecipesContainer.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    if (savedRecipesContainer) savedRecipesContainer.innerHTML = '';
    
    // Фильтруем рецепты по сохраненным ID
    const filteredRecipes = recipes.filter(recipe => savedRecipes.includes(recipe.id.toString()));
    
    if (filteredRecipes.length === 0) {
        if (savedRecipesContainer) savedRecipesContainer.innerHTML = '<p class="no-recipes">Рецепты не найдены</p>';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    // Отрисовываем сохраненные рецепты
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.dataset.recipeId = recipe.id;
        
        let stampHtml = '';
        if (recipe.featured) {
            stampHtml = '<div class="stamp">Любимое</div>';
        }
        
        recipeCard.innerHTML = `
            ${stampHtml}
            <button class="save-recipe-btn saved" aria-label="Удалить из сохраненных">
                <i class="fas fa-bookmark"></i>
            </button>
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-user"></i> ${recipe.servings} порций</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-footer">
                    <div class="difficulty ${recipe.difficulty}">
                        <dot></dot>
                        <dot></dot>
                        <dot></dot>
                    </div>
                    <a href="recipe-detail.html?id=${recipe.id}" class="read-more">Смотреть рецепт <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        if (savedRecipesContainer) {
            savedRecipesContainer.appendChild(recipeCard);
        }
    });
    
    // Инициализация кнопок сохранения
    initSaveButtons();
});