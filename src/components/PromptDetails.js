import React from 'react';
import './PromptDetails.css';

const PromptDetails = ({ data }) => {
    return (
        <div className="prompt-details">
            <h1 className="category">{data.Category}</h1>
            <h2 className="title">{data.Title}</h2>
            <p className="description">{data.Description}</p>
            <h3 className="optimized-prompt">{data.OptimizedPrompt}</h3>
            <div className="result">{data.Result}</div>
            <h4>Result History</h4>
            {data.ResultHistory.map((item, index) => (
                <div key={index} className="result-history-item">
                    <p><strong>Request:</strong> {item.Request}</p>
                    <p><strong>Response:</strong> {item.Response}</p>
                </div>
            ))}
            <h4>Tags</h4>
            <div className="tags">
                {data.Tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default PromptDetails;
