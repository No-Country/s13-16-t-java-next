import Button from "@/src/components/Button";
export default function FormComent() {
  return (
    <form className="flex flex-col gap-4">
      <textarea
        name=""
        id=""
        rows="2"
       
        className="w-full resize-none rounded-xl bg-[#d9d9d9] p-3"
        placeholder="Comentar"
      >
 
      </textarea>
      <Button className="w-1/2  text-white bg-primary-green font-[500] p-1 rounded-3xl text-lg">
        Enviar
      </Button>
    </form>
  );
}
