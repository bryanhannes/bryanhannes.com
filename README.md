# Bryan Hannes Personal Website

A personal website built with Astro, and Tailwind CSS. This project replicates the design of Bryan Hannes's website.

## Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Getting Started

### Prerequisites 

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/bryan-website.git
cd bryan-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:4321`.

## Building for Production

```bash
npm run build
# or
yarn build
```

The built site will be in the `dist/` directory.

## Project Structure

- `public/` - Static assets like images
- `src/`
    - `components/` - Reusable UI components
    - `layouts/` - Page layouts
    - `pages/` - Astro pages
    - `styles/` - Global CSS files

## Customization

To personalize this site:

1. Replace the profile image and product images in the `public/images/` directory
2. Update content in the component files
3. Modify colors in `tailwind.config.cjs` and `src/styles/global.css`

## License

This project is open source and available under the [MIT License](LICENSE).
