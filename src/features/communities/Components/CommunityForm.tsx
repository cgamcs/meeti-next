import { FormInput, FormLabel } from "@/src/shared/components/forms"
import FormTextArea from "@/src/shared/components/forms/FormTextArea"

export default function CommunityForm() {
  return (
    <>
      <FormLabel htmlFor="name">Nombre Comunidad</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder='Titulo Comunidad'
      />

      <FormLabel
        htmlFor="description">Descripción Comunidad</FormLabel>
      <FormTextArea
        id="description"
        placeholder='Descripción Comunidad'
      />
    </>
  )
}