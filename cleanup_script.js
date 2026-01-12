const fs = require('fs');
const path = require('path');

const root = process.cwd();
const extensions = ['.ts', '.tsx', '.js', '.css'];
const exclude = ['node_modules', '.next', '.git', '.gemini', 'cleanup_script.js', 'dist', 'build'];

function removeComments(content, isCss) {
    if (isCss) {
        return content.replace(/\/\*[\s\S]*?\*\//g, '');
    }

    // Regex to match strings (double quotes, single quotes, backticks) OR comments
    const pattern = /("(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|`(?:\\[\s\S]|[^`\\])*`)|(\/\*[\s\S]*?\*\/)|(\/\/.*)/g;

    return content.replace(pattern, (match, str, multi, single) => {
        if (str) return match; // Keep strings
        if (multi) return "";  // Remove block comments
        if (single) return ""; // Remove single line comments
        return match;
    });
}

function walk(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (exclude.includes(file)) return;

        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walk(filePath);
        } else if (extensions.includes(path.extname(file))) {
            const content = fs.readFileSync(filePath, 'utf8');
            const isCss = path.extname(file) === '.css';
            
            let newContent = removeComments(content, isCss);
            
            // Optional: Remove empty lines resulting from comment removal?
            // A simple cleanup for multiple newlines could be nice but risky if not careful.
            // Let's safe-trim: replace 3+ newlines with 2.
            newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

            if (content !== newContent) {
                console.log(`Cleaned: ${filePath}`);
                fs.writeFileSync(filePath, newContent);
            }
        }
    });
}

console.log('Starting cleanup...');
walk(root);
console.log('Cleanup complete.');
