# food-explorer-139177-139186

Images
- Figma PNGs live under repository root: ./assets/figmaimages
- The CRA app serves images from: food_frontend/public/assets/figmaimages
- Ensure the PNG files are present under the CRA public path so image URLs like /assets/figmaimages/figma_image_1_83.png work.
- During CI/deployment, copy or sync these files to the CRA public folder.