import { Star, Calendar, Users, TrendingUp, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface TripCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  price: string;
  tags: string[];
  itinerary: string[];
  intensity?: 'Low' | 'Medium' | 'High';
  bestSeason?: string;
}

export function TripCard({
  title,
  image,
  rating,
  reviews,
  duration,
  price,
  tags,
  itinerary,
  intensity = 'Medium',
  bestSeason,
}: TripCardProps) {
  const intensityColors = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700',
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/90 text-[#0f172a] backdrop-blur">
            {duration}
          </Badge>
        </div>
        {bestSeason && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-[#14b8a6] text-white">
              <Calendar className="h-3 w-3 mr-1" />
              {bestSeason}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title & Rating */}
        <div>
          <h3 className="font-semibold text-[#0f172a] mb-2 line-clamp-1">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
            <span className="text-xs text-slate-500">({reviews} reviews)</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Micro Itinerary */}
        <div className="space-y-1.5">
          {itinerary.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="h-3 w-3 mt-0.5 text-[#14b8a6] flex-shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Intensity & Price */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-slate-400" />
            <Badge variant="secondary" className={intensityColors[intensity]}>
              {intensity}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">from</div>
            <div className="font-bold text-[#0f172a]">{price}</div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/packages`}
          className="w-full"
        >
          <Button className="w-full bg-[#14b8a6] hover:bg-[#14b8a6]/90">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
}
