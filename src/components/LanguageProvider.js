import React, { useState } from 'react';
import LanguageContext from '../context/LanguageContext';

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('EN');
  return <LanguageContext.Provider value={[language, setLanguage]}>{props.children}</LanguageContext.Provider>;
};

export default LanguageProvider;
