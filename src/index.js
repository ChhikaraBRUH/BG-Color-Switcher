import "./styles.css";

const randomBtn = document.querySelector(".randomBtn");
const redBtn = document.querySelector(".redBtn");
const greenBtn = document.querySelector(".greenBtn");
const blueBtn = document.querySelector(".blueBtn");
const orangeBtn = document.querySelector(".orangeBtn");
const pinkBtn = document.querySelector(".pinkBtn");
const purpleBtn = document.querySelector(".purpleBtn");
const colorInput = document.querySelector("#colorInput");
const bodyBox = document.getElementById("bodyBox");
const randomColors = [
	"#FF6633",
	"#FFB399",
	"#FF33FF",
	"#FFFF99",
	"#00B3E6",
	"#E6B333",
	"#3366E6",
	"#999966",
	"#99FF99",
	"#B34D4D",
	"#80B300",
	"#809900",
	"#E6B3B3",
	"#6680B3",
	"#66991A",
	"#FF99E6",
	"#CCFF1A",
	"#FF1A66",
	"#E6331A",
	"#33FFCC",
	"#66994D",
	"#B366CC",
	"#4D8000",
	"#B33300",
	"#CC80CC",
	"#66664D",
	"#991AFF",
	"#E666FF",
	"#4DB3FF",
	"#1AB399",
	"#E666B3",
	"#33991A",
	"#CC9999",
	"#B3B31A",
	"#00E680",
	"#4D8066",
	"#809980",
	"#E6FF80",
	"#1AFF33",
	"#999933",
	"#FF3380",
	"#CCCC00",
	"#66E64D",
	"#4D80CC",
	"#9900B3",
	"#E64D66",
	"#4DB380",
	"#FF4D4D",
	"#99E6E6",
	"#6666FF",
	"#ff0000",
	"#10b981",
	"#ffa500",
	"#ec4899",
	"#7c3aed"
];

function btnClickHandler(e) {
	let selectedBtn = e.target.innerText;

	if (selectedBtn === "Red") {
		bodyBox.style.background = "#ff0000";
	} else if (selectedBtn === "Green") {
		bodyBox.style.background = "#10b981";
	} else if (selectedBtn === "Blue") {
		bodyBox.style.background = "#3b82f6";
	} else if (selectedBtn === "Orange") {
		bodyBox.style.background = "#ffa500";
	} else if (selectedBtn === "Pink") {
		bodyBox.style.background = "#ec4899";
	} else if (selectedBtn === "Purple") {
		bodyBox.style.background = "#7c3aed";
	} else {
		let randomColorsLen = randomColors.length;
		let randomIndex = Math.floor(Math.random() * randomColorsLen);
		bodyBox.style.background = randomColors[randomIndex];
	}
}

randomBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
redBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
greenBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
blueBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
orangeBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
pinkBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});
purpleBtn.addEventListener("click", (e) => {
	btnClickHandler(e);
});

colorInput.addEventListener("input", (e) => {
	console.log(e.target.value);
	bodyBox.style.background = e.target.value;
});
