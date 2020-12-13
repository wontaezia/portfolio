import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import { slugify } from '@util/utilityFuctions';
import device from '@styles/device';

function PostPreview({ totalCount, edges, tag }) {
  useEffect(() => {
    staggerList();
  }, []);

  return (
    <>
      <MainTitle className="mainTitle" tag={tag}>
        Blog
      </MainTitle>
      <PostCount>{totalCount} Posts</PostCount>
      <PostList>
        {edges.map(({ node }) => {
          const {
            id,
            frontmatter: { title, date, slug, img, tags },
          } = node;

          return (
            <Post key={id} className="post">
              <Loading className="loading" />
              <Link to={`/blog/${slug}`}>
                <div className="hover" />
                <Thumbnail>
                  <img src={img} alt="post thumbnail" />
                </Thumbnail>
                <Text>
                  <Title>{title}</Title>
                  <CreateAt>{date.split('T')[0]}</CreateAt>
                </Text>
              </Link>
              <Tags>
                {tags?.map(tag => (
                  <li key={tag}>
                    <Link to={`/blog/tag/${slugify(tag)}`}>{tag}</Link>
                  </li>
                ))}
              </Tags>
            </Post>
          );
        })}
      </PostList>
    </>
  );
}

export default PostPreview;

const MainTitle = styled.h1`
  padding-bottom: 3rem;
  margin-top: 18rem;
  border-bottom: 1px solid ${({ theme }) => theme.$darkGray};
  font-weight: 700;
  font-size: 8rem;

  &::after {
    content: ${({ tag }) => `'${tag ? `#${tag}` : ''}'`};
    display: ${({ tag }) => (tag ? 'block' : 'none')};
    padding: 0.6rem;
    margin: 1rem 0 0;
    background: ${({ theme }) => theme.$mainColor};
    color: ${({ theme }) => theme.$white};
    font-size: 2rem;
  }

  @media ${device.tablet} {
    &::after {
      display: ${({ tag }) => (tag ? 'inline' : 'none')};
      margin: 0 0 0 3rem;
    }
  }
`;

const PostCount = styled.h4`
  margin-top: -4rem;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: right;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  margin-top: 10rem;
  color: ${({ theme }) => theme.$black};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Post = styled.li`
  position: relative;
  overflow: hidden;

  & > a::before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30rem;
    background: rgba(0, 0, 0, 0.2);
    transition: all 1s;
    opacity: 1;
    z-index: 9;
  }

  & > a:hover::before {
    opacity: 0;
  }

  @media ${device.tablet} {
    & > a::before {
      display: block;
    }
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.$black};
  transform: translateY(-120%);
  z-index: 99;
`;

const Thumbnail = styled.div`
  &:hover div {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

const Text = styled.div`
  padding: 1.6rem 0;
`;

const Title = styled.h3`
  display: -webkit-box;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.$black};
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.333;
  transition: color 0.3s ease-in-out 0s;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
`;

const CreateAt = styled.span`
  color: ${({ theme }) => theme.$darkGray};
  font-weight: 500;
  font-size: 1.2rem;
  opacity: 0.33;
`;

const Tags = styled.ul`
  ${({ theme }) => theme.flex('flex-start')}
  flex-wrap: wrap;
  margin: -1rem 0 1rem;

  li {
    margin-right: 1rem;
    color: ${({ theme }) => theme.$darkGray};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6;

    &:hover {
      color: ${({ theme }) => theme.$mainColor};
    }

    &::before {
      content: '#';
    }
  }
`;

const staggerList = () => {
  gsap.from(['.mainTitle'], {
    y: 100,
    opacity: 0,
    ease: 'power3.easeInOut',
    delay: 0.5,
  });
  gsap.from(['.post'], {
    y: 100,
    opacity: 0,
    ease: 'power3.easeInOut',
    delay: 0.8,
    stagger: {
      amount: 0.2,
    },
  });
  gsap.from(['.loading'], {
    y: 0,
    ease: 'power3.easeInOut',
    delay: 1.6,
    stagger: {
      amount: 0.6,
    },
  });
};
