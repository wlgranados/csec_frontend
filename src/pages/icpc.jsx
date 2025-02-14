import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Card } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const query = graphql`
{
    algresources: allStrapiResource {
        nodes {
            title
            items {
                text
                link
                aside
                title
                items {
                    text
                    link
                }
            }
        }
    },
    placeholderImage: file(relativePath: { eq: "ICPCLogo.png" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    }
}
`;

const buildList = ({ text, link, aside, title, items }, key, level = 4) => {
    const Tag = 'h' + level;
    return !items ? (
        <li className='alg__item' key={key}>
            <a className='alg__link' href={link} target='_blank' rel='noopener noreferrer'>
                {text}
                <FaExternalLinkAlt className='alg__link-icon' />
            </a>
            <p className='alg__aside'>{aside}</p>
        </li>
    ) : (
            <li className='alg__item' key={key}>
                <Tag>{title}</Tag>
                <ul className={`alg__list${items[0].items ? ' alg__list--list' : ''}`}>
                    {items.map((item, k) => buildList(item, k, ++level))}
                </ul>
            </li>
        )
};

const AlgorithmsPage = () => {
    const { algresources, placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>UTSC ICPC</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        ICPC is an algorithmic programming challenge that universities around the world participate in. Join fellow competitive programming enthusiasts who are seeking to take up challenging algorithmic coding competitions and represent UTSC.
                    </p>
                    <p className='about__text'>
                        Our qualification round is over and our UTSC ICPC Team has been chosen! We welcome Mustafa, Omar, Jerry, Jason, Alon, and Ziheng to the UTSC ICPC Team. Check out the gallery page for photos of the event and below for the 2019 ICPC results.
                    </p>
                    <p className='about__text about__text--secondary'>
                        About ICPC: <a className='alg__link' href='https://icpc.baylor.edu/' target='_blank' rel='noopener noreferrer'>
                            https://icpc.baylor.edu/
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                    </p>
                    <h4>Organizer</h4>
                    <p>
                        Prof. Brian Harrington, email: bharrington [at] utsc [dot] utoronto [dot] ca <br></br>
                    </p>
                    <h4>Coach</h4>
                    <p>
                        Prof. Albert Lai, email: trebla [at] cs [dot] toronto [dot] edu
                    </p>
                    <h4>Assistant Coach</h4>
                    <p>
                        Anh Le, email: ioanh [dot] le @mail [dot] utoronto [dot] ca
                    </p>
                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>

            <h2 className='about__title'>Previous ECNA Rounds</h2>
            <div>
                <h4>2019 Team <a className='alg__link' href='https://ecna19.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Mustafa, Omar, Jerry, Jason, Alon, Ziheng
                </p>
                <h4>2018 Team <a className='alg__link' href='https://ecna18.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Jerry, Omar, Keegan, Jon, Alon, Jason
                </p>
                <h4>2017 Team <a className='alg__link' href='https://ecna17.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    William, Akshay, Rhys, Omar, Jerry, Jon
                </p>
                <h4>2016 Team <a className='alg__link' href='https://ecna16.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Rhys, Tudor, Jason, Omar, Ousmane, Vishwa
                </p>

            </div>
            <h2 className='about__title'>Resources</h2>
            <div>
                <h4> <a className='alg__link' href='https://csecutsc.github.io/csec_site/a/' target='_blank' rel='noopener noreferrer'>
                    Legacy CSEC Algorithms ICPC Resources
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
            </div>
        </Container>
    );
};

AlgorithmsPage.meta = {
    seo: {
        title: 'UTSC ACM-ICPC',
        description: 'Join fellow UTSC competitive programming enthusiasts who are seeking to take up challenging algorithmic coding competitions and represent our campus. ICPC is an algorithmic programming challenge that universities around the world participate in.',
    }
}

export default AlgorithmsPage;