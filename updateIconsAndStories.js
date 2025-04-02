// updateIconsAndStories.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurazione dei percorsi
const svgFolderPath = path.join(__dirname, 'src/components/icon/iconedainserire');
const iconSvgsFilePath = path.join(__dirname, 'src/components/icon/iconSvgs.ts');
const storiesFilePath = path.join(__dirname, 'src/stories/icon.stories.ts');

// Funzione per verificare l'esistenza di file e cartelle
function checkPaths() {
  console.log('Verifico i percorsi...');
  
  // Verifica la cartella degli SVG
  if (!fs.existsSync(svgFolderPath)) {
    console.error(`ERRORE: La cartella "${svgFolderPath}" non esiste.`);
    console.log('Provo a crearla...');
    try {
      fs.mkdirSync(svgFolderPath, { recursive: true });
      console.log(`✅ Cartella SVG creata: ${svgFolderPath}`);
      console.log('Inserisci i tuoi file SVG in questa cartella e riesegui lo script.');
      process.exit(0);
    } catch (err) {
      console.error(`Non è stato possibile creare la cartella: ${err.message}`);
      return false;
    }
  }
  console.log(`✅ Cartella SVG trovata: ${svgFolderPath}`);
  
  // Verifica il file iconSvgs.ts
  const iconSvgsDir = path.dirname(iconSvgsFilePath);
  if (!fs.existsSync(iconSvgsDir)) {
    console.error(`ERRORE: La directory "${iconSvgsDir}" non esiste.`);
    console.log(`Provo a crearla...`);
    try {
      fs.mkdirSync(iconSvgsDir, { recursive: true });
      console.log(`✅ Directory "${iconSvgsDir}" creata con successo.`);
    } catch (err) {
      console.error(`Non è stato possibile creare la directory: ${err.message}`);
      return false;
    }
  }
  
  if (!fs.existsSync(iconSvgsFilePath)) {
    console.warn(`AVVISO: Il file "${iconSvgsFilePath}" non esiste.`);
    console.log('Verrà creato un nuovo file.');
  } else {
    console.log(`✅ File iconSvgs.ts trovato: ${iconSvgsFilePath}`);
  }
  
  // Verifica il file icon.stories.ts
  if (!fs.existsSync(storiesFilePath)) {
    console.warn(`AVVISO: Il file stories "${storiesFilePath}" non esiste.`);
    console.log('Lo script procederà solo con l\'aggiornamento delle icone.');
  } else {
    console.log(`✅ File icon.stories.ts trovato: ${storiesFilePath}`);
  }
  
  return true;
}

// Funzione per creare un template base per il file iconSvgs.ts
function getIconSvgsTemplate() {
  return `// src/components/icon/iconSvgs.ts

// Definizione inline degli SVG
export const svgIcons = {
};

// Tipo che elenca tutte le icone disponibili
export type IconType = keyof typeof svgIcons;

/**
 * Funzione per ottenere un'icona
 * @param iconName - Tipo di icona richiesto
 * @returns Stringa SVG
 */
export const getIconSvg = (iconName: IconType): string => {
  return svgIcons[iconName] || '';
};

/**
 * Restituisce un array con tutti i tipi di icone disponibili
 * @returns Array di IconType
 */
export function getAllIconTypes(): IconType[] {
  return Object.keys(svgIcons) as IconType[];
}`;
}

// Funzione per leggere tutti i file SVG dalla cartella
function readSvgFiles() {
  try {
    const files = fs.readdirSync(svgFolderPath);
    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
    
    if (svgFiles.length === 0) {
      console.error('Nessun file SVG trovato nella cartella. Aggiungine alcuni e riprova.');
      process.exit(0);
    }
    
    console.log(`Trovati ${svgFiles.length} file SVG nella cartella:`);
    svgFiles.forEach(file => console.log(` - ${file}`));
    
    return svgFiles;
  } catch (error) {
    console.error('Errore nella lettura dei file SVG:', error);
    process.exit(1);
  }
}

