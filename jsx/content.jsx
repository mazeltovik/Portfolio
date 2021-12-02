const React = require('react')
const {Link} = require('react-router')

class Content extends React.Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <input type='checkbox' id = 'nav_checkbox' className = 'nav_checkbox'/>
          <label htmlFor="nav_checkbox" className="nav_toggle">
            <svg className="menu" viewBox="0 0 448 512" width="100" title="bars" id = 'menu'>
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
            <svg className="close" viewBox="0 0 384 512" width="100" title="times" id = 'close'>
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </label>
          <ul className = 'nav_menu'>
            <li>
              <Link to='#'>
                <svg viewBox="0 0 384 512" width="100" title="chess-rook">
                <path d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
                </svg>
              </Link>
            </li>
            <li className={(this.context.router.isActive('/home'))? 'active': ''}>
              <Link to="/home" activeClassName="active">
                Home
              </Link>
            </li>
            <li className={(this.context.router.isActive('/portfolio'))? 'active': ''}>
              <Link to="/portfolio" activeClassName="active">
                Portfolio
              </Link>
            </li>
            <li className={(this.context.router.isActive('/contact'))? 'active': ''}>
              <Link to="/contact" activeClassName="active">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <div className = 'footer_flex'>
            <ul className = 'footer_menu'>
            <Link to='#'>
                <svg viewBox="0 0 384 512" width="100" title="chess-rook" >
                <path d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
                </svg>
              </Link>
              <li>
                <Link to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
            <ul className = 'footer_links'>
              <li>
                <a href = 'https://github.com/mazeltovik' target='_blank'>
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href = 'https://linkedin.com/in/nikita-yankovsky-9a463721a' target='_blank'>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}
module.exports = Content