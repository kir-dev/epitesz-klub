import React from 'react';
import Image from 'next/image';

interface EventCardProps {
    title: string;
    imageUrl: string;
    date: string;
    description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, imageUrl, date, description }) => {
    const formattedDate = new Date(date).toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="bg-[#3E3F46] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm">
            <div className="relative h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-gray-900 text-gray-100 px-3 py-1 m-2 rounded">
                    {formattedDate}
                </div>
            </div>
            <div className="p-6 max-h-64">
                <h2 className="text-xl font-bold text-gray-100 mb-3">{title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{description}</p>
            </div>
        </div>
    );
};

export default EventCard;

