
import { ICategorie } from "./categorie";
import { IHost } from "./host";
import { IInscription } from "./inscricoes";
import { StrapiImage, StrapiMeta, StrapiResponse } from "./strapi";

export interface IProgram {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  about: string;
  slug: string;
  cover: StrapiImage;
  inscriptions: IInscription;
  categorie: ICategorie;
  apresentadores: IHost[];
}

// Estrutura da resposta da API retorna um data com um array de programas e um meta.
// Extends significa que você está reutilizando uma interface que ja existe, e aí você coloca o no dessa interface em seguida
export interface IProgramResponse extends StrapiResponse {
data: IProgram[]
}
