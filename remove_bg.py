from PIL import Image
import os

# Abrir a imagem
img_path = 'public/logo.webp'
img = Image.open(img_path)

# Converter para RGBA para suportar transparência
img = img.convert('RGBA')

# Obter dados dos pixels
data = img.getdata()

# Nova lista de pixels com fundo removido
new_data = []
for item in data:
    r, g, b, a = item[0], item[1], item[2], item[3] if len(item) > 3 else 255
    
    # Se o pixel é escuro (preto/muito escuro), tornar transparente
    # Usar um limiar maior para capturar mais do fundo
    if r < 100 and g < 100 and b < 100:
        new_data.append((255, 255, 255, 0))  # Transparente
    else:
        new_data.append((r, g, b, a))

# Atualizar dados da imagem
img.putdata(new_data)

# Salvar como PNG
output_path = 'public/logo.png'
img.save(output_path, 'PNG')

print(f'✅ Logo com fundo removido salva em {output_path}')

