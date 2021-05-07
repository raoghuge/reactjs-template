import React from 'react';

function Button({label, action}) {
  return (
     <>
     <button class="button" onClick={action}>{label}</button>
     </>
  );
}

export default Button;
