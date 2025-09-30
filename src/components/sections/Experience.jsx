import SectionHeading from '../ui/SectionHeading'
import ExperienceCard from '../ui/ExperienceCard'

const Experience = () => {
  const experiences = [
    {
      position: 'Quality Assurance Engineer',
      company: 'Texmo Blank',
      period: 'FEB 2023 - JAN 2024',
      description: [

      ]
    },
    {
      position: 'Software Engineer Intern - Backend',
      company: 'Scalekit',
      period: 'MAY 2025 - SEPT 2025',
      description: [
        
      ]
    },
    {
      position: 'Software Engineer - Backend',
      company: 'Scalekit',
      period: 'OCT 2025 - Present',
      description: [
        
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Work Experience"
  
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience