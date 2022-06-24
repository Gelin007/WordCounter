import React, { useState } from 'react';

export const Counter = () => {
    const [text, setText] = useState('');
    const [word, setWord] = useState(0);

    const countWord = (e) => {
        const words = e.target.value.split(' ');
        setWord(words.filter(word => word !== '').length);
    }

    const upperCase = () => {
        setText(text.toUpperCase());
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
    }
    return (
        <div className='counter-container'>
            <div className='numbers-holder'>
                <div className='counter-box'>
                    <p>Words</p>
                    <p className='count'>{text.length > 0 ? word : ' '}</p>
                </div>
                <div className='counter-box'>
                    <p>Letters</p>
                    <p className='count'>{text.length > 0 ? text.split(' ').join('').length : ' '}</p>
                </div>
                <div className='counter-box'>
                    <p>Paragraphs</p>
                    <p className='count'>{text.length > 0 ? text.split(/\r\n|\r|\n/).length : ' '}</p>
                </div>
            </div>

            <div className='text-box'>
                <textarea
                    className='textarea'
                    placeholder='Enter/Paste Your Text Here'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        countWord(e)
                    }}
                />
            </div>

            <div className='button-box'>
                <button onClick={upperCase}>Click to Uppercase</button>
                <button onClick={lowerCase}>Click to Lowercase</button>
            </div>
        </div>
    );
}