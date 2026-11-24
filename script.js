const toggleBtn = document.getElementById('theme-toggle');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keys button');

// 1. Alternar entre fundo normal e preto
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Modo Normal';
  } else {
    toggleBtn.textContent = '🌙 Modo Preto';
  }
});

// 2. Funcionamento básico da calculadora
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value) || '';
      } catch {
        display.value = 'Erro';
      }
    } else {
      display.value += value;
    }
  });
});