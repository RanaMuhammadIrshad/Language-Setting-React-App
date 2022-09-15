import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
const LanguageChooser = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const languageChangeHandler = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="select">
      <select value={language} onChange={languageChangeHandler}>
        <option value="EN">&#127482;&#127480; ENGLISH</option>
        <option value="DE">&#127465;&#127466; GERMAN</option>
        <option value="PR">&#127470;&#127479; PARSIAN</option>
        <option value="SP">&#127466;&#127480; SPANISH</option>
        <option value="DU">&#127475;&#127473; DUTCH</option>
        <option value="FR">&#127467;&#127479; FRENCH</option>
      </select>
    </div>
  );
};

export default LanguageChooser;
