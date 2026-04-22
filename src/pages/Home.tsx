// Этот массив будет легко редактировать вашей девушке
type Cat = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
};

const cats: Cat[] = [
  {
    id: 1,
    name: 'Персик',
    date: 'Октябрь 2023',
    description: 'Был найден совсем котенком на заправке. Теперь он главная звезда дома, обожает коробки и спать на клавиатуре.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Ласковый', 'Игривый', 'Любит спать']
  }
];

export function Home() {
  return (
    <>
      <header className="header">
        <h1>Спасенные Котики 🐾</h1>
        <p>Небольшая история тех, кто нашел свой дом и любящую семью. Здесь мы бережно собираем воспоминания о каждом хвостике.</p>
      </header>

      <main className="gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <div className="card-image-wrapper">
              <img src={cat.image} alt={cat.name} className="cat-image" />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h2>{cat.name}</h2>
                <span className="cat-date">{cat.date}</span>
              </div>
              <p className="cat-desc">{cat.description}</p>
              <div className="cat-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
