import React from 'react'
import './Home.css'
import Slider from './Slider'


const Home = () => {
  return (

    <>
    <div id="home" class="main__container">
      <div class="container main__page-container">
        <div class="main__page-left">
          <h4>Healthy | Fit Workout</h4>
          <h1>join the Legends of the fitness world</h1>
          <h3>with Pratham Mehra</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus distinctio culpa aut?</p><a
            class="btn lg" href="/plans"> Get started</a>
        </div>
      </div>
    </div>


    <div id="about" class="second__container">
        <h3>
            MERN Stack
        </h3>
        <div class="items">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">MongoDB</p>
                        <p>Hover Me</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">document database</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">Express</p>
                        <p>Hover Me</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">Node.js web framework</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">React</p>
                        <p>Hover Me</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">a client-side JavaScript framework</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">Nodejs</p>
                        <p>Hover Me</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">the premier JavaScript web server</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <section id="contact" class="contect">
        <div class="container contact__container">
            <p>
                CONTACT
            </p>
            <div class="contact__wrapper"><a href="mailto:manshumehra3@outlook.com" target="_blank"
                    rel="noreferrer noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                        </path>
                    </svg></a><a href="http://m.me/ernest_achievers" target="_blank" rel="noreferrer noopener"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z">
                        </path>
                    </svg></a><a href="http://wa.me/+918076401975" target="_blank" rel="noreferrer noopener"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z">
                        </path>
                    </svg></a><a href="https://www.instagram.com/codemodeon07" target="_blank"
                    rel="noreferrer noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z">
                        </path>
                    </svg></a></div>
        </div>
    </section>
<Slider/>
    <div id="register" class="register__container">
        <form class="form">
            <p class="titles">Register </p>
            <p class="message">Signup now and get full access to our app. </p>
            <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Firstname</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Lastname</span>
                </label>
            </div>

            <label>
                <input required="" placeholder="" type="email" class="input"/>
                <span>Email</span>
            </label>

            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Confirm password</span>
            </label>
            <button class="submit">Submit</button>
        </form>
    </div>

</>
  )
}

export default Home