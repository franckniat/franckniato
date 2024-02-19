import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CodeSlash, Laptop, MoonStars, Sun } from 'react-bootstrap-icons';
import { useTheme } from 'next-themes';
import { Sheet, SheetHeader, SheetTrigger, SheetContent, SheetClose } from './ui/sheet';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { Button } from './ui/button';
export default function Navigation() {
    const {theme, setTheme} = useTheme();
    const linkRefs = useRef([]);
// Add active on navigation links
    useEffect(()=>{
        linkRefs.current = Array(4).fill().map((_, i) => linkRefs.current[i]);
        }, []);
        const handleClick = (index) => {
            linkRefs.current.forEach((ref, i) => {
            if(i !== index && ref.current && ref.current.classList.contains('active')) {
                ref.current.classList.remove('active');
            }
            });
            if (linkRefs.current[index] && linkRefs.current[index].current) {
                linkRefs.current[index].current.classList.add('active');
            }
        };
    
    return (
        <nav className='fixed top-0 backdrop-blur-lg border-b border-gray-200 dark:border-neutral-700  bg-white z-20 dark:bg-neutral-900 bg-opacity-70 dark:bg-opacity-70 w-full'>
            <div className='max-w-[1400px] mx-auto px-2 sm:px-5 w-full'>
                <div className='flex items-center h-[65px] justify-between'>
                    <Link href="/" className={` font-bold text-lg flex items-center gap-1`}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
                        </span>
                        <span id='logo'>franckniat</span>
                    </Link>
                    <section className="hidden md:block">

                        <Link href="/" ref={(el)=>linkRefs.current[0]=el} onClick={handleClick(0)} className="px-4 py-2 font-medium mx-2 hover:text-red-600">Accueil</Link>

                        <Link href="/projects" ref={(el)=>linkRefs.current[1]=el} onClick={handleClick(1)} className="px-4 py-2 font-medium mx-2 hover:text-red-600">Projets</Link>

                        <Link href="/experience" ref={(el)=>linkRefs.current[2]=el} onClick={handleClick(2)} className="px-4 py-2 font-medium mx-2 hover:text-red-600">Experience</Link>

                        <Link href="contact" ref={(el)=>linkRefs.current[3]=el} onClick={handleClick(3)} className="px-4 py-2 font-medium mx-2 hover:text-red-600">Contact</Link>

                    </section>
                    <section className="hidden md:block">
                        <button className="flex items-center relative border border-gray-100 dark:border-neutral-700 p-3 bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-full" onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}}>
                            <Sun className="w-4 h-4 font-thin scale-100 dark:scale-0 rotate-180 transition-all"/>
                            <MoonStars className="w-4 h-4 absolute font-thin dark:scale-100 dark:rotate-0 scale-0 transition-all"/>
                        </button>
                    </section>
                    <section className='block md:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Menu</Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader className="border-b border-gray-200 dark:border-neutral-600 py-3">
                                    <div className='flex justify-between items-center mt-5'>
                                        <h1 className='font-bold'>Franckniat</h1>
                                        <DropdownMenu className="w-fit">
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className="flex items-center gap-1 relative">
                                                    <span className='scale-100 dark:scale-0 transition-all flex items-center gap-1'>
                                                        <Sun/>
                                                    </span>
                                                    <span className='scale-0 dark:scale-100 transition-all absolute flex px-1 items-center gap-1'>
                                                        <MoonStars/>
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem className="flex items-center gap-3" onClick={()=>setTheme("light")}>
                                                    <Sun/> Thème clair
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-3" onClick={()=>setTheme("dark")}>
                                                    <MoonStars/> Thème sombre
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-3" onClick={()=>setTheme("system")}>
                                                    <Laptop/> Automatique
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </SheetHeader>
                                <div className='flex flex-col gap-2 mt-5'>
                                    <SheetClose asChild>
                                        <Link href="/" className='px-1 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded'>Accueil</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/projects" className='px-1 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded'>Projets</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/experience" className='px-1 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded'>Expérience</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/contact" className='px-1 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded'>Contact</Link>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </section>
                </div>
                
            </div>
        </nav>
        
    )
}
