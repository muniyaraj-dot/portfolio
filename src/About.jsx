import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='main-container'>
       <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
    Welcome to my portfolio! I’m dedicated to creating engaging and intuitive web experiences. With a passion for innovative design and seamless functionality, I aim to bring your ideas to life. Thank you for visiting—let’s create something amazing together!
</span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
          <h3 class="about__content-title">Get to know us!</h3>
          <div class="about__content-details">
  <p class="about__content-details-para">
    Welcome to <strong>Muniyaraj's Portfolio</strong>, where I strive to offer a seamless and enjoyable online experience. Discover my curated selection of projects that cater to various needs and preferences.
  </p>
  <p class="about__content-details-para">
    I also share insights and updates about web development trends and tips on my
    <a rel="noreferrer" href="https://www.linkedin.com/in/muniya-raj-2a264a317/" target="_blank">LinkedIn</a>
    and
    <a rel="noreferrer" href="https://www.instagram.com/its_me_muni_47/" target="_blank">Instagram</a>
    pages. Follow me to stay in the loop!
  </p>
  <p class="about__content-details-para">
    If you have suggestions or ideas to improve my site or projects, I’d love to hear from you. Feel free to
    <strong>contact</strong> me with any feedback or inquiries.
  </p>
</div>



            <a href="/#contect" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div class="about__content-skills">
  <h3 class="about__content-title">My Skills</h3>
  <div class="skills">
    <div class="skills__skill">HTML</div>
    <div class="skills__skill">CSS</div>
    <div class="skills__skill">JavaScript</div>
    <div class="skills__skill">React</div>
    <div class="skills__skill">Java</div>
  </div>
</div>

        </div>
    </div>
  )
}

export default About