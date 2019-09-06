var getTimes = document.getElementsByClassName('game-day');
// console.log(getTimes.length);
// console.log(getTimes[3].getAttribute('data-time'));
var x = setInterval(function() {
    for(var i = 0;i < getTimes.length;i++){
        var count = new Date(getTimes[i].getAttribute('data-time')).getTime();      //‘may 11,2019 9:00:00’
        var now = new Date().getTime();
        var d = count - now;
        //console.log(d);
		var days = Math.floor(d/(1000*60*60*24));
		var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((d%(1000*60*60))/(1000*60));
		var seconds = Math.floor((d%(1000*60))/1000);
		var dayNum = 'days-' + (i + 1);
		var hourNum = 'hours-' + (i + 1);
		var minuteNum = 'minutes-' + (i + 1);
		var secondNum = 'seconds-' + (i + 1);
		document.getElementById(dayNum).innerHTML = days;
		document.getElementById(hourNum).innerHTML = hours;
		document.getElementById(minuteNum).innerHTML = minutes;
		document.getElementById(secondNum).innerHTML = seconds;
	}
		    
},1000);

var clickChange = false;
function changeTheme(){
	// var changes = document.getElementsByClassName(logo);
	// var bodyBackground = 
	var i;
	var myClassElement = document.getElementsByClassName('container')[0];
	var headChange = document.getElementsByClassName('head')[0];
	var articleTitleChange = document.getElementsByClassName('article-title');
	var vsChange = document.getElementsByClassName('vs');
	var posiChange = document.getElementsByClassName('posi');
	var countChange = document.getElementsByClassName('count');
	var detailsColorChange = document.getElementsByClassName('details-color');
	var teamInfoChange = document.getElementsByClassName('team-info-1-1');
	var playerInfoChange = document.getElementsByClassName('player-info-1-1');
	var partChange = document.getElementsByClassName('part');
	var backColorChange = document.getElementsByClassName('back-color');
	if(clickChange){
		document.body.style.backgroundImage = 'url(./images/Rockets-de-Houston-04.jpg)';
		myClassElement.className = "container";
		headChange.style.color = '#333';
		for(i = 0;i < articleTitleChange.length;i++){
			articleTitleChange[i].style.color = '#000';
			vsChange[i].style.color = '#333';
			posiChange[i].style.color = '#333';
			posiChange[i + 4].style.color = '#333';
			countChange[i].style.color = '#000';
			detailsColorChange[i].style.color = '#333';
			teamInfoChange[i].style.color = '#000';
			teamInfoChange[i + 4].style.color = '#000';
			playerInfoChange[i].style.color = '#000';
			playerInfoChange[i + 4].style.color = '#000';
			backColorChange[i].style.color = '#333';
		}
		for(i = 0;i < partChange.length;i++){
			partChange[i].style.color = '#000';
		}
	}else{
		document.body.style.backgroundImage = 'url(./images/1.jpg)';
		// var myClassElement = document.getElementsByClassName('container')[0];
		myClassElement.className = "container change";
		headChange.style.color = '#f1f1f1';
		for(i = 0;i < articleTitleChange.length;i++){
			articleTitleChange[i].style.color = '#fff';
			vsChange[i].style.color = '#f1f1f1';
			posiChange[i].style.color = '#f1f1f1';
			posiChange[i + 4].style.color = '#f1f1f1';
			countChange[i].style.color = '#fff';
			detailsColorChange[i].style.color = '#f1f1f1';
			teamInfoChange[i].style.color = '#fff';
			teamInfoChange[i + 4].style.color = '#fff';
			playerInfoChange[i].style.color = '#fff';
			playerInfoChange[i + 4].style.color = '#fff';
			backColorChange[i].style.color = '#f1f1f1';
		}
		for(i = 0;i < partChange.length;i++){
			partChange[i].style.color = '#fff';
		}
	}
	clickChange = !clickChange;
}
