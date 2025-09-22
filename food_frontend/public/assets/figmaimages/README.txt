Place Figma-exported images in this folder so they are served by CRA at runtime.

Usage in React:
- Reference them with absolute paths from the site root: /assets/figmaimages/filename.png
- Example: <img src="/assets/figmaimages/figma_image_1_83.png" alt="" />

Notes:
- This mirrors the original static HTML assets found in /assets/figmaimages at the repo root.
- The build/deployment step should ensure the actual PNG files are copied here.
