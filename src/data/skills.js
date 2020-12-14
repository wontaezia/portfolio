import React from 'react';
import { IconContext } from 'react-icons';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiGatsby,
  SiNodeDotJs,
  SiGraphql,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const skills = [
  {
    id: 1,
    title: `Javascript (ES6+)`,
    icon: (
      <IconContext.Provider value={{ color: '#ffc600' }}>
        <SiJavascript />
      </IconContext.Provider>
    ),
    description: `
    ES6 이후의 모던 자바스크립트를 활용해 프로젝트에 적용할 수 있으며 
    조금 더 깔끔한 코드를 위해 지속적으로 공부하고 있습니다.
    `,
  },
  {
    id: 2,
    title: `React`,
    icon: <SiReact />,
    description: `
    Functional Component, Hooks, Class Component, Styled Component, SASS에 익숙하고 라이프 사이클을 적절히 활용할 수 있습니다. 
    현재는 적절한 컴포넌트 분리와 재사용을 위한 Custom Hook 위주로 공부하고 있습니다.
    `,
  },
  {
    id: 3,
    title: `Redux (react-redux)`,
    icon: <SiRedux />,
    description: `
    Ducks Pattern을 활용하여 리엑트 내의 전역 상태 관리를 할 수 있습니다.
    현재는 미들웨어와 최적화를 위주로 공부하고 있습니다.
    `,
  },
  {
    id: 4,
    title: `Gatsby.js`,
    icon: <SiGatsby />,
    description: `
    Static한 개인 웹페이지를 만들기 위해 사용하였습니다.
    스타터를 사용하지 않고 GraphQL와 Gatsby Node APIs를 이용하여 마크다운 블로그를 구축할 수 있고 
    현재는 적절한 SEO 적용을 위주로 공부하고 있습니다.
    `,
  },
  {
    id: 5,
    title: `Node.js / GraphQL`,
    icon: (
      <>
        <SiNodeDotJs />
        <SiGraphql />
      </>
    ),
    description: `
      아직은 부족하지만 Express를 활용하여 라우팅과 로직의 모듈화가 가능하며 Prisma를 이용하여 MySQL에 구축된 데이터베이스를 조작할 수 있습니다.
      현재는 능숙하게 다룰 수 있도록 지속적으로 공부하고 있습니다.
    `,
  },
  {
    id: 6,
    title: `HTML / CSS`,
    icon: (
      <>
        <SiHtml5 />
        <SiCss3 />
      </>
    ),
    description: `
      시멘틱 마크업과 웹표준을 준수하며 레이아웃과 애니메이션 구현에 능숙합니다.
    `,
  },
];

export default skills;
