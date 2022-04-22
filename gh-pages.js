var ghpages = require('gh-pages');
ghpages.publish(
 'public', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://publicPark.github.io/', // Update to point to your repository
  user: {
   name: 'Moon Swing', // update to use your name
   email: 'public.park.ji@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);