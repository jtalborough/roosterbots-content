// Check for GitHub token in cookie and store in localStorage for Decap CMS
(function() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  const token = getCookie('gh_token');
  if (token) {
    // Store in format Decap CMS expects
    localStorage.setItem('netlify-cms-user', JSON.stringify({
      token: token,
      provider: 'github'
    }));
    
    // Clear the cookie
    document.cookie = 'gh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    console.log('GitHub auth token stored successfully');
  }
})();
