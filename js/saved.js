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
        image: "images/vareniki.webp"
    },
    {
        id: 4,
        title: "Борщ классический",
        category: "soups",
        time: "2 часа",
        servings: 6,
        difficulty: "medium",
        description: "Наваристый украинский борщ с говядиной и свеклой.",
        image: "images/borsch.webp",
        featured: true
    },
    {
        id: 5,
        title: "Харчо",
        category: "soups",
        time: "1.5 часа",
        servings: 5,
        difficulty: "medium",
        description: "Острый грузинский суп с говядиной и рисом.",
        image: "images/kharcho-sup.webp",
        featured: true
    },
    {
        id: 6,
        title: "Окрошка",
        category: "soups",
        time: "30 мин",
        servings: 4,
        difficulty: "easy",
        description: "Освежающий летний суп на квасе с овощами и колбасой.",
        image: "images/okroshka.webp"
    },
    {
        id: 7,
        title: "Щавелевый суп",
        category: "soups",
        time: "40 мин",
        servings: 4,
        difficulty: "easy",
        description: "Кислый весенний суп со щавелем и яйцом.",
        image: "images/shavely-soup.webp"
    },
    {
        id: 8,
        title: "Сырный суп",
        category: "soups",
        time: "35 мин",
        servings: 4,
        difficulty: "easy",
        description: "Нежный кремовый суп с плавленым сыром.",
        image: "images/cheese-soup.webp"
    },
    {
        id: 9,
        title: "Солянка мясная",
        category: "soups",
        time: "1 час",
        servings: 6,
        difficulty: "hard",
        description: "Наваристый суп с различными видами мяса и солеными огурцами.",
        image: "images/solyanka.webp"
    },
    {
        id: 10,
        title: "Уха из речной рыбы",
        category: "soups",
        time: "1 час",
        servings: 4,
        difficulty: "medium",
        description: "Ароматная уха из свежей речной рыбы с овощами.",
        image: "images/uha.webp"
    },
    {
        id: 11,
        title: "Грибной крем-суп",
        category: "soups",
        time: "45 мин",
        servings: 4,
        difficulty: "medium",
        description: "Нежный кремовый суп из шампиньонов со сливками.",
        image: "images/mushroom-soup.webp"
    },
    {
        id: 12,
        title: "Тыквенный крем-суп",
        category: "soups",
        time: "50 мин",
        servings: 4,
        difficulty: "easy",
        description: "Яркий осенний суп-пюре из тыквы с имбирем.",
        image: "images/pumpkin-soup.webp"
    },
    {
        id: 13,
        title: "Сырный крем-суп",
        category: "soups",
        time: "35 мин",
        servings: 4,
        difficulty: "easy",
        description: "Нежный суп-пюре со сливочным сыром.",
        image: "images/sup-pyure-syrny.webp"
    },
    {
        id: 14,
        title: "Рассольник",
        category: "soups",
        time: "1.5 часа",
        servings: 6,
        difficulty: "medium",
        description: "Сытный суп с перловкой и солеными огурцами.",
        image: "images/rassolnik.webp"
    },
    {
        id: 15,
        title: "Том Ям",
        category: "soups",
        time: "30 мин",
        servings: 4,
        difficulty: "medium",
        description: "Острый тайский суп с креветками и кокосовым молоком.",
        image: "images/tom-yam.webp"
    },
    {
        id: 16,
        title: "Гороховый суп",
        category: "soups",
        time: "2 часа",
        servings: 6,
        difficulty: "easy",
        description: "Сытный суп из желтого гороха с копченостями.",
        image: "images/pea-soup.webp"
    },
    {
        id: 17,
        title: "Оливье",
        category: "salads",
        time: "1 час",
        servings: 8,
        difficulty: "easy",
        description: "Классический праздничный салат с докторской колбасой.",
        image: "images/olivye.webp"
    },
    {
        id: 18,
        title: "Винегрет",
        category: "salads",
        time: "1 час",
        servings: 6,
        difficulty: "easy",
        description: "Полезный овощной салат со свеклой.",
        image: "images/vinegret.webp"
    },
    {
        id: 19,
        title: "Крабовый салат",
        category: "salads",
        time: "30 мин",
        servings: 4,
        difficulty: "easy",
        description: "Нежный салат с крабовыми палочками и кукурузой.",
        image: "images/crab-salad.webp"
    },
    {
        id: 20,
        title: "Салат с печенью трески",
        category: "salads",
        time: "20 мин",
        servings: 4,
        difficulty: "easy",
        description: "Сытный и полезный салат с консервированной печенью трески.",
        image: "images/salat-s-pechenyu-treski.webp"
    },
    {
        id: 21,
        title: "Сельдь под шубой",
        category: "salads",
        time: "1.5 часа",
        servings: 8,
        difficulty: "medium",
        description: "Легендарный слоеный салат с сельдью и свеклой.",
        image: "images/seledka-pod-shuboy.webp"
    },
    {
        id: 22,
        title: "Мимоза",
        category: "salads",
        time: "1 час",
        servings: 6,
        difficulty: "medium",
        description: "Нежный слоеный салат с рыбой и сыром.",
        image: "images/mimoza-salad.webp"
    },
    {
        id: 23,
        title: "Шакшука",
        category: "main",
        time: "30 мин",
        servings: 2,
        difficulty: "easy",
        description: "Яичница в томатном соусе с пряностями.",
        image: "images/shakshuka.webp"
    },
    {
        id: 24,
        title: "Плов",
        category: "main",
        time: "2 часа",
        servings: 6,
        difficulty: "hard",
        description: "Узбекский плов с бараниной и морковью.",
        image: "images/plov.webp"
    },
    {
        id: 25,
        title: "Рагу овощное",
        category: "main",
        time: "1 час",
        servings: 4,
        difficulty: "easy",
        description: "Ароматное тушеное ассорти из овощей.",
        image: "images/ragu.webp"
    },
    {
        id: 26,
        title: "Курочка карри с рисом",
        category: "main",
        time: "45 мин",
        servings: 4,
        difficulty: "medium",
        description: "Нежное куриное филе в ароматном соусе карри.",
        image: "images/chicken-curry.webp",
        featured: true
    },
    {
        id: 27,
        title: "Паста с беконом",
        category: "main",
        time: "25 мин",
        servings: 3,
        difficulty: "easy",
        description: "Спагетти карбонара с беконом и сливочным соусом.",
        image: "images/pasta-carbonara.webp"
    },
    {
        id: 28,
        title: "Паста со шпинатом и креветками",
        category: "main",
        time: "30 мин",
        servings: 3,
        difficulty: "medium",
        description: "Нежная паста в сливочном соусе со шпинатом и тигровыми креветками.",
        image: "images/pasta-spinach-shrimp.webp"
    },
    {
        id: 29,
        title: "Паста с грибами и курицей",
        category: "main",
        time: "40 мин",
        servings: 4,
        difficulty: "medium",
        description: "Сливочная паста с шампиньонами и нежной куриной грудкой.",
        image: "images/pasta-mushroom-chicken.webp"
    },
    {
        id: 30,
        title: "Голубцы",
        category: "main",
        time: "2 часа",
        servings: 8,
        difficulty: "hard",
        description: "Фарш с рисом в капустных листьях в томатном соусе.",
        image: "images/golubtsy.webp"
    },
    {
        id: 31,
        title: "Гречневая лапша с курочкой терияки",
        category: "main",
        time: "35 мин",
        servings: 3,
        difficulty: "medium",
        description: "Азиатское блюдо с лапшей соба и курицей в сладком соусе терияки.",
        image: "images/soba-teriyaki.webp",
        featured: true
    },
    {
        id: 32,
        title: "Гоголь-моголь",
        category: "desserts",
        time: "10 мин",
        servings: 1,
        difficulty: "easy",
        description: "Классический питательный напиток из яиц и молока.",
        image: "images/gogol-mogol.webp"
    },
    {
        id: 33,
        title: "Тирамису на маскарпоне",
        category: "desserts",
        time: "40 мин + охлаждение",
        servings: 8,
        difficulty: "medium",
        description: "Знаменитый итальянский десерт без выпечки.",
        image: "images/tiramisu.webp",
        featured: true
    },
    {
        id: 34,
        title: "Меренговый рулет с ягодами",
        category: "desserts",
        time: "1.5 часа",
        servings: 8,
        difficulty: "hard",
        description: "Воздушный безе с нежной начинкой из взбитых сливок и свежих ягод.",
        image: "images/meringue-roll.webp",
        featured: true
    },
    {
        id: 35,
        title: "Венские вафли",
        category: "desserts",
        time: "30 мин",
        servings: 4,
        difficulty: "easy",
        description: "Хрустящие снаружи и мягкие внутри вафли из вафельницы.",
        image: "images/viennese-waffles.webp"
    },
    {
        id: 36,
        title: "Блины",
        category: "desserts",
        time: "40 мин",
        servings: 4,
        difficulty: "easy",
        description: "Тонкие блины на молоке — классика русской кухни.",
        image: "images/blini.webp"
    },
    {
        id: 37,
        title: "Оладьи",
        category: "desserts",
        time: "30 мин",
        servings: 3,
        difficulty: "easy",
        description: "Пышные оладушки на кефире.",
        image: "images/oladi.webp"
    },
    {
        id: 38,
        title: "Драники",
        category: "main",
        time: "45 мин",
        servings: 4,
        difficulty: "medium",
        description: "Хрустящие картофельные оладьи.",
        image: "images/draniki.webp"
    },
    {
        id: 39,
        title: "Сырники",
        category: "desserts",
        time: "30 мин",
        servings: 3,
        difficulty: "easy",
        description: "Творожные сырники с хрустящей корочкой.",
        image: "images/syrniki.webp"
    },
        {
        id: 40,
        title: "Сырный кофе",
        category: "drinks",
        time: "10 мин",
        servings: 1,
        difficulty: "easy",
        description: "Необычный кофе с воздушной сливочно-сырной пенкой. Ваш фирменный рецепт!",
        image: "images/coffee-cheese.webp",
        featured: true
    },
    {
        id: 41,
        title: "Раф-кофе",
        category: "drinks",
        time: "7 мин",
        servings: 1,
        difficulty: "easy",
        description: "Нежнейший кофе со сливками, приготовленный на пару. Российское изобретение.",
        image: "images/coffee-raf.webp"
        
    },
    {
        id: 42,
        title: "Арахисовый латте",
        category: "drinks",
        time: "8 мин",
        servings: 1,
        difficulty: "easy",
        description: "Сытный и питательный кофе с кремовой арахисовой пастой.",
        image: "images/coffee-peanut-latte.webp",
        featured: true
    },
    {
        id: 43,
        title: "Медовый раф с корицей",
        category: "drinks",
        time: "7 мин",
        servings: 1,
        difficulty: "easy",
        description: "Нежный раф с натуральной сладостью меда и ароматом корицы.",
        image: "images/coffee-honey-raf.webp"
    },
    {
        id: 44,
        title: "Кокосовый латте",
        category: "drinks",
        time: "6 мин",
        servings: 1,
        difficulty: "easy",
        description: "Тропический кофе с нежным вкусом кокосового молока.",
        image: "images/coffee-coconut-latte.webp"
    },
    {
        id: 45,
        title: "Пряный апельсиновый кофе",
        category: "drinks",
        time: "10 мин",
        servings: 1,
        difficulty: "medium",
        description: "Согревающий кофе с цитрусовыми нотками и специями.",
        image: "images/coffee-spicy-orange.webp"
    },
    {
        id: 46,
        title: "Шоколадный капучино",
        category: "drinks",
        time: "8 мин",
        servings: 1,
        difficulty: "easy",
        description: "Классический капучино с богатым шоколадным вкусом.",
        image: "images/coffee-chocolate-cappuccino.webp"
    },
    {
        id: 47,
        title: "Солёная карамель латте",
        category: "drinks",
        time: "8 мин",
        servings: 1,
        difficulty: "easy",
        description: "Идеальный баланс сладкой карамели и морской соли.",
        image: "images/coffee-salted-caramel.webp"
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