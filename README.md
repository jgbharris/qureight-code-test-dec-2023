# Qureight code test

## Instructions

This app was bootstrapped using create react app.

To get this working locally please clone the repo and run `npm i` or `npm install` in the parent folder and then run `npm start`.

To get the server working please navigate to the server folder in the project, run `npm install`, and then run `node app.js`

You will also need to change the file path in `server/app.js` at line 18 to the file path on your local machine - this is where the uploaded photos are saved to disk.


## Overview

This is a basic React app with image upload functionality.

I used styled components for styling rather than a UI library.

Video of app working: https://recordit.co/Ktgl9B6Nkj


## Code 

The Front End works using a hidden file input component which has a ref linking to the "Choose File" button.

When the "Choose File" button is clicked it triggers the `handleFileInput` function which creates a new FormData object and appends the image file to it.

The updated FormData is then stored in state as `imageToBeUploaded`.

`imageToBeUploaded` is then used in the `handleUpload` function which posts the image using axios and clears the preview image.

For the preview image the uploaded file is stored in state and a useEffect hook with a watch for the file then passes the file into `URL.createObjectURL()` and stores the result in state as `imageForPreview` which is then passed to an image as the src.

The placeholder image or the preview image is then conditionally rendered based on imageForPreview.






