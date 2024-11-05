import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <header>
        <img 
          src="/calmlylogo.png" 
          alt="Logo" 
          style={{ height: '55px', width: '80px', marginLeft: '-20px' }} 
        />
        <nav>
          <a href="#about">How It Works</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#tips">Wellness Tips</a>
        </nav>
      </header>
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>No 1 for Mental Health</h1>
            <p>Discover the serenity with AI support</p>
             {/* Additional Information Section */}
             <div className="additional-info">
              <p>Enhance your mental wellbeing with personalized advice from Calmy</p>
            </div>
            {/* Sign up Button  */}
            <button className="sign-up-button">Sign Up Today</button>
          </div>
          <img 
            src="brain.png" // Replace with your image path
            alt="Description" 
            className="h1-image" 
          />
        
        </div>
        {/* New Container below button */}
        <div className="info-container">
              <h2>The No 1 ChatBot for instant stress relief</h2>
              <p>Get insights into how our AI tools support mental health, from meditation guidance to real-time support tailored to your needs. Our services are accessible, affordable, and designed to enhance your wellness journey.</p>
            </div>
            <div className="footer-section">
              <h3>Discover our features</h3>
              <p>Unlock holistic mentall wellbeing solotions with our advanced bot</p>
            </div>
              {/* 8 Parallel Smaller Containers (4 Above, 4 Below) */}
            
            <div className="parallel-containers">
              {/* First Row of 4 Containers */}
              <div className="row">
                <div className="small-container">
                  <h4>Stress Relief</h4>
                  <p>Effective stress relief for a clearear mind</p>
                </div>
                <div className="small-container">
                  <h4>Guided Meditations</h4>
                  <p>Engage in daily guided meditations.</p>
                </div>
                <div className="small-container">
                  <h4>Process Tracking</h4>
                  <p>Track your process towards treating your mental wellness</p>
                </div>
                <div className="small-container">
                  <h4>Mindful Tips</h4>
                  <p>Daily mindfullness tips to your menatal wellbeing</p>
                </div>
              </div>

              {/* Second Row of 4 Containers */}
              <div className="row">
                <div className="small-container">
                  <h4>Mood Tracker</h4>
                  <p>Monitor your mental health with daily inputs</p>
                </div>
                <div className="small-container">
                  <h4>Calm excercise</h4>
                  <p>Guided breathing to help you regain calm and focus</p>
                </div>
                <div className="small-container">
                  <h4>Personal Journal</h4>
                  <p>Secure and private journal to secure your thoughts</p>
                </div>
                <div className="small-container">
                  <h4>Daily Check-Ins</h4>
                  <p>Daily reflections to track mood and process</p>
                </div>
              </div>
              <div className="heading">
              <h5>Transform your mental wellbeing with AI</h5>
              <p>Empower your mind with personalized stress management and mindful practices</p>
              </div>
              
            </div>
            {/* New Section for Images */}
            <div className="image-row">
              <img src="mental1.png" alt="Description 1" className="image" />
              <img src="brain1.png" alt="Description 2" className="image" />
              <img src="brokenheart.png" alt="Description 3" className="image" />
            </div>

            <div className="container">
        <div className="content">
          <div className="texts">
            <div className="text-item">
              <h6>Emotional Support</h6>
              <p>Provide compassionate support and uplifting conversations to help manage emotional wellbeing.</p>
              <button 
  className="learn-more" style={{ marginTop: '10px' // Moves the button up
}}
>
Learn More
</button>
             
            </div>
            <div className="text-item">
              <h6>Stress Relief</h6>
              <p>Offer real-time stress relief techniques tailored to your needs and situations.</p>
              <button 
  className="learn-more" style={{ marginTop: '37px' // Moves the button up
}}
>
Learn More
</button>
            </div>
            <div className="text-item">
              <h6>Mindful Practices</h6>
              <p>Tailored exercises for relaxation and mental clarity every day.</p>
              <button 
  className="learn-more" style={{ marginTop: '37px' // Moves the button up
}}
>
Learn More
</button>
            </div>
          </div>
          </div>
        </div>
        <p style={{  fontWeight: 'normal',  textAlign: 'center', fontSize: '2.25rem',color: 'black',margin: '5px 0',
}}
>
  User Testimonials
</p>
<p style={{ color: 'black',fontWeight: 'normal',textAlign: 'center'}}>Real stories from users who found solace and support</p>
<div 
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px', // Space between image and text
    margin: '20px 0'
  }}
>
  <img 
    src="whitewoman.jpg" 
    
    alt="Description" 
    style={{ 
      width: '200px', 
      height: 'auto', 
      borderRadius: '8px' 
    }} 
  />
  
  <div>
   <p style={{ margin: '5px 0', color: 'black',fontWeight: 'normal',fontSize: '24px' }}>
      'Using this mental wellbeing chatbot has trasformed my life.Its guided mindfulness and excercises and stress management tips
      have created a calm and balanced environment for me.I never realized how pivotal mental health support could be in reclaiming
      my productivity and hapiness until now'
    </p>
  </div>
</div>
<div className="container2">
  <p className="container2-text">
   Join our wellness journey
   <br></br>Never miss an update from our mental wellbeing community
  </p>
  
  <a href="mailto:youremail@example.com" className="container2-email">
    refiloemokhothotso@gmail.com
  </a>
  
  <button className="container2-button">
    Sign up now!
  </button>
