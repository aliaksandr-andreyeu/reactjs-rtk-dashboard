const navigation = {
  index: { path: '/', name: 'Dashboard' },
  resetPassword: { path: '/reset-password', name: 'Forgot password' },
  signin: { path: '/signin', name: 'Sign in' },
  signup: { path: '/signup', name: 'Sign up' },
  users: { path: '/users', name: 'Users' },
  user: { path: '/users/:id', name: 'User' },
  profile: { path: '/profile', name: 'Profile' },
  settings: { path: '/settings', name: 'Settings' },
  about: { path: '/about', name: 'About' },
  privacyPolicy: { path: '/privacy-policy', name: 'Privacy policy' },
  termsConditions: { path: '/terms-and-conditions', name: 'Terms and conditions' },
  contactUs: { path: '/contact-us', name: 'Contact us' },
  notFound: { path: '/not-found', name: 'Not Found' }
};

export default navigation;
