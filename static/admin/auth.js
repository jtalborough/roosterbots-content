// Check for GitHub token in URL hash and store in localStorage for Decap CMS
(function() {
  const hash = window.location.hash;
  
  if (hash && hash.includes('token=')) {
    // Extract token from hash
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('token');
    
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
