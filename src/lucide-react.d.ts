declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const Upload: ComponentType<LucideProps>;
  export const Download: ComponentType<LucideProps>;
  export const Share2: ComponentType<LucideProps>;
  export const History: ComponentType<LucideProps>;
  export const MessageSquare: ComponentType<LucideProps>;
  export const Undo2: ComponentType<LucideProps>;
  export const Redo2: ComponentType<LucideProps>;
}
