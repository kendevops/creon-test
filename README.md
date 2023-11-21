# NIFTABLES | AI & CRYPTO TECHNOLOGY

This is my solution to the assessment of Mid Frontend Engineer at [NIFTABLES](https://www.niftables.com/). This project `CREON` showcases my skills in developing responsive and visually appealing web applications, particularly focusing on AI and crypto technology.

## Planning Stage

 1. Design Breakdown:
    1. Carefully reviewed the provided design and organized it into manageable phases.
    2. Started with the Xtra Large Screen to address any design intricacies unique to larger displays.
    3. Started with the Xtra Large Screen because i noticed the text and structure was a little bit different.
 2. Asset Optimization:
    1. Prioritized the optimization of assets, including downloading the hero background video and utilizing hosted links for other videos to enhance site performance.
 3. Component Breakdown:
    1. Header Component.
    2. Hero Component
        1. Integrated Header and Hero components to support the background video and linear-gradient overlay.
    3. Mission Component.
    4. Profiting Component.
    5. AI Component.
    6. ComingSoon Component.
    7. CreonPass Component.
    8. Footer Component.
 4. Responsiveness:
    1. Ensured responsiveness across various screen sizes by meticulously testing and adjusting each component.
    2. Addressed and resolved any bugs or design inconsistencies identified during the development phase.

## Folder Structure

The project structure is organized as follows:

- `/public`: Contains the video, images, icons, fonts, reducers, and selectors.
- `/src`: Contains the application source code.
  - `/src/app`: The main entry point of the application, it Contains the application sections (Components).
    - `/src/components`: Contains the reusable components used in the application.
    - `/src/components/atoms`: Contains the smaller resuable components in the molecules folder.
    - `/src/components/molecules`: Contains resuable components which is much bigger than the atoms, some molecules component are made of components in atoms.
    - `/src/components/layouts`: Contains the final components that will were used on the App.
- `/tailwind.config.ts`: Contains some of the configurations for the tailwindCSS and utility functions.
- `/next.config.js`: The configuration for the video dependecy i used for the download video.

## Specified Technologies

- &#9745; Next
- &#9745; Typescript
- &#9745; TailwindCSS


## Practices I followed

- Changed the global CSS, Included the Creon Favicon.
- Followed best practices for component-based architecture.
- Emphasized modular design to enhance code maintainability.
- Utilized responsive design principles for optimal user experience across devices.
- Wrote this readme to document my work process


## Scripts to test Project

In the project directory, you can run:

### `npm install`

This will install the dependencies and devdependencies to enable you get the node modules.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
