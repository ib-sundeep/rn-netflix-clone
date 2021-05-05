module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './api',
            assets: './assets',
            providers: './providers',
            screens: './screens',
            ui: './ui',
            utils: './utils',
          },
        },
      ],
    ],
  };
};
