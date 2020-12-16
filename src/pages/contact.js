import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Layout from '@components/layout';
import SEO from '@components/seo';
import { MAIL_KEY } from '../config';
import device from '@styles/device';
import Preloader from '@components/preloader';

function Contact() {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState({
    fullname: '',
    fromEmail: '',
    body: '',
  });

  useEffect(() => {
    staggerTitle();
  }, []);

  const handleValue = e => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setIsActive(true);
      let formData = new FormData();

      for (const key in message) {
        formData.append(key, message[key]);
      }

      await fetch(`https://www.flexyform.com/f/${MAIL_KEY}`, {
        body: formData,
        method: 'POST',
      });

      setMessage({
        fullname: '',
        fromEmail: '',
        body: '',
      });
      setIsActive(false);
    } catch (error) {
      console.log(error);
      setMessage({
        ...message,
        body: '',
      });
      setIsActive(false);
    }
  };

  const { fullname, fromEmail, body } = message;
  return (
    <Layout>
      <SEO title="Contact" description="" />
      <MainTitle>
        <h1 className="contactTitle">Contact</h1>
      </MainTitle>
      <Form onChange={handleValue} onSubmit={handleSubmit}>
        <Row>
          <InputBox>
            <input type="text" name="fullname" value={fullname} required />
            <Text>이름</Text>
            <Line />
          </InputBox>
          <InputBox>
            <input type="email" name="fromEmail" value={fromEmail} required />
            <Text>이메일</Text>
            <Line />
          </InputBox>
        </Row>
        <Textarea>
          <textarea name="body" value={body} required />
          <Text>내용</Text>
          <Line />
        </Textarea>
        <button type="submit">Send</button>
      </Form>
      {isActive ? <Preloader /> : ''}
    </Layout>
  );
}

export default Contact;

const MainTitle = styled.div`
  h1 {
    position: relative;
    margin-top: 10rem;
    font-weight: 700;
    font-size: 8rem;
    text-align: center;
  }

  @media ${device.mobileL} {
    margin-top: 18rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  transition: 0.5s;

  button {
    width: 100%;
    padding: 2rem 0;
    margin: 8rem 0;
    background: ${({ theme }) => theme.$black};
    color: ${({ theme }) => theme.$white};
    font-size: 1.6rem;
  }
`;

const Row = styled.div`
  @media ${device.laptop} {
    display: flex;

    & > div:first-child {
      margin-right: 4rem;
    }
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  margin-top: 4rem;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    background: transparent;
    font-size: 1.6rem;
    z-index: 1;

    &:focus ~ span,
    &:valid ~ span {
      top: -3.5rem;
      left: -1rem;
    }

    &:focus ~ div,
    &:valid ~ div {
      height: 100%;
      border: 1px solid ${({ theme }) => theme.$border};
    }
  }

  @media ${device.laptop} {
    max-width: 30rem;
  }
`;

const Textarea = styled.div`
  position: relative;
  width: 100%;
  max-width: 64rem;
  height: 10rem;
  margin-top: 4rem;
  padding: 1rem 0;

  textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    resize: none;
    font-size: 1.6rem;

    &:focus ~ span,
    &:valid ~ span {
      top: -3.5rem;
      left: -1rem;
    }

    &:focus ~ div,
    &:valid ~ div {
      height: 100%;
      border: 1px solid ${({ theme }) => theme.$border};
    }
  }
`;

const Text = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0 1rem;
  font-size: 1.8rem;
  line-height: 4rem;
  transition: 0.5s;
  pointer-events: none;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 0.2rem;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.$border};
  transition: height 0.5s;
  border-radius: 0.2rem;
  pointer-events: none;
`;

const staggerTitle = () => {
  gsap.from('.contactTitle', {
    y: 100,
    opacity: 0,
    ease: 'power3.easeInOut',
    delay: 0.5,
  });
};
