import React from 'react';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import Experience from '@/components/Experience';
import { ArrowRight} from 'react-bootstrap-icons';
import Link from 'next/link';

export default function experience() {
  return (
    <section className='projects-page'>
        <Navigation/>
        <section className='max-w-[1200px] mx-auto pt-24 md:pt-30 md:pb-0 lg:pt-36 pb-5'>
            <section className='mx-3 md:mx-5'>
                <Breadcrumb
                CurrentPage="Expérience"
                />
                <h1 className='font-bold text-2xl md:text-3xl'>Expérience professionnelle</h1>
                <p className='font-normal md:font-medium mt-3 max-w-2xl'>Chaque poste a été une opportunité d{"'"}apprentissage et de croissance, me permettant de contribuer de manière significative et d{"'"}acquérir de nouvelles compétences.</p>

                <div className='grid grid-cols-1 mt-5'>
                  <Experience
                    enterprise="FTECH"
                    post="Stagiaire"
                    duration="31/07/2023 • Maintenant"
                    missions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                  />
                  <Experience
                    enterprise="Shopify Dev"
                    post="Freelance"
                    duration="31/09/2023 • 01/10/2023"
                    missions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                  />
                  <Experience
                    enterprise="SMART-SECURES"
                    post="Stagiaire"
                    duration="07/2022 • 09/2022"
                    missions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                  />
                  <Experience
                    enterprise="Grand Carrefour"
                    post="Stagiaire"
                    duration="07/2019 • 09/2021"
                    missions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                  />
                </div>
            </section>
            <section className='py-10 flex justify-end items-center mx-3 md:mx-5'>
              <Link href='/contact' className='text-base text-white bg-red-600 hover:bg-red-500 py-2 px-6  transition font-medium duration-300 rounded-lg flex items-center gap-2'><span>Me contacter ...</span><ArrowRight/>
              </Link>
            </section>
        </section>
    </section>
  )
}
