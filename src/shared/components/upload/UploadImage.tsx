import { UploadDropzone } from "@/src/shared/utils/uploadthing"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { CommunityInput } from "@/src/features/communities/schemas/communitySchema"
import { FormError } from "../forms"

export default function UploadImage() {
  const { formState: { errors}, setValue } = useFormContext<CommunityInput>()
  const [uploadedFile, setUploadedFile] = useState('')

  return (
    <>
      <UploadDropzone
        endpoint={'meetiUploader'}
        onClientUploadComplete={(res) => {
          setUploadedFile(res[0].ufsUrl)
          setValue('image', res[0].ufsUrl, {shouldValidate: true})
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

      {errors.image && <FormError>{errors.image.message}</FormError>}

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
    </>
  )
}
