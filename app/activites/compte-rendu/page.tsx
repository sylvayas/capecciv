import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar, MapPin, Users, Download, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";

export default function CompteRenduActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comptes Rendus d'Activités
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Retrouvez les comptes rendus des activités organisés par la CAPEC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {conferences.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Archives des comptes rendus</h2>
              <p className="text-muted-foreground">
                Accédez à notre base de données complète des comptes rendus d'activités depuis 2010.
              </p>
            </div>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white">
              Consulter les archives
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {/* <div className="relative aspect-video">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div> */}
      <div className="p-6 flex-grow">
        <div className="flex items-center text-sm text-ci-orange mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-ci-green mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-ci-green mr-2" />
            <span>{event.participants}</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
         <Link
          className={cn(
            buttonVariants(),
            "mt-4 inline-flex items-center gap-2",
            "group relative w-full justify-center rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
          )}
          href={`/activites/compte-rendu/${event.id}`} // Utiliser une route dynamique
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
          <span>Voir détails</span>
        </Link>
        </div>
      </div>
    </Card>
  );
}

// Sample data
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