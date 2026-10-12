# Morangos AgroBerti: prévia do site

Prévia de site para a Morangos AgroBerti (Verdinho, Criciúma/SC), com encomenda de morangos que chega pronta no WhatsApp, página para confeitarias e restaurantes, o cultivo semi-hidropônico e a história da família.

Site estático em HTML, CSS e JavaScript puro, publicado no GitHub Pages por GitHub Actions.

## Segurança

- **Content Security Policy** restritiva: só roda o JavaScript do próprio site, sem scripts inline nem de terceiros.
- **Entrada tratada:** a quantidade é limitada de 1 a 50 e os textos livres têm tamanho máximo e viram uma linha só antes de ir para a mensagem.
- **Sem dados guardados:** nada é enviado a servidor, não há cookies nem rastreadores; a encomenda vai direto para o WhatsApp.
- **Links externos isolados** (`noopener noreferrer`) e mapa em `iframe` com `sandbox`.
- **Fora dos buscadores** (`noindex`) enquanto for prévia.

---

Desenvolvido por [Gabriel Pacheco Kiesel](https://gabriel-pacheco-k.github.io).