// Funzione per elaborare il contenuto SVG
function processSvgContent(content) {
  // Rimuovi eventuali commenti e formatta il contenuto
  let processedContent = content
    .replace(/<!--[\s\S]*?-->/g, '') // Rimuovi commenti
    .replace(/\n/g, ' ')             // Rimuovi newline
    .replace(/\s+/g, ' ')            // Riduci spazi multipli
    .trim();
    
  try {
    // Sostituisci qualsiasi attributo fill con valore colore con currentColor
    // Regex che corrisponde a fill="anycolor" ma esclude fill="none" e fill="currentColor"
    processedContent = processedContent.replace(/fill="(?!none|currentColor)(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)"/gi, 'fill="currentColor"');
    
    // Sostituisci qualsiasi attributo stroke con valore colore con currentColor
    // Regex che corrisponde a stroke="anycolor" ma esclude stroke="none" e stroke="currentColor"
    processedContent = processedContent.replace(/stroke="(?!none|currentColor)(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)"/gi, 'stroke="currentColor"');
    
    // Per gli elementi che non hanno fill, aggiungi fill="currentColor" solo se non hanno già uno stroke
    const tagRegex = /<(path|circle|rect|polygon|ellipse|line|polyline)([^>]*?)(?:\s*\/)?>/g;
    processedContent = processedContent.replace(tagRegex, (match, tag, attributes) => {
      // Se non c'è già un attributo fill e non c'è nemmeno stroke, aggiungi fill
      if (!attributes.includes('fill=') && !attributes.includes('stroke=')) {
        return `<${tag}${attributes} fill="currentColor"${match.endsWith('/>') ? ' />' : '>'}`;
      }
      return match;
    });
    
    // Log di debug per vedere i colori trovati
    const colorMatches = [...processedContent.matchAll(/fill="(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)"|stroke="(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)"/g)];
    if (colorMatches.length > 0) {
      console.warn(`Attenzione: Alcuni colori potrebbero essere rimasti nell'icona.`);
    }
    
  } catch (error) {
    // In caso di errore, restituisci l'SVG originale solo formattato
    console.warn(`Attenzione: problema durante l'elaborazione di un SVG. Utilizzo versione originale.`);
  }
  
  return processedContent;
}

// Funzione principale per ricaricare completamente il file delle icone
function reloadIconsFile() {
  const svgFiles = readSvgFiles();
  
  // Crea le entry per le icone
  let iconEntries = '';
  const processedIcons = [];
  
  for (const svgFile of svgFiles) {
    const filePath = path.join(svgFolderPath, svgFile);
    const iconName = path.basename(svgFile, '.svg')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
    
    try {
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const processedContent = processSvgContent(svgContent);
      
      iconEntries += `
  // Icona ${iconName} (da ${svgFile})
  ${iconName}: \`${processedContent}\`,`;
      
      processedIcons.push({
        original: svgFile,
        name: iconName
      });
    } catch (error) {
      console.error(`Errore nella lettura del file ${svgFile}:`, error);
    }
  }
  
  // Ottieni il template base
  let fileTemplate = getIconSvgsTemplate();
  
  // Inserisci le icone nel template
  fileTemplate = fileTemplate.replace(
    'export const svgIcons = {\n};',
    `export const svgIcons = {${iconEntries}
};`
  );
  
  // Scrivi il file completamente nuovo
  try {
    // Crea directory se non esiste
    const iconSvgsDir = path.dirname(iconSvgsFilePath);
    if (!fs.existsSync(iconSvgsDir)) {
      fs.mkdirSync(iconSvgsDir, { recursive: true });
    }
    
    fs.writeFileSync(iconSvgsFilePath, fileTemplate, 'utf8');
    console.log(`\n✅ File ${iconSvgsFilePath} completamente ricaricato con ${processedIcons.length} icone!`);
    console.log('\nIcone aggiunte:');
    processedIcons.forEach(icon => {
      console.log(` - ${icon.original} => ${icon.name}`);
    });
    
    return processedIcons;
  } catch (error) {
    console.error('Errore nella scrittura del file:', error);
    process.exit(1);
  }
}

