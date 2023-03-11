
const domElements = {
	results: document.getElementById('results'),
	search: {
		input: document.getElementById('search-input'),
		button: document.getElementById('search-button'),
	},
	filters: {
		category: document.getElementById('filter-category'),
		color: document.getElementById('filter-color')
	}
}


//console.log(domElements);

function generateCards(data) {
	const cards = [];

	for (let i = 0; i < data.length; i++) {

		let countClass = 'card__count';

		let countValue = data[i].count;

		if (data[i].count === 0) {
			countClass = 'card__count card__count_empty'
			countValue = 'Нет в наличии'
		}

		cards.push(`
	<div class="card">
	<img class="card__img" src="https://loremflickr.com/300/200/london?id-${i}" alt="">
	<div class="card__content">
		<h3 class="card__title">${data[i].title}</h3>
		<div class="card__description">${data[i].description}</div>
		<div class="card__info">
			<div class="card__param">
				<label>Год:</label>
				<div id="year">${data[i].params.year}</div>
			</div>
			<div class="card__param">
				<label>Цвет:</label>
				<div id="color">${data[i].params.color}</div>
			</div>
			<div class="card__param">
				<label>Страна:</label>
				<div id="country">${data[i].params.country}</div>
			</div>
			<div class="card__param">
				<label>Категория:</label>
				<div id="category">${data[i].params.category}</div>
			</div>
		</div>
		<div class="card__footer">
			<div class="${countClass}">
			<label> Количество:</label>
			<div id="count">${countValue}</div>
			</div >
		<div class="card__cost">
			<label>Цена:</label>
			<div>${data[i].cost}</div>
		</div>
		</div >
	</div >
	</div >
		`)
	}

	return cards;
}

const cardsArr = generateCards(cardsData);

domElements.results.innerHTML = cardsArr.join('');


{
	let searchValue = '';
	domElements.search.input.oninput = (e) => {
		searchValue = e.target.value
		filterSearch();
	}
	domElements.search.button.onclick = () => {
		filterSearch();
	}

	function filterSearch() {
		const rgx = new RegExp(searchValue, 'i')
		let filteredCardsData = cardsData.filter(card => {
			if (rgx.test(card.title)) {
				return true
			} else {
				return false
			}
		})
		const newFilteredCardsHTML = generateCards(filteredCardsData)
		domElements.results.innerHTML = newFilteredCardsHTML.join('');
	}
}

{
	domElements.filters.category.onchange = (e) => {
		const value = e.target.value
		//console.log(e.target.value);
		const filteredCards = cardsData.filter(card => {
			const reg = new RegExp(value)

			if (reg.test(card.params.category)) {
				return true
			} else {
				return false
			}
		})
		const filteredCardsHTML = generateCards(filteredCards);
		domElements.results.innerHTML = filteredCardsHTML.join('');
	}
}



















