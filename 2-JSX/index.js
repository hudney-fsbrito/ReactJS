const root = document.querySelector("#root");

const t1 = React.createElement("h1", {id: "Titulo principal", class: "Teste"}, "Hello Word!");
const t2 = React.createElement("h3", {id: "Título menor", class: "Teste"}, "Outro conteúdo");

const headline = React.createElement("div", null, t1,t2);

ReactDOM.render(headline,root);