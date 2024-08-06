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

interface WelcomeEmailProps {
  userFirstName?: string;
  userLastName?: string;
}

const baseUrl = process.env.SITE_URL ? `${process.env.SITE_URL}` : "";

export const WelcomeEmail = ({
  userFirstName,
  userLastName,
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting DevVibe Studio...</Preview>
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
                  Hi {userFirstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for contacting DevVibe Studio!
                </Heading>
                <Text style={paragraph}>
                  We look forward to connecting with you and learning more about
                  your project.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If you have any additional questions or concerns, you can also
                  contact us at (813) 499-8379
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button href="https://www.devvibestudio.com" style={button}>
                  Visit Us
                </Button>
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
            © 2024 | DevVibe Studio. LLC., U.S.A. | www.DevVibeStudio.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  userFirstName: "Alan",
  userLastName: "Turing",
} satisfies WelcomeEmailProps;

export default WelcomeEmail;

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
  backgroundColor: "#ea580c",
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
