"use client";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bicycle, Book, CircleFill, Github, Headphones, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from '@/components/ui/toaster';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

export default function Home(){
  const {toast} = useToast();
  return(
    <section className="main-page">
      <Toaster/>
      <Navigation />
      <section className="max-w-[1400px] mx-auto">
        <section className='hero pt-24 md:pt-30 pb-10 md:pb-0 lg:pt-36 mx-5 flex justify-start md:justify-around items-center border-b border-gray-500'>
          <section className='text-black dark:text-white pt-8 md:pt-0'>
            <h1 className='text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-5 md:mb-7'>Salut ! Ravi de te voir.</h1>
            <h2 className='text-lg md:text-xl mb-5 md:mb-6 font-bold'>Je m{"'"}appelle Franck NIAT mais tu peux m{"'"}appeler 
              <HoverCard>
                <HoverCardTrigger>
                  <span 
                  onClick={() => {
                    toast({
                      title: "Build with ❤️ by me",
                      description: "C'est pas encore fini mais je suis ouvert aux remarques, hésites pas à me laisser un message dans la section contact😉.",
                      action: (
                        <ToastAction altText="Goto schedule to undo">Fermer</ToastAction>
                      ),
                    })
                  }}
                  className='text-red-600 underline font-extrabold cursor-help ml-2'>
                    NIATO
                  </span>
                </HoverCardTrigger>
                <HoverCardContent>
                  <span className="text-sm">J{"'"} ai un petit message pour toi, clique pour le voir!</span>
                </HoverCardContent>
                
              </HoverCard>
              
            </h2>
            <h2 className='text-base md:text-lg mb-6'>Je suis étudiant et développeur web.</h2>
            <section className='flex items-center gap-8'>
              <a href="https://github.com/franckniat" target='_blank' className='hover:text-gray-600'><Github className='w-5 h-5 md:w-7 md:h-7'/></a>
              <a href="https://x.com/manuel_niat" target='_blank' className='hover:text-sky-600'><Twitter className='w-5 h-5 md:w-7 md:h-7'/></a>
              <a href="https://www.linkedin.com/in/franck-niat/" target='_blank' className='hover:text-blue-600'><Linkedin className='w-5 h-5 md:w-7 md:h-7'/></a>
              <a href="https://instagram.com/itsniatfranck" target='_blank' className='hover:text-red-400'><Instagram className='w-5 h-5 md:w-7 md:h-7'/></a>
            </section>
          </section>
          <section className="hidden md:block">
            <Image
              src="/ma_photo.png"
              height={1500}
              width={1500}
              priority
              className='w-full h-auto z-0 grayscale hover:grayscale-0 transition duration-500 rounded-lg'
              alt='Photo de Franck NIAT'
            />
          </section>
        </section>
      </section>

      <section className='mb-[10px] pt-12 md:pt-20 px-5 flex relative max-w-[1400px] mx-auto'>
        <section>
          <section className='pb-10 border-b border-gray-500 border-dashed'>
            <h2 className='text-lg md:text-xl flex items-center gap-4 my-5 font-bold'><span>Aspect professionnel </span><CircleFill className='w-4 h-4 text-red-600 hover:text-red-400'/></h2>
            <h3 className='text-justify'>
                Je suis actuellement stagiaire chez FTEC un cabinet de la ville de
                 Douala qui offre des services de conseil, d{"'"}audit en informatique, 
                 et de mise sur pied de solutions logicielles.
            </h3>
          </section>

          <section className='pb-10 border-b border-gray-500 border-dashed'>
            <h2 className='text-lg md:text-xl flex items-center gap-4 my-5 font-bold'><span>Moi quelques mots </span><CircleFill className='w-4 h-4 text-red-600 hover:text-red-400'/></h2>
            <section className='flex flex-col gap-5'>
              <h3 className='text-justify'>
                Passionné par le domaine informatique depuis mon enfance, 
                je suis un jeune développeur web et étudiant en cycle ingénieur 
                en Génie logiciel. Les sites web font partie de notre quotidien 
                que ce soit pour faire des achats en ligne, trouver des informations 
                ou simplement se divertir. En tant que développeur web, je suis fier 
                de contribuer à la création de ces sites et de rendre l{"'"}expérience 
                utilisateur aussi agréable que possible.
              </h3>
              <a target="_blank" href="/moncv.pdf" className='flex items-center gap-3 border-b border-gray-800 hover:border-red-600 hover:text-red-600 transition w-fit'><span>Mon Curriculum vitae</span><ArrowUpRight/></a>
            </section>
          </section>

          <section className='pb-10 border-b border-gray-500 border-dashed'>
            <h2 className='text-lg md:text-xl flex items-center gap-4 my-5 font-bold'><span>Compétences</span><CircleFill className='w-4 h-4 text-red-600 hover:text-red-400'/></h2>
            <ul className='flex flex-row gap-3 flex-wrap list-none'>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="HTML"
                title="HTML"
                src="/stack/HTML.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="CSS"
                title="CSS"
                src="/stack/CSS.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                title="Javascript"
                alt="Javascript"
                src="/stack/JS.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="PHP"
                title="Php"
                src="/stack/PHP.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="Tailwindcss"
                title="Tailwindcss"
                src="/stack/TAILWINDCSS.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="Bootstrap"
                title="Bootstrap"
                src="/stack/BOOTSTRAP.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="React"
                title="React"
                src="/stack/REACT.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="NextJs"
                title="NEXTJS"
                src="/stack/NEXTJS.png"
                width={500}
                height={500}
                className="dark:bg-white rounded-full"
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="Firebase"
                title="Firebase"
                src="/stack/FIREBASE.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="GIT"
                title="Git"
                src="/stack/GIT.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-10 h-10 flex items-center">
                <Image 
                alt="SQL"
                title="Sql language"
                src="/stack/SQL.png"
                width={500}
                height={500}
                />
              </li>
              <li className="w-8 h-8 flex items-center">
                <Image 
                alt="Figma"
                title="Figma"
                src="/stack/FIGMA.png"
                width={500}
                height={500}
                />
              </li>
            </ul>
          </section>

          <section className='pb-10 border-b border-gray-500 border-dashed'>
            <h2 className='text-lg md:text-xl flex items-center gap-4 my-5 font-bold'><span>Langues parlées</span><CircleFill className='w-4 h-4 text-red-600 hover:text-red-400'/></h2>
            <ul className='flex flex-col sm:flex-row gap-2'>
              <li className='px-3 py-2 flex items-center gap-2 hover:text-red-500 w-fit cursor-pointer'><ArrowRight size={20} /> Français <span className='py-1 px-3 bg-red-200 rounded-full text-xs dark:text-slate-600'>Native</span></li>
              <li className='px-3 py-2 flex items-center gap-2 hover:text-red-500 w-fit cursor-pointer'><ArrowRight size={20} /> Anglais <span className='py-1 px-3 bg-red-200 rounded-full text-xs dark:text-slate-600'>Intermédiaire</span></li>
              <li className='px-3 py-2 flex items-center gap-2 hover:text-red-500 w-fit cursor-pointer'><ArrowRight size={20} /> Allemand <span className='py-1 px-3 bg-red-200 rounded-full text-xs dark:text-slate-600'>Intermédiaire</span></li>
            </ul>
          </section>

          <section className='pb-10 border-b border-gray-500 border-dashed'>
            <h2 className='text-lg md:text-xl flex items-center gap-4 my-5 font-bold'><span>Centres d{"'"}intérêt</span><CircleFill className='w-4 h-4 text-red-600 hover:text-red-400'/></h2>
            <ul className='flex flex-col md:flex-row gap-2'>
              <li className='px-3 py-2 flex items-center gap-2 font-bold'><Book className='text-red-600'/> Lecture</li>
              <li className='px-3 py-2 flex items-center gap-2 font-bold'><Headphones className='text-red-600'/> Musique</li>
              <li className='px-3 py-2 flex items-center gap-2 font-bold'><Bicycle className='text-red-600'/> Sport</li>
            </ul>
          </section>
          <section className='py-10 flex justify-end items-center'>
            <Link href='/projects' className='text-base text-white bg-red-600 hover:bg-red-500 py-2 px-6 transition font-medium duration-300 rounded-lg flex items-center gap-2'><span>Mes projets</span><ArrowRight/></Link>
          </section>
        </section>
      </section>
    </section>
  )
}