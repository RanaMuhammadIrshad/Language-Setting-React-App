import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const WelcomeMessage = () => {
  const messages = {
    EN: 'Hello World',
    DE: 'Hallo Welt',
    PR: 'سلام دنیا!',
    SP: 'Hola Mundo',
    DU: 'Hallo Wereld',
    FR: 'Bonjour le monde',
  };
  const [language] = useContext(LanguageContext);
  return (
    <div className="msg">
      <h3>{messages[language]}</h3>
    </div>
  );
};

export default WelcomeMessage;
