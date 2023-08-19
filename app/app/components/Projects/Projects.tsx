import Project from './Project';

export default function Projects() {
  return (
    <div>

      <div>

          <h2 className='text-center'> Some of my Projects </h2>

      </div>

      <div className='grid grid-cols-1 gap-4'>
          <Project
              name='hello'
              desc='hello this is a project description'
              project_url='hello.com'
              img_url='hello.com'
          />

      </div>
      
    </div>
  )
}
