from PIL import Image
import colorsys

# Abrir a imagem
img_path = 'public/logo.webp'
img = Image.open(img_path)

# Converter para RGBA para suportar transparência
img = img.convert('RGBA')

# Obter dados dos pixels
width, height = img.size
pixels = img.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue

        # Converter para HSV para distinguir branco de dourado
        h, s, v = colorsys.rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)
        
        if a > 0 and ((r > 220 and g > 220 and b > 220) or (s < 0.15 and v > 0.85)):
            pixels[x, y] = (255, 255, 255, 0)

# Salvar como PNG
output_path = 'public/logo.png'
img.save(output_path, 'PNG')

print(f'✅ Logo com fundo removido salva em {output_path}')

