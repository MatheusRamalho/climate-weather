interface ResearchingTheWeatherProps {
    value: string
    onChange: (event: any) => void
    onSubmit: (event: any) => void
}

export const ResearchingTheWeather = ({
    onSubmit,
    onChange,
    value,
}: ResearchingTheWeatherProps) => {
    return (
        <form
            id="form-search-climate-city"
            encType="multipart/form-data"
            onSubmit={onSubmit}
            className="max-w-[30rem] min-w-full my-8 flex items-center justify-center flex-col gap-8 sm:flex-row"
        >
            <label hidden htmlFor="search-climate-city">
                Informe o nome da cidade
            </label>

            <input
                type="search"
                id="search-climate-city"
                placeholder="Informe a cidade"
                aria-label="Informe o nome da cidade"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="sm:flex-1 w-full h-14 py-3 px-4 rounded-lg border border-gray-800 bg-gray-700 text-base text-white outline-none placeholder:text-sm placeholder:italic"
            />

            <button
                className="sm:flex-1 cursor-pointer w-full h-14 border-none rounded-lg bg-green-500 text-center uppercase text-base font-bold text-white hover:bg-green-700"
                type="submit"
            >
                Buscar
            </button>
        </form>
    )
}
