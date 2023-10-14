import React, { useState } from 'react';

function WordCounter() {
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);
    };

    return (
        <div >
            <div class="card position-absolute top-50 start-50 translate-middle" style={{ width: '550px' }}>
                <div class="card-body">
                    <h1 class="card-title" style={{ textAlign: "center"  }}> <b>Responsive Paragraph Word Counter</b></h1>
                    <textarea class="ms-2 me-2"
                        rows="6"
                        cols="60"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <p class="mt-4 ms-2">Word Count: {wordCount}</p>
                </div>
            </div>
            
        </div>
    );
};

export default WordCounter;