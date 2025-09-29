const root = document.querySelector("body");
const themeDiv = document.querySelector(".div-button");
const themeButton = document.querySelector(".mode");
const buttonText = document.querySelector(".button-text");
const stdTheme = localStorage.getItem("theme");

themeButton.textContent = stdTheme === "dark" ? "☀️" : "🌒";
buttonText.textContent = stdTheme === "dark" ? "Modo escuro" : "Modo claro";

root.style.setProperty("--color-background", stdTheme === "light" ? "#83e6ff" : "#335A63");
root.style.setProperty("--color-text", stdTheme === "light" ? "#335A63" : "#83e6ff");
root.style.setProperty("--color-buttons", stdTheme === "light" ? "#79cbdfff" : "#3f7986ff");

themeDiv.addEventListener("click", () => {
	localStorage.setItem("theme", stdTheme === "light" ? "dark" : "light");

	themeButton.textContent = themeButton.textContent === "🌒" ? "☀️" : "🌒";
	buttonText.textContent = buttonText.textContent === "Modo claro" ? "Modo escuro" : "Modo claro";

	const changeBackground = root.style.getPropertyValue("--color-background") === "#83e6ff" ? "#335A63" : "#83e6ff";
	root.style.setProperty("--color-background", changeBackground);

	const changeText = root.style.getPropertyValue("--color-background") === "#83e6ff" ? "#335A63" : "#83e6ff";
	root.style.setProperty("--color-text", changeText);

	const changeCardLight = root.style.getPropertyValue("--color-buttons") === "#79cbdfff" ? "#3f7986ff" : "#79cbdfff";
	root.style.setProperty("--color-buttons", changeCardLight);
});

function onSubmit() {
	const name = document.getElementById("nome");
	const email = document.getElementById("email");
	const message = document.getElementById("message");

	if ([name.value, email.value, message.value].includes("")) {
		alert("Dados incompletos, por favor revise as informações.");

		return;
	}

	if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
		alert("Informe um email válido");

		return;
	}

	alert("Formulário enviado com sucesso!");

	name.value = "";
	email.value = "";
	message.value = "";
}
