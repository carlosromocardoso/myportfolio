import { changeTheme, Navbar } from './components/Navbar/Navbar'
import './style.css'

import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home'
import { Projects } from './pages/ProjectsPage'
import { linkPage } from './utils/lingPage'

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);

linkPage("#projectslink", Projects);

Home();

changeTheme();


