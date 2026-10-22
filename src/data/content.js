// Central place for site content. Edit Vision/Mission/Goals text
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

export const VISION = 'Transformed students impact their fellow students to disciple nations.'
export const MISSION =
  'The God@Campus initiative actively shares the Gospel among post-matric students and equips them to be disciples of the Lord Jesus Christ, to disciple their fellow students, so as to be a blessing to their local church and society.'

export const GOALS = [
  {
    title: 'Evangelistic Efforts',
    icon: 'spark',
    items: ['Retreats', 'Camps', 'Personal evangelism', 'Literature distribution', 'Creative programs like coaching, counselling and career guidance'],
  },
  {
    title: 'Discipleship Efforts',
    icon: 'book',
    items: ['Bible study', 'Retreats & camps', 'Special training like apologetics, religious studies, etc.'],
  },
  {
    title: 'Mission Efforts',
    icon: 'globe',
    items: ['Sharing information about needs and opportunities', 'Exposure to active evangelism', 'Facilitating involvement in mission'],
  },
]
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

