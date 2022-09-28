import "./App.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
} from "@coreui/react";
import mail from "./images/mail-5886.png";
import mail2 from "./images/paper-plane-2563.png";

function App() {
  return (
    <div className="App">
      <CContainer>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
          <CCol xs>
            <h5>Email verification</h5>
            <CCard>
              <CCardImage
                orientation="top"
                className="w-50 mx-auto"
                src={mail}
              />
              <CCardBody>
                <CCardTitle>Your email has not been verified.</CCardTitle>
                <CCardText>
                  Send a verification mail to ******@g****.com
                </CCardText>
                <CButton href="#">Send verification email</CButton>
              </CCardBody>
              <CCardFooter>
                <small className="fs-5 text-info">
                  Skip for now <span className="fs-4">&gt;</span>
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs>
            <h5>Email verification</h5>
            <CCard>
              <CCardImage
                orientation="top"
                className="w-25 mx-auto"
                src={mail2}
              />
              <CCardBody>
                <CCardTitle>An email has been sent to you.</CCardTitle>
                <CCardText>
                  Check the email that's associated with your account for the
                  verification code.
                </CCardText>
                <CFormLabel className="text-start">
                  Verification code
                </CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput />
                </CInputGroup>
                <CButton href="#"> Verify </CButton>
              </CCardBody>
              <CCardFooter>
                <p className="fs-5 text-info">Send me another code</p>
                <small className="fs-5 text-info">
                  Skip for now <span className="fs-4">&gt;</span>
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default App;
