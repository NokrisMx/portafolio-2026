export interface Portfolio {
  about: About;
  experiencia: Experiencia[];
  proyectos: Proyecto[];
  habilidades: Habilidades[];
  educacion: Educacion[];
}

export interface Educacion {
  institucion: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
}

export interface Experiencia {
  empresa: string;
  url: string;
  logo: string;
  puesto: string;
  descripcion: string;
  habilidades: string[];
  fechaInicio: string;
  fechaFin: string;
}

export interface Habilidades {
  nombre: string;
  icono: string;
}

export interface About {
  nombreCompleto: string;
  descripcion: string;
  email: string;
  ubicacion: string;
  telefono: string;
  edad: number;
  cv: string;
  foto: string;
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  github: string;
  demo: string;
  image: string;
}
