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
        <section 
        className='hero pt-24 md:pt-30 pb-10 md:pb-0 lg:pt-36 mx-5 flex justify-start md:justify-around items-center border-b border-gray-500'
        style={{
          backgroundImage: `url('/bg__hero.png')`,
          backgroundPosition: 'left',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
        >
          <section className='text-black dark:text-white pt-8 md:pt-0'>
            <h1 className='text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-5 md:mb-7'>Salut ! Ravi de te voir.</h1>
            <h2 className='text-lg md:text-xl mb-5 md:mb-6 font-bold'>Je m{"'"}appelle Franck NIAT mais tu peux m{"'"}appeler 
              <HoverCard>
                <HoverCardTrigger>
                  <span 
                  onClick={() => {
                    toast({
                      title: "Build with ❤️ by franckniat",
                      description: "Salut ! N'hésites pas à me laisser un message dans la section contact😉.",
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
            <h2 className='text-base md:text-lg mb-6'>Je suis <span className="text-red-600">étudiant</span> et <span className="text-red-600">développeur</span>.</h2>
            <section className='flex items-center gap-8'>
              <a href="https://github.com/franckniat" target='_blank' className='hover:text-gray-600'>
                <Github className='w-5 h-5 md:w-7 md:h-7'/>
              </a>
              <a href="https://x.com/manuel_niat" target='_blank' className='hover:text-sky-600'>
                <Twitter className='w-5 h-5 md:w-7 md:h-7'/>
              </a>
              <a href="https://www.linkedin.com/in/franck-niat/" target='_blank' className='hover:text-blue-600'>
                <Linkedin className='w-5 h-5 md:w-7 md:h-7'/>
              </a>
              <a href="https://instagram.com/itsniatfranck" target='_blank' className='hover:text-red-400'>
                <Instagram className='w-5 h-5 md:w-7 md:h-7'/>
              </a>
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
                Je suis actuellement consultant chez FTEC un cabinet de la ville de
                 Douala qui offre des services de conseil, d{"'"}audit en informatique, 
                 et de mise sur pied de solutions logicielles. Mais je reste cependant ouvert
                  à toutes opportunités de stage ou d{"'"}emploi dans le domaine informatique.
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
                title="TypeScript"
                alt="TypeScript"
                src="/stack/TYPESCRIPT.svg"
                width={500}
                height={500}
                className="rounded"
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
              <li className="w-10 h-10 flex items-center" title="C#">
                <CSharpLogo/>
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


function CSharpLogo(){
  return(
    <svg height="288" preserveAspectRatio="xMidYMid" viewBox="0 0 256 288" width="256" xmlns="http://www.w3.org/2000/svg"><path d="m255.569 84.452376c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.81699995-9.17-5.294-18.061-5.101-27.163.269-13.543 7.98699995-81.348 46.83399995-101.553 58.53699995-8.321 4.817-12.37 12.189-12.372 21.771-.013 39.455 0 78.909-.013 118.365 0 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/><path d="m128.182 143.241376-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/><path d="m255.569 84.452376c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/><g fill="#fff"><path d="m201.892326 116.294008v13.473684h13.473684v-13.473684h6.736842v13.473684h13.473685v6.736842h-13.473685v13.473684h13.473685v6.736842h-13.473685v13.473684h-6.736842v-13.473684h-13.473684v13.473684h-6.736842v-13.473684h-13.473684v-6.736842h13.473684v-13.473684h-13.473684v-6.736842h13.473684v-13.473684zm13.473684 20.210526h-13.473684v13.473684h13.473684z"/><path d="m128.456752 48.625876c35.143771 0 65.827133 19.0862981 82.26181 47.4560675l-.16037-.2730675-41.348577 23.808283c-8.146656-13.793605-23.081479-23.1020873-40.213232-23.2937868l-.539631-.0030178c-26.125574 0-47.3060815 21.1793886-47.3060815 47.3049616 0 8.543615 2.2777748 16.552204 6.2389764 23.469476 8.1540981 14.235253 23.4829071 23.836606 41.0671051 23.836606 17.69277 0 33.108884-9.723357 41.221568-24.110835l-.197128.345313 41.286486 23.918037c-16.254398 28.129557-46.517408 47.156948-81.252701 47.536189l-1.058225.005774c-35.2545819 0-66.0252492-19.203824-82.4185122-47.72358-8.0029927-13.922969-12.5820476-30.064389-12.5820476-47.27698 0-52.4660524 42.5322682-94.99944 95.0005598-94.99944z"/></g></svg>
  )
}