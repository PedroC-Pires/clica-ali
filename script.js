// Seleciona o elemento HTML com o ID "btnNao"
const btnNao = document.getElementById("btnNao");
// Declara e inicializa as variáveis randX e randY com o valor 0
let randX,
  randY = 0;

// Função chamada quando o botão "btnNao" é clicado
function nope() {
  // Obtém a largura e altura da janela do navegador
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  // Gera coordenadas X e Y aleatórias dentro da janela do navegador
  randX = Math.random() * vw - 215;
  randY = Math.random() * vh - 65;
  // Arredonda as coordenadas para números inteiros
  randX = Math.round(randX);
  randY = Math.round(randY);
  // Garante que as coordenadas não sejam negativas
  if (randX < 0) {
    randX += 215;
  }
  if (randY < 0) {
    randY += 215;
  }

  // Define a posição do botão "btnNao" de acordo com as coordenadas aleatórias
  btnNao.style.position = "fixed";
  btnNao.style.left = randX + "px";
  btnNao.style.top = randY + "px";

  // Exibe as coordenadas X e Y no console do navegador para fins de depuração
  console.log(randX);
  console.log(randY);
}

// Função chamada quando o botão "btnSim" é clicado
function yep() {
  // Fecha um modal com o ID "modal", se existir
  document.getElementById("modal").close();
  // Exibe uma mensagem de agradecimento usando a biblioteca "Swal"
  Swal.fire({
    title: "Obrigado!",
    text: "Gostariamos de expressar nossos sinceros agradecimentos por todo o seu empenho e dedicação como nosso professor. Parabéns por se tornar o professor regente da 3B! Estamos muito felizes em tê-lo liderando nossa turma até o fim deste ano.",
    color: "#ffffff",
    background: "#ffffff00",
    backdrop: "#333344ee",
  }).then(function () {
    //Atualiza a página ao fechar o alert
    location.reload();
  });
}

function temCerteza() {
  // Fecha um modal com o ID "modal", se existir
  document.getElementById("modal").close();
  // Inicia a sequencia de mensagens da biblioteca "Swal" para caso o usuário clique em 'não'
  Swal.fire({
    title: "Você tem certeza??",
    text: "Talvez você não possa desfazer esta ação!",
    icon: "warning",
    color: "#ffffff",
    background: "#ffffff00",
    backdrop: "#333344ee",
    showCancelButton: true,
    confirmButtonColor: "#e74040",
    cancelButtonColor: "#39bb74",
    confirmButtonText: "Não quero mesmo!",
    cancelButtonText: "Mudei de ideia!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "error",
        title: "Nuh uh!",
        text: "Não pode!",
        color: "#ffffff",
        background: "#ffffff00",
        backdrop: "#333344ee",
        showConfirmButton: false,
        timer: 2500,
      }).then(function () {
        //Atualiza a página ao fechar o alert
        location.reload();
      });
    }else{
      location.reload();
    }
  });
}
