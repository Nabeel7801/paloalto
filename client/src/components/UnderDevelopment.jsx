import React from 'react';

function UnderDevelopment(props) {
    
    const styles = {
        pageContainer: {position: 'relative', width: '100vw', height: 'calc(100vh - 80px)'},
        pageCenter: {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: '600'},
    }

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.pageCenter}>
                <i class="fas fa-cogs" style={{fontSize: '1.75rem', marginRight: '0.5rem'}}/>
                &nbsp;{props.webpage} Page | <span style={{fontSize: '1rem'}}>Under Development</span>
            </h2>
        </div>
    )

}

export default UnderDevelopment