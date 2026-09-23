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
var webmaps =
[
  ["Oil Spill Toolkit", "https://www.glo.texas.gov"],
   ["The Oil Spill Toolkit developed by Enterprise Technology Solutions of the Texas General Land Office is a decision-support resource.<br>This is my second sentence about the Oil Spill Toolkit.<br>This is my third sentence about the Oil Spill Toolkit.<br>This is my fourth sentence about the Oil Spill Toolkit."],

   ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/"],
   ["The Texas Parks and Wildlife's Landscape Ecology program developed this application to deliver ecological mapping data to Texas citizens.<br>This is my second sentence about the Texas Ecosystems Analytical Mapper.<br>This is my third sentence about the Texas Ecosystems Analytical Mapper.<br>This is my fourth sentence about the Texas Ecosystems Analytical Mapper."]
];
function welcome()
{
  let a = "please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
function webmap_table()
{
  document.write("<table width=100%>");

    for (var row=0; row < webmaps.length; row++)
    {
        if (row % 2 == 0)
        {
            document.write("<tr>");

            for (var column=0; column < webmaps[row].length; column++)
            {
                document.write("<td>" + webmaps[row][column] + "</td>");
            }

            document.write("</tr>");
        }
        else
        {
            document.write("<tr>");
            document.write("<td colspan='2'>" + webmaps[row][0] + "</td>");
            document.write("</tr>");
        }
    }

    document.write("</table>");
    return "";
}
