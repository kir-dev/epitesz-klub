import config from "@payload-config";
import { BasePayload, getPayload } from "payload";
import { MyCarousel } from "../Components/Carousel";
import { Carousel, Media } from "@/payload-types";
import StrafingLine from "@/app/(app)/Components/StrafingLine";
import type { Event } from "@/payload-types";

function getRedirectTag(event: null | undefined | number | Event): string {
  return event &&
    typeof event !== "number" &&
    event.type &&
    typeof event.type !== "number"
    ? `projektek/${event.type.id}#${event.id}`
    : "#";
}

export default async function Home() {
  const payload: BasePayload = await getPayload({
    config,
  });

  const media = await payload.find({
    collection: "carousel",
    depth: 3,
  });

  const news = await payload.find({
    collection: "news",
    sort: "-date",
    limit: 10,
  });

  const mediaData = {
    docs: media.docs.map((doc: Carousel) => ({
      url: (doc.picture as Media)?.url ?? "",
      alt: (doc.picture as Media)?.alt ?? "",
      redirect: getRedirectTag(doc.event),
    })),
  };

  return (
    <>
      <div id="carousel" className="relative w-full h-screen z-40">
        <MyCarousel data={mediaData} />
      </div>
      <div className="relative z-30">
        <StrafingLine news={news.docs} />
      </div>
    </>
  );
}
