import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <Card
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="text-accent-foreground" size={28} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;