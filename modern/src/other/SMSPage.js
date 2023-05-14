import React, { useState } from 'react';

const SMSPage = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check the selected option and construct the SMS URI
    let smsUri = '';
    if (selectedOption === 'option1') {
      smsUri = `sms:?body=${encodeURIComponent(inputValue)}`;
    } else if (selectedOption === 'option2') {
      smsUri = `sms:numberHere?body=${encodeURIComponent(inputValue)}`;
    }

    // Open the default SMS app
    if (smsUri) {
      window.open(smsUri);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="option1">
            <input
              type="radio"
              value="option1"
              id="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            Option 1
          </label>
        </div>
        <div>
          <label htmlFor="option2">
            <input
              type="radio"
              value="option2"
              id="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            Option 2
          </label>
        </div>
        <div>
          <input
            type="text"
            id="textInput"
            value={inputValue}
            onChange={handleInputChange}
            aria-labelledby="textInput"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SMSPage;
