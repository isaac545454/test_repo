type CardBoxProps = {
  img: {
    src: string
    alt: string
  }
  title: string
  subtitle?: string
}
export const CardBox = ({ subtitle, img, title }: CardBoxProps) => {
  return (
    <div className="pb-6">
      <div className="flex justify-center">
        <img className="w-60" src={img.src} alt={img.alt} />
      </div>
      <div className="mt-8 w-[400px]">
        <h2 className="font-semibold text-2xl">{title}</h2>
        {subtitle && <p className="mt-3">{subtitle}</p>}
      </div>
    </div>
  )
}
