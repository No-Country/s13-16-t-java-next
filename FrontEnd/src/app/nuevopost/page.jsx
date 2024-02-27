import { ChevronDownIcon } from "@/src/components/Icons";

export default function NuevoPost() {
  return (
    <div className="h-full grid-cols-2 items-center justify-center md:grid">
      <label className="dark:hover:bg-bray-800 m-auto hidden cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 md:block dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col">
          <svg
            viewBox="0 0 434 381"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80"
          >
            <path
              d="M158.147 90.1466C150.333 97.9532 150.333 110.527 150.333 135.667V162.333C150.333 187.473 150.333 200.047 158.147 207.853C165.953 215.667 178.527 215.667 203.667 215.667H230.333C255.473 215.667 268.047 215.667 275.853 207.853C283.667 200.047 283.667 187.473 283.667 162.333V135.667C283.667 116.733 283.667 104.933 280.333 96.9266V182.333C277.164 182.334 274.025 181.71 271.097 180.497C268.169 179.285 265.508 177.507 263.267 175.267L258.253 170.253C253.44 165.44 251.04 163.04 248.313 162.027C245.316 160.912 242.018 160.912 239.02 162.027C236.293 163.04 233.887 165.44 229.087 170.253L228.327 171.007C224.427 174.907 222.473 176.86 220.4 177.22C218.79 177.504 217.131 177.186 215.74 176.327C213.953 175.22 212.867 172.68 210.687 167.607L210.333 166.78C205.333 155.113 202.84 149.287 198.48 147.1C196.284 145.999 193.827 145.526 191.38 145.733C186.52 146.147 182.04 150.633 173.067 159.6L160.333 172.333V88.2466C159.557 88.8233 158.826 89.4585 158.147 90.1466Z"
              fill="#BDBDBD"
            />
          </svg>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>

      <form className="p-12 mt-20">
        <div>
          <input
            className="input-form mb-4 w-full hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Título"
          />
          <div className="relative">
            <select
              className="input-form mb-4 w-full hover:border-secondary-violet focus:outline-secondary-violet"
              type="select"
              placeholder="Categoría"
            >
              <option value="">Categoría</option>
              <hr />
              <option value="">Plastico</option>
              <option value="">Madera</option>
              <option value="">Vídrio</option>
              <option value="">Metal</option>
              <option value="">Organico</option>
              <option value="">Telas</option>
            </select>
            <ChevronDownIcon className="chevron-down-icon mr-2 p-1" />
          </div>
          <textarea
            className="input-form mb-4 max-h-80 min-h-40 w-full resize-none hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Desripción"
          />
        </div>
        <label className="dark:hover:bg-bray-800 m-auto block h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 md:m-12 md:hidden dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 434 381"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32"
            >
              <path
                d="M158.147 90.1466C150.333 97.9532 150.333 110.527 150.333 135.667V162.333C150.333 187.473 150.333 200.047 158.147 207.853C165.953 215.667 178.527 215.667 203.667 215.667H230.333C255.473 215.667 268.047 215.667 275.853 207.853C283.667 200.047 283.667 187.473 283.667 162.333V135.667C283.667 116.733 283.667 104.933 280.333 96.9266V182.333C277.164 182.334 274.025 181.71 271.097 180.497C268.169 179.285 265.508 177.507 263.267 175.267L258.253 170.253C253.44 165.44 251.04 163.04 248.313 162.027C245.316 160.912 242.018 160.912 239.02 162.027C236.293 163.04 233.887 165.44 229.087 170.253L228.327 171.007C224.427 174.907 222.473 176.86 220.4 177.22C218.79 177.504 217.131 177.186 215.74 176.327C213.953 175.22 212.867 172.68 210.687 167.607L210.333 166.78C205.333 155.113 202.84 149.287 198.48 147.1C196.284 145.999 193.827 145.526 191.38 145.733C186.52 146.147 182.04 150.633 173.067 159.6L160.333 172.333V88.2466C159.557 88.8233 158.826 89.4585 158.147 90.1466Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
        <div className="w-full text-end">
          <button
            className="mb-4 mt-4 w-full rounded-3xl border hover:scale-105 transition duration-500 border-secondary-violet p-2 text-center text-secondary-violet lg:m-2 lg:w-28"
            href={""}
            type="submit"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className=" mb-5 w-full rounded-3xl bg-accent-yellow p-2 text-center lg:m-2 lg:w-28 hover:scale-105 transition duration-500"
            href={""}
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}
