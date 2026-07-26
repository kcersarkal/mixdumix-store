import json
import os
import google.generativeai as genai
import time

# --- CONFIGURACAO ---
API_KEY = "SAIzaSyA-FE8rLTRzFtNOOhGvCs6n9PnZTG4FAkk" # Substitua pela sua chave do Google AI Studio
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

def gerar_mini_review(titulo, caracteristicas):
    prompt = f"Escreva um mini review de no máximo 2 linhas para o produto: '{titulo}'. Características: {caracteristicas}. Foco: persuasão para compra na Amazon. Responda apenas com a frase."
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return "Praticidade e qualidade para o seu dia a dia com este produto incrível."

def processar_produtos():
    # Carrega o arquivo JS e limpa o cabeçalho "const PRODUCTS = "
    with open('produtos.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extrai o JSON corretamente, ignorando o cabeçalho e rodapé
    # O arquivo tem a forma "const PRODUCTS = [ ... ];"
    start_index = content.find('[')
    end_index = content.rfind(']') + 1
    json_str = content[start_index:end_index]
    produtos = json.loads(json_str)

    # Processa os 5 primeiros para teste
    for p in produtos[:5]:
        titulo = p.get('title', '')
        caracteristicas = str(p.get('informacoes_produto', ''))
        
        print(f"Processando: {titulo}")
        review = gerar_mini_review(titulo, caracteristicas)
        
        # Atualiza o campo description
        p['description'] = review
        print(f"Novo Review: {review}\n")
        time.sleep(2) # Delay para evitar limites da API

    # Salva o resultado em um novo arquivo para você conferir
    with open('produtos_teste.js', 'w', encoding='utf-8') as f:
        f.write("const PRODUCTS = ")
        json.dump(produtos, f, indent=2, ensure_ascii=False)
        f.write(";")
    
    print("Teste concluído! Verifique o arquivo 'produtos_teste.js'.")

if __name__ == "__main__":
    processar_produtos()
