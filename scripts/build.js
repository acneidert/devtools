#! /usr/bin/env node
const fs = require('fs');

const file = 'build/index.html';

try {
    if(fs.existsSync(file)) {
        fs.readFile(file, 'utf-8', function(error, data) {
            if (error) throw error;
            const script = data.match(/(<script([\s\S]*?)\/script>)/gm)[0];
            // console.log(typeof script)
            const newIndex = data.replace(script, '<script src="index.js"></script>');
            const newScript = script.replace(/<script(.*?)>/g, '').replace(/<\/script>/g, '');
            fs.writeFile(file, newIndex, 'utf-8', () => {
                console.log(' 🚀️ Saved Index.html');
            });
            fs.writeFile('build/index.js', newScript, 'utf-8', () => {
                console.log(' 🚀️ Saved Index.js');
            });
            
        });
    } 
    console.log(`💥️ Can't find ${file} in ${process.cwd()}`);
} catch (err) {
    console.log(`💥️ [ERR] Can't find ${file} in ${process.cwd()}`);
}