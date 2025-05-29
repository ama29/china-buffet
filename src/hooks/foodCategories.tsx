import { useEffect, useState } from 'react';

import meatMetadata from 'src/assets/images/meat/metadata.json';
import seafoodMetadata from 'src/assets/images/seafood/metadata.json';
import vegetableMetadata from 'src/assets/images/vegetables/metadata.json';
import grainMetadata from 'src/assets/images/grains/metadata.json';

interface Metadata {
  caption: string;
  description: string;
}

interface ImageWithMetadata {
  src: string;
  caption?: string;
  description?: string;
}

export const useImageCategories = () => {
    const [typeMeatImages, setTypeMeatImages] = useState<ImageWithMetadata[]>([]);
    const [typeSeafoodImages, setTypeSeafoodImages] = useState<ImageWithMetadata[]>([]);
    const [typeVegetableImages, setTypeVegetableImages] = useState<ImageWithMetadata[]>([]);
    const [typeGrainImages, setTypeGrainImages] = useState<ImageWithMetadata[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const meat = import.meta.glob<{ default: string }>('/src/assets/images/meat/*.{jpg,png,jpeg,svg}', { eager: true });
            const seafood = import.meta.glob<{ default: string }>('/src/assets/images/seafood/*.{jpg,png,jpeg,svg}', { eager: true });
            const vegetables = import.meta.glob<{ default: string }>('/src/assets/images/vegetables/*.{jpg,png,jpeg,svg}', { eager: true });
            const grains = import.meta.glob<{ default: string }>('/src/assets/images/grains/*.{jpg,png,jpeg,svg}', { eager: true });

            const meatImagesMeta: Record<string, Metadata> = meatMetadata;
            const seafoodImagesMeta: Record<string, Metadata> = seafoodMetadata;
            const vegetableImagesMeta: Record<string, Metadata> = vegetableMetadata;
            const grainImagesMeta: Record<string, Metadata> = grainMetadata;

            const parseImages = (
                images: Record<string, { default: string}>,
                metadata: Record<string, Metadata>
            ): ImageWithMetadata[] => {
                return Object.entries(images).map(([path, mod]) => {
                    const filename = path.split('/').pop()!;
                    return {
                        src: mod.default,
                        caption: metadata[filename]?.caption,
                        description: metadata[filename]?.description,
                    };
                });
            };

            setTypeMeatImages(parseImages(meat, meatImagesMeta));
            setTypeSeafoodImages(parseImages(seafood, seafoodImagesMeta));
            setTypeVegetableImages(parseImages(vegetables, vegetableImagesMeta));
            setTypeGrainImages(parseImages(grains, grainImagesMeta));
            };
            
            loadImages();
        }, []);
        
  return {
    menuMeatItems: typeMeatImages,
    menuSeafoodItems: typeSeafoodImages,
    menuVegetablesItems: typeVegetableImages,
    menuGrainItems: typeGrainImages
  };
};