/* Toggle Button hide sidebar */
var toggleIcon = document.querySelector('#toggleIcon');
toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working'); /* for debugging */

	var nav = document.querySelector('div.navigation');
	nav.style.left = '-15%';

	var main = document.querySelector('main');
	main.style.width = '100%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');


});

var toggleIcon1 = document.querySelector('#toggleIcon1');
toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon1 is working'); /* for debugging */

	var nav = document.querySelector('div.navigation');
	nav.style.left = '0';

	var main = document.querySelector('main');
	main.style.width = '85%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');


});