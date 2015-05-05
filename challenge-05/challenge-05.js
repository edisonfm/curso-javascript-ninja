/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['João', 10, {obj: '1'}, [1,2], [{obj1: '1'}, {obj2: '1'}]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array){
	return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(array)[1]; // 10 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayIndex(array, index){
	return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayValues = ['João', 10, {obj: '1'}, [1,2], [{obj1: '1'}, {obj2: '1'}]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrayIndex(arrayValues, 0);
returnArrayIndex(arrayValues, 1);
returnArrayIndex(arrayValues, 2);
returnArrayIndex(arrayValues, 3);
returnArrayIndex(arrayValues, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){
	var books = {
		'A Web Mobile': { quantidadePaginas: 243, autor: 'Sérgio Lopes', editora: 'Casa do Código' },
		'Spring MVC': { quantidadePaginas: 224, autor: 'Alberto Souza', editora: 'Casa do Código' },
		'Aplicações web real-time com Node.js': { quantidadePaginas: 158, autor: 'Caio Ribeiro Pereira', editora: 'Casa do Código' }
	}

	return name ? books[name] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro A Web Mobile tem " + book('A Web Mobile').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Spring MVC é " + book('Spring MVC').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Aplicações web real-time com Node.js foi publicado pela editora " + book('Aplicações web real-time com Node.js').editora + ".");