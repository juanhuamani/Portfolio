import { Parallax } from 'react-scroll-parallax';

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Capa base de la cuadrícula */}
      <Parallax speed={-2} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </Parallax>

      {/* Capa adicional con efecto de profundidad */}
      <Parallax speed={-5} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </Parallax>

    </div>
  );
}; 