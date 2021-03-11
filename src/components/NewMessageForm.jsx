import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const _handleChange = (e) => {
        setInputText(e.target.value);
    }

    const _handleClick = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <input
                type='text'
                data-testid='messageText'
                value={inputText}
                onChange={_handleChange}
            />
            <button
                type='button'
                data-testid='sendButton'
                onClick={_handleClick}
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;
