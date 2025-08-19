import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
};

export default function SearchBar({ placeholder = "Buscar herramientas, materiales, marcas...", onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full hover:border-gray-600 focus:outline-none focus:ring-3 focus:ring-orange-500"
            />
            <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-600"
            >
                <Search size={18} />
            </button>
        </form>
    )
}