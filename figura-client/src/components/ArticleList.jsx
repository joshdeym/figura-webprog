import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article key={article.name} className="rounded-3xl border-2 border-accent p-4 hover-border-accent transition">
          {article.image ? (
            <div className="overflow-hidden rounded-[1.25rem] h-72 bg-transparent">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-orange-500 to-orange-600">
              <div className="h-12 w-12 border-2 border-accent bg-surface" />
            </div>
          )}
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Article {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
          <p className="mt-3 text-sm leading-6 text-primary">
            {article.content[0].substring(0, 150)}...
          </p>
          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;