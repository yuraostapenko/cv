import React from 'react'
import { connect } from 'react-redux'

import './Main.css'

const Main = ({lang}) => {
    
  return (
    <div className='main'>
      <section className='contacts hover' id='Contact'>
        <i className='fas fa-info-circle fa-2x' />
        <h2 className='contactsTitle'>
          {lang ? 'Personal info' : 'Особиста інформація'}
        </h2>
        <ul className='contactMain'>
          <li className='contactListMain'>
            <i className='fab fa-github' />
            <a
              className='linkContact'
              href='https://github.com/yuraostapenko'
              target='_blank' rel='noopener noreferrer'
            >
              github.com/yuraostapenko
            </a>
          </li>
          <li className='contactListMain '>
          <i className="fas fa-user-circle"></i>
            <a className='ageContact'>
            {lang ? 'Age: 31' : 'Вік: 31'}
            </a>
          </li>
          <li className='contactListMain'>
            <i className='fas fa-map-marker-alt' />
             {lang ? '   c.Kyiv' : '   м.Київ'}
          </li>
          <li className='contactListMain'>
            <i className='fas fa-phone' /> +38(067)240-93-12
          </li>
          <li className='contactListMain'>
            <i className='fas fa-at' />
            
            <a className='linkContact' href='mailto:ostapenko040587@gmail.com'>
              ostapenko040587@gmail.com
            </a>
          </li>
          <li className='contactListMain'>
            <i className='fab fa-skype' /> ostapenko54
          </li>
        </ul>
      </section>

      <section className='projects hover' id='Projects'>
        <i className='fab fa-r-project fa-2x' />
        <h2 className='projectsTitle'>
          {lang ? 'Projects' : 'Проекти'}
        </h2>
        <div className='projectList'>
          <div className='proj lendos'>
            <span className='projectListText'>
              {lang ? 'project made only by HTML/CSS' : 'проект зроблений на HTML/CSS'}
              <a className='linkContact'
              href='https://yuraostapenko.github.io/HTML-CSS__lending/HTML-CSS__lending/build/index.html'
              target='_blank' rel='noopener noreferrer'>
              <br/>
              <span className='projectNames'>GO IT</span> 
            </a>
            </span>
          </div>
          <div className='proj game'>
            <span className='projectListText'>
              {lang ? 'project made by HTML/CSS & JAVASCRIPT' : 'проект зроблений на HTML/CSS & JAVASCRIPT'}
              <a className='linkContact'
              href='https://yuraostapenko.github.io/game-mortalIcon/game/index.html'
              target='_blank' rel='noopener noreferrer'>
              <br/>
              <span className='projectNames'>Memory Game</span>
            </a>
            </span>
          </div>
          <div className='proj shaleniy'>
            <span className='projectListText'>
              {lang ? 'project made by REACT&REDUX' : 'проект зроблений на REACT&REDUX'}
              <a className='linkContact'
              href='https://shaleniy.herokuapp.com'
              target='_blank' rel='noopener noreferrer'>
              <br/>
              <span className='projectNames'>SHALENIY</span>
            </a>
            </span>
          </div>
        </div>
      </section>

      <section className='technicalSkills hover' id='Technical'>
        <i className='fas fa-laptop fa-2x' />
        <h2 className='technicalSkillsTitle'>
          {lang ? 'Technical Skills' : 'Технічні навики'}
        </h2>
        <ul className='skillsMain'>
          <li className='technicalSkilllist'>HTML & CSS</li>
          <li className='technicalSkilllist'>Javascript</li>
          <li className='technicalSkilllist'>React & Reducs</li>
          <li className='technicalSkilllist'>GIThub</li>
          <li className='technicalSkilllist'>Trello</li>
          <li className='technicalSkilllist'>Slack</li>
        </ul>
      </section>

      <section className='experians hover' id='Employment'>
        <i className='far fa-user-circle fa-2x' />
        <h2 className='workTitle'>
          {lang ? 'Employment' : 'Досвід роботи'}
        </h2>
        <ul className='workMain'>
          <li className='workList'>
            {lang ? '- 2012-2014 Asistent manager of foreign logistics - PLC "RISE"' : '- 2012-2014 асистент менеджера зовнішної логістики - ПАТ"РАЙЗ"'}
            
          </li>
          <li className='workList'>
            {lang ? '- 2014-2015 Manager of foreign logistics - LTD "EUROPE TRANS"' : '- 2014-2015 менеджер зовнішньої логітики - ТОВ "ЄВРОПА-ТРАНС"'}
            
          </li>
          <li className='workList'>
            {lang ? '- 2016-2018 Manager of administrative activity - LTD "City-Space"' : '- 2016-2018 менеджер адміністративної діяльності - ТОВ"СІТІ-СПЕЙС"'}
            
          </li>
        </ul>
      </section>

      <section className='education hover' id='Education'>
        <i className='fas fa-graduation-cap fa-2x' />
        <h2 className='educatioTitle'>
          {lang ? 'Education' : 'Освіта'}
        </h2>
        <ul className='educationMain'>
          <li className='educationList'>
            {lang ? '- 2004-2009 NATIONAL UNIVERSITY OF LIFE AND ENVIRONMENTAL SCIENCES OF UKRAINE - master of marketing' : '- 2004-2009 Національний університет біоресурсів і природокористування України - магістр з маркетингу'}
            
          </li>
          <li className='educationList'>
            {lang ? '- 2018 IT course in GOIT - FULL STACK Web Developer' : '- 2018 курси "GOIT" - FULL STACK Web Developer'}
            
          </li>
        </ul>
      </section>

      <section className='softSkill hover' id='Soft'>
        <i className='far fa-gem fa-2x' />
        <h2 className='educatioTitle'>
          {lang ? 'Soft skills' : 'Додаткові вміння'}
        </h2>
        <ul className='softSkillMain'>
          <li className='softSkillList'>
            {lang ? 'Teamwork' : 'Команднй гравець'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Decision-Making' : 'Вмію приймати рішення'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Emotional Awareness' : 'Стресостійкий'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Positive Attitude' : 'Позитивно настроєнй'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Communication' : 'Комунікабельний'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Initiative' : 'Ініціативний'}
          </li>
          <li className='softSkillList'>
            {lang ? 'Cultural Fitness' : 'Відповідаю корпоративній культурі'}
          </li>
        </ul>
      </section>

      <section className='additional hover' id='Additional'>
      <i className="fas fa-info fa-2x"></i>
        <h2 className='additionalTitle'>
          {lang ? 'Additional info' : 'Додаткова інформація'}
        </h2>
        <ul className='additionalMain'>
          <li className='additionalList'>
            {lang ? 'Language skills: English / intermediate' : 'Знання мов: Англійська / середній'}            
          </li>
          <li className='additionalList'>
            {lang ? 'Interests: Enjoy football, ping pong, guitar' : 'Хоббі: футбол, настільний теніс, гітара'}
            
          </li>
        </ul>
      </section>

      <section className='additional hover' id='Additional'>
      <i className="far fa-file-pdf fa-2x"></i>
        <h2 className='additionalTitle'>
          {lang ? 'Download PDF' : 'Скачати PDF'}
        </h2>
        <ul className='additionalMain'>
          <li className='additionalList'>
          <a className='linkContact'
              href='https://drive.google.com/open?id=1afWBUGXXZf1V2W5TNGCFhKhyf2Q6rGSu'
              target='_blank' rel='noopener noreferrer'>Go to PDF 
            </a>           
          </li>
         
        </ul>
      </section>

    </div>
  )
}

function MSTP (state) {
  return {
    lang: state.lang
  }
}

export default connect(MSTP)(Main)
