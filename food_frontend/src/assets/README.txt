This src/assets folder is reserved for module-imported assets.

For Figma-exported PNGs in this project we use the CRA public folder:
- Put images in: food_frontend/public/assets/figmaimages
- Reference them in JSX via absolute path: /assets/figmaimages/<file>.png

If you prefer import-based usage (bundled), place images under src/assets and:
  import burger from '../assets/figmaimages/figma_image_1_83.png';
  <img src={burger} alt="" />
