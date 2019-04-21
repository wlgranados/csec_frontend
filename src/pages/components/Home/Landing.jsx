import React, { useCallback } from 'react';
import { Container } from '@components';
import * as icons from '@images/landing';
import '@styles/pages/components/Home/Landing.scss';

const SIZE = 30;
const MAX_WIDTH = 140;
const MAX_LEFT = 2000;
const MAX_TOP = 600;
const KEYS = Object.keys(icons);

export const Landing = () => {
    const createIcons = useCallback(() => {
        const res = [];
        for (let i = 0; i < SIZE; i++) {
            const i = Math.random();
            const invert = i > 0.5 ? ' landing__icon-wrapper--invert' : '';
            const key = KEYS[Math.floor(i * KEYS.length)];
            const style = {
                width: `${ Math.max(Math.random() * MAX_WIDTH, 40) }px`,
                left: `${ (Math.random() * MAX_LEFT) - 40 }px`,
                top: `${ (Math.random() * MAX_TOP) + 40 }px`,
                animationDelay: `${ Math.random() * 1000 }ms`,
                opacity: Math.random()
            };

            res.push(
                <span key={ i } style={ style } className={`landing__icon-wrapper${ invert }`}>
                    <img alt='icon' className='landing__icon' src={ icons[key] }/>
                </span>
            );
        }
        return res;
    });

    return (
        <Container tag='section' block='landing' className='home__section'>
            <div className='landing__content'>
                <h1 className='landing__title'>Computer Science Enrichment Club</h1>
                <p className='landing__text'>
                    Helping students with a passion for Computer Science take the next steps in their career.
                </p>
            </div>
            { createIcons() }
        </Container>
    );
}
