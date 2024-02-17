import BlogPost from '../../components/BlogPost'
import InputSearch from '../../components/InputSearch'

export default function BlogPage() {
    return(
        <section className="mt-28 w-11/12 mx-auto">
            <InputSearch placeHolder={'Busca noticia'}/>
            <div className="my-12 flex flex-wrap justify-center min-[1148px]:justify-between gap-x-4 gap-y-10 md:mx-auto w-full max-w-[1200px]">
                <BlogPost/>
            </div>
        </section>
    )
}