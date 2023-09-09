"use client"
import Image from 'next/image'
import Card from './components/CardNote'
import { notEqual } from 'assert'
import { Button, NextUIProvider } from "@nextui-org/react";
import {AiOutlinePlus} from 'react-icons/ai'
export default function Home() {
  const data = [
    {
      title: 'Nota #1',
      description: 'Si estás usando un firewall (como ufw en Ubuntu), asegúrate de permitir el puerto 27017. Sin embargo, para fines de producción, deberías configurar un firewall, VPN, o VPC peering para restringir el acceso. '
    },
    {
      title: 'Nota #2',
      description: 'Considera usar una solución administrada como Amazon DocumentDB si deseas usar MongoDB en AWS sin los problemas de administración y configuración.'
    },
    {
      title: 'Nota #3',
      description: 'Alojar MongoDB en una instancia EC2 t2.micro es factible para fines de aprendizaje o desarrollo, pero no es recomendable para entornos de producción debido a las limitaciones de recursos. Dicho esto, aquí te dejo los pasos para instalar y configurar MongoDB en una instancia EC2 t2.micro:'
    }

  ]
  return (
    <NextUIProvider>
      <main className='flex flex-col bg-white'>
        <section className='flex flex-row justify-center p-3'>
          <Button isIconOnly color='primary' >
            <AiOutlinePlus />
          </Button>
        </section>
        <section className='flex flex-row justify-center items-start w-full h-screen  gap-24 p-20'>
          {data.map((note, key) => {
            return (
              <Card key={key} title={note.title} description={note.description} />
            )
          })}
        </section>


      </main>
    </NextUIProvider>
  )
}
