"use client"

import { Form, FormSubmit } from "@/src/shared/components/forms"
import CommunityForm from "./CommunityForm"
import { FormProvider, useForm } from "react-hook-form"
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { createCommunityAction } from "../actions/community-actions"

export default function CreateCommunity() {
  const methods = useForm({
    resolver: zodResolver(CommunitySchema),
    mode: 'all',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const onSubmit = async (data: CommunityInput) => {
    await createCommunityAction(data)
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <CommunityForm />

        <FormSubmit value={"Crear Comunidad"} />
      </Form>
    </FormProvider>
  )
}
