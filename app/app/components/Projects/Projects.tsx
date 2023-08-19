import Project from './Project';

export default function Projects() {
  return (
    <div>

      <div>

          <h2 className='text-center text-2xl'> Some of my Projects </h2>

      </div>

      <div className='grid grid-cols-1 gap-4 py-5 px-10'>
          <Project
              name='Paraguay Supermarket Products Dataset'
              desc='This dataset includes the name, price (in Guaranies), product url, and image url of supermarket products. The dataset over 40,000 products from 2 different supermarkets in Paraguay. The data was obtained by a scraper I built using Go.'
              project_url='https://www.kaggle.com/datasets/nikihellmers/paraguay-supermarket-products'
              img_url='/dataset-cover.jpeg'
          />

      </div>
      
    </div>
  )
}
