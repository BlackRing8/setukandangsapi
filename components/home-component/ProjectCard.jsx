import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { Instagram } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="mt-4 overflow-y-hidden">
      <CardHeader>
        <div className="relative w-full h-[250px] flex items-center">
          <Image className="absolute bottom-0 shadow-2xl rounded-xl h-64" src={project.image} width={247} height={250} alt="Fasilitas situ kandang sapi" priority />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-2">
        <h3 className="h4 mb-1 font-bold text-xl">{project.name}</h3>

        <Link href={project.link} className="flex my-3">
          <Instagram /> <span className="ml-3 font-semibold text-blue-500">Selengkapnya</span>
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
