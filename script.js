// Функция jQuery (селектор, контекст) предназначена для выполнения поиска элементов в DOM-дереве 
// на основании селектора, указанного в качестве первого аргумента. 
function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector)); 
	return this
}

// Так как мы получаем всегда массив элементов, то нам надо написать функцию, 
// которая будет перебирать элементы и работать с каждым из них. 
jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

// Метод, который вешает обработчик на наши элементы.
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

// Метод jQuery.prototype.text() изменяет текстовое содержимое выбранных элементов.
jQuery.prototype.text = function() {
    this.each(element => element.textContent = "Modified")
    return this
}

// Создадим несколько кнопок и повесим на каждую из них обработчик таким образом:
const $ = (e) => new jQuery(e);

// Применям созданный метод html()
$('button').click(e => console.log(e)).text()
