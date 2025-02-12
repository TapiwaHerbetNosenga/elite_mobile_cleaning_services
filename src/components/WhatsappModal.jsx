import React from 'react'

const WhatsappModal = ({visible}) => {
let styles={
    display: visible ? 'block' : 'none',
}

  return (
    <div style={styles}> 
    <div>
        <form>
        <label for="username">Username:</label>
        <input type="text" name="username" placeholder="Enter your name" />

        </form>
    </div>
    </div>
  );
}

export default WhatsappModal;