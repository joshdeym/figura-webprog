import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <section className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Article not found</h1>
            <Button to="/articles" className="mt-6">Back to Articles</Button>
          </div>
        </section>
      </section>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 bg-primary">
      <section className="border-y-2 border-accent bg-primary px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-heading text-xl">{article.title}</h1>
          <h2 className="mt-2 text-sm text-accent">
            {article.name.split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h2>
        </div>
      </section>

      <section className="bg-primary px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {article.image ? (
          <div className="overflow-hidden rounded-[1.25rem] bg-transparent mb-8 mx-auto max-w-5xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-contain"
            />
          </div>
        ) : (
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-surface mb-8">
            <div className="h-24 w-24 bg-primary" />
          </div>
        )}

        <div className="prose prose-sm max-w-none text-primary">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-7 text-primary whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Button to="/articles" className="mt-6">Back to Articles</Button>
    </div>
  );
}

export default ArticlePage;