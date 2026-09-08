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

print("Downloading transparent mirror frame from Wikimedia...")
mirror_url = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Oval_Photo-Mirror_Frame_with_Transparent_Background_780%C3%971040.png"
r = requests.get(mirror_url)
if r.status_code == 200:
    with open(f"{assets_dir}/antique-mirror-frame.png", "wb") as f:
        f.write(r.content)
    print("Mirror downloaded successfully!")
else:
    print("Failed to download mirror:", r.status_code)

print("Removing backgrounds from generated assets using rembg...")
for item in items:
    input_path = os.path.join(assets_dir, item)
    output_path = os.path.join(assets_dir, item.replace(".jpg", ".png"))
    
    if os.path.exists(input_path):
        print(f"Processing {item}...")
        try:
            with open(input_path, 'rb') as i:
                input_data = i.read()
                
            output_data = remove(input_data)
            
            with open(output_path, 'wb') as o:
                o.write(output_data)
            print(f"Saved {output_path}")
        except Exception as e:
            print(f"Error processing {item}: {e}")
    else:
        print(f"File not found: {input_path}")

print("All done!")
