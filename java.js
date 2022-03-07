function clockFunction() {
	let data = new Date();
	let clock = document.querySelector('.clock');
	let hour = data.getHours();
	let minute = data.getMinutes();
	let second = data.getSeconds();
  if (hour < 10){
    hour = '0'+hour };  
  if (minute < 10){
    minute = '0'+minute };
	if (second<10) {
		second = '0'+second;
	};
	clock.innerHTML = hour+':'+minute+':'+second;
	var t = setTimeout(clockFunction,500
)
}