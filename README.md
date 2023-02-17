# Spotmaps (2022)

## Introduction

Spotmaps, based on Brendan Dawes' [Cinema Redux](http://brendandawes.com/projects/cinemaredux), is an on-going project to map the colour narratives of different films.

Films are processed through [a Python/OpenCV pipeline](https://github.com/andywillis/spotmaps-pipeline/): each frame's colour is sampled, and a spot of average colour is produced from the combination of one second's frames.

Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.

This is revised version of [the original project](https://github.com/andywillis/spotmaps-2012) rewritten with Preact.

Coverage of the original project:

- [The Verge](https://www.theverge.com/2013/1/15/3878234/andy-willis-spotmaps-turns-movies-into-color-maps)
- [Fast Company](https://www.fastcompany.com/90185487/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels)
- [Gizmodo](http://gizmodo.com/5972740/the-color-of-movies-visualized)

### Sample output of Disney's "The Black Hole" from 1979

![The Black Hole, 1979](docs/Black%20Hole%2C%20The.png)

## Main tools

- Preact
- Open-props
- Recoil
- React Router
- Vite

## Visit

[https://spotmaps.onrender.com/](https://spotmaps.onrender.com/).

Note: this is free dyno hosted on [render.com](https://render.com/) and it takes a while to warm up.

## Local development installation

- [Install pnpm](https://pnpm.io/installation)
- Clone the repo
- Rename the cloned repo
- `cd` to the folder
- `pnpm install`
- `pnpm run dev`

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
