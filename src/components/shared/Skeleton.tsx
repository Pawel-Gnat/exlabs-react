import { cn } from '@/utils/classNames';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn('w-full animate-pulse rounded-xl bg-gray-300 shadow-2xl', className)}
    ></div>
  );
};
