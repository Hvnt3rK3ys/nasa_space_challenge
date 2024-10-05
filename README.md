# Unix tree for the project, saved at the source directory
```python
├───components
│   ├───fEarthMap (Components for the map visualization)
│   │       LeMapa.tsx (Main class for the map)
│   │       
│   ├───fFilters (Components to filter the visualization)
│   │       FilterDate.tsx (Class to filtering dates)
│   │       Location.tsx (Class to filtering locations)
│   │       ShowCurve.tsx (Class to show the satellite trayectory)
│   │       
│   ├───fHeader (Component to show the authors and coding process)
│   │       Header.tsx
│   │
│   └───fShowMeta (Component to download the cached metadata from the selected dots from the GUI)
│           DownloadData.tsx (Enable download at various formats)
│           PickedData.tsx (Component to show the EDA for the metadata selected in the GUI)
│
├───data (Folder to connect the API to the GUI)
│       BruteData.tsx (GET Class to connect API)
│       Searcher.tsx (Class to optimize the search)
│       NextDot.tsx (POST Class to search the nearest dots and return the Trained Model)
│
├───pages (Folder to structure the project)
│       404.tsx (404 error response)
│       index.tsx (Root page index)
│       ShowData.tsx (Page to do EDA the selected dots)
│       _app.tsx (Start the app with customized behavior)
│
├───public (Folder that contains assets)
│       efe.png
│
└───styles (Folder that contains styles for each component it follows the mobile first convention)
    │   global.css (Global system design styles)
    │   not.module.scss (404 page styled)
    │
    ├───fonts (Fonts in woff format)
    │       GeistMonoVF.woff
    │       GeistVF.woff
    │
    ├───sExploreData (Styling ShowData page)
    │       DownloadData.module.scss (Download data component styles)
    │       PickedData.module.scss (EDA styles component)
    │
    └───sHome (Styling Home page)
            F_Curve.module.scss (Styling the satellite trayectory component)
            F_Date.module.scss (Styling the date filter component)
            F_Location.module.scss (Styling the location filter component)
            Header.module.scss (Styling the header component)
            OurMap.module.scss (Styling the map component)
```



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
