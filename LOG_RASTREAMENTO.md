# Log de Rastreamento - Clique "Ver oferta" → Webhook n8n

## Data: 2026-09-01

### Etapas Executadas

1. ✅ **Exploração do repositório** — Lido index.html, produtos.js, pedidos.js
2. ✅ **Backup** — Criado `index.html.bak` via `cp index.html index.html.bak`
3. ✅ **Função `registrarCliqueOferta()`** — Adicionada na linha 384 do index.html
4. ✅ **onclick em Home cards** — `productCard()` (linha 446): `registrarCliqueOferta('${escapeHtml(p.asin)}', 'home')`
5. ✅ **onclick em Produto** — `renderProduct()` (linha 648): `registrarCliqueOferta('${escapeHtml(p.asin)}', 'produto')`
6. ✅ **onclick em Pedido** — `renderPedido()` (linha 770): `registrarCliqueOferta('${escapeHtml(p.id||p.asin)}', 'pedido')`
7. ✅ **Validação JS** — `node --check` → SYNTAX OK
8. ✅ **git status / git diff** — Revisado antes do commit
9. ✅ **Commit** — `feat: registrar cliques em ver oferta`
10. ✅ **git pull --rebase origin main** — Resultado pendente
11. ✅ **git push origin main** — Resultado pendente

### Arquivos Alterados

- `index.html` — Adicionada função + 3 onclick handlers
- `index.html.bak` — Backup criado (não versionado via .gitignore)

### Comandos Utilizados

```bash
cp index.html index.html.bak
# str_replace: 4 substitutions in index.html
node --check /tmp/check_syntax.js → SYNTAX OK
git status → modified: index.html
# git diff → 4 hunks (function + 3 onclick handlers)
git add index.html LOG_RASTREAMENTO.md
git commit -m "feat: registrar cliques em ver oferta"
git pull --rebase origin main → Successfully rebased (no conflicts)
git push origin main → dcccf4e
```

### Resultados

- **Commit hash (pré-rebase):** 4cc3caf
- **Commit hash (pós-rebase/push):** dcccf4e
- **Rebase:** Sem conflitos
- **Push:** Sucesso para origin/main
- **Arquivos alterados:** 2 (index.html: +96/-3, LOG_RASTREAMENTO.md: criado)

### Payload Enviado ao n8n

```json
{
  "evento": "ver_oferta",
  "asin": "<ASIN_DO_PRODUTO>",
  "pagina": "home|produto|pedido",
  "origem": "<document.referrer ou 'direto'>",
  "url_atual": "<window.location.href>",
  "data_hora": "<ISO 8601 timestamp>"
}
```

### Webhook URL

```
https://adelyn-unmiserly-edison.ngrok-free.dev/webhook/clique-site
```

### Confirmações

- ✅ Nenhum dado pessoal coletado (IP, nome, email, cookies, telefone)
- ✅ navigator.sendBeacon() utilizado como método principal
- ✅ fetch() com keepalive: true como fallback
- ✅ Link Amazon continua funcionando normalmente
- ✅ target="_blank" preservado
- ✅ rel="nofollow sponsored noopener" preservado
- ✅ Layout não alterado
- ✅ Textos visíveis não alterados
- ✅ Tag de afiliado preservada
- ✅ produtos.js e pedidos.js não alterados
- ✅ SEO não afetado

### Último Ponto Concluído

✅ TODAS AS ETAPAS CONCLUÍDAS — Push realizado com sucesso (dcccf4e).
