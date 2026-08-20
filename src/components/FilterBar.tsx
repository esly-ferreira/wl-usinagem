'use client';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'm8', label: 'Linha M8' },
    { id: 'm10', label: 'Linha M10' },
    { id: 'kits', label: 'Kits Reparo' },
    { id: 'accessories', label: 'Porcas / Acessórios' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 font-heading font-bold text-sm uppercase transition-all duration-300 border ${
            activeFilter === filter.id
              ? 'bg-primary border-primary text-white'
              : 'bg-surface border-border text-muted hover:border-primary hover:text-primary hover:bg-surface-hover'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
