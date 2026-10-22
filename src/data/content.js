// Central place for site content. Replace placeholder text (Vision/Mission/Goals)
// and the status figures here; later these can be fed from an API.
export const SIGNUP_URL = 'https://godatcampus.inheritinitiative.org/'
export const CONTACT_EMAIL = 'contact@godatcampus.org'

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'vision', label: 'Vision' },
  { id: 'mission', label: 'Mission' },
  { id: 'goals', label: 'Goals' },
  { id: 'status', label: 'College Status' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
]

export const HERO = {
  title: 'Engaging the next generation, right on campus',
  subtitle:
    'God@Campus is an initiative to actively engage with the next generation while they are in the college.',
}

// Left empty for now; fill in when content is ready
export const VISION = ''
export const MISSION = ''
export const GOALS = []

export const STATUS = {
  colleges: 54000, // updated periodically
  // x/y are percentages on the map viewBox; replace with real data/API
  pins: [
    { name: 'Delhi', x: 40, y: 20, status: 'Active' },
    { name: 'Jaipur', x: 30, y: 30, status: 'Active' },
    { name: 'Lucknow', x: 51, y: 31, status: 'Planned' },
    { name: 'Kolkata', x: 72, y: 42, status: 'Active' },
    { name: 'Mumbai', x: 27, y: 55, status: 'Active' },
    { name: 'Hyderabad', x: 45, y: 60, status: 'Planned' },
    { name: 'Bengaluru', x: 41, y: 76, status: 'Active' },
    { name: 'Chennai', x: 50, y: 76, status: 'Active' },
    { name: 'Kochi', x: 38, y: 88, status: 'Planned' },
    { name: 'Guwahati', x: 82, y: 29, status: 'Planned' },
  ],
}

