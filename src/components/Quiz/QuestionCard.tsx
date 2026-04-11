import { OptionButton } from "@/components/Quiz/OptionButton";
import { ProgressBar } from "@/components/Quiz/ProgressBar";
import { Wordmark } from "@/components/shared/Wordmark";
import type { Question } from "@/data/questions";

type QuestionCardProps = {
  question: Question;
  current: number;
  total: number;
  onBack: () => void;
  onSelect: (optionId: string) => void;
  canGoBack: boolean;
  selectedOptionId?: string;
  isLocked?: boolean;
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
}: QuestionCardProps) {
  return (
    <section className="surface-card overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Wordmark size="small" tone="secondary" />
          <p className="eyebrow">Olivia Rodrigo Type Indicator</p>
        </div>
        <span className="info-chip shrink-0">
          Q.{String(current).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-7">
        <ProgressBar current={current} total={total} />
      </div>

      <div className="mt-8 space-y-6">
        {canGoBack ? (
          <button
            className="text-xs tracking-[0.14em] text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            onClick={onBack}
            type="button"
          >
            ← 上一题
          </button>
        ) : (
          <div className="h-4" />
        )}

        <div className="space-y-4">
          <p className="eyebrow">Question {String(current).padStart(2, "0")}</p>
          <p className="text-[2.75rem] leading-none text-accent-light">
            {String(current).padStart(2, "0")}
          </p>
          <h1 className="max-w-[29rem] text-[1.45rem] leading-[1.55] text-text-primary sm:text-[1.6rem]">
            {question.questionZh}
          </h1>
          {question.questionEn ? (
            <p className="max-w-[27rem] text-sm italic leading-7 text-text-secondary">
              {question.questionEn}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-9 space-y-3.5">
        {question.options.map((option, index) => (
          <OptionButton
            disabled={isLocked}
            isSelected={selectedOptionId === option.id}
            key={option.id}
            label={String.fromCharCode(65 + index)}
            onSelect={() => onSelect(option.id)}
            textEn={option.textEn}
            textZh={option.textZh}
          />
        ))}
      </div>
    </section>
  );
}
