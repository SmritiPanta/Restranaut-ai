import satori from "satori";
import Logo from "@/assets/logo-mini.svg";

export const dynamic = "force-static";
export const sizes = { width: 128, height: 128 };
export const contentType = "image/svg+xml; charset=utf-8";

export default async function Icon() {
  const icon = await satori(<Logo {...sizes} />, { ...sizes, fonts: [] });

  return new Response(icon, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
