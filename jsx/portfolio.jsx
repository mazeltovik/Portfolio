const React = require('react')

module.exports = function Portfolio(props) {
  return (
    <div>
          <div id = 'portfolio_container'>
      <div className = 'site_container'>
        <p className = 'site_p'>Sunnyside landing page</p>
        <div>
          <img src = "./images/sunnyside_landing.jpg" width = '450px' height = '300px' id = 'img_r'></img>
        </div>
        <p className = 'site_tech'>html/css</p>
        <div className = 'site_link'>
          <a href = 'https://mazeltovik.github.io/sunnyside/' target='_blank'>
            visit website
          </a>
        </div>
      </div>
      <div className = 'site_container'>
        <p className = 'site_p'>Tip calculator app</p>
        <div>
          <img src = "./images/tip_calculator.jpg" width = '450px' height = '300px' id = 'img_r'></img>
        </div>
        <p className = 'site_tech'>html/css/js</p>
        <div className = 'site_link'>
          <a href = 'https://mazeltovik.github.io/Tip-amout-app/' target='_blank'>
            visit website
          </a>
        </div>
      </div>
      <div className = 'site_container'>
        <p className = 'site_p'>Devfinder</p>
        <div>
          <img src = "./images/github_landing.jpg" width = '450px' height = '300px' id = 'img_r'></img>
        </div>
        <p className = 'site_tech'>html/css/js</p>
        <div className = 'site_link'>
          <a href = 'https://mazeltovik.github.io/Devfinder/' target='_blank'>
            visit website
          </a>
        </div>
      </div>
      <div className = 'site_container'>
        <p className = 'site_p'>Interactive pricing component</p>
        <div>
          <img src = "./images/slider.jpg" width = '450px' height = '300px' id = 'img_r'></img>
        </div>
        <p className = 'site_tech'>html/css/js/react/jquery</p>
        <div className = 'site_link'>
          <a href = 'https://mazeltovik.github.io/slider/' target='_blank'>
            visit website
          </a>
        </div>
      </div>
      <div className = 'site_container'>
        <p className = 'site_p'>Social media dashboard</p>
        <div>
          <img src = "./images/dashboard.jpg" width = '450px' height = '300px' id = 'img_r'></img>
        </div>
        <p className = 'site_tech'>html/css/js/react</p>
        <div className = 'site_link'>
          <a href = 'https://mazeltovik.github.io/Media-Dashboard/' target='_blank'>
            visit website
          </a>
        </div>
      </div>
    </div>
    <div id = 'home_contact'>
        <h1>
          Interesting in doing a project together?
        </h1>
        <div id = 'border'></div>
        <div id = 'linkToContact' onClick = {(event)=>{props.router.push('contact')}}>
          <p>Contact Me</p>
        </div>
      </div>
  </div>
  )
}