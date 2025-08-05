import path from 'node:path';

export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: path.resolve('./tailwind.config.js'), // Explicit path
    },
    autoprefixer: {},
  },
}