import Link from "next/link";

export default function NewPost() {
  return (
    <div className="m-auto flex h-screen flex-wrap items-center justify-center">
      <label className="dark:hover:bg-bray-800 m-16 flex h-72 w-96 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-3 h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>

      <form className="m-16">
        <div className="flex flex-col">
          <input
            className="m-4 w-96 rounded-3xl border bg-gray-200 p-2"
            type="text"
            placeholder="Título"
          />
          <select
            className="m-4 w-96 rounded-3xl border bg-gray-200 p-2"
            type="select"
            placeholder="Categoría"
          >
            <option value="" disabled>
              Categoría
            </option>
            <hr />
            <option value="">Plastico</option>
            <option value="">Madera</option>
            <option value="">Vídrio</option>
            <option value="">Metal</option>
            <option value="">Organico</option>
            <option value="">Telas</option>
          </select>
          <textarea
            className="m-4 max-h-80 min-h-40  w-96 rounded-3xl border bg-gray-200 p-2"
            type="text"
            placeholder="Desripción"
          />
        </div>
        <div className="w-full text-end">
          <Link
            className="m-2 w-28 rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet"
            href={""}
            type="submit"
          >
            Cancelar
          </Link>
          <Link
            type="submit"
            className="m-2 w-28 rounded-3xl bg-accent-yellow p-2 text-center"
            href={""}
          >
            Publicar
          </Link>
        </div>
      </form>
    </div>
  );
}
