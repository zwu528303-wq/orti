export interface EraNode {
  id: "sour" | "guts" | "ysps";
  label: "SOUR" | "GUTS" | "YSPS";
  coverSrc: string;
  releaseLabel?: string;
  anchorSlot: 1 | 3 | 5;
}

export const eras: EraNode[] = [
  {
    id: "sour",
    label: "SOUR",
    coverSrc: "/images/sour-cover.jpg",
    releaseLabel: "2021",
    anchorSlot: 1,
  },
  {
    id: "guts",
    label: "GUTS",
    coverSrc: "/images/guts-cover.jpg",
    releaseLabel: "2023",
    anchorSlot: 3,
  },
  {
    id: "ysps",
    label: "YSPS",
    coverSrc: "/images/ysps-cover.jpg",
    releaseLabel: "2025",
    anchorSlot: 5,
  },
];
