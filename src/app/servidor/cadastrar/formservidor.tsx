"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Schema de validação
const formSchema = z.object({
  name: z.string().min(2, {
    message: "preencha o campo nome ",
  }),
  email: z.string().min(2, {
    message: "preencha o campo email ",
  }),
  companyName: z.string().min(2, {
    message: "preencha o campo empresa ",
  }),
})

type ProfileFormValues = z.infer<typeof formSchema>

export function ProfileForm() {
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
    },
  })

  function onSubmit(values: ProfileFormValues) {
    console.log(values)
  }

  return (
    <div className="flex w-400 justify-center ">
      <div className="w-full max-w-6xl bg-gray-200 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <a className="text-transform: uppercase font-bold "> Cadastrar Servidor </a>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col mt-[1.5rem] gap-[1.5rem]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Digite o nome" 
                      className="w-full bg-[#EFEFEF] dark:bg-[#1A1A1A] text-[#373435] dark:text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Digite o e-mail" 
                      className="w-full bg-[#EFEFEF] dark:bg-[#1A1A1A] text-[#373435] dark:text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Digite o nome da empresa" 
                      className="w-full bg-[#EFEFEF] dark:bg-[#1A1A1A] text-[#373435] dark:text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-wrap justify-start gap-6">
              <Button 
                type="submit" 
                className="w-full lg:w-[8.6rem] lg:h-[2.5rem] font-bold tracking-wide bg-[#487348] text-white hover:bg-[#253f25] md:w-fit"
              >
                Cadastrar
              </Button>

              <Button 
                type="button" 
                className="w-full lg:w-[8.6rem] lg:h-[2.5rem] font-bold tracking-wide bg-[#487348] text-white hover:bg-[#253f25]  md:w-fit"
                onClick={() => router.back()}
              >
                Voltar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
