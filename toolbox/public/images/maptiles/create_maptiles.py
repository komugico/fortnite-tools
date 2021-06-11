from PIL import Image
import os

SIZE = 2048
img = Image.open("map.png").resize((SIZE, SIZE))

for z in range(4):
    for x in range(2 ** z):
        os.makedirs("./{0}/{1}/".format(z, x), exist_ok=True)
        for y in range(2 ** z):
            width = SIZE // 2 ** z
            height = SIZE // 2 ** z
            img.crop((width * x, height * y, width * (x + 1), height * (y + 1))).resize((512, 512)).save("./{0}/{1}/{2}.png".format(z, x, y))