import * as React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className = '', ...props }, ref) => {
  return <div ref={ref} className={[
    'rounded-xl border bg-card text-foreground shadow-sm',
    className,
  ].join(' ')} {...props} />;
});

Card.displayName = 'Card';


