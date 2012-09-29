sass_path = File.dirname(__FILE__)
css_path = File.join(sass_path, "..", "css")
images_dir = File.join(sass_path, "..", "img")
load File.join(sass_path, "..", "..", "..", "lib", "st2", "resources", "themes")
output_style = :compressed
environment = :production