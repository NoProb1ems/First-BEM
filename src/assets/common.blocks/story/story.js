export default function refresh () {
	var elements = document.querySelectorAll(".story");
	for (let i = 0; i < elements.length; i++) {

		var textStory = elements[i].querySelector('.story__text').querySelector('p').textContent;

		if (textStory.length > 92) {
			elements[i].querySelector('.story__text').querySelector('p').textContent= textStory.substr(0,92)+'...';
		}
		
		elements[i].onmouseover = function(){
			this.querySelector('.story__link').classList.add('story__link-hover-on');
		};
		elements[i].onmouseout = function(){
			this.querySelector('.story__link').classList.remove('story__link-hover-on');
		};
		
		elements[i].onclick = function (event) {
			var countStory = elements[i].querySelector('.story__count').textContent;
			elements[i].querySelector('.story__count').textContent = ++countStory;
		}
	}
}









