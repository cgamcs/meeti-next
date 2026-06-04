import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms"
import FormTextArea from "@/src/shared/components/forms/FormTextArea"
import { useFormContext } from "react-hook-form"
import { CommunityInput } from "../schemas/communitySchema"
import { UploadDropzone } from "@/src/shared/utils/uploadthing"

export default function CommunityForm() {
  const { register, formState: { errors } } = useFormContext<CommunityInput>()

  return (
    <>
      <FormLabel htmlFor="name">Nombre Comunidad</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder='Titulo Comunidad'
        {...register('name')}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <UploadDropzone />

      <FormLabel
        htmlFor="description">Descripción Comunidad</FormLabel>
      <FormTextArea
        id="description"
        placeholder='Descripción Comunidad'
        {...register('description')}
      />
      {errors.description && <FormError>{errors.description.message}</FormError>}
    </>
  )
}