import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>    
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="HTML"/>
      <SkillList src={checkMarkIcon} skill="CSS & Bootstrap"/>
      <SkillList src={checkMarkIcon} skill="JavaScript"/>
      <SkillList src={checkMarkIcon} skill="Node"/>
      <SkillList src={checkMarkIcon} skill="react"/>
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
      <SkillList src={checkMarkIcon} skill="Git & Github"/>
      <SkillList src={checkMarkIcon} skill="aws, gcp, azure, IBM Cloud"/>
      <SkillList src={checkMarkIcon} skill="linux"/>
      <SkillList src={checkMarkIcon} skill="computer Network"/>
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="SQL"/>
      <SkillList src={checkMarkIcon} skill="Python"/>
      <SkillList src={checkMarkIcon} skill="AI/ML/DL/CV/NLP"/>
      <SkillList src={checkMarkIcon} skill="Data Analytics"/>
      <SkillList src={checkMarkIcon} skill="Java"/>
    </div>
    </section> 
  );
}

export default Skills;