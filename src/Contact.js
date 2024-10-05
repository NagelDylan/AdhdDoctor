import styled from "styled-components";

function Contact() {
  return (
    <StyledContainer className="section-container">
      <div className="content-row">
        <h2>Contact Us!</h2>
        <h3>
          Have questions or want to schedule an appointment? Send us an email
          and we'll get back to you shortly!
        </h3>

        <div className="btn-holder">
          <a className="appoint-btn" href="mailto:adhddoctor@zohomail.com">
            Email Now
          </a>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Contact;

const StyledContainer = styled.div`
  background: #faf7f0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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

  .appoint-btn {
    background: #d8d2c2;
    padding: 8px 32px;

    color: #4a4947;
    font-weight: bold;
    text-decoration: none;
    border-radius: 12px;

    &:hover {
      color: #b17457;
    }
  }

  .btn-holder {
    margin-top: 32px;
  }
`;
