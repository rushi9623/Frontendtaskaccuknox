// Widget.js
import React from 'react';
import './Widget.css';

const Widget = ({ widget, categoryId, onRemoveWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      {widget.type === 'image' ? (
        <img src={widget.content} alt={widget.name} />
      ) : (
        <p>{widget.content}</p>
      )}
      <button
        className="remove-button"
        onClick={() => onRemoveWidget(categoryId, widget.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Widget;
