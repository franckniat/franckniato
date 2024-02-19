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
                        title="Niato AI"
                        img="/niatoai.png"
                        desc="Application basé sur l'intelligence artificielle du modèle gpt-3.5 d'OpenAI. C'est un chatbox permet de répondre aux questions des utilisateurs sous forme de messages, tout en gardant la logique de la conversation."
                        gitlink="https://github.com/franckniat/NiatoAI"
                        preview="https://niatoai.vercel.app/"
                        stack={[
                            {image:"/stack/NEXTJS.png", title:"Next.js"},
                            {image:"/stack/TAILWINDCSS.png", title:"TailwindCss"},
                            {image:"/stack/FIREBASE.png", title:"Firebase"},
                            {image:"/stack/TYPESCRIPT.svg", title:"Typescript"},
                        ]}
                    />

                    <ProjectCard
                        title="Image Generator"
                        img="/imgenerator.png"
                        desc="Application basé sur l'intelligence artificielle du modèle dall-e d'OpenAI. Il permet de générer des images en fonction des demandes textuelles de l'utilisateur."
                        gitlink="https://github.com/franckniat/Imgenerator"
                        preview="https://imgenerator.vercel.app/"
                        stack={[
                            {image:"/stack/NEXTJS.png", title:"Next.js"},
                            {image:"/stack/TYPESCRIPT.svg", title:"Typescript"},
                            {image:"/stack/TAILWINDCSS.png", title:"TailwindCss"},
                        ]}
                    />

                    <ProjectCard
                        title="Github Search"
                        img="/githubsearch.png"
                        desc="Application qui permet de rechercher des utilisateurs, des repositories et des organisations sur Github."
                        gitlink="https://github.com/franckniat/GithubSearch"
                        preview="https://github-search-one-theta.vercel.app/"
                        stack={[
                            {image:"/stack/NEXTJS.png", title:"Next.js"},
                            {image:"/stack/TYPESCRIPT.svg", title:"Typescript"},
                            {image:"/stack/TAILWINDCSS.png", title:"TailwindCss"},
                        ]}
                    />

                    <ProjectCard
                        title="ESIAC BIBLIO"
                        img="/bibliolight.png"
                        desc="Bibliothèque numérique de l'Ecole Supérieur d'Ingénierie et de Management d'Afrique Centrale qui permet aux étudiants d'accéder à des documents tels que des rapports de stage, mémoires, ... et d'écrire des articles sur divers sujets dans le but de partager des connaissances.(en cours de développement⚒️)"
                        gitlink="#"
                        preview="#"
                        stack={[
                            {image:"/stack/NEXTJS.png", title:"Next.js"},
                            {image:"/stack/TYPESCRIPT.svg", title:"Typescript"},
                            {image:"/stack/FIREBASE.png", title:"Firebase"},
                            {image:"/stack/TAILWINDCSS.png", title:"TailwindCss"},
                        ]}
                    />
                    
                    <ProjectCard
                        title="Uber Eats clone"
                        img="/ubereatsclone.png"
                        desc="Clone du site vitrine de Uber Eats."
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
                        title="Marvel QUIZ • Login page"
                        img="/marvelquiz.png"
                        desc="Page d'authentification pour un jeu Marvel."
                        gitlink="https://github.com/franckniat/MarvelQuiz"
                        preview="https://marvel-quiz-mauve.vercel.app/"
                        stack={[
                            {image:"/stack/HTML.png", title:"HTML"},
                            {image:"/stack/CSS.png", title:"CSS"},
                            {image:"/stack/JS.png", title:"Javascript"},
                        ]}
                    />
                    
                </section>
                <section className='my-2'>
                    <div className='flex gap-2'>
                        <p>Vous pouvez consulter l{"'"}ensemble de mes réalisations</p>
                        <a href="https://github.com/franckniat" className='text-red-600 underline'>ici</a>.
                    </div>
                </section>
                <section className='py-10 flex justify-end items-center'>
                    <Link href='/experience' className='text-base text-white bg-red-600 hover:bg-red-500 py-2 px-6  transition font-medium duration-300 rounded-lg flex items-center gap-2'><span>Expérience professionnelle ...</span><ArrowRight/></Link>
                </section>
            </section>

        </section>
    </section>
  )
}
