// document.write("Where is my JS code?");
// window.alert(5 + 6);
// window.alert('5 + 6');
// document.write('<h1>A heading</h1>');
// document.write('<p>A sentence.</p>');
// const x = "web";
// const y = "mapping";
// const out = x + y;
// document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
// arr = ["This is me!"];
// for (var i=0; i < arr.length; i ++)
// {
//   document.writeln(arr[i],"<br>");
// }
function welcome()
{
  let a = "please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
