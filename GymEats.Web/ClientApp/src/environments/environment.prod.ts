export const environment = {
  production: true,
  apiUrl: 'https://gymeats.azurewebsites.net',
  testUser: {
    // tslint:disable
    token: {
      expires_in: 3600000,
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQFVzZXIiLCJyb2xlIjoidXNlciIsIm5iZiI6MTU2NDA2MTQ1NywiZXhwIjoxNTk1NjgzODU3LCJpc3MiOiJpc3N1ZXJfc2FtcGxlIiwiYXVkIjoiYXVkaWVuY2Vfc2FtcGxlIn0.xAAbQIOsw3ZXlIxDFnv5NynZy7OfzrvrJYWsy2NEBbA',
    },
    // tslint:enable
    email: 'user@user.user',
  },
};
