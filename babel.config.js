module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            constants: './constants',
            screens: './screens',
            ui: './ui',
          },
        },
      ],
    ],
  };
};
