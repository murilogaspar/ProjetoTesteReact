"use client"
// Necessário porque usamos hooks como useForm, que só funcionam no cliente

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Validação do formulário com Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

// Tipagem inferida automaticamente a partir do schema
type ProfileFormValues = z.infer<typeof formSchema>

export function ProfileForm() {
    
  // Inicializa o useForm com o resolver do Zod
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // Função executada ao enviar o formulário
  function onSubmit(values: ProfileFormValues) {
    console.log("Form submitted:", values)
  }

  return (
    <Form {...form}>
        <form
    id="formulario" // ✅ Aqui é o lugar certo para colocar o id
    onSubmit={form.handleSubmit(onSubmit)} // ✅ Aqui só vai a função
    className="space-y-8"
  >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
