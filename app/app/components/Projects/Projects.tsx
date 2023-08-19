import Project from './Project';

export default function Projects() {
  return (
    <div>

      <div>

          <h2 className='text-center text-2xl'> Some of my Projects </h2>

      </div>

      <div className='grid grid-cols-1 gap-4 py-5 px-10'>
          <Project
              name='hello'
              desc='hello this is a project description'
              project_url='https://www.kaggle.com/datasets/nikihellmers/paraguay-supermarket-products'
              img_url='/dataset-cover.jpeg'
          />

      </div>
      
    </div>
  )
}
