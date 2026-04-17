import { getDictionary } from "@/data/i18n";
import type { AppLocale } from "@/lib/locale";

type DisclaimerProps = {
  locale?: AppLocale;
};

export function Disclaimer({ locale = "zh" }: DisclaimerProps) {
  const copy = getDictionary(locale);

  return (
    <p className="mx-auto max-w-[32rem] text-center text-[0.72rem] leading-6 text-text-secondary">
      {copy.disclaimer}
      {locale === "zh" ? (
        <>
          <br />
          This is a fan-made project. Not affiliated with Olivia Rodrigo or Geffen
          Records.
        </>
      ) : null}
    </p>
  );
}
