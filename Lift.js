var cLift
var density
var velocity
var wingArea
var lift
var nextPlane 
var differentPlanes
var counter = 1;
var arrayCounter = 0;


function print (listObject){
    document.write('The coefficient of lift for Aircraft # ' + counter + ' is ' + cLift + '.<br>');
    document.write('The density around Aircraft # ' + counter + ' is ' + density + ' kilograms per cubic meter.<br>');
    document.write('The velocity of lift for Aircraft # ' + counter + ' is ' + velocity + 'meters per second.<br>');
    document.write('The wing area for Aircraft # ' + counter + ' is ' + wingArea + ' square meters.<br>');
    document.write('The force of lift for Aircraft # ' + counter + ' is ' + lift + ' Newtons.<br>');
    document.write('This is in differentPlanes[' + arrayCounter + ']. <br><br>');
}

    cLift = parseFloat(prompt('What is the coefficient of lift for aircraft ' + counter + ' ?'));
    density = parseFloat(prompt('What is the air density for aircraft ' + counter + ' in kilograms per cubic meter?'));
    velocity = parseFloat(prompt('What is the velocity for aircraft ' + counter + ' in meters per second'));
    wingArea = parseFloat(prompt('What is the wing area for aircraft ' + counter + ' in square meters?'));
    lift = .5 * cLift * density * velocity * velocity * wingArea;

    var plane = {
        cLift,
        density,
        velocity,
        wingArea,
        lift
    }
    
    print(plane);
    differentPlanes = [plane];

    nextPlane = prompt('Would you like to enter another equation? (Enter Yes or No)');
    nextPlane = nextPlane.toUpperCase();

while (nextPlane == 'YES') {
      counter += 1;
      arrayCounter += 1;
      cLift = parseFloat(prompt('What is the coefficient of lift for aircraft ' + counter + ' ?'));
      density = parseFloat(prompt('What is the air density for aircraft ' + counter + ' in kilograms per cubic meter?'));
      velocity = parseFloat(prompt('What is the velocity for aircraft ' + counter + ' in meters per second'));
      wingArea = parseFloat(prompt('What is the wing area for aircraft ' + counter + ' in square meters?'));
      lift = .5 * cLift * density * velocity * velocity * wingArea;

      var plane = {
          cLift,
          density,
          velocity,
          wingArea,
          lift
      }

      nextPlane = prompt('Would you like to enter another equation? (Enter Yes or No)');
      nextPlane = nextPlane.toUpperCase();
    
      print(plane);
      differentPlanes.push(plane);
    
     
}
