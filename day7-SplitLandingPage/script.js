console.log("working");
const left = document.querySelector('.ps5');
const right = document.querySelector('.xbox');

left.addEventListener('mouseenter', function(){
	right.style.width = '30%';
	console.log("mouse entra");
})
left.addEventListener('mouseleave', function(){
	right.style.width = '100%';
	console.log("mouse sale");
})

right.addEventListener('mouseenter', function(){
	left.style.width = '30%';
	console.log("mouse entra");
})
right.addEventListener('mouseleave', function(){
	left.style.width = '100%';
	console.log("mouse sale");
})
