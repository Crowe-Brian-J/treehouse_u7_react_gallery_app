// Nav.jsx
// Displays the nav component underneath the search bar with the three required topics

import { NavLink } from 'react-router-dom'

const Nav = () => {
  const topics = ['cats', 'dogs', 'computers']

  return (
    <nav className="main-nav">
      <ul>
        {topics.map((topic) => (
          <li key={topic}>
            <NavLink
              to={`/${topic}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
