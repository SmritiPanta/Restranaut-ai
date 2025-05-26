import Image from "next/image";

type PromoCardProps = {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  footer: string;
  logoSrc: string;
  graphicSrc?: string;
  contentClassName?: string;
  textSizeClassName?: string;
};

export default function InstaCard({
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-black",
  footer,
  logoSrc,
  graphicSrc,
  contentClassName = "",
  textSizeClassName = ""
}: PromoCardProps) {
  return (
    <div
      className={`w-[300px] h-[500px] p-6 rounded-xl shadow-md ${bgColor} flex flex-col justify-between`}>
      <div>
        <div className="flex items-center text-black gap-2 mb-4">
          <Image src={logoSrc} alt="Logo" width={24} height={24} />
          <span className="font-medium text-sm">restronaut.ai.</span>
        </div>
        <div className={contentClassName}>
          <h2
            className={`text-xl font-bold leading-tight mb-2  ${textSizeClassName} ${textColor}`}>
            {title}
          </h2>
          <p className={`text-sm ${textColor}`}>{description}</p>
        </div>

        <div className="flex items-center mt-4 text-black gap-2 mb-4">
          <Image src={logoSrc} alt="Logo" width={24} height={24} />
          <span className="font-medium text-sm">RESTRONAUT.AI</span>
        </div>

        {graphicSrc && (
          <div className="w-full flex justify-end mt-4">
            <Image src={graphicSrc} alt="Graphic" width={150} height={120} />
          </div>
        )}

        <div className="text-sm  text-gray-600 font-normal mt-6">
          <span className="text-black">restronaut.ai.</span> {footer}
        </div>
      </div>
    </div>
  );
}
