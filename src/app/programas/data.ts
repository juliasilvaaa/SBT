import { title } from "process";

// Import das imagens
import domingolegal from '../../../public/img/programas/domingo.png'
import silviosantos from '../../../public/img/programas/patriciaprograma.png'
import ratinho from '../../../public/img/programas/ratinho.png'
import thenoite from '../../../public/img/programas/thenoite.png'
import sabadou from '../../../public/img/programas/sabadou.png'
import rodaroda from '../../../public/img/programas/rodaroda.png'

// Desenhos
import sabadoanimado from '../../../public/img/programas/sabadoanimado.png'
import cineespetacular from '../../../public/img/programas/cineespetacular.png'
import bro99 from '../../../public/img/programas/bro99.png'
import cinema from '../../../public/img/programas/cinema.png'
import teladesucessos from '../../../public/img/programas/teladesucessos.png'

// Jornal e Noticias
import primeiroimpacto from '../../../public/img/programas/primeiroimpacto.png'


// Realites
import esquadrao from '../../../public/img/programas/moda.png'
import bakeoff from '../../../public/img/programas/bakeoff.png'


// Apresentadores 
import patricia from '../../../public/img/apresentadores/patricia.png'
import ratinhoapresentador from '../../../public/img/apresentadores/ratinho.png'
import danilo from '../../../public/img/apresentadores/danilo.png'
import virginia from '../../../public/img/apresentadores/virginia.png'
import celso from '../../../public/img/apresentadores/celso.png'
import marcaodopovo from '../../../public/img/apresentadores/marcaodopovo.png'
import rebeca from '../../../public/img/apresentadores/rebeca.png'
import silvia from '../../../public/img/apresentadores/silviabravanel.png'
import renata from '../../../public/img/apresentadores/renata.png'
import dudu from  '../../../public/img/apresentadores/dudu.png'

// Inscricoes
import quemarrisca from '../../../public/img/programas/quemarrisca.png'
import talentoinfantil from '../../../public/img/programas/talentoinfantil.png'



import { scheduler } from "timers/promises";
import dynamic from "next/dynamic";


