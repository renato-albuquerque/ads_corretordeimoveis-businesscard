// function

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'ADS Corretor de Imóveis - Cartão de Visita Digital',
			text: 'Aluguel, Compra, Venda e Atividades Afins.',
			url: 'http://www.adscorretordeimoveis.com.br/'  /* CHANGE URL */
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}