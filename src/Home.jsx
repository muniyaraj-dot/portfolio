import React from 'react'
import './Home.css'
import image from './images/WhatsApp Image 2024-07-20 at 8.38.53 PM.jpeg'
import image1 from './images/in.png'
import image2 from './images/git.png'
import image3 from './images/insta.jpg'
import image4 from './images/google.jpg'
import image5 from './images/yt-ico.png'
import image6 from './images/blog-ico.png'
import About from './About'
import Protect from './Protect'
import Contect from './Contect'
const Home = () => {
  return (
   
    <div>
        <div className='header'>
          <div className='header_main'>
            <div className='header_contect'>
              <div className='header_image'>
                <img src={image} alt="" className='image' />
              </div>
              <span className='header_name'>muniyaraj</span>
            </div>
            <dir className="header_menu">
              <ul className='header_nav'>
                <li className='header_li'><a href="./" className='header_link'>Home</a></li>
                <li className='header_li'><a href="/#about" className='header_link'>About</a></li>
                <li className='header_li'><a href="/#project" className='header_link'>Project</a></li>
                <li className='header_li'><a href="/#contect" className='header_link'>Contact</a></li>
              </ul>
            </dir>
          </div>
        </div>
        <section className='home_hero'>
          <div className='home_content'>
            <h1 className='heading'>Hey, i am muniyaraj*</h1>
            <div className='home_ingo'>
              <p className='text_primery'>
              Welcome to myWebsite, your gateway to discovering my work and projects. Explore, learn, and enjoy a seamless experience as you navigate through my portfolio. I'm glad you're here!              </p>
            </div>
            <div className='home_button'>
              <a href="/#about" className='btn btn--bg'>About</a>
            </div>
          </div>
          <div className='home_social_wep'>
            <div className='home_social'><a href="https://www.linkedin.com/in/muniya-raj-2a264a317/" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
              <img src={image1} alt="Muniyaraj Linkedin Profile" class="home-hero__social-icon" />
            </a></div>
            <div class="home_social">
          <a href="https://github.com/muniyaraj-dot/" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src={image2} alt="muniyaraj github Profile" class="home-hero__social-icon"/>
          </a>
        </div>
            <div className='home_social'><a href="https://www.instagram.com/its_me_muni_47/" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
            <img src={image3} alt="muniyaraj instagram profile" class="home-hero__social-icon"/>
          </a></div>
            <div className='home_social'><a href="mailto:muniyaraj.k2004@gmail.com" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src={image4} alt="my gmail" class="home-hero__social-icon"/>
          </a></div>
          </div>
            <div className="end_mouse">
              <div className="mouse">
              </div>
            </div>
        </section>
        <section id='about'className='aboute sec_bad'>
          <About/>
        </section>
        <section id='project' className='protect sec_bad'>
          <Protect/>
        </section>
        <section id='contect' className='contect sec_bad'>
          <Contect/>
        </section>
        <footer className='footer_home'>
        <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social🌐</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muniya-raj-2a264a317/">
                <img class="main-footer__icon" src={image1} alt="muniyaraj Linkedin Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/muniyaraj-dot/portfolio.git">
                <img class="main-footer__icon" style={{backgroundColor:"white",borderRadius:'20px'}} src={image2} alt="Muniyaraj github Profile"/>
              </a>

              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/its_me_muni_47/">
                <img class="main-footer__icon" style={{backgroundColor:"white",borderRadius:'35px'}} src={image3} alt="Instagram Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:muniyaraj.k2004@gmail.com">
                <img class="main-footer__icon main-footer__icon--mr-none" src={image4} alt="my mail"/>
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h2 class="heading heading-sm text-lt">muniyaraj👨‍💻</h2>
            <p class="main-footer__short-desc">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          © Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>2024
          . Made by
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Muniyaraj</a>
        </div>
      </div>
        </footer>
        </div>
  )
}

export default Home