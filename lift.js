let cLift,density,velocity,area

calculateButton.addEventListener('click', ()=>{

	cLift = document.getElementById('cOfLift').value;
	density = document.getElementById('density').value;
	velocity = document.getElementById('velocity').value;
	area = document.getElementById('wingArea').value;
	const calculateButton = document.getElementById('calculateButton');
	
	lift = .5*cLift*density*velocity*velocity*area;
	document.write('The coefficient of lift is ' + cLift + '.<br>');
    	document.write('The density is ' + density + ' kilograms per cubic meter.<br>');
    	document.write('The velocity is ' + velocity + ' meters per second.<br>');
    	document.write('The wing area is ' + area + ' square meters.<br>');
	document.write('The lift of the aircraft in these conditions is ' + lift + ' Newtons.<br>');
});
