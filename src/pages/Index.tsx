import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/0de6f35a-839e-4661-8adc-f60bbdf1a326/files/277af024-dd4a-4556-b027-7b64b0116093.jpg',
      title: 'Детейлинг спорткара',
    },
    {
      url: 'https://cdn.poehali.dev/projects/0de6f35a-839e-4661-8adc-f60bbdf1a326/files/ddfdf999-f804-4b2e-9cdc-1574cebd6706.jpg',
      title: 'Кастомизация мускулкара',
    },
    {
      url: 'https://cdn.poehali.dev/projects/0de6f35a-839e-4661-8adc-f60bbdf1a326/files/ebd60ba6-89ed-40c1-9960-fd0e615b5ba8.jpg',
      title: 'Керамика для внедорожника',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Card className="mb-12 overflow-hidden shadow-2xl animate-fade-in bg-white">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
                <img
                  src="https://cdn.poehali.dev/projects/0de6f35a-839e-4661-8adc-f60bbdf1a326/files/f5cf49a7-2366-444e-8552-d30313598ecb.jpg"
                  alt="Сотрудник"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  Алексей Морозов
                </h1>
                <p className="text-xl text-primary font-semibold">
                  Мастер детейлинга и тюнинга
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <span className="text-lg font-medium">+7 (999) 123-45-67</span>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Icon name="Wrench" size={20} className="text-secondary" />
                  </div>
                  <span className="text-lg">Опыт работы: 8 лет</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать мне
              </Button>
            </div>
          </div>
        </Card>

        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-8 text-accent">
            Портфолио работ
          </h2>

          <Card className="relative overflow-hidden shadow-2xl bg-white">
            <div className="relative aspect-video bg-accent/5">
              <img
                src={portfolioImages[currentSlide].url}
                alt={portfolioImages[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioImages[currentSlide].title}
                  </h3>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Предыдущее фото"
              >
                <Icon name="ChevronLeft" size={24} className="text-accent" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Следующее фото"
              >
                <Icon name="ChevronRight" size={24} className="text-accent" />
              </button>
            </div>

            <div className="flex justify-center gap-2 p-6 bg-muted/30">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </Card>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden shadow-md transition-all hover:scale-105 ${
                  index === currentSlide ? 'ring-4 ring-primary shadow-xl' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;