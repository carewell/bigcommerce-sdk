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

// Execute the function
generateTypes();
