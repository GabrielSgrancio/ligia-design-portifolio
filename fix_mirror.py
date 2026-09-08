from rembg import remove
input_path = 'public/assets/antique-mirror-frame.jpg'
output_path = 'public/assets/antique-mirror-frame.png'
with open(input_path, 'rb') as i:
    input_data = i.read()
output_data = remove(input_data)
with open(output_path, 'wb') as o:
    o.write(output_data)
print('Done!')
