// Função para carregar componentes HTML usando XMLHttpRequest
function loadComponent(elementId, filePath) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filePath, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 0) {
        // status 0 é para arquivos locais (file://)
        document.getElementById(elementId).innerHTML = xhr.responseText;
      } else {
        console.error('Erro ao carregar ' + filePath + ': ' + xhr.status);
      }
    }
  };
  xhr.send(null);
}

// Carregar componentes quando a página estiver pronta
document.addEventListener('DOMContentLoaded', function() {
  loadComponent('header-container', 'components/header.html');
  loadComponent('footer-container', 'components/footer.html');
});

