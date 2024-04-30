import Project from './Project';

export default function Projects() {
  return (
    <div className='pt-5'>

      <div>

          <h2 className='text-center text-2xl'> Some of my Projects: </h2>

      </div>

      <div className='lg:w-[50%] m-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 py-5 px-10'>
          <Project
              name='SkipList-HashTable'
              desc='A data structure that parses 2000+ lines of formatted CSV data using hashing. Data is then stored into a skiplist, allowing for quick indexing through the data set.'
              project_url='https://github.com/findingnewcolor/SkipList-HashTable'
              img_url='/skiplist.png'
          />
          <Project
              name='RayTracing in C++'
              desc='Creates images simulating visual properties of objects of various compositions when struck by light from varying sources, intensities, and directions.'
              project_url='https://github.com/findingnewcolor/RayTracer'
              img_url='/RTS2v5_dark.png'
          />
          <Project
              name='Website Group Project'
              desc='Done under my school github account: BassettC. Collaborated with a group of students to develop a functioning website from scratch. Our website is intended to connect tutors and students, improving learning outcomes.'
              project_url='https://github.com/cam-2/tutorproject'
              img_url='/3308_basic_diagram.drawio.png'
          />
      </div>
      
    </div>
  )
}
