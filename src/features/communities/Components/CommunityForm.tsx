import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms"
import FormTextArea from "@/src/shared/components/forms/FormTextArea"
import { useFormContext } from "react-hook-form"
import { CommunityInput } from "../schemas/communitySchema"
import { UploadDropzone } from "@/src/shared/utils/uploadthing"
import { twMerge } from "tailwind-merge"
import { useState } from "react"
import Image from "next/image"

export default function CommunityForm() {
  const [uploadedFile, setUploadedFile] = useState('')
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
        onClientUploadComplete={(res) => {
          setUploadedFile(res[0].ufsUrl)
        }}
        className="ut-button:bg-orange-500 hover:ut-button:bg-orange-700"
        appearance={{
          button: "font-medium py-2 block w-full h-auto after:bg-orange-300 after:h-2 after:top-0",
          label: "text-sm text-gray-600 hover:text-gray-600",
          allowedContent: "text-sm"
        }}
        content={{
          button: "Selecciona una Imágen",
          label: "Elige un archivo o arrástralo aquí",
          allowedContent: "Máximo 1 archivo, 1MB"
        }}
        config={{
          cn: twMerge,
          mode: 'auto'
        }}
      />

      {uploadedFile && (
        <>
          <p>Imagen Nueva:</p>
          <Image
            src={uploadedFile}
            alt="Imagen publica"
            height={200}
            width={300}
          />
        </>
      )}

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