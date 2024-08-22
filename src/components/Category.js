import React from 'react';
import './Category.css';

const Category = ({ name, widgets, onRemoveWidget }) => {
  return (
    <div className="category">
      <h2>{name}</h2>
      <div className="widgets">
        {widgets.map(widget => (
          <div key={widget.id} className="widget">
            <button className="remove-button" onClick={() => onRemoveWidget(name, widget.id)}>
              Remove
            </button>
            {widget.type === 'image' ? (
              <div>
                <img src={widget.content.content} alt={widget.name} style={{ maxWidth: '100%' }} />
                {widget.content.info && <p>{widget.content.info}</p>} {/* Display Widget Info */}
              </div>
            ) : (
              <p>{widget.content.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
