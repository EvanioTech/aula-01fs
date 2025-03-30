const listaAulas = [
    { id: 1, nome: "Aula 1", descricao: "Introdução ao TypeScript" },
    { id: 2, nome: "Aula 2", descricao: "Tipos de Dados" },
    { id: 3, nome: "Aula 3", descricao: "Estruturas de Controle" },
    { id: 4, nome: "Aula 4", descricao: "Funções" },
]

//for (let i = 0; i < listaAulas.length; i++) {
 //   console.log(listaAulas[i].nome);
   // console.log(listaAulas[i].descricao);
//}

listaAulas.forEach((item) => {
    console.log(item);
   
}
);