import React, { useState, useEffect, useRef } from 'react';

const MentionField = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [mentionIndex, setMentionIndex] = useState(-1);

    const inputRef = useRef(null); // Define inputRef using useRef hook

    // Function to handle input change
    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        // Check if "@" is typed
        if (value.includes('@')) {
            // Fetch suggestions based on entered text (value)
            fetchSuggestions(value);
        } else {
            // Hide suggestions if "@" is removed
            setShowSuggestions(false);
        }
    };

    // Function to fetch suggestions from backend
    const fetchSuggestions = (query) => {
        // Simulate fetching suggestions (replace with actual API call)
        const mockSuggestions = [
            { id: 1, username: 'user1' },
            { id: 2, username: 'user2' },
            { id: 3, username: 'user3' },
            // Add more suggestions as needed
        ];
        // Filter suggestions based on query (e.g., username contains query)
        const filteredSuggestions = mockSuggestions.filter((user) =>
            user.username.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        // Show suggestions dropdown
        setShowSuggestions(true);
    };

    // Function to handle mention selection
    const handleMentionSelect = (username) => {
        // Insert mention into input field at current cursor position
        const mention = `@${username} `;
        const newInputValue =
            inputValue.slice(0, mentionIndex) + mention + inputValue.slice(mentionIndex);
        setInputValue(newInputValue);
        // Hide suggestions dropdown
        setShowSuggestions(false);
        // Reset mention index
        setMentionIndex(-1);
        // Set focus back to input field
        inputRef.current.focus();
    };

    // Function to handle key press events
    const handleKeyPress = (e) => {
        if (e.key === '@') {
            // Get mention index when "@" is typed
            setMentionIndex(inputRef.current.selectionStart);
        } else if (e.key === 'Escape') {
            // Hide suggestions dropdown when Esc is pressed
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        // Add event listener for key press events
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            // Cleanup event listener
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className='text-dark'>
            <input
            className='text-dark'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef} // Assign inputRef to the input element
            />
            {showSuggestions && (
                <ul>
                    {suggestions.map((user) => (
                        <li key={user.id} onClick={() => handleMentionSelect(user.username)}>
                            {user.username}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MentionField;