// Funzione per aggiornare il file delle stories
function updateStoriesFile(icons) {
  if (!fs.existsSync(storiesFilePath)) {
    console.warn('File icon.stories.ts non trovato. Saltando l\'aggiornamento delle stories.');
    return;
  }
  
  if (icons.length === 0) {
    console.warn('Nessuna icona processata. Saltando l\'aggiornamento delle stories.');
    return;
  }
  
  try {
    console.log('\nAggiorno il file delle stories...');
    let storiesContent = fs.readFileSync(storiesFilePath, 'utf8');
    
    // Estrai i nomi delle icone
    const iconNames = icons.map(icon => icon.name);
    console.log(`Aggiornamento stories con ${iconNames.length} icone`);
    
    // 1. Aggiorna le opzioni nel control di tipo
    const argTypesRegex = /type: {\s*description:.*?\s*control: {\s*type: 'select',\s*options: \[(.*?)\],\s*}/s;
    const iconOptionsStr = iconNames.map(name => `'${name}'`).join(', ');
    
    if (argTypesRegex.test(storiesContent)) {
      storiesContent = storiesContent.replace(argTypesRegex, 
        `type: {
      description: 'Tipo di icona',
      control: {
        type: 'select',
        options: [${iconOptionsStr}],
      }`
      );
    } else {
      console.warn('Non è stato possibile trovare il pattern argTypes nel file icon.stories.ts');
    }
    
    // 2. Aggiorna la sezione AllIcons
    const allIconsRegex = /export const AllIcons = \(\) => html`[\s\S]*?<div style="display: grid;[\s\S]*?>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*`;/;
    
    const newIconsGrid = iconNames.map(iconName => `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div>\${icon({ type: '${iconName}' })}</div>
        <p>${iconName}</p>
      </div>`).join('');
    
    if (allIconsRegex.test(storiesContent)) {
      storiesContent = storiesContent.replace(allIconsRegex, 
        `export const AllIcons = () => html\`
  <div style="padding: 20px;">
    <h3>Galleria Icone</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 20px;">${newIconsGrid}
    </div>
  </div>
\`;`
      );
    } else {
      console.warn('Non è stato possibile trovare la sezione AllIcons nel file icon.stories.ts');
    }
    
    // 3. Aggiorna anche il default.args per usare la prima icona disponibile (se ce ne sono)
    if (iconNames.length > 0) {
      const defaultArgsRegex = /Default\.args = {\s*type: '([^']*)' as IconType,/;
      if (defaultArgsRegex.test(storiesContent)) {
        storiesContent = storiesContent.replace(defaultArgsRegex, 
          `Default.args = {
  type: '${iconNames[0]}' as IconType,`
        );
      }
    }
    
    // Scrivi il file aggiornato
    fs.writeFileSync(storiesFilePath, storiesContent, 'utf8');
    console.log(`✅ File ${storiesFilePath} aggiornato con successo!`);
    
  } catch (error) {
    console.error('Errore nell\'aggiornamento del file delle stories:', error);
  }
}

// Funzione principale
async function main() {
  try {
    console.log('=== Script di aggiornamento icone SVG e stories ===');
    console.log('Nota: questo script svuoterà e ricaricherà tutte le icone ad ogni esecuzione.');
    
    if (!checkPaths()) {
      console.error('Verificare i percorsi e riprovare.');
      process.exit(1);
    }
    
    // Ricarica completamente il file delle icone
    const icons = reloadIconsFile();
    
    // Aggiorna il file delle stories
    updateStoriesFile(icons);
    
    console.log('\n🎉 Processo completato con successo!');
    console.log('Le icone precedenti sono state rimosse e sostituite con quelle nella cartella iconadainserire.');
    console.log('Tutti i colori negli SVG sono stati sostituiti con currentColor.');
    console.log('\nOra puoi utilizzare queste icone nel tuo codice:');
    
    if (icons.length > 0) {
      console.log(`Esempio: getIconSvg("${icons[0].name}")`);
      console.log(`Per ottenere tutte le icone disponibili: getAllIconTypes()`);
    }
    
  } catch (err) {
    console.error('Si è verificato un errore imprevisto:', err);
    console.error('Stack trace:', err.stack);
    process.exit(1);
  }
}

// Avvia lo script
main();