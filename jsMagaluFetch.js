document.addEventListener('DOMContentLoaded', function() {
    carga('');
});
  
function carga(n) {
fetch('https://brasilapi.com.br/api/pix/v1/participants')
    .then(response => response.json())
    .then(data => {
    const quantidadeBancos = data.length;
    const mensagem = `Hoje ${quantidadeBancos} bancos aceitam PIX`;
    document.getElementById('output').innerText = mensagem;
    })
    .catch(error => {
    console.log('Ocorreu um erro:', error);
    });
}