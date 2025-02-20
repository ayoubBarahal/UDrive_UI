import React from 'react';

const Welcome = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Tilt Neon'
    },
    title: {
      fontSize: '2.5rem',
      color:'#ff5733',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#5f6368',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome in UDrive</h1>
      <p style={styles.subtitle}>Réservez votre voiture et faites-vous livrer où vous voulez, quand vous voulez  !</p>
    </div>
  );
};

export default Welcome;