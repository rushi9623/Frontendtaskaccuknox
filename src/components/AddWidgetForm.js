import React, { useState } from 'react';

const AddWidgetForm = ({ categories, onAddWidget }) => {
  const [categoryName, setCategoryName] = useState(categories[0].name);
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('text');
  const [widgetContent, setWidgetContent] = useState('');
  const [widgetInfo, setWidgetInfo] = useState(''); // State for Widget Info

  const handleAddWidget = () => {
    onAddWidget(categoryName, widgetName, widgetType, { content: widgetContent, info: widgetInfo });
    setWidgetName('');
    setWidgetContent('');
    setWidgetInfo('');
  };

  return (
    <div className="add-widget-form">
      <h3>Add New Widget</h3>
      <label>
        Select Category:
        <select value={categoryName} onChange={e => setCategoryName(e.target.value)}>
          {categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Widget Name:
        <input
          type="text"
          value={widgetName}
          onChange={e => setWidgetName(e.target.value)}
          placeholder="Enter widget name"
        />
      </label>

      <label>
        Widget Type:
        <select value={widgetType} onChange={e => setWidgetType(e.target.value)}>
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>
      </label>

      <label>
        {widgetType === 'image' ? 'Image URL:' : 'Text Content:'}
        <input
          type="text"
          value={widgetContent}
          onChange={e => setWidgetContent(e.target.value)}
          placeholder={widgetType === 'image' ? 'Enter image URL' : 'Enter text content'}
        />
      </label>

      {widgetType === 'image' && (
        <label>
          Widget Info:
          <input
            type="text"
            value={widgetInfo}
            onChange={e => setWidgetInfo(e.target.value)}
            placeholder="Enter additional widget info"
          />
        </label>
      )}

      <button onClick={handleAddWidget}>Add Widget</button>
    </div>
  );
};

export default AddWidgetForm;
