export const TestimonialSection = (props) => {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  };
  return (
    <section id="relume" className="bg-brand-yellow px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between rounded-md bg-white/70 shadow-md p-6 md:p-8"
            >
              <blockquote className="text-lg">{testimonial.quote}</blockquote>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6">
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-lg">
                    <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults = {
  heading: "Vozes do LEAN",
  description: "Depoimentos de pessoas queridas que fazem parte da nossa história.",
  testimonials: [
    {
      quote:
        '"Aqui no LEAN, eu não sou apenas cuidada. Eu sou amada. Encontrei uma família e um lar que me devolveu a dignidade e a alegria de viver."',
      name: "Dona Maria",
      position: "Residente",
      companyName: "LEAN",
    },
    {
      quote:
        '"Ver meu filho no karatê, feliz e com um propósito... O LEAN é uma luz para a nossa comunidade. É a esperança de um futuro melhor para nossos jovens."',
      name: "Ana Paula",
      position: "Mãe de aluno",
      companyName: "Comunidade da Liberdade",
    },
    {
      quote:
        '"Ser voluntário no LEAN transformou minha vida. A gente chega para doar amor e sai com o coração transbordando. É um lugar onde a caridade se torna ação."',
      name: "Carlos A.",
      position: "Voluntário",
      companyName: "Amigos do LEAN",
    },
  ],
};