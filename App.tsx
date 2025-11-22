import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Schedule } from './components/Schedule';
import { Testimonials } from './components/Testimonials';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* About Section Content Block */}
        <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute -top-20 -left-20 text-[20rem] font-serif font-bold text-slate-50 pointer-events-none opacity-50 leading-none select-none">
                1989
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                         <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-200 border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop" 
                                alt="Ballroom dancing couple" 
                                className="object-cover w-full h-[500px]"
                            />
                         </div>
                         {/* Decorative offset border */}
                         <div className="absolute top-4 left-4 w-full h-full border-2 border-fuchsia-200 rounded-3xl -z-10"></div>
                         
                         <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl hidden md:block max-w-xs border border-slate-100 z-20">
                            <div className="w-8 h-1 bg-fuchsia-500 mb-4"></div>
                            <p className="text-slate-700 italic font-serif text-lg leading-relaxed">
                                "Танцы — это не просто красота, а спорт, развивающий выносливость и характер."
                            </p>
                         </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-fuchsia-600 font-bold tracking-wider uppercase text-sm">О нас</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-2 mb-8 leading-tight">
                            Школа с <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">историей успеха</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                ТСК «Лайма» — это команда профессиональных тренеров с огромным опытом. 
                                За 37 лет в клубе выросла целая плеяда спортсменов: Кандидатов и Мастеров спорта России, 
                                танцоров международного класса.
                            </p>
                            <p>
                                В арсенале клуба — места на престижных турнирах в Дании, Италии, Германии, Голландии. 
                                Мы гордимся тем, что школа №176 была первой, где урок бального танца был введен в основное расписание.
                            </p>
                            <p className="font-medium text-slate-800">
                                Сейчас «Лайма» — это более 800 м² площади, 3 танцевальных зала, и направления: 
                                спортивные бальные танцы, хип-хоп, ОФП и хореография.
                            </p>
                        </div>
                        <div className="mt-10">
                            <a href="#schedule" className="text-fuchsia-600 font-bold hover:text-fuchsia-700 inline-flex items-center border-b-2 border-fuchsia-200 hover:border-fuchsia-600 transition-all pb-1 text-lg">
                                Узнать подробнее о направлениях &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Gallery />
        <Features />
        <Schedule />
        
        {/* Call to Action Break */}
        <section className="py-20 bg-gradient-to-r from-fuchsia-700 to-purple-800 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Не слишком ли рано начинать в 4 года?</h2>
                <p className="text-xl mb-10 text-fuchsia-100 leading-relaxed">
                    4 года — идеальный возраст для старта! Дети лучше всего развивают координацию и чувство ритма, 
                    у них нет зажимов. Чем раньше ребёнок начнёт — тем свободнее он будет чувствовать себя в жизни.
                </p>
                <a href="#contact" className="inline-block bg-white text-fuchsia-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-fuchsia-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Записаться в группу 3-5 лет
                </a>
            </div>
        </section>

        <News />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;