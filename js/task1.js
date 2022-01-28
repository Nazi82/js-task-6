/*document.body.style.backgroundColor = "blue";

const div = document.getElementById("wrapper");

const img = document.createElement("img");
img.setAttribute("src", "images/image-equilibrium.jpg");
wrapper.prepend(img);
div.style.width;*/
document.body.style.backgroundColor = "hsl(217,54%,11%)";

const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.id = "wrapper";
wrapper.style.width = "300px";
wrapper.style.height = "700px";
wrapper.style.backgroundColor = "hsl(216,50%,16%)";
wrapper.style.fontSize = "18px";
wrapper.style.padding = "20px";
wrapper.style.margin = "auto";
wrapper.style.borderRadius = "10px";
wrapper.style.marginTop = "100px";
wrapper.style.paddingRight = "50px";

const img = document.createElement("img");
img.setAttribute("src", "images/image-equilibrium.jpg");
wrapper.prepend(img);
img.style.backgroundColor = "cyan";
img.style.height = "330px";
img.style.borderRadius = "10px";
img.style.border = "none";

const title = document.createElement("h3");
title.innerText = "Equilibrium #3429";
title.style.color = "white";
title.style.fontSize = "1.1rem";
title.style.fontWeight = "bold";
wrapper.append(title);

const paraghraph = document.createElement("p");
paraghraph.innerText = "Our Equililibirum collection promotes balance and calm";
paraghraph.style.lineHeight = "1.5";
paraghraph.style.color = "rgba(168, 209, 228, 0.664)";
paraghraph.style.fontSize = "25px";
wrapper.append(paraghraph);

const icon = document.createElement("img");
icon.setAttribute("src", "images/icon-svg.svg");
wrapper.append(icon);

valueCard = document.createElement("span");
valueCard.innerText = "0.041ETH";
valueCard.style.marginLeft = "10px";
valueCard.style.color = "cyan";
wrapper.append(valueCard);

const iconClock = document.createElement("img");
iconClock.setAttribute("src", "images/icon-clock.svg");
wrapper.append(iconClock);
iconClock.style.marginLeft = "50px";

const subtitle = document.createElement("p");
subtitle.innerText = "3 days left";
subtitle.style.float = "right";
subtitle.style.color = "rgba(168, 209 ,228, 0.664)";
wrapper.append(subtitle);

const line = document.createElement("hr");
line.style.marginTop = "50px";
wrapper.append(line);

const man = document.createElement("img");
man.setAttribute("src", "images/image-avatar.png");
wrapper.append(man);
man.style.float = "left";
man.style.marginTop = "30px";
man.style.height = "3rem";

const autor = document.createElement("p");
autor.innerText = "Creation of Jules Wyvern";
wrapper.append(autor);
autor.style.marginLeft = "70px";
autor.style.marginTop = "50px";
autor.style.color = "hsl(228, 45%, 44%)";
