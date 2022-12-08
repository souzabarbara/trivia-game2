const params_url = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});

document.querySelector("#welcome-message").innerHTML =
  "Olá, " + params_url.name + ". Vamos jogar!";

const cardsData = {
  beer: [
    {
      question: "Qual a nação onde mais se bebe cerveja por habitante por ano",
      options: ["Brasil", "República Tcheca", "Alemanha"],
      correctQuestion: "República Tcheca"
    },
    {
      question: "Quais são as principais escolas cervejeiras do mundo",
      options: [
        "Brasileira, Inglesa e Alemã",
        "Inglesa, Belga e Alemã",
        "Brasileira, Belga e Alemã"
      ],
      correctQuestion: "Inglesa, Belga e Alemã"
    },
    {
      question: "Quem era a deusa da cerveja para os sumérios",
      options: ["Ninkasi", "Atena", "Afrodite"],
      correctQuestion: "Ninkasi"
    }
  ],
  food: [
    {
      question: "Qual vitamina não é encontrada no ovo",
      options: ["Vitamina C", "Vitamina A", "Vitamina B12"],
      correctQuestion: "Vitamina C"
    },
    {
      question: "Quais são as duas especiarias mais populares do mundo",
      options: ["Pimenta e alho", "Pimenta e mostarda", "Orégano e mostarda"],
      correctQuestion: "Pimenta e mostarda"
    },
    {
      question: "Qual refrigerante famoso foi inventado em 1892",
      options: ["Pepsi", "Guaraná", "Coca Cola"],
      correctQuestion: "Coca Cola"
    }
  ]
};

const buildAnswersOptions = (options) =>
  options
    .map(
      (option) => `
    <div class="container-input-radio">
    <input type="radio" name="option" value="${option}" />
    <label for="${option}"> ${option}</label>
    </div>`
    )
    .join("");

const cards = cardsData[params_url.questions_type] || [];
const Cards = cards
  .map((card) => {
    return `
<div class="container-card">
  <strong>
    <p class="question">${card.question}?</p>
  </strong>
  <form>
    ${buildAnswersOptions(card.options)}
    <div class="container-btn">
      <button type="submit" onclick="alertar('${
        card.correctQuestion
      }')" class="btn">
        Responder e ver resultado
      </button>
    </div>
  </form>
</div>
`;
  })
  .join("");

document.querySelector("#container").innerHTML =
  Cards + `<a href="/" class="btn">Jogar novamente</a>`;

window.alertar = function (respostaCerta) {
  const elementoCheckado = document.querySelector(
    'input[name="option"]:checked'
  );

  if (!elementoCheckado) return false;

  const valorElementoCheckado = elementoCheckado.value;

  if (valorElementoCheckado === respostaCerta) {
    alert("você acertou!");
  } else {
    alert("a resposta correta é " + respostaCerta);
  }

  return false;
};
