import os
import requests
from PIL import Image
from rembg import remove

assets_dir = "public/assets"
items = [
    "botanical-01.jpg",
    "botanical-02.jpg",
    "botanical-03.jpg",
    "tape-01.jpg",
    "tape-02.jpg"
]


def trim_transparent_canvas(path, padding_ratio=0.05):
    image = Image.open(path).convert("RGBA")

    alpha = image.getchannel("A")
    bbox = alpha.getbbox()

    if bbox is None:
        return

    cropped = image.crop(bbox)

    padding = max(
        4,
        int(max(cropped.width, cropped.height) * padding_ratio)
    )

    output = Image.new(
        "RGBA",
        (
            cropped.width + padding * 2,
            cropped.height + padding * 2,
        ),
        (0, 0, 0, 0),
    )

    output.paste(
        cropped,
        (padding, padding),
        cropped,
    )

    output.save(path)

print("Removing backgrounds from generated assets using rembg...")
for item in items:
    input_path = f"{assets_dir}/{item}"
    # Change extension to .png
    output_filename = item.rsplit('.', 1)[0] + ".png"
    output_path = f"{assets_dir}/{output_filename}"
    
    if os.path.exists(input_path):
        print(f"Processing {item}...")
        try:
            with open(input_path, 'rb') as i:
                input_data = i.read()
                
            output_data = remove(input_data)
            
            with open(output_path, 'wb') as o:
                o.write(output_data)
                
            trim_transparent_canvas(output_path)
            print(f"Saved cropped {output_path}")
            
        except Exception as e:
            print(f"Error processing {item}: {e}")
    else:
        print(f"File not found: {input_path}")

print("All done!")
