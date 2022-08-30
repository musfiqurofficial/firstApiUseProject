const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card');
        mealDiv.innerHTML = `
            
<div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="p-3 rounded-t-lg" src="${meal.strMealThumb}" alt="product image">
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${meal.strMeal}</h5>
    </a>
    <div class="flex items-center mt-2.5 mb-3">
        <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-white">Category: <span class="text-sm font-light text-amber-400	mr-3">${meal.strCategory}</span></h5>
        <p class="text-xs px-2 py-1 text-white border border-amber-400 rounded">${meal.strMeasure1}</p>
    </div>
    <p class="text-xs text-white mb-3">${meal.strInstructions.slice(0, 100)}</p>
    <div class="flex justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <button onclick="loadMealDetail(${meal.idMeal})" href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</button>
    </div>
</div>
</div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
}

const searchBtn = document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-navbar')
    const searchValue = searchField.value;
    loadMeals(searchValue);
    searchField.value = '';
})

const loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('container');
    mealDiv.innerHTML = `
    <div id="defaultModal" tabindex="-1"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
    aria-modal="true" role="dialog">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <div class="w-full max-w-sm mx-auto">
                    <a href="#">
                        <img class="p-3 rounded-t-lg" src="${meal.strMealThumb}" alt="product image">
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                ${meal.strMeal}</h5>
                        </a>
                        <div class="items-center mt-2.5 mb-3">
                            <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-white">Category:
                                <span class="text-sm font-light text-amber-400	mr-3">${meal.strCategory}</span>
                            </h5>
                            <p class="text-xs mt-2 text-white">${meal.strMeasure1}
                            </p>
                        </div>
                        <p class="text-xs text-white mb-3">${meal.strInstructions.slice(0, 100)}</p>
                        <div class="flex justify-between items-center">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" id="closemodel"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                    accept </button>
                <button data-modal-toggle="defaultModal" type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
    `

    detailContainer.appendChild(mealDiv);
}

loadMeals('')

