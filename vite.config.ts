import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
import path from 'path'

export default (): UserConfigExport => {
  return {
    server: {
      port: 1216
    },
    plugins: [alias(), vue()],
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
      },
    },
    // plugins: [NavLinkPatch()],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      format: 'cjs'
    },
    legacy: {
      buildSsrCjsExternalHeuristics: true
    }
  }
}
