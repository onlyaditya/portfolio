import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';
const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const TableStyles = styled.table`
  border-collapse: collapse;
  /* background-color: var(--light-navy); */
  color: var(--lightest-slate);
  margin: auto;
  margin-top: 30px;
  font-size: 17px;
  text-align: left;
  & td {
    border: 1px solid var(--lightest-navy);
  }
  & td {
    padding: 15px 25px;
  }
  & tr:hover {
    background: var(--light-navy);
  }
  & tr > td:first-of-type {
    font-weight: 400;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  .sMedia a {
    color: var(--light-slate);
    padding: 5px 15px 5px 0;
    /* margin-right: 10px; */
    padding: 10px;
    /* margin */
  }
  .sMedia a:hover > svg {
    color: var(--green);
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently actively looking for any new opportunities, in full-stack web development. If
        you are an employer looking for dedicated web developer, HIRE me before someone else does.
      </p>

      <TableStyles>
        <tbody>
          <tr>
            <td>Name :</td>
            <td>Aditya Kumar</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>onlyaditya001@gmail.com</td>
          </tr>
          <tr>
            <td>Phone :</td>
            <td>(+91) 701 242 3588</td>
          </tr>
          <tr>
            <td>Social Media :</td>
            <td className="sMedia">
              <a
                href="https://github.com/onlyaditya"
                title="GitHub link"
                target="_blank"
                rel="noopener noreferrer">
                <Icon name={'GitHub'} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-1994/"
                title="LinkedIn link"
                target="_blank"
                rel="noopener noreferrer">
                <Icon name={'Linkedin'} />
              </a>
            </td>
          </tr>
          <tr>
            <td>Location :</td>
            <td>Bihar, India</td>
          </tr>
        </tbody>
      </TableStyles>
      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
