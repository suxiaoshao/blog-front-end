import article from '../../views/blog/article'
import blog from '../../views/blog/main'
import writing from '../../views/blog/writing'
import edit from '../../views/blog/edit'
const blog_router = {
    path: '/blog',
    name: 'blog',
    component: blog,
    meta: {
        title: '博客'
    },
    children: [
        {
            path: '/blog/article/:aid',
            name: 'blog_article',
            component: article,
            meta: {
                title: '文章'
            }
        },
        {
            path: '/blog/writing',
            name: 'blog_writing',
            component: writing,
            meta: {
                title: '博客写作'
            }
        },
        {
            path: '/blog/edit/:aid',
            name: 'blog_edit',
            component: edit,
            meta: {
                title: '博客修改'
            }
        }
    ]
}
export default blog_router