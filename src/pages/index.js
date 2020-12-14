import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Layout from '@components/layout';
import SEO from '@components/seo';
import device from '@styles/device';

function IndexPage() {
  useEffect(() => {
    revealPage();
    revealText();
  }, []);

  return (
    <Layout>
      <SEO
        title="Home"
        description="프론트엔드 개발자 정원태의 포트폴리오 웹페이지"
      />
      <Reveal className="reveal" />
      <Greeting>
        {welcomeTexts.map((letter, index) => {
          return (
            <li key={index} className="letter">
              {letter}
            </li>
          );
        })}
      </Greeting>
      <Mail className="mail">
        <span>Feel free to contact me via email at </span>
        <a href="mailto:wontae1206@gmail.com">
          wontae1206@gmail.com{' '}
          <span role="img" aria-label="greeting">
            🙌
          </span>
        </a>
      </Mail>
    </Layout>
  );
}

export default IndexPage;

const welcomeTexts = [
  'h',
  'e',
  'l',
  'l',
  'o',
  '',
  't',
  'h',
  'e',
  'r',
  'e',
  '!',
];

const Reveal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.$mainColor};
  z-index: 99;
`;

const Greeting = styled.ul`
  ${({ theme }) => theme.flex('center', 'center')}
  height: 60vh;

  li {
    padding-right: 0.4rem;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    transform: translateY(100%);
    opacity: 0;
  }

  @media ${device.mobileL} {
    li {
      font-size: 4rem;
      padding-right: 1rem;
    }
  }

  @media ${device.tablet} {
    li {
      font-size: 8rem;
    }
  }
`;

const Mail = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  ${({ theme }) => theme.flex(null, null, 'column')}
  width: 100%;
  max-width: 128rem;
  padding: 0 5rem;
  color: ${({ theme }) => theme.$black};
  font-size: 1.4rem;
  text-align: right;
  line-height: 1.2;
  transform: translateX(-50%);

  a {
    font-weight: bold;
  }
`;

const revealText = () => {
  gsap.to('.letter', {
    y: 0,
    opacity: 1,
    delay: 1,
    ease: 'power3.easeInOut',
    stagger: {
      amount: 0.8,
    },
  });
};

const revealPage = () => {
  gsap.to('.reveal', {
    duration: 0.8,
    width: '100%',
    delay: 0.6,
    ease: 'power3.inOut',
  });
  gsap.to('.reveal', {
    duration: 1,
    x: '100%',
    delay: 0.8,
    ease: 'power3.inOut',
  });
};
