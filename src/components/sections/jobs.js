import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig, tech } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 1000px;
  margin: auto;
  .inner {
    display: flex;

    @media (max-width: 600px) {
      width: 250px;
      margin: auto;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    margin: 30px 65px;
    background-color: #fff;
    border-radius: 18px;
    width: 120px;
    height: 120px;
  }
  img {
    width: 120px;
    height: 120px;
  }
  img:hover {
    filter: none;
    mix-blend-mode: normal;
  }
  // .overlay {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgb(100, 255, 218, 0.5);
  //   border-radius: 5px;
  // }
  // .overlay:hover {
  //   background: none;
  // }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Technologies</h2>

      <div className="inner">
        {tech.map(item => (
          <div key={item.name} style={{ display: 'inline' }} className="wrapper">
            <img className="img" src={item.img} alt={item.name} />
            <div style={{ textAlign: 'center', marginTop: '5px' }}>{ item.name}</div>
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
