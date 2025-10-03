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

Notes
- Fonts: Inter is loaded via Google Fonts.
- Design tokens (Ocean Professional):
  - primary #2563EB, secondary/success #F59E0B, error #EF4444
  - background #f9fafb, surface #ffffff, text #111827
  - Subtle gradients: body uses a radial gradient from blue (primary/10) to gray-50 as required
- Accessibility: semantic landmarks (header, main, section, footer), accessible nav toggle with aria-expanded, inputs labeled via aria-label and required attributes, high-contrast buttons.
- Images: Example project cards reference exported Figma images under ../assets/figmaimages for convenience. If you add your own images, place them in assets/img and update the src paths accordingly.
