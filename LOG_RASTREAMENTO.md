# Log de Rastreamento - Clique "Ver oferta" → Webhook n8n

## Data: 2026-09-01

### Etapas Executadas

1. ✅ **Backup inicial** — Criado backup do `index.html` em `E:\codex\2026-09-01\referenced-chatgpt-conversation-this-is-an-3\work\index.html.backup.before-clique-tracking.txt`
2. ✅ **Função `registrarCliqueOferta()`** — Atualizada para receber `(asin, pagina, linkAfiliado)`
3. ✅ **Payload do webhook** — Adicionado `link_afiliado` no `URLSearchParams`
4. ✅ **onclick Home** — Atualizado para enviar o link afiliado já presente no `href`
5. ✅ **onclick Produto** — Atualizado para enviar o link afiliado já presente no `href`
6. ✅ **onclick Pedido** — Atualizado para enviar o link afiliado já presente no `href`
7. ✅ **Validação de tamanho** — Comparado tamanho antes/depois do `index.html` para checar integridade do arquivo
8. ✅ **Validação de scripts** — Extraídos apenas scripts JavaScript normais, ignorando `application/ld+json`
9. ✅ **Validação sintática** — `node --check` executado no JavaScript extraído
10. ✅ **git diff** — Revisado antes de qualquer commit

### Arquivos Alterados

- `index.html` — Apenas o rastreamento de cliques foi ajustado
- `LOG_RASTREAMENTO.md` — Atualizado com as etapas, resultados e validações desta rodada
- `work/index.html.backup.before-clique-tracking.txt` — Backup de segurança fora do projeto original

### Trechos Modificados

- `registrarCliqueOferta(asin, pagina, linkAfiliado)` agora envia `link_afiliado`
- Home: `onclick="registrarCliqueOferta(..., 'home', safeUrl)"`
- Produto: `onclick="registrarCliqueOferta(..., 'produto', ensureAffiliateTag(p.affiliate_url))"`
- Pedido: `onclick="registrarCliqueOferta(..., 'pedido', ensureAffiliateTag(p.link) || '#')"`

### Validações

- Tamanho do arquivo: mantido íntegro, com aumento esperado por inclusão do novo campo de rastreamento
- `node --check`: OK no JavaScript extraído
- Scripts analisados: apenas os blocos JavaScript normais do arquivo, sem `application/ld+json`
- HTML: tags de fechamento principais preservadas, sem sinal de truncamento

### Resultado

- O evento de clique continua funcionando e agora carrega também o link afiliado correspondente ao `href`
- Nenhum outro comportamento do `index.html` foi alterado intencionalmente
- Commit e push serão executados após esta validação final, conforme autorização do usuário

### Último Ponto Concluído

✅ Alteração de rastreamento aplicada, validada e documentada. Validação final concluída; commit e push autorizados pelo usuário.
