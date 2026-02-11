// Start the linting dance with some tricky footwork
function lintAndTwirl(code) {
    let mistakes = [];
    
    // Spin through each line of code
    code.split('\n').forEach((line, index) => {
        if (line.includes('var') && !line.includes('//')) {
            mistakes.push(`Line ${index + 1}: Watch out for your var usage!`);
        }
        
        // The rhythmic check for missing semicolons
        if (!line.trim().endsWith(';')) {
            mistakes.push(`Line ${index + 1}: Did you forget your semicolon?`);
        }
    });

    // A twirl of validation results
    if (mistakes.length > 0) {
        console.log('Linting took a misstep:', mistakes.join('\n'));
    } else {
        console.log('No mistakes detected, now perform the victory lap!');
    }
}