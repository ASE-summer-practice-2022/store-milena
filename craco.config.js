const path = require('path');

module.exports = {
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src', 'components', 'Pages'),
        '@system': path.resolve(__dirname, 'src', 'components', 'system'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        '@stores': path.resolve(__dirname, 'src', 'stores'),
        '@services': path.resolve(__dirname, 'src', 'services'),
        '@models': path.resolve(__dirname, 'src', 'models'),
      }
    },
};
