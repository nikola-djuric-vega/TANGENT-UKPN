import { NewsListing as NewsListingType } from '_types/CMS/pages/main-site-pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { ArticlesProvider } from '_context/articles-items'
import { ComponentsTypeName } from '_types/CMS'
import Layout from '_hoc/Layout/Layout'
interface NewsListingProps {
  data: NewsListingType
}

export const NewsListing = ({ data }: NewsListingProps) => {
  return (
    <Layout data={data}>
      <ArticlesProvider items={data.articles}>
        {data.components
          ?.filter(
            (comp) => comp.__typename !== ComponentsTypeName.SUB_NAVIGATION
          )
          .map((comp, i) => renderComponent({ data: comp, id: i }))}
      </ArticlesProvider>
    </Layout>
  )
}
