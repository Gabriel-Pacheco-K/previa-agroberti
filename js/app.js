'use strict';

(() => {
  const WHATS = '5548996047140';
  const whatsLink = (texto) => `https://wa.me/${WHATS}?text=${encodeURIComponent(texto)}`;

  document.querySelectorAll('[data-whats]').forEach((a) => {
    a.href = whatsLink(a.dataset.whats);
  });

  // ─── Encomenda ──────────────────────────────────────────────
  const MIN = 1;
  const MAX = 50;

  const form = document.getElementById('order');
  const qtd = document.getElementById('qtd');
  const unidade = document.getElementById('unidade');
  const erro = document.getElementById('form-error');

  const unidadeAtual = () => form.querySelector('input[name="produto"]:checked').dataset.unidade;
  const plural = (n, u) => `${n} ${u}${n === 1 ? '' : 's'}`;

  // Quantidade sempre inteira e dentro do limite, mesmo se digitarem algo estranho
  const lerQtd = () => {
    const n = Math.trunc(Number(qtd.value));
    return Number.isFinite(n) ? Math.min(MAX, Math.max(MIN, n)) : MIN;
  };
  const ajustar = (delta) => { qtd.value = lerQtd() + delta; qtd.value = lerQtd(); };

  document.getElementById('menos').addEventListener('click', () => ajustar(-1));
  document.getElementById('mais').addEventListener('click', () => ajustar(1));
  qtd.addEventListener('change', () => { qtd.value = lerQtd(); });

  form.querySelectorAll('input[name="produto"]').forEach((r) => r.addEventListener('change', () => {
    unidade.textContent = `(${unidadeAtual()}s)`;
  }));

  // Texto livre vira uma linha só, sem espaços sobrando, antes de ir para a mensagem
  const limpar = (s, max) => s.replace(/\s+/g, ' ').trim().slice(0, max);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dados = new FormData(form);
    const nome = limpar(String(dados.get('nome') || ''), 60);
    const obs = limpar(String(dados.get('obs') || ''), 200);

    if (!nome) { erro.textContent = 'Conta pra gente o seu nome.'; form.nome.focus(); return; }
    erro.textContent = '';

    const linhas = [
      'Olá! Quero fazer uma encomenda pelo site:',
      '',
      `🍓 ${dados.get('produto')}: ${plural(lerQtd(), unidadeAtual())}`,
      `👤 Nome: ${nome}`,
      `🏠 É para: ${dados.get('para')}`,
      `📦 Receber: ${dados.get('receber')}`,
    ];
    if (obs) linhas.push(`📝 Obs.: ${obs}`);

    window.open(whatsLink(linhas.join('\n')), '_blank', 'noopener');
  });
})();
