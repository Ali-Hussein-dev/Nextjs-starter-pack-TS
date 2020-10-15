const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    enabled: true,
    content: [
      './src/components/**/*.{ts, tsx,js,jsx}',
      './src/pages/**/*.{ts, tsx,js,jsx}',
    ],
    defaultExtractor: (content) =>
      content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
