// Configuration de Vite pour Mondes Immergés - GitHub Pages
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Répertoire racine du projet
  root: './',
  
  // IMPORTANT: Pour GitHub Pages - Remplacer 'mondes-immerges' par le nom exact de votre repo
  base: process.env.NODE_ENV === 'production' 
    ? '/mondes-immerges/' 
    : '/',
  
  // Configuration du serveur de développement
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  // Configuration de la construction
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false, // Désactivé pour réduire la taille
    
    // Options de rollup pour optimiser le bundling
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      
      // Séparer les gros modules en chunks séparés
      output: {
        manualChunks: {
          'three': ['three'],
          'gsap': ['gsap'],
          'utils': ['ldrs']
        }
      }
    },
    
    // Limite des chunks pour éviter les warnings
    chunkSizeWarningLimit: 1000
  },
  
  // Résolution des alias de chemin
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  
  // Optimisations - Pré-bundler les dépendances
  optimizeDeps: {
    include: ['three', 'gsap', 'ldrs'],
    force: true // Forcer le re-bundling
  },
  
  // Types d'assets à inclure
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.glb', '**/*.gltf']
});