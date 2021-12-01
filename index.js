let content = document.querySelector(".js-generated.content");
let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

// extra
// 1st div
let div1 = document.createElement("div");
div1.setAttribute("class", "dog-content");

// image
let image = document.createElement("img");
image.setAttribute("class", "dog-image");
image.setAttribute("src", "./assets/rizzo.jpg");
div1.append(image);

// 2nd div
let div2 = document.createElement("div");
div2.setAttribute("class", "dog-details");

// 2nd header
let header2 = document.createElement("h3");
header2.innerHTML = "Description:";
div2.append(header2);

// paragraph
let paragraph = document.createElement("p");
paragraph.innerHTML =
  "This gentle dog is aloof toward her owner, and never comes when called.  She always acts as though any stranger she meets will harm her, and dislikes other animals.";
div2.append(paragraph);

// 3rd header
let header3 = document.createElement("h3");
header3.innerHTML = "Feeding Times:";
div2.append(header3);

// unordered list
let list = document.createElement("ul");

let listItem1 = document.createElement("li");
listItem1.innerHTML = "9:00 am";
list.append(listItem1);

let listItem2 = document.createElement("li");
listItem2.innerHTML = "12:00 pm";
list.append(listItem2);

let listItem3 = document.createElement("li");
listItem3.innerHTML = "5:00 pm";
list.append(listItem3);

// appending everything
div2.append(list);
div1.append(div2);
content.append(div1);