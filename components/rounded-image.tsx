"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface RoundedImageProps extends Omit<ImageProps, "className"> {
  roundedClass?: string
  containerClassName?: string
}

export default function RoundedImage({
  src,
  alt,
  width,
  height,
  roundedClass = "rounded-lg",
  containerClassName = "",
  ...props
}: RoundedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`overflow-hidden ${roundedClass} ${containerClassName}`} style={{ borderRadius: "0.5rem" }}>
      <div className={`relative ${isLoading ? "animate-pulse bg-gray-800" : ""}`}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      </div>
    </div>
  )
}
