export interface EraNode {
  id: "sour" | "guts" | "ysps";
  label: "SOUR" | "GUTS" | "YSPS";
  releaseLabel?: string;
  anchorSlot: 1 | 3 | 5;
}

export const eras: EraNode[] = [
  {
    id: "sour",
    label: "SOUR",
    releaseLabel: "2021",
    anchorSlot: 1,
  },
  {
    id: "guts",
    label: "GUTS",
    releaseLabel: "2023",
    anchorSlot: 3,
  },
  {
    id: "ysps",
    label: "YSPS",
    releaseLabel: "2026",
    anchorSlot: 5,
  },
];
