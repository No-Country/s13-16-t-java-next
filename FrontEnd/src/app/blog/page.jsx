import BlogPost from '../../components/BlogPost'
import InputSearch from '../../components/InputSearch'

export default function BlogPage() {
    return(
        <section className="mt-28 w-11/12 mx-auto">
            <InputSearch placeHolder={'Busca noticia'}/>
            <BlogPost/>
        </section>
    )
}