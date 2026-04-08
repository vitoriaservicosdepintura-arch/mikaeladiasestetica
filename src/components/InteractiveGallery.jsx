import { useState } from 'react'

export default function InteractiveGallery({ images = [], className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={`flex h-96 w-full gap-2 ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative flex h-full cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
            hoveredIndex === index ? 'flex-[3]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={`Gallery image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  )
}
