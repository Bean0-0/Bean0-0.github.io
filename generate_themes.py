import os
import re
import json

THEMES_DIR = 'themes'
OUTPUT_JS = 'js/themes.js'
OUTPUT_HTML = 'themes_grid.html'

themes = {}

# Regex to extract variables
var_regex = re.compile(r'--([a-zA-Z0-9-]+):\s*(#[a-fA-F0-9]{3,6}|[a-zA-Z]+);')

for filename in os.listdir(THEMES_DIR):
    if filename.endswith('.css'):
        theme_name = filename.replace('.css', '').replace('_', ' ')
        theme_id = filename.replace('.css', '')
        
        with open(os.path.join(THEMES_DIR, filename), 'r') as f:
            content = f.read()
            
            # Extract variables
            vars = {}
            for match in var_regex.finditer(content):
                vars[match.group(1)] = match.group(2)
            
            # Map to our system
            # Defaults
            bg = vars.get('bg-color', '#000000')
            main = vars.get('main-color', '#ffffff')
            text = vars.get('text-color', '#cccccc')
            sub = vars.get('sub-color', '#888888')
            sub_alt = vars.get('sub-alt-color', '#333333')
            
            themes[theme_id] = {
                'name': theme_name.title(),
                'colors': {
                    '--bg-color': bg,
                    '--primary-color': main,
                    '--text-color': text,
                    '--heading-color': main, # Using main color for headings
                    '--card-bg': sub_alt,
                    '--header-bg': bg, # Will handle opacity in CSS or JS if needed, but raw color here
                },
                'preview': [bg, main, text, sub_alt]
            }

# Generate JS
js_content = f"const themes = {json.dumps(themes, indent=4)};"
with open(OUTPUT_JS, 'w') as f:
    f.write(js_content)

# Generate HTML Grid
html_content = ""
for theme_id, theme in sorted(themes.items(), key=lambda x: x[1]['name']):
    colors = theme['preview']
    html_content += f"""
    <div class="theme-btn" onclick="setTheme('{theme_id}')" data-theme-id="{theme_id}" style="background-color: {colors[0]};">
        <span class="theme-name" style="color: {colors[2]};">{theme['name']}</span>
        <div class="theme-colors">
            <span class="color-dot" style="background-color: {colors[0]};"></span>
            <span class="color-dot" style="background-color: {colors[1]};"></span>
            <span class="color-dot" style="background-color: {colors[2]};"></span>
            <span class="color-dot" style="background-color: {colors[3]};"></span>
        </div>
    </div>
    """

with open(OUTPUT_HTML, 'w') as f:
    f.write(html_content)

print(f"Processed {len(themes)} themes.")
