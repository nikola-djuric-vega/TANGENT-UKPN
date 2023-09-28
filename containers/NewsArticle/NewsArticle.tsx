import { NewsArticle as NewsArticleType } from '_types/CMS/pages/main-site-pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { ComponentsTypeName } from '_types/CMS'
import Layout from '_hoc/Layout/Layout'

interface NewsArticleProps {
  data: NewsArticleType
}

export const NewsArticle = ({ data }: NewsArticleProps) => {
  return (
    <Layout data={data}>
      {data.components
        ?.filter(
          (comp) => comp.__typename !== ComponentsTypeName.SUB_NAVIGATION
        )
        .map((comp, i) => renderComponent({ data: comp, id: i }))}
    </Layout>
  )
}
