import {useState} from 'preact/hooks';

const VacancyNavbar = ({handlefilterVacancy}) => {

  const [job,setJob] = useState('');

  const filterVacancy = (speciality) => {
    setJob(speciality);
    handlefilterVacancy(job);
  }

  return(
	<nav class='vacancy__navbar'>
      <ul class='vacancy__navbar-list'>
      <li class='vacancy__navbar-item vacancy__navbar-item_active' onclick={() => filterVacancy('all')}>
        Все предложения
        </li>
        <li class='vacancy__navbar-item vacancy__navbar-item_active' onclick={() => filterVacancy('Программирование')}>
        Программирование
        </li>
        <li class='vacancy__navbar-item' onclick={() => filterVacancy('Дизайн')}>
        Дизайн
        </li>
        <li class='vacancy__navbar-item' onclick={() => filterVacancy('Анализ данных')}>
        Анализ данных
        </li>
        <li class='vacancy__navbar-item' onclick={() => filterVacancy('Маркетинг')}>
        Маркетинг
        </li>
        <li class='vacancy__navbar-item' onclick={() => filterVacancy('Менеджмент')}>
        Менеджмент
        </li>
      </ul>
    </nav>
  )
};

export default VacancyNavbar;