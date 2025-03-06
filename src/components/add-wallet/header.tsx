const Header = () => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '16px 0',
        marginLeft:"10px"
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '25%'
        }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '75%'
        }}>
          <h1 style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: 0
          }}>Add a wallet</h1>
        </div>
        
      </div>
    );
  };
  
  export { Header };