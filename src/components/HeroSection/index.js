import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Virtual Booking Made Easy</HeroH1>
                    <HeroP>Sign up for a new account today and recieve $250 in credit towards your next payment</HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" primary="true" dark="true" exact='true' spy={true} smooth={true} offset={-80} duration={500}>Get Started</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer> 
        </>
    )
}

export default HeroSection
