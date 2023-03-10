import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const aboutData = [
  {
    section: '#experiences',
    icon: <FaAward className='about__icon' />,
    title: 'Experience',
    smallText: '1+ Years Experience',
  },
  {
    section: '#testimonials',
    icon: <FiUsers className='about__icon' />,
    title: 'Feedback',
    smallText: 'Reviews from Collegues',
  },
  {
    section: '#portfolio',
    icon: <VscFolderLibrary className='about__icon' />,
    title: 'Projects',
    smallText: '4+ Completed',
  },
];

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            {aboutData.map(({ section, icon, title, smallText }) => (
              <a href={section} key={section}>
                <article className='about__card'>
                  {icon}
                  <h5>{title}</h5>
                  <small>{smallText}</small>
                </article>
              </a>
            ))}
          </div>

          <div className='about__intro'>
            <p>
              My name is Qiqi Liang, I am a software engineer currently working
              as a<em> React Native Frontend Developer</em> in Easy Hundred,Inc.
            </p>

            <p>
              My primary responsibility is to develop and enhance the app, EZ100
              on{' '}
              <a
                href='https://apps.apple.com/us/app/ez100-restaurant-supplies/id1513291811'
                target='_blank'
              >
                IOS
              </a>{' '}
              and{' '}
              <a
                href='https://play.google.com/store/apps/details?id=com.ez100shop'
                target='_blank'
              >
                Android
              </a>{' '}
              using <em>Ract Native and Redux</em>.
            </p>

            <p>
              I previously completed fullstack internship at Class A IT where I
              learned how to design, implement and deployed fullstack
              application.
            </p>

            <p>
              As my current work experience and skills match your job
              requirements, I feel that I am a suitable candidate for this
              position.
            </p>
          </div>

          <a href='#contact' className='btn btn-primary'>
            LEt's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
