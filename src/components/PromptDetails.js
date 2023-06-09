import React, { useState } from 'react';
import './PromptDetails.css';

const PromptDetails = ({ data }) => {
    const [isHistoryOpen, setHistoryOpen] = useState(false);

    const toggleHistory = () => {
        setHistoryOpen(!isHistoryOpen);
    }

    return (
        <div className="prompt-details">
            <h1 className="category">{data.category}</h1>
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.description}</p>
            <h3 className="optimized-prompt">{data.optimizedPrompt}</h3>
            <div className="result">{data.result}</div>
            <h4 onClick={toggleHistory} className="result-history-title">
                Result History {isHistoryOpen ? '(Click to close)' : '(Click to open)'}
            </h4>
            {isHistoryOpen && data.resultHistory.map((item, index) => (
                <div key={index} className="result-history-item">
                    <p><strong>Request:</strong> {item.request}</p>
                    <p><strong>Response:</strong> {item.response}</p>
                </div>
            ))}
            <h4>Tags</h4>
            <div className="tags">
                {data.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default PromptDetails;
