const results = document.getElementById('results');


function generateCards(count) {
	const cards = [];

	for (let i = 0; i < count; i++) {
		cards.push(`
	<div class="card">
	<img class="card__img" src="https://loremflickr.com/300/200/london?id-${i}" alt="">
	<div class="card__content">
		<h3 class="card__title">Название товара</h3>
		<div class="card__description">Описание товара</div>
		<div class="card__info">
			<div class="card__param">
				<label>Год:</label>
				<div id="year">2022</div>
			</div>
			<div class="card__param">
				<label>Цвет:</label>
				<div id="color">Красный</div>
			</div>
			<div class="card__param">
				<label>Страна:</label>
				<div id="country">Украина</div>
			</div>
			<div class="card__param">
				<label>Категория:</label>
				<div id="category">Техника</div>
			</div>
		</div>
		<div class="card__footer">
			<div class="card__count">
				<label>Количество:</label>
				<div id="count">3</div>
			</div>
			<div class="card__cost">
				<label>Цена:</label>
				<div>300</div>
			</div>
		</div>
	</div>
	</div>
	`)
	}

	return cards;
}

const cardsArr = generateCards(10);
//console.log(cardsArr);

results.innerHTML = cardsArr.join('');
























{/*<div class="card">
<img class="card__img" src="https://loremflickr.com/300/200/london?id-1" alt="">
<div class="card__content">
	<h3 class="card__title">Название товара</h3>
	<div class="card__description">Описание товара</div>
	<div class="card__info">
		<div class="card__param">
			<label>Год:</label>
			<div id="year">2022</div>
		</div>
		<div class="card__param">
			<label>Цвет:</label>
			<div id="color">Красный</div>
		</div>
		<div class="card__param">
			<label>Страна:</label>
			<div id="country">Украина</div>
		</div>
		<div class="card__param">
			<label>Тип:</label>
			<div id="type">Техника</div>
		</div>
	</div>
	<div class="card__footer">
		<div class="card__count">
			<label>Количество:</label>
			<div id="count">3</div>
		</div>
		<div class="card__cost">
			<label>Цена:</label>
			<div>300</div>
		</div>
	</div>
</div>
</div>*/}