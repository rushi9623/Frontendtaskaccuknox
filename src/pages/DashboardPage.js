import React, { useState } from 'react';
import Category from '../components/Category';
import AddWidgetForm from '../components/AddWidgetForm';
import './Dashboard.css';

const DashboardPage = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Category 1',
      widgets: [
        { id: 1, name: 'Widget 1', type: 'text', content: 'This is widget content.' },
        { id: 2, name: 'Widget 2', type: 'image', content: 'https://via.placeholder.com/150' }
      ]
    },
    {
      name: 'Category 2',
      widgets: [
        { id: 3, name: 'Widget 3', type: 'text', content: 'This is widget content.' }
      ]
    }
  ]);

  const addWidget = (categoryName, widgetName, widgetType, widgetContent) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? {
              ...category,
              widgets: [
                ...category.widgets,
                {
                  id: category.widgets.length + 1,
                  name: widgetName,
                  type: widgetType,
                  content: widgetContent
                }
              ]
            }
          : category
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? {
              ...category,
              widgets: category.widgets.filter(widget => widget.id !== widgetId)
            }
          : category
      )
    );
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {/* Additional sidebar content can be added here */}
      </div>
      <div className="dashboard">
        <h1>Dashboard</h1>
        {categories.map(category => (
          <Category
            key={category.name}
            name={category.name}
            widgets={category.widgets}
            onRemoveWidget={removeWidget}
          />
        ))}
        <AddWidgetForm categories={categories} onAddWidget={addWidget} />
      </div>
    </div>
  );
};

export default DashboardPage;
