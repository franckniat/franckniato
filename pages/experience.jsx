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
                    post="Consultant"
                    duration="31/07/2023 • Maintenant"
                    missions="Nous intervenons dans les entreprises pour leur apporter un soutien technique dans la configuration de leur système d'information et dans l'utilisation des outils de gestion."
                  />
                  <Experience
                    enterprise="Shopify Dev"
                    post="Freelance"
                    duration="31/09/2023 • 01/10/2023"
                    missions="Mes missions étaient basées sur la reproduction des interfaces existants de Shopify et la création des nouvelles interfaces pour les sites.C'était ma première expérience en freelance."
                  />
                  <Experience
                    enterprise="SMART-SECURES"
                    post="Stagiaire"
                    duration="07/2022 • 09/2022"
                    missions="Durant ce stage, j'avais pour mission de concevoir les interfaces d'une plateforme web de vente immobilière. Tout en participant aux activités de l'entreprise qui travaille dans les secteurs de l'IPTV, de l'installation des traceurs GPS et de la sécurisation des comptes de réseaux sociaux."
                  />
                  <Experience
                    enterprise="Grand Carrefour"
                    post="Stagiaire"
                    duration="07/2019 • 09/2021"
                    missions="La mission principale était la configuration du système d'information à travers l'installation des postes et des logiciels de gestion de l'entreprise."
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
