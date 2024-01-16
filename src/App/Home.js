import './../App.css';
import React, { useState } from 'react';

const Home = () => {
  const options = ["Mariana Augastine", "Nick Giannopoulos", "Anita Gros", "Megan Smith"];
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const showOptions = (value) => {
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase()) &&
      !selectedItems.includes(option)
    );

    return filteredOptions.map(option => (
      <div key={option} onClick={() => selectItem(option)}>
        {option}
      </div>
    ));
  };

  const selectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue('');
  };

  const removeItem = (item) => {
    const updatedItems = selectedItems.filter(selectedItem => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  const renderSelectedItems = () => {
    return selectedItems.map(item => (
      <div key={item} onClick={() => removeItem(item)}>
        {item} x
      </div>
    ));
  };

  return (
    <div className="tags-input">
      <div id="selectedItems">
        {renderSelectedItems()}
      </div>

      <input
        type="text"
        id="itemInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />

      {inputValue && (
        <div id="optionsList">
          {showOptions(inputValue)}
        </div>
      )}

      <p>Sample options are Mariana Augastine, Nick Giannopoulos, Anita Gros, and Megan Smith</p>
    </div>
  );
};

export default Home;
