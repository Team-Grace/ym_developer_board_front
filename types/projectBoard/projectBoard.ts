export interface DropResult {
  dropEffect: string;
  name: string;
}

export interface itemProps {
  index: number;
  title: string;
  desc: string;
  type: string;
  id: number;
}

export interface CurrentItem {
  index: number;
  type: string;
  id: number;
}
