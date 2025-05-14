"use client"
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

const conferences = [
  {
    id: "conf1",
    title: "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC", 
    description:"Le Bureau National d’Étude Technique et de Développement (BNETD), en partenariat avec la CAPEC, a organisé une formation de cinq jours sur le thème « L’élaboration d’une étude/enquête marketing » pour renforcer les compétences des cadres de sa Cellule Marketing et Communication.",
    date: "21 septembre 2020",
    location: "BNETD, Abidjan",
    participants: "3 participants",
    image: "/placeholder.svg?text=Conférence+Internationale&height=300&width=400",
  },
  {
    id: "conf2",
    title: "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
    description:"Un atelier de méthodologie et d’écriture scientifique organisé par le Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique (CODESRIA), en collaboration avec la Cellule d’Analyse de Politiques Economique de Cires (CAPEC), s'est tenu à Abidjan, du 1er au 5 avril 2019.",
    date: "1 au 5 avril 2019",
    location: "Centre de Conférences, Plateau",
    participants: "50 participants",
    image: "/placeholder.svg?text=Conférence+Développement+Durable&height=300&width=400",
  },
  {
    id: "conf3",
    title: "Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre",
    description:"Dans un contexte de libéralisation économique, le Ministère de l’Industrie et des Mines, à travers la Direction Générale de l’Activité Industrielle (DGAI), a initié une formation pour renforcer les compétences de ses cadres.",
    date: "12 juillet 2017",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    image: "/placeholder.svg?text=Conférence+Annuelle+2022&height=300&width=400",
  },
  {
    id: "conf4",
    title: "Planification, Programmation, Budgétisation et Suivi-Evaluation",
    description:"La mise en œuvre et le suivi du Plan National de Développement (PND) exigent un renforcement du capital humain des différents Ministères Techniques. Le Ministère des Eaux et Forêts (MINEF), l’a si bien compris, qu’il vient d’initier un atelier de renforcement des capacités.",
    date: "30 juin 2016",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    image: "/placeholder.svg?text=Conférence+Annuelle+2022&height=300&width=400",
  },
   {
    id: "conf5",
    title: "ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation",
    description:"L’étude réalisée par la CAPEC a été financée par le Global Development Network (GDN), avec l’appui de l’Agence Française de Développement (AFD) et du Centre Suisse de Recherche Scientifique (CSRS).",
    date: "6 mai 2016",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    image: "/placeholder.svg?text=Conférence+Annuelle+2022&height=300&width=400",
  },
   {
    id: "conf6",
    title: "Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement",
    description:"La cérémonie de clôture de cette série de formation assurée par la Cellule d’Analyse des Politiques Économiques du Cires (CAPEC), s’est soldée par la remise de diplômes aux bénéficiaires des dernières formations. ",
    date: "26 juin 2015",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    image: "/placeholder.svg?text=Conférence+Annuelle+2022&height=300&width=400",
  },
];


export default function EventDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const event = conferences.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-muted-foreground mt-4">{event.description}</p>
      <div className="mt-6">
        <p><strong>Date :</strong> {event.date}</p>
        <p><strong>Lieu :</strong> {event.location}</p>
        <p><strong>Participants :</strong> {event.participants}</p>
      </div>
    </div>
  );
}