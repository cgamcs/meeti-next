import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms"
import FormTextArea from "@/src/shared/components/forms/FormTextArea"
import { useFormContext } from "react-hook-form"
import { CommunityInput } from "../schemas/communitySchema"
import { UploadDropzone } from "@/src/shared/utils/uploadthing"
import { twMerge } from "tailwind-merge"

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

      <UploadDropzone
        endpoint={'meetiUploader'}
        className="ut-button:bg-orange-500 hover:ut-button:bg-orange-700"
        appearance={{
          button: "font-bold py-2 block h-auto after:bg-orange-300 after:h-2 after:top-0",
          label: "text-sm text-gray-600 hover:text-gray-600",
          allowedContent: "text-sm"
        }}
        content={{
          button: "Selecciona una Imágen",
          label: "Elige un archivo o arrástralo aquí",
          allowedContent: "Máximo 1 archivo, 1MB"
        }}
        config={{
          cn: twMerge
        }}
      />

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