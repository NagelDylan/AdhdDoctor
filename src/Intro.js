import styled from "styled-components";
import doctorImg from "./images/doctor-image.jpg";

function Intro() {
  return (
    <StyledContainer className="section-container">
      <div className="inner-div">
        <div className="desktop-img">
          <img src={doctorImg} alt="doctor daniel" />
        </div>

        <div className="right-section">
          <h1>
            Expert <span className="orange-text"> Adult ADHD Assessment</span>{" "}
            and Treatment
          </h1>

          <h2>
            Comprehensive evaluations tailored to your needs, fully covered by
            OHIP for Ontario residents.
          </h2>

          <div className="btn-holder">
            <a className="appoint-btn" href="mailto:adhddoctor@zohomail.com">
              Email For Appointment
            </a>
          </div>
          <div className="btn-holder">
            <a
              className="screen-btn"
              href="https://thinkadhd.co.uk/#:~:text=Your%20first%20step%20toward%20Adult%20ADHD%20diagnosis%20and%20treatment"
              target="_blank"
              rel="noreferrer"
            >
              Take Screening Test
            </a>
          </div>
        </div>

        <div className="mobile-img">
          <img src={doctorImg} alt="doctor daniel" />
        </div>
      </div>
    </StyledContainer>
  );
}

export default Intro;

const StyledContainer = styled.div`
  background: #faf7f0;

  .inner-div {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1200px;

    img {
      width: 200px;
    }

    .right-section {
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      @media (max-width: 803px) {
        align-items: center;
      }
    }

    h1 {
      font-size: 44px;
      font-weight: bold;
      color: #4a4947;
      line-height: 50px;
      margin: 0;

      @media (max-width: 803px) {
        font-size: 36px;
        line-height: 40px;
        text-align: center;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #4a4947;
      margin: 0;

      @media (max-width: 803px) {
        font-size: 16px;
        text-align: center;
      }
    }

    .orange-text {
      color: #b17457;
    }

    .appoint-btn {
      transition: background-color 0.3s ease, color 0.3s ease;
      background: #d8d2c2;
      padding: 16px 24px;

      color: #4a4947;
      font-weight: bold;
      text-decoration: none;
      border-radius: 12px;

      &:hover {
        color: #b17457;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    .screen-btn {
      transition: background-color 0.3s ease, color 0.3s ease;
      background: #b17457;
      padding: 16px 24px;

      color: #faf7f0;
      font-weight: bold;
      text-decoration: none;
      border-radius: 12px;

      &:hover {
        background: #9e644e;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    img {
      border-radius: 12px;
    }

    .btn-holder {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    @media (max-width: 803px) {
      .desktop-img {
        display: none;
      }

      .mobile-img {
        margin-top: 64px;
      }
    }

    @media (min-width: 803px) {
      .mobile-img {
        display: none;
      }
    }
  }
`;
