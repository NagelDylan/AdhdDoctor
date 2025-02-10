import styled from "styled-components";
import evaluationImg from "./images/evaluation.svg";
import personalized from "./images/personalized.svg";
import continuous from "./images/continuous.svg";
import Testimonials from "./testimonials/Testimonials";

function Body() {
  return (
    <StyledContainer className="section-container">
      <div className="content-row">
        <h2>Who Are We?</h2>
        <h3>
          We specialize in comprehensive assessments and personalized treatment
          plans for Attention Deficit Hyperactivity Disorder (ADHD). Dr. Daniel
          Nagel brings years of experience in diagnosing and managing late teens
          and adults with ADHD.
        </h3>
      </div>

      <div className="content-row">
        <h2>Our Services Include:</h2>
        <div className="card-container">
          <div className="card">
            <img src={evaluationImg} alt="evalutation" />
            <h3>
              A <span className="bolded">thorough and detailed</span> evaluation
              using the latest clinical tools to provide an accurate diagnosis.
            </h3>
          </div>

          <div className="card">
            <img src={personalized} alt="personalized" />
            <h3>
              <span className="bolded">No Additional Costs</span>. Assessments
              and ongoing management visits are fully covered by OHIP.
            </h3>
          </div>

          <div className="card">
            <img src={continuous} alt="continuous" />
            <h3>
              We offer <span className="bolded">continuous care</span>,
              including virtual follow-ups for medication adjustments and
              lifestyle therapy, to ensure long-term success and improvement.
            </h3>
          </div>
        </div>
      </div>

      <div className="content-row">
        <h2>About Dr. Nagel:</h2>
        <h3>
          Dr. Daniel Nagel has worked as a family physician for 27 years and
          brings years of experience in diagnosing and managing late teens and
          adults with ADHD. He is an active member of CADDRA and has trained
          internationally in this specialty field. He is also an associate
          professor at Queen's University Faculty of Medicine and currently
          teaches future family physicians in the assessment and treatment of
          ADHD.
        </h3>
      </div>

      <div className="content-row">
        <h2>Testimonials:</h2>
        <Testimonials />
      </div>
    </StyledContainer>
  );
}

export default Body;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 64px;

  h2 {
    margin: 0;
    color: #4a4947;
    font-weight: bold;
  }

  h3 {
    margin: 0;
    color: #4a4947;
    font-weight: 400;
    font-size: 15px;
  }

  .content-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 1000px;
    width: 100%;
  }

  .card-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
  }

  .bolded {
    font-weight: bold;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    background: #faf7f0;
    padding: 16px;
    border-radius: 12px;
    gap: 16px;

    img {
      width: 72px;
      height: 72px;
    }
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }

    @media (max-width: 965px) {
      margin-bottom: 16px;
    }
  }
`;
