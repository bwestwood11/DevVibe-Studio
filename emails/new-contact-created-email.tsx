import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstName?: string;
  userLastName?: string;
  userEmail?: string;
  userCompany?: string;
  userMessage?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewUserEmail = ({
  userFirstName,
  userLastName,
  userEmail,
  userCompany,
  userMessage,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New User Contacted DevVibe Studio</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
          <Img
              style={{ width: "120px" }}
              src={`https://www.devvibestudio.com/devvibe-studio-logo.png`}
            />
          </Section>

          <Section style={content}>
            <Row>
            <Img
                style={{ objectFit: "cover", width: "100%", height: "200px" }}
                width={320}
                src={`https://www.devvibestudio.com/Hero-Image-3.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Brett,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Here is the new message from {userFirstName} {userLastName}!
                </Heading>

                <Text style={paragraph}>
                  <b>Email: </b>
                  {userEmail}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Company: </b>
                  {userCompany}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {userMessage}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
          <Img
              style={{ ...image, marginInline: "auto" }}
              width={120}
              src={`https://www.devvibestudio.com/devvibe-studio-logo.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | DevVibe Studio, LLC., U.S.A. | www.DevVibeStudio.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

NewUserEmail.PreviewProps = {
  userFirstName: "Alan",
  userLastName: "Turing",
  userEmail: "alan@gmail.com",
  userCompany: "Turing Co.",
  userMessage: "This is a test message",
} satisfies EmailProps;

export default NewUserEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
