window.setUrl = function () {
  const urlBase = "/startGame.html";
  const inputNamePlayer = document.querySelector("#input-name-player");
  const questionTypeChecked = document.querySelector(
    'input[name="question-type"]:checked'
  );

  if (!questionTypeChecked || !inputNamePlayer) return false;

  const questionTypeCheckedValue = questionTypeChecked.value;
  const inputNamePlayerValue = inputNamePlayer.value;
  setHref(
    urlBase +
      "?name=" +
      inputNamePlayerValue +
      "&questions_type=" +
      questionTypeCheckedValue
  );
};

function setHref(url) {
  const link = document.querySelector("#link-start-play");
  link.href = url;
}
