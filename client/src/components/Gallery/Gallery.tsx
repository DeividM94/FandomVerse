import React, { FC } from "react";
import { MiniCard } from "../MiniCard/MiniCard";
import "./gallery.scss"

interface BaseCharacter {
  name: string;
  image?: string;
  photo?: string;
  alternate_names?: string[];
  ancestry?: string;
  house?: string;
  patronus?: string;
  residence?: string[];
  born?: string;
}

interface GalleryProps<T extends BaseCharacter> {
  items: T[];
  styleType: "harry-potter" | "stranger-things";
}

export const Gallery = <T extends BaseCharacter>({
  items,
  styleType,
}: GalleryProps<T>): JSX.Element => {
  return (
    <div className="gallery-container d-flex gap-5 flex-wrap justify-content-center">
      {items?.map((item: T, index: number) => (
         <MiniCard key={index} data={item} styleType={styleType} />
      ))}
    </div>
  );
};
