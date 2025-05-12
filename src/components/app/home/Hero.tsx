import { useTranslation } from 'react-i18next';
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
export const Hero = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      href: "https://github.com/juanhuamani",
      label: "GitHub"
    },
    {
      icon: <SiGmail className="w-6 h-6" />,
      href: "mailto:juan.huamani.dev@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="w-full overflow-hidden relative z-10 flex items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <p className="text-blue-400/80 text-sm tracking-[0.5em] uppercase font-light">
            {t('hero.role')}
          </p>
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-[1.3]">
            {t('hero.name')}
          </h1>
        </div>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          {t('hero.tagline')}
        </p>

        <div className="flex justify-center gap-6 pt-8">
          <button className="px-8 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/20 transition-all duration-300">
            {t('hero.cta.projects')}
          </button>
          <button className="px-8 py-3 bg-transparent hover:bg-white/5 text-gray-300 rounded-full border border-gray-500/20 transition-all duration-300">
            {t('hero.cta.contact')}
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500/50 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
};
