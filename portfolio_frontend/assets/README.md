Ocean Professional Static Portfolio

Files
- assets/index.html — main static page
- assets/styles.css — global styles (Ocean Professional theme + Figma tokens mapped)
- assets/main.js — small interactivity (mobile nav toggle, smooth scroll)
- assets/img/ — place optional images here (avatars, logos) if needed

How to open locally
1) Open the folder professional-portfolio-website-24515-24524/portfolio_frontend/assets
2) Double-click index.html to open in your browser
   - Or serve with a simple HTTP server for better routing:
     - Python 3: python3 -m http.server 8080
     - Node: npx serve .
3) Ensure styles.css and main.js are in the same directory so relative links resolve

Style guide adherence
- Theme: Ocean Professional (primary #2563EB, secondary/success #F59E0B, error #EF4444, bg #f9fafb, surface #ffffff, text #111827)
- Aesthetic: modern, subtle shadows, rounded corners, minimalist layout, smooth transitions and soft gradients
- Typography: Inter with pixel-approximated sizes mapped from the Figma JSON (display, section headings, card titles/prices)

Images
- Project cards and hero/about visuals use exported Figma assets located at: professional-portfolio-website-24515-24524/assets/figmaimages
- To swap images, replace the src values in index.html with other files from that directory or drop new images under assets/img and update paths accordingly

Accessibility
- Semantic landmarks (header, nav, main, section, footer)
- Accessible mobile nav toggle (aria-expanded), labeled inputs, adequate color contrast on primary buttons

Usage
- Open assets/index.html directly in a browser; it references ./styles.css and ./main.js in the same folder
- Sections: Hero (“Breath Natural”), Projects (“Our Trendy plants”), About, and Contact/Footer
- Colors and typography follow Ocean Professional tokens defined in styles.css :root

Usage
- Open assets/index.html directly in a browser; it references ./styles.css and ./main.js in the same folder
- Sections: Hero (“Breath Natural”), Projects (“Our Trendy plants”), About, and Contact/Footer
- Colors and typography follow Ocean Professional tokens defined in styles.css :root
