document.getElementById('count').addEventListener('click', function() {
    // Get the input text
    const text = document.getElementById('input').value.trim();

    // Calculate statistics
    const words = text ? text.split(/\s+/).length : 0;
    const characters = text.length;
    const sentences = text ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = text ? text.split(/\n+/).filter(Boolean).length : 0;

    // Estimate reading time (assuming an average reading speed of 200 words per minute)
    const readingTime = Math.ceil(words / 200 * 60); // in seconds

    // Estimate speaking time (assuming an average speaking speed of 125 words per minute)
    const speakingTime = Math.ceil(words / 125 * 60); // in seconds

    // Update the statistics in the DOM
    document.getElementById('words').textContent = words;
    document.getElementById('char').textContent = characters;
    document.getElementById('sentence').textContent = sentences;
    document.getElementById('para').textContent = paragraphs;
    document.getElementById('reading-time').textContent = readingTime;
    document.getElementById('speaking-time').textContent = speakingTime;

    // Update reading level and score (you can customize this logic)
    let readingLevel = '';
    let readingScore = '';
    let readingNote = '';

    if (words < 100) {
        readingLevel = 'Beginner';
        readingScore = 'Low';
        readingNote = 'This text is very easy to read. Keep practicing ';

    } else if (words < 500) {
        readingLevel = 'Intermediate';
        readingScore = 'Medium';
        readingNote = 'This text is moderately easy to read. Keep going! ';
    } else {
        readingLevel = 'Advanced';
        readingScore = 'High';
        readingNote = 'This text is challenging to read. Good job!';
    }

    document.getElementById('reading-level').textContent = readingLevel;
    document.getElementById('reading-score').textContent = readingScore;
    document.getElementById('reading-note').textContent = readingNote;
});