import React from 'react';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectCard from '@/components/Project';
import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';
export default function projects() {
  return (
    <section className='projects-page'>
        <Navigation/>
        <section className='max-w-[1200px] mx-auto pt-24 md:pt-30 md:pb-0 lg:pt-36 pb-5'>
            <section className='mx-5'>
                <Breadcrumb
                CurrentPage="Projets"
                />
                <h1 className='font-bold text-2xl md:text-3xl'>Mes projets</h1>
                <p className='font-medium mt-3'>Chacun de ces projets reflète mon engagement à innover et à donner vie à des idées.</p>

                <section className='grid grid-cols-1 mt-6 gap-5 pb-10'>
                    
                    <ProjectCard
                        title="Uber Eats clone"
                        img="/ubereatsclone.png"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                        gitlink="https://github.com/franckniat/UberEats_clone"
                        preview="https://uber-eats-clone-lilac.vercel.app/"
                        stack={[
                            {image:"/stack/HTML.png", title:"HTML"},
                            {image:"/stack/CSS.png", title:"CSS"},
                            {image:"/stack/JS.png", title:"Javascript"},
                            {image:"/stack/TAILWINDCSS.png", title:"TailwindCSS"},
                        ]}
                    />

                    <ProjectCard
                        title="Mon ancien portfolio"
                        img="/exportfolio.png"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                        gitlink="https://github.com/franckniat"
                        preview="https://franckniat.vercel.app/"
                        stack={[
                            {image:"/stack/HTML.png", title:"HTML"},
                            {image:"/stack/CSS.png", title:"CSS"},
                            {image:"/stack/JS.png", title:"Javascript"},
                        ]}
                    />

                    <ProjectCard
                        title="Marvel QUIZ • Login page"
                        img="/marvelquiz.png"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est similique alias, debitis hic, quae iusto nam illo tenetur distinctio corporis, cupiditate quia natus tempore deserunt maxime voluptatum eum quod."
                        gitlink="https://github.com/franckniat/MarvelQuiz"
                        preview="https://marvel-quiz-mauve.vercel.app/"
                        stack={[
                            {image:"/stack/HTML.png", title:"HTML"},
                            {image:"/stack/CSS.png", title:"CSS"},
                            {image:"/stack/JS.png", title:"Javascript"},
                        ]}
                    />
                    
                </section>
                <section className='py-10 flex justify-end items-center'>
                    <Link href='/experience' className='text-base text-white bg-red-600 hover:bg-red-500 py-2 px-6  transition font-medium duration-300 rounded-lg flex items-center gap-2'><span>Expérience professionnelle ...</span><ArrowRight/></Link>
                </section>
            </section>

        </section>
    </section>
  )
}
