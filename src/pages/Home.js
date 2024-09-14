import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonA from '../components/ButtonA';
import '../styling/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header/>
        <div className='school-name'>
          <h1>Columbia University</h1>
          <h1>Columbia University</h1>
        </div>
        <div className='project-header'>
          <h2>Autonomous Underwater Vehicle</h2>
        </div>
        <p className='headline'>
        <i>Embracing autonomy in the depths: we're diving deeper into autonomy and innovation, 
        cutting the cord from ROVs and engineering AUV's to explore new frontiers beneath the waves.</i>
        </p>
        <p className='lead-desc'>
        We are currently looking for students to lead our mechanical-, and software engineering teams. 
        </p>
        <ButtonA href="https://forms.gle/ykVCjo2pmSHhHPf77" className="lead-app-button">
          Apply Here
        </ButtonA>
        <p className='recruit-desc'>
          To join the team, fill out the interest form below.
        </p>
        <ButtonA href="https://docs.google.com/forms/d/e/1FAIpQLSfN8Tv9NrbjyPe7EeENNSPOVc_t7yRzIyngJbnfa8SXe9wqqg/viewform?usp=sf_link" className="interest-form-button">
          Interest Form
        </ButtonA>
        <p className='recruit-desc'>
          Meeting times are TBD, so join our mailing list and Slack workspace for updates.
        </p>
        <div className='join-button-container'>
          <ButtonA href="https://join.slack.com/t/columbiaurobotics/shared_invite/zt-2pfhr79hx-6raBzG7IiA3NK2i1e0k8Xw" className="slack-button">
            Slack
          </ButtonA>
          <ButtonA href="/join" className="mailing-list-button">
            Mailing List
          </ButtonA>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
