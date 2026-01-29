export interface Mission {
  id: number;
  titulo: string;
  descricao: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    titulo: "Ato de caridade",
    descricao: "Faça hoje uma boa ação sem contar a ninguém.",
  },
  {
    id: 2,
    titulo: "Silêncio interior",
    descricao: "Reserve 5 minutos do seu dia para silêncio e oração.",
  },
  {
    id: 3,
    titulo: "Gratidão",
    descricao: "Agradeça conscientemente por três coisas hoje.",
  },
  {
    id: 4,
    titulo: "Palavra boa",
    descricao: "Diga algo bom ou encorajador para alguém hoje.",
  },
];