export const PROGRAMAS_DATA = [
    //  Categorie - Programas de auditorio
    {
        slug: 'domingo-legal',
        title: 'Domingo Legal',
        image: domingolegal,
        description: 'Domingo Legal já faz parte da vida dos brasileiros! Há 30 anos, a atração leva até a casa do telespectador um programa especial com música, reportagens, celebridades, notícias e quadros que são campeões de audiência.A história do Domingo Legal começou em 17 de janeiro de 1993, quando ainda era gravado. Foi a partir do 1º domingo de agosto de 1994 que passou a ser apresentado ao vivo. Desde 1998, a atração é exibida diretamente do CDT da Anhanguera, sede do SBT, em Osasco.',
        categorie: 'Programa de Auditório',
        inscricoes: [
            {
                slug: 'comprar-e-bom-levar-e-melhor',
                type: 'Quadro',
                title: 'Comprar é bom, levar é melhor!',
                description: 'Já imaginou como seria entrar numa loja e poder comprar tudo o que quiser? O Domingo Legal quer desafiar você e sua família ou amigos a participar de um jogo em que vocês podem realizar seus sonhos de consumo e conquistar tudo o que desejam. Mas para isso, vocês precisarão responder corretamente as perguntas do nosso apresentador. Gostou da ideia? Então inscreva-se!',
                image: domingolegal
            },
            {
                slug: 'quem-arrisca-ganha-mais',
                type: 'Quadro',
                title: 'Quem Arrisca Ganha Mais',
                description: 'O Domingo Legal está lançando um game que pode dar até 100 mil reais em produtos. Duas duplas irão se enfrentar em busca dessa bolada. Quer realizar todos os seus sonhos de consumo? Gosta de arriscar e manda bem em provas que envolvem habilidades, rapidez e corrida contra o tempo? Então, esse é o seu lugar! Inscreva-se no "Quem Arrisca Ganha Mais" e venha encarar seus adversários.',
                image: quemarrisca
            }
        ],
        apresentadores: [
            {
                name: 'Celso Portioli',
                image: celso
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ],
    },
    {
        slug: 'patricia',
        title: 'Programa Silvio Santos com Patricia Abravanel',
        image: silviosantos,
        description: 'As noites de domingo são muito mais alegres com o Programa Silvio Santos em várias horas de diversão garantida, games, convidados famosos, brincadeiras com o auditório, além de boas gargalhadas Patricia Abravanel interage com o público de uma forma bem descontraída. A ideia é que a plateia participe da atração e possa ganhar uma série de prêmios.Em 2021, Patricia Abravanel começou a apresentar o dominical junto ao pai. Seja com jogos, musicais, entrevistas, gincanas ou formatos, Patricia Abravanel comanda o programa do lugar onde mais gosta de estar: ao lado de seu auditório, com suas colegas de trabalho, que são parte fundamental do programa.',
        categorie: 'Programa de Auditório',
        inscricoes: [
            {
                slug: 'show-do-milhao',
                type: 'Quadro',
                title: 'Show do Milhão',
                description: 'Se você é bom de conhecimentos gerais, inscreva-se para participar do novo "Show do Milhão" e concorrer ao tão sonhado prêmio de 1 milhão de reais!',
                image: silviosantos
            },
            {
                slug: 'talento-infantil',
                type: 'Auditório',
                title: 'Talento Infantil',
                image: talentoinfantil
            }
        ],
        apresentadores: [
            {
                name: 'Patricia Abravanel',
                image: patricia
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'ratinho',
        title: 'Ratinho',
        image: ratinho,
        description: 'O Programa do Ratinho traz ao público o melhor de Carlos Massa. Sempre de bom humor, Ratinho volta a fazer a alegria do telespectador em um programa dinâmico, animado e cheio de atrações que só são vistas aqui. No ar de segunda a sexta, o programa mistura games, comédia, participação do público e quadros únicos, como o Jornal Rational, Gol Show, Dez Ou Mil, Boteco Do Ratinho, entre outros. A atração recebe ainda convidados famosos, que vão ao palco se divertir com o apresentador.Sempre com o forte lado humorístico, Ratinho conta com o fiel companheiro Xaropinho, além de sua banda no estúdio, Murilo Bordoni, Faxinildo, Santos, Rhenata Schmidt e Milene Pavorô.',
        categorie: 'Programa de Auditório',
        apresentadores: [
            {
                name: 'Ratinho',
                image: ratinhoapresentador
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'the-noite',
        title: 'The Noite com Danilo Gentili',
        image: thenoite,
        description: 'O The Noite Com Danilo Gentili traz muitos entrevistados interessantes e altos índices de piadas por minuto, abordando os fatos mais (e menos) relevantes do dia. A atração também conta com Igor Guimarães, além do irreverente locutor Diguinho Coruja. A trilha sonora fica por conta da banda Ultraje a Rigor.',
        categorie: 'Programa de Auditório',
        apresentadores: [
            {
                name: 'Danilo Gentili',
                image: danilo
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'sabadou',
        title: 'Sabadou com Virgina',
        image: sabadou,
        description: 'O Sabadou com Virginia é um programa de entretenimento que combina entrevistas, muita interação e brincadeiras com a plateia, proporcionando um final de noite mais leve e cheio de diversão. No ar aos sábados, a partir das 22h15 [de Brasília], a atração traz a maior influencer do Brasil comandando seu primeiro programa de televisão. Virginia recebe semanalmente convidados das mais diversas áreas para um encontro repleto de games, musicais, boas histórias e muita interação com a plateia e o público de casa.Margareth Serrão, mãe de Virginia, e Lucas Guedez, o best friend da influencer, também participam do programa sem economizar na leveza e no bom humor. Marga, com o seu jeito despojado e autêntico, não vai poupar opiniões sobre tudo que acontece no programa. Já Lucas, com seu bom humor, será o elo entre convidados, plateia e a apresentadora, participando ainda de quadros e games no palco, bem como Margareth.Altamente engajada nas redes sociais e com milhões de seguidores acompanhando seu dia a dia, Virginia chega ao SBT para entreter e divertir toda a família.',
        categorie: 'Programa de Auditório',
        apresentadores: [
            {
                name: 'Virginia',
                image: virginia
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'roda-roda',
        title: 'Roda Roda',
        image: rodaroda,
        description: 'O Programa mais querido entre Consultores e Clientes Jequiti! Rebeca Abravanel está no comando do Roda a Roda, este programa tradicional, único, onde a diversão é garantida. Aos domingos, não perca esta atração emocionante.Para participar precisa ser consultora, Líder ou Gerente de Vendas Jequiti e ser classificadas por ranking de vendas.Sendo classificado, o participante vem a São Paulo com todas as despesas pagas, para participar do programa.Seja um Consultor Jequiti e mude de vida!',
        categorie: 'Programa de Auditório',
        apresentadores: [
            {
                name: 'Rebeca Abravanel',
                image: rebeca
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'primeiro-impacto',
        title: 'Primeiro Impacto',
        image: primeiroimpacto,
        description: '',
        categorie: 'Jornal',
        apresentadores: [
            {
                name: 'Marcão do Povo',
                image: marcaodopovo
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    // Categorie - Filmes, Series e Desenhos
    {
        slug: 'chaves',
        title: 'Chaves',
        image: sabadoanimado,
        description: 'Seu fim de semana começa com muito mais alegria e diversão no Sábado Animado! Os desenhos animados que fazem sucesso entre a garotada de todas as idades estão reunidos aqui.',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'sabado-animado',
        title: 'Sabado Animado',
        image: sabadoanimado,
        description: '',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'cine-espetacular',
        title: 'Cine Espetacular',
        image: cineespetacular,
        description: '',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'cinema',
        title: 'Cinema',
        image: cinema,
        description: '',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'bro99',
        title: 'BRO 99',
        image: bro99,
        description: '',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'teladesucessos',
        title: 'Tela de Sucessos',
        image: teladesucessos,
        description: '',
        categorie: 'Desenhos',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    // Categorie - Realites
    {
        slug: 'esquadrao',
        title: 'Esquadrão da Moda',
        image: esquadrao,
        description: 'Dudu Bertholini e Renata Kuerten apresentam o Esquadrão da Moda e dão dicas essenciais para ensinar como a participante do dia pode usar a moda a seu favor. Eles contam ainda com os especialistas Rodrigo Cintra e Fabi Gomes para transformar a convidada',
        categorie: 'Realites',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'bakeoff',
        title: 'Bake Off',
        image: bakeoff,
        description: 'O Bake Off Brasil é uma disputa entre confeiteiros amadores, apresentada por Nadja Haddad. Os participantes são submetidos a provas técnicas e criativas e precisam colocar a mão na massa para enfrentar a nossa dupla de jurados especializados, Beca Milano e Giuseppe Gerundino.',
        categorie: 'Realites',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    // Categorie - Novelas
    {
        slug: 'quando-me-apaixono',
        title: 'Quando me Apaixono',
        image: bakeoff,
        description: 'O Bake Off Brasil é uma disputa entre confeiteiros amadores, apresentada por Nadja Haddad. Os participantes são submetidos a provas técnicas e criativas e precisam colocar a mão na massa para enfrentar a nossa dupla de jurados especializados, Beca Milano e Giuseppe Gerundino.',
        categorie: 'Novelas',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    },
    {
        slug: 'a-usurpadora',
        title: 'A usurpadora',
        image: bakeoff,
        description: 'O Bake Off Brasil é uma disputa entre confeiteiros amadores, apresentada por Nadja Haddad. Os participantes são submetidos a provas técnicas e criativas e precisam colocar a mão na massa para enfrentar a nossa dupla de jurados especializados, Beca Milano e Giuseppe Gerundino.',
        categorie: 'Novelas',
        apresentadores: [
            {
                name: 'Renata Kuerten',
                image: renata
            },
            {
                name: 'Dudu Bertholini',
                image: dudu
            }
        ],
        schedule: [
            {
                day: 'domingo',
                time: '19:00'
            }
        ]
    }

]