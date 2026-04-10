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
    <div className="space-y-8">
      <div className="text-center">
        <Wordmark size="small" tone="secondary" />
      </div>

      <ProgressBar current={current} total={total} />

      <div className="space-y-5">
        {canGoBack ? (
          <button
            className="text-xs tracking-[0.08em] text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            onClick={onBack}
            type="button"
          >
            ← 上一题
          </button>
        ) : (
          <div className="h-4" />
        )}

        <div className="space-y-3">
          <p className="text-4xl italic leading-none text-accent-light">
            Q.{String(current).padStart(2, "0")}
          </p>
          <h1 className="text-[1.375rem] leading-[1.55] text-text-primary">
            {question.questionZh}
          </h1>
          {question.questionEn ? (
            <p className="text-sm italic leading-6 text-text-secondary">
              {question.questionEn}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-4">
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
    </div>
  );
}
