import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>{AppConfig.title}</GradientText> 👋
        </>
      }
      description={
        <>
          As an experienced engineering manager with proven track records, I
          possess a diverse range of skills that contribute to successful team
          leadership and project delivery. With high EQ and technical prowess, I
          excel in mentoring, problem-solving, and building high-performance
          teams. My logical thinking drives innovation and impactful project
          success.
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/jiazhen-xie.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/JIAZHENXIE">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/jiazhen-xie/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
