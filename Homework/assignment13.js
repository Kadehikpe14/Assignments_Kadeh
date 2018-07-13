<!DOCTYPE html>
<html>
<body>


<p id="demo"></p>

<script>

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

<script>
var text1 = "Hello";
var text2 = "World!";
var text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;

</script>

</body>
</html>
