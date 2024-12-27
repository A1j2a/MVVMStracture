module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@components': './src/shared/components',
          '@constant': './src/shared/constant',
          '@theme': './src/shared/theme',
          '@colors': './src/shared/theme/colors',
          '@fontSize': './src/shared/theme/fontSize',
          '@font': './src/shared/theme/font',
          '@globalStyles': './src/shared/theme/globalStyles',
          '@layout': './src/shared/theme/layout',
          '@utils': './src/utils',
          '@responsiveDimension': './src/utils/responsiveDimension',
        },
      },
    ],
  ],
};