</div>
<footer className="footer">
  <div className="footer-content">
  
    <div className="footer-logo">
      <img src="calmlylogo.png" alt="Logo" />
    </div>
    
  
    <div className="footer-links">
    <p>Quick Links</p>
      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <a href="#privacy">Privacy Policy</a>
      <a href="#privacy">FAQs</a>
  
    </div>
  </div>

  
</footer>
<div class="footer-bottom">
      <p>© 2024 calmly. All rights reserved.</p>
    </div>
          
      </div>
      <style jsx>{`
      header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #40ADA8;
          color: white;
          height: 15px;
        }
        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: white;
          font-size: 18px;
        }
        .container {
          text-align: left; /* Align text to the left */
          padding: 100px 20px;
        }
        .content {
          display: flex; /* Use flex to arrange text and image */
          justify-content: space-between; /* Space between text and image */
          align-items: flex-start;
          margin-top: -50px;
        }
        .text-content {
          margin-right: 20px; /* Space between text and image */
        }
        .container h1 {
          font-size: 25px;
          margin-bottom: 20px;
          font-weight: normal;
        }
        .container p {
          font-size: 35px;
          font-weight: bold;
          color: #40ADA8;
        }
         .additional-info p {
          font-size: 22px;
          font-weight: normal;
          color: black; /* Change color if needed */
          margin-top: 15px;
        }
          .sign-up-button {
          display: inline-block;
          margin-top: 115px;
          padding: 10px 20px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background-color: #40ADA8;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .sign-up-button:hover {
          background-color: #339a94;
        }
        .h1-image {
          height: 450px; /* Adjust image size */
          width: auto; /* Maintain aspect ratio */
          margin-bottom: 50px;
        }
          .info-container {
          margin-top: 30px;
          padding: 20px;
          background-color: #40ADA8;
          color: #fff;
        }
        .info-container h2 {
          font-size: 22px;
          color: #fff;
          margin-bottom: 10px;
          text-align: center;
        }
        .info-container p {
          font-size: 16px;
          line-height: 1.5;
          color: #fff;
        }
             .footer-section h3 {
          font-size: 30px;
          color: #33;
          margin-bottom: 10px;
          text-align: center;
        }
        .footer-section p {
          font-size: 24px;
          color: #333;
          line-height: 1.6;
          text-align: center;
          font-weight: normal;
        }
          .parallel-containers {
          display: flex;
          flex-direction: column; /* Arrange rows vertically */
          margin-top: 30px;
        }
        .row {
          display: flex; /* Use flex for each row */
          justify-content: space-between; /* Space evenly between items */
        }
        .small-container {
          flex: 0 1 calc(24% - 10px); /* Each container takes up 24% width with some margin */
          background-color: #0AF0F4;
          border-radius: 8px;
          padding: 10px;
          margin: 30px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          text-align: center; /* Center align text inside small containers */
          height: 200px;
        }
        .small-container h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #fff;
        }
          .small-container p{
          font-size: 15px;
          color: #fff;
          }
          .heading h5{
          font-weight: normal;
          font-size: 24px;
          text-align: center;
          }
          .heading p{
          font-weight: normal;
          font-size: 18px;
          color: black;
          text-align: center;
          }
           .image-row {
          display: flex; /* Align images in a row */
          justify-content: space-between; /* Space images evenly */
          margin-top: 40px; /* Space above the images */
        }
        .image {
          flex: 0 1 calc(32% - 10px); /* Each image takes up 32% width */
          height: 280px; /* Maintain aspect ratio */
          border-radius: 8px; /* Optional: rounded corners */
        }
         .container {
          text-align: left;
          padding: 100px 20px;
        }
        .texts {
          display: flex;
          justify-content: space-between; /* Align items to the left, center, and right */
          text-align: center;
          margin-top: 20px;
        }
        .text-item {
          flex: 1; /* Each text-item takes equal space */
          padding: 0 15px;
        }
        .text-item h6 {
          font-size: 26px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }
        .text-item p {
          font-size: 20px;
          color: #333;
          line-height: 1.5;
          font-weight: normal;
        }
          .learn-more {
           display: inline-block;
          padding: 10px 20px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background-color: #40ADA8;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          }
          .learn-more hover{
          background-color: #339a94;
          }
          .container2 {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  max-width: 1400px;
  height: 200px;
  margin: 20px auto; /* Centers the container */
  background-color: #40ADA8;
}

.container2-text {
  font-size: 15px;
  margin-bottom: 15px;
  color: white !important;
}
.container2-email {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  display: block;
  margin-bottom: 15px;
}

.container2-email:hover {
  text-decoration: underline; /* Optional hover effect */
}

.container2-button {
  background-color: white;
  color: #40ADA8; /* Change to match the theme */
  border: none;
  padding: 10px 20px;
  border-radius: 20px; /* Makes the button oval */
  cursor: pointer;
  font-size: 16px;
  margin-top: -10px;
}

.footer {
  background-color: #40ADA8; /* Dark background for contrast */
  color: #fff; /* White text for readability */
  padding: 20px 0;
  text-align: center;
  margin-top: 100px;
  height: 80px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
}

.footer-logo img {
  width: 120px; /* Adjust logo size */
  height: 118px;
  margin-left: -55px;
  margin-top: 8px;

}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #fff; /* White text color */
  text-decoration: none;
  font-size: 16px;
}

.footer-links a:hover {
  text-decoration: underline; /* Optional hover effect */
}
  .footer-bottom {
  margin-top: 20px;
  font-size: 8px;
  color: black;
}
  .footer-bottom p{
   font-size: 15px;
  
  }
          
        

      `}</style>
    </div>
  );
};

export default LandingPage;