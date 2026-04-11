import { OptionButton } from "@/components/Quiz/OptionButton";
import { ProgressBar } from "@/components/Quiz/ProgressBar";
import { Wordmark } from "@/components/shared/Wordmark";
import type { Question } from "@/data/questions";
import { cn } from "@/lib/cn";
import type { QuizLanguage } from "@/lib/storage";

type QuestionCardProps = {
  question: Question;
  current: number;
  total: number;
  onBack: () => void;
  onSelect: (optionId: string) => void;
  canGoBack: boolean;
  selectedOptionId?: string;
  isLocked?: boolean;
  language: QuizLanguage;
  onLanguageChange: (language: QuizLanguage) => void;
  showLanguageToggle?: boolean;
};

export function QuestionCard({
  question,
  current,
  total,
  onBack,
  onSelect,
  canGoBack,
  selectedOptionId,
  isLocked = false,
  language,
  onLanguageChange,
  showLanguageToggle = true,
}: QuestionCardProps) {
  const isEnglish = language === "en";
  const questionTitle = isEnglish && question.questionEn
    ? question.questionEn
    : question.questionZh;

  return (
    <section className="surface-card overflow-hidden px-6 py-6 sm:px-8 sm:py-7">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Wordmark size="small" tone="secondary" />
          <p className="eyebrow">Olivia Rodrigo Type Indicator</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {showLanguageToggle ? (
            <div className="inline-flex rounded-full border border-border-soft bg-bg-tint p-1">
              {(["zh", "en"] as const).map((value) => (
                <button
                  className={cn(
                    "rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-200",
                    language === value
                      ? "bg-accent-primary text-text-onDark"
                      : "text-text-secondary hover:text-accent-primary",
                  )}
                  key={value}
                  onClick={() => onLanguageChange(value)}
                  type="button"
                >
                  {value === "zh" ? "中" : "EN"}
                </button>
              ))}
            </div>
          ) : null}
          <span className="info-chip shrink-0">
            Q.{String(current).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <ProgressBar current={current} total={total} />
      </div>

      <div className="mt-5 space-y-4">
        {canGoBack ? (
          <button
            className="text-xs tracking-[0.14em] text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            onClick={onBack}
            type="button"
          >
            {isEnglish ? "← Back" : "← 上一题"}
          </button>
        ) : (
          <div className="h-4" />
        )}

        <div className="space-y-3">
          <p className="-mt-8 text-[2.1rem] leading-none text-accent-light sm:-mt-7 sm:text-[2.5rem]">
            {String(current).padStart(2, "0")}
          </p>
          <h1 className="max-w-[29rem] text-[1.2rem] leading-[1.5] text-text-primary sm:text-[1.36rem]">
            {questionTitle}
          </h1>
          {!isEnglish && question.questionEn ? (
            <p className="max-w-[27rem] text-sm italic leading-7 text-text-secondary">
              {question.questionEn}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 space-y-3">
        {question.options.map((option, index) => (
          <OptionButton
            disabled={isLocked}
            isSelected={selectedOptionId === option.id}
            key={option.id}
            label={String.fromCharCode(65 + index)}
            onSelect={() => onSelect(option.id)}
            text={isEnglish && option.textEn ? option.textEn : option.textZh}
          />
        ))}
      </div>
    </section>
  );
}
