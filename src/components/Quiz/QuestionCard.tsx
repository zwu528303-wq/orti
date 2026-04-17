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
            <div className="inline-flex rounded-[10px] border-[1.5px] border-border-soft bg-[#fff5f9] p-1">
              {(["zh", "en"] as const).map((value) => (
                <button
                  className={cn(
                    "rounded-[8px] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200",
                    language === value
                      ? "bg-accent-primary text-text-onDark"
                      : "bg-accent-light text-text-primary hover:bg-accent-primary hover:text-text-onDark",
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

      <div className="mt-5 space-y-3">
        {canGoBack ? (
          <button
            className="inline-flex min-h-9 items-center rounded-[10px] border-[1.5px] border-border-soft bg-accent-light px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-text-primary shadow-card transition-colors duration-200 hover:bg-accent-primary hover:text-text-onDark"
            onClick={onBack}
            type="button"
          >
            {isEnglish ? "← Back" : "← 上一题"}
          </button>
        ) : (
          <div className="h-9" />
        )}

        <div className="space-y-2">
          <p className="text-[1.75rem] leading-none text-text-primary sm:text-[2.05rem]">
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
