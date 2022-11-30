import { h } from 'preact';

//import Greetings from '../Greetings/Greetings';
import Skills from '../Skills/Skills';
import Vacancies from '../Vacancies/Vacancies';
//import Сomment from '../Сomment/Сomment';
import Questions from '../Questions/Questions';
import Benefits from '../Benefits/Benefits';
import NotFound from '../NotFound/NotFound';
//import HowBeExpert from '../HowBeExpert/HowBeExpert';
import Stories from '../Stories/Stories'

const Main = () => (
  <>
	{/*<Greetings />*/}
  <Skills />
  <Benefits />
  <Vacancies />
  <NotFound />
  {/*<Сomment />*/}
  <Questions />
  <Stories />
  </>
);

export default Main;