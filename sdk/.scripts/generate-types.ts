import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

// Get the directory passed as an argument or default to 'openapi'
const inputDir: string = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '../../reference');
const outputDir: string = path.resolve(__dirname, '../src/generated/types');

// Function to recursively find all YAML files
function findYamlFiles(dir: string): string[] {
    let yamlFiles: string[] = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath: string = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            yamlFiles = yamlFiles.concat(findYamlFiles(filePath));
        } else if ((file.endsWith('.yaml') || file.endsWith('.yml')) && !file.startsWith('.')) {
            yamlFiles.push(filePath);
        }
    });

    return yamlFiles;
}

// Function to generate TypeScript types for each YAML file
function generateTypes(): void {
    const yamlFiles: string[] = findYamlFiles(inputDir);

    yamlFiles.forEach((yamlFile) => {
        const relativePath: string = path.relative(inputDir, yamlFile); // Get relative path
        const fileName = relativePath.endsWith('.yaml') ?
            relativePath.replace('.yaml', '.ts') :
            relativePath.replace('.yml', '.ts');
        const outputFilePath: string = path.join(outputDir, fileName); // Replace .yaml with .ts

        // Ensure output directories exist
        const outputFileDir: string = path.dirname(outputFilePath);
        if (!fs.existsSync(outputFileDir)) {
            fs.mkdirSync(outputFileDir, { recursive: true });
        }

        // Run the openapi-typescript command to generate types
        const command: string = `npx openapi-typescript ${yamlFile} --output ${outputFilePath}`;
        console.log(`Generating types for ${yamlFile}...`);
        execSync(command);
    });

    console.log('All types generated successfully.');
}

// Utility function to convert a filename to CamelCase
function toCamelCase(str: string): string {
    return str
        .replace(/\.ts$/, '')
        .replace(/[-.](.)/g, (_, char) => char.toUpperCase())  // Convert hyphens and dots to CamelCase
        .replace(/^./, (char) => char.toUpperCase())           // Capitalize the first letter
        .replace(/\.\w+$/, '');                                // Remove the file extension
}

// Recursively find all TypeScript files in the directory
function findAllTypeScriptFiles(dir: string): string[] {
    let tsFiles: string[] = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            tsFiles = tsFiles.concat(findAllTypeScriptFiles(filePath));
        } else if (file.endsWith('.ts') && file != "index.ts") {
            tsFiles.push(filePath);
        }
    });

    return tsFiles;
}

// Function to generate index.ts
function generateIndexFile() {
    const outputDir = path.resolve(__dirname, '../src/generated/types');
    const indexPath = path.join(outputDir, 'index.ts');
    const tsFiles = findAllTypeScriptFiles(outputDir);

    const imports: string[] = [];
    const exports: string[] = [];

    tsFiles.forEach((file) => {
        let relativePath = './' + path.relative(outputDir, file).replace(/\\/g, '/'); // Get relative path
        relativePath = relativePath.replace(/\.ts$/, ''); // Remove the .ts extension from the path
        const camelCaseName = toCamelCase(path.basename(file));

        imports.push(`import * as ${camelCaseName} from '${relativePath}';`);
        exports.push(`export { ${camelCaseName} };`);
    });

    // Write the imports and exports to index.ts
    const indexContent = `${imports.join('\n')}\n\n${exports.join('\n')}\n`;

    fs.writeFileSync(indexPath, indexContent);
    console.log(`Generated index.ts at ${indexPath}`);
}

// Execute the function
generateTypes();
// Execute the function to generate the index.ts
generateIndexFile();
