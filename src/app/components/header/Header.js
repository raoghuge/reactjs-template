import React from 'react';
import LanguageSwitcher from '../../translations/LanguageSwitcher';
import ThemeSwitcher from '../../theme/ThemeSwitcher';
// import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <div class="header">
      <Slide left>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Slide>

    </div>
  );
}

export default Header;
