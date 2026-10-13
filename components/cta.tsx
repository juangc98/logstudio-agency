import { Calendar, LayoutGrid } from "lucide-react";

import ImageBand from "@/components/image-band";
import Btn from "@/components/ui/btn";
import { getDict } from "@/lib/i18n";

// Closing call to action on the full-width image band, right above the footer.
export default function Cta({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  return (
    <ImageBand image="/images/band-horizon.svg" accent="#ff6a2b" title={home.final.title} desc={home.final.desc}>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Btn href={`/${lang}/apps`} variant="secondary" icon={LayoutGrid}>
          {doors.apps}
        </Btn>
        <Btn href={`/${lang}/contact`} variant="primary" icon={Calendar}>
          {doors.store}
        </Btn>
      </div>
    </ImageBand>
  );
}
