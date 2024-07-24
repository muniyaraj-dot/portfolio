import React from 'react'
import image from './images/Screenshot 2024-07-20 230210.png'
import image1 from './images/Screenshot 2024-07-21 092433.png'
const Protect = () => {
  return (
    <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
  Explore a collection of personal and client projects, each featuring its own detailed case study. Discover the work I've done and the stories behind each project.
</span>

        </h2>
    
        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src={image} alt="Software Screenshot" class="projects__row-img" loading="lazy"/>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Ticket Booking</h3>
              <p class="projects__row-content-desc">
  Experience a seamless movie ticket booking journey with our platform. Select from a diverse range of movies, view available seats, and book tickets effortlessly. Our system ensures a smooth and enjoyable process for all your movie-going needs.
</p>

              <a class="btn btn--med btn--theme dynamicBgClr" href="https://ticket-booking-muni.netlify.app/" target="_blank">Open</a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src={image1} alt="Software Screenshot" class="projects__row-img" loading="lazy"/>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Billing App</h3>
              <p class="projects__row-content-desc">
  Experience a seamless billing process with our app. Manage invoices, track payments, and generate reports effortlessly. Our system ensures accuracy and efficiency, making billing smooth and hassle-free.
</p>
              <a class="btn btn--med btn--theme dynamicBgClr" href="https://billing-app-muni.netlify.app/" target="_blank">Open</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Protect