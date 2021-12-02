const React = require('react')

module.exports = function Home(props) {
  return <div>
    <div id = 'home_container'>
    <div id = 'home_image'>
      <img src="./images/me.png" alt="" width='300px'/>
    </div>
    <div id = 'home_text'>
      <h1>About Me</h1>
      <p>
        Hey, I'm looking job for a junior front-end developer. I focus on writing accessible HTML, using CSS practices and writing clean JavaScript code. When writing JavaScript code, I mostly use React, also I use JSX and Webpack. I'm based in Minsk, Belarus, but I'm happy working remotely and have experience in remote teams. When I'm not coding, you'll fid me outdoors. I love being out in nature whether. I'd love you to check out my work. 
      </p>
      <div id = 'linkToPortfolio' onClick = {(event)=>{props.router.push('portfolio')}}>
        <p>Go to portfolio</p>
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
}