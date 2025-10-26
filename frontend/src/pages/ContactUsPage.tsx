import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapPin,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { darken } from "polished";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

const Alert = styled.div<{ type: "success" | "error" }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: ${({ type }) =>
    type === "success" ? "#d1fae5" : "#fee2e2"};
  color: ${({ type }) => (type === "success" ? "#065f46" : "#b91c1c")};
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageWrapper>
      <Container>
        <TitleSection>
          <Heading>Contact Us</Heading>
          <Subheading>{client.tagline}</Subheading>
        </TitleSection>

        <Grid>
          <div>
            <Card>
              <Title>Get in Touch</Title>

              <InfoItem>
                <Icon icon={faPhone} />
                <div>
                  <Label>Phone</Label>
                  <Text>Office: {client.phoneOffice}</Text>
                  <Text>Mobile: {client.phoneMobile}</Text>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon icon={faEnvelope} />
                <div>
                  <Label>Email</Label>
                  <Text>{client.email}</Text>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon icon={faMapPin} />
                <div>
                  <Label>Address</Label>
                  <Text>{client.address}</Text>
                </div>
              </InfoItem>

              <HoursSection>
                <Label>Business Hours</Label>
                <Text>{client.openHours1}</Text>
                <Text>{client.openHours2}</Text>
                <Text>{client.openHours3}</Text>
              </HoursSection>
            </Card>

            <Card>
              <Title>Location</Title>
              <MapWrapper>
                <iframe
                  src={client.location}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapWrapper>
            </Card>
          </div>

          <Card>
            <Title>Send Us a Message</Title>
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <LabelInput htmlFor="name">Full Name</LabelInput>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <LabelInput htmlFor="email">Email Address</LabelInput>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <LabelInput htmlFor="phone">Phone Number</LabelInput>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <LabelInput htmlFor="message">Message</LabelInput>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>

              {submitStatus === "success" && (
                <Alert type="success">
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}
              {submitStatus === "error" && (
                <Alert type="error">
                  Sorry, there was an error sending your message. Please try
                  again later.
                </Alert>
              )}
            </Form>
          </Card>
        </Grid>
      </Container>
    </PageWrapper>
  );
}

export default ContactPage;

const PageWrapper = styled.div`
  padding: 5rem 0;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 768px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-areas:
    "left right"
    "form form";

  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-areas:
      "left"
      "right"
      "form";
    grid-template-columns: 1fr;
  }

  & > div:first-child {
    display: contents;
  }

  & > div:first-child > ${Card}:first-child {
    grid-area: left;
  }

  & > div:first-child > ${Card}:nth-child(2) {
    grid-area: right;
  }

  & > ${Card}:last-child {
    grid-area: form;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${client.primaryColor};
  margin-top: 0.25rem;
`;

const Label = styled.h3`
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #4b5563;
`;

const HoursSection = styled.div`
  margin-top: 2rem;
`;

const MapWrapper = styled.div`
  height: 85%;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LabelInput = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    border-color: ${client.primaryColor};
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    border-color: ${client.primaryColor};
  }
`;

const Button = styled.button<{ disabled: boolean }>`
  background-color: ${client.primaryColor};
  color: ${client.secondaryColor};
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: ${darken(0.2, client.secondaryColor)};
    color: ${client.primaryColor};
  }
`;
