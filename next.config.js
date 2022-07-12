/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  StrictReactMode: true,
    /* Add Your Scss File Folder Path Here */
  sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  },
  defaultMode: 'dark',
}
