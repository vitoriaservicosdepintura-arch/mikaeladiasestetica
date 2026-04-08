from PIL import Image
import collections
img = Image.open('public/logo.png').convert('RGBA')
width, height = img.size
pix = img.load()
counts = collections.Counter()
near_white = 0
semi_transparent = 0
nontransparent = 0
for y in range(height):
    for x in range(width):
        rgba = pix[x, y]
        counts[rgba] += 1
        r, g, b, a = rgba
        if a > 0:
            nontransparent += 1
            if r > 230 and g > 230 and b > 230:
                near_white += 1
            if a < 255:
                semi_transparent += 1
print('size', width, height)
print('top', counts.most_common(20))
print('nontransparent pixels', nontransparent)
print('near-white opaque/semtransparent pixels', near_white)
print('semi-transparent pixels', semi_transparent)
