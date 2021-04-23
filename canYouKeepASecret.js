// Implement a function createSecretHolder(secret) which accepts 
// any value as secret and returns an object with ONLY two methods
// getSecret() which returns the secret
// setSecret() which sets the secret
function createSecretHolder(secret) {
    return {
        getSecret: function() {
        return secret;
      },
      
      setSecret: function(newSecret) {
        secret = newSecret;
      }
    };
}