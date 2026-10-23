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

export const VISION = 'Transforming students to transform nations.'
export const MISSION =
  'The God@Campus initiative seeks to actively share the Gospel with students, equip them to become disciples of the Lord Jesus Christ, who in turn disciple their fellow students and become a blessing to the Church and society.'

export const GOALS = [
  {
    title: 'Evangelistic Efforts',
    icon: 'spark',
    description:
      'To introduce students to the Gospel and create opportunities to encounter the love and truth of Jesus Christ.',
    items: [
      { label: 'Evangelistic Retreats and Camps', text: 'Organize retreats and camps to share the Gospel and encourage students to explore faith in Christ.' },
      { label: 'Personal Evangelism', text: 'Equip and encourage students to share the Gospel with their peers.' },
      { label: 'Student Support and Outreach Programs', text: "Conduct creative and need-based initiatives such as coaching, counselling, and career guidance to support students' personal, academic, and emotional development while building meaningful relationships." },
    ],
  },
  {
    title: 'Discipleship Efforts',
    icon: 'book',
    description:
      'To nurture students in their faith, develop Christ like character, and equip them to disciple others.',
    items: [
      { label: 'Bible Studies', text: "Conduct regular Bible studies to help students understand God's Word and apply biblical principles in their lives." },
      { label: 'Discipleship Retreats and Camps', text: 'Organize retreats and camps for spiritual growth, fellowship, and deeper commitment to Christ.' },
      { label: 'Specialized Training', text: "Provide training in apologetics, comparative religious studies, and other relevant subjects to strengthen students' faith and prepare them to engage thoughtfully with others." },
      { label: 'Peer Discipleship', text: 'Equip students to mentor, encourage, and disciple their fellow students.' },
    ],
  },
  {
    title: 'Missions Efforts',
    icon: 'globe',
    description:
      "To develop a mission-minded generation of students who actively participate in God's mission locally and globally.",
    items: [
      { label: 'Missions Information and Awareness', text: 'Share information about mission needs, opportunities, and the work of Christian ministries.' },
      { label: 'Mission Exposure', text: 'Provide opportunities for students to participate in practical evangelism and experience mission work firsthand.' },
      { label: 'Missions Mobilization', text: "Facilitate students' involvement in mission initiatives by connecting them with relevant opportunities, organizations, and experienced workers." },
      { label: 'Mission Commitment', text: "Encourage students to discover their role in God's mission and use their gifts, skills, and resources to serve others." },
    ],
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

