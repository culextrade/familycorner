import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
}

export default function Card({ children, className, hover = false, glass = false }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl p-6 shadow-md',
                glass ? 'glass' : 'bg-white',
                hover && 'transition-smooth hover:shadow-xl hover:-translate-y-1 cursor-pointer',
                className
            )}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
    return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
    return <h3 className={cn('text-xl font-playfair font-semibold text-gray-900', className)}>{children}</h3>;
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return <div className={cn('text-gray-600', className)}>{children}</div>;
}
