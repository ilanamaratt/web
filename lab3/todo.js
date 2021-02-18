var add = document.getElementById('addbtn');
var box = document.getElementById('container');
var input = document.getElementById('inp');


add.addEventListener('click', function(){
	var p = document.createElement('p');
	var span = document.createElement('span')
	var checkbox = document.createElement('input');
	checkbox.classList.add('checkbox');
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.calue = "value";
	checkbox.id = "id";

	
	var img = document.createElement('img');
	img.src = 'delete.png';

	p.classList.add('p');
	p.appendChild(checkbox);
	span.innerText = input.value;
	p.appendChild(span);
	p.appendChild(img);
	box.appendChild(p);
	input.value = "";

	img.addEventListener('click',function(){
		box.removeChild(p);
	})
	p.addEventListener('click', function(){
		p.style.textDecoration = "line-through";
		checkbox.checked = true;
	})
	checkbox.addEventListener('click',function(){
		p.style.textDecoration = "line-through";
		checkbox.checked = true;
	})
})


