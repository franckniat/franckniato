"use client";
import React, {useEffect, useState} from 'react';
import Navigation from '@/components/Navigation';
 import Breadcrumb from '@/components/Breadcrumb';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';
import { ToastAction } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from "@/components/ui/use-toast";


export default function Contact() {
  const {toast} = useToast();
  const [success, setSuccess] = useState();
  const [state, handleSubmit] = useForm("xvojyywp");
  useEffect(()=>{
    if (state.succeeded) {
      setSuccess("Votre message a bien été envoyé, MERCI !");
    }
  },[state])
  

  return (
    <section className='contact-page'>
      <Toaster/>
      <Navigation/>
      <section className='max-w-[1200px] mx-auto pt-24 md:pt-30 md:pb-0 lg:pt-36 pb-5'>
        <section className='mx-3 md:mx-5 pb-10'>
          <Breadcrumb
          CurrentPage="Contact"
          />
          <h1 className='font-bold text-2xl md:text-3xl'>Contact</h1>
          <p className='font-normal md:font-medium mt-3 max-w-2xl'>Je suis actuellement disponible uniquement en remote pour tout projet free-lance.</p>
          <section className='mt-5'>
            <form action="https://formspree.io/f/xvojyywp" method="POST" onSubmit={handleSubmit}>
              <div className='my-3'>
                <Label>Nom : </Label>
                <Input type="text" name="nom" className="mt-1" placeholder="Entrez votre nom" required></Input>
                <ValidationError 
                  prefix="Nom" 
                  field="nom"
                  errors={state.errors}
                />
              </div>
              <div className='my-3'>
                <Label>Email : </Label>
                <Input type="email" name="email" className="mt-1" placeholder="Entrez votre adresse email" required></Input>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className='my-3'>
                <Label>Objet : </Label>
                <Input type="text" name="objet" className="mt-1" placeholder="Entrez l'objet de votre message" required></Input>
                <ValidationError 
                  prefix="Objet" 
                  field="objet"
                  errors={state.errors}
                />
              </div>
              <div className='my-3'>
                <Label>Message : </Label>
                <Textarea type="text" name="message" className="mt-1" placeholder="Entrez votre message" required></Textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className='my-3'>
                <Button 
                onClick={() => {
                  if(!success){
                    return
                  }
                  toast({
                    title: "Message envoyé !! ",
                    description: success,
                    action: (
                      <ToastAction altText="Goto schedule to undo">Fermer</ToastAction>
                    ),
                  })
                }}
                type="submit" disabled={state.submitting} className="mt-1 w-full md:w-fit" placeholder="Entrez votre message">Envoyer</Button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </section>
  )
}
