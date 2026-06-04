"use client"

import { Form, FormSubmit } from "@/src/shared/components/forms"
import CommunityForm from "./CommunityForm"
import { FormProvider, useForm } from "react-hook-form"
import { CommunitySchema } from "../schemas/communitySchema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function CreateCommunity() {
  const methods = useForm({
    resolver: zodResolver(CommunitySchema),
    mode: 'all',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  return (
    <FormProvider {...methods}>
      <Form>
        <CommunityForm />

        <FormSubmit value={"Crear Comunidad"} />
      </Form>
    </FormProvider>
  )
}
