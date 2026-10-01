from PIL import Image
from pathlib import Path
p = Path('deck-build')
fs = sorted(p.glob('slide-*.png'))
print('rendered', len(fs))
for start in range(0, len(fs), 4):
    ims = [Image.open(x).convert('RGB').resize((640, 360)) for x in fs[start:start+4]]
    sheet = Image.new('RGB', (1280, 720), (8, 14, 25))
    for j, im in enumerate(ims):
        sheet.paste(im, ((j % 2) * 640, (j // 2) * 360))
    sheet.save(p / f'contact-{start//4+1}.png')
