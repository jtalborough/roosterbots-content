// Check for GitHub token in URL hash and store in localStorage for Decap CMS
(function() {
  const hash = window.location.hash;
  
  // Handle both #token= and #/token= formats
  if (hash && hash.includes('token=')) {
    // Extract token - handle various formats
    let token = null;
    
    // Try to extract from hash (handles #token=xxx or #/token=xxx)
    const match = hash.match(/token=([^&]+)/);
    if (match) {
      token = decodeURIComponent(match[1]);
    }
    
    if (token) {
      // Store in format Decap CMS expects
      localStorage.setItem('netlify-cms-user', JSON.stringify({
        token: token,
        provider: 'github'
      }));
      
      // Clear the hash from URL
      history.replaceState(null, '', '/admin/');
      
      console.log('GitHub auth token stored successfully');
      
      // Reload to let Decap CMS pick up the token
      window.location.reload();
    }
  }
})();
