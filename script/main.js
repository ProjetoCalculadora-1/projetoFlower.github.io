onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  function FlowerLink() {
    window.location.href = 'tela-flower.html'
  }
  function SurpresaLink() {
    window.location.href = '/Tela_Surpresa.html'
  }
  function memorias_EmVideo() {
    window.location.href = '/memoris.html'
  }
  function insert(num) {
    let numero = document.getElementById('num1');
    numero.value = numero.value + num;
}
function clean() {
  numero = document.getElementById('num1').value = "";

}
function resultado() { 
    let resultado = document.getElementById('num1');

    if (resultado) {
        resultado.value = eval(resultado.value);
    }
}
function tela_Inicial_Link() {
    let direcionamento = window.location.href = 'assets/tela-inicial.html';

    console.log(direcionamento);
}