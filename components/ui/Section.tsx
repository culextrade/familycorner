import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    pattern?: boolean;
    id?: string;
}

export default function Section({ children, className, pattern = false, id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                'py-16 md:py-24',
                pattern && 'islamic-pattern',
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {children}
            </div>
        </section>
    );
}
