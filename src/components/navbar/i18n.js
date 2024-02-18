// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'HOME',
          register: 'REGISTER',
          magazine: 'MAGAZINE',
          gallery: 'GALLERY',
          artists: 'ARTISTS',
          apply: 'APPLY',
          price:'PRICE',
          description:'DESCRIPTION',
          title:'TITLE',
          materials:'MATERIALS',
          selectArtist:'SELECT AN ARTIST',
          dimensions:'DIMENSIONS',
          upload:'UPLOAD AN IMAGE',
          createArt:'CREATE ARTWORK',
          SketchList: 'SKETCH LIST',
          draw: 'DRAW',
          movies: 'MOVIES',
          sketchText: 'STEP 1: PRESS U TO UPLOUD AN IMAGE     STEP 2: CLICK OVER THE SKETCH TO START DRAWING YOUR IMAGE'
        },
      },
      es: {
        translation: {
          home: 'INICIO',
          register: 'REGISTRARSE',
          gallery: 'GALERIA',
          artists: 'ARTISTAS',
          apply: 'APLICAR',
          price:'PRECIO',
          description:'DESCRIPCION',
          title:'TITULO',
          materials:'MATERIALES',
          selectArtist:'SELECCIONA UN ARTISTA',
          dimensions:'DIMENSIONES',
          upload:'CARGA UNA IMAGEN',
          createArt:'CREAR OBRA',
          creationDate:'FECHA DE CREACION',
          magazine:'REVISTA',
          SketchList: 'BOCETOS',
          draw: 'DIBUJAR',
          movies: 'PELICULAS',
          sketchText: 'PASO 1: APRIETA U PARA CARGAR UNA IMAGEN     PASO 2: PRESIONA EL CLICK ENCIMA DEL SKETCH Y DIBUJA TU IMAGEN'
        },
      },
    },
    lng: 'en', // idioma por defecto
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
