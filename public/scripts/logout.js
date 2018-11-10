const express       = require('express');

app.post('/logout', (req, res) => {
  res.clearCookie(cookieKey);
});