import './Home.css';
import { cleanPage } from '../utils/cleanPage';

export const Home = () => {
  const main = document.querySelector('main');
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <h1>Hi<span class="cr-span">!</span></h1>
    <h1>My name is Carlos</h1>
    <p>Full Stack Developer in love
    with development and
    passionate about learning
    new technologies.
    Learning code every day
    whenever I can. I take
    courses, read books, etc.
    I have a strong desire to
    grow and improve in this
    amazing field.
    <a href="mailto:peterparker@gmail.com">Say hi <span class="cr-span">→</span></a>
    </section>`;
};
