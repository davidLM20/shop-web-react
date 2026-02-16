import { Search } from "lucide-react";

const Input = () => {
    return (
        <div className="w-full max-w-sm min-w-[360px] relative mt-4">
            {/*<label className="block mb-2 text-sm text-slate-600">
                Your Name
            </label>*/}

            <div className="relative">
                <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your text" />
                <Search className="absolute w-5 h-5 top-2.5 left-3 text-slate-600"/>
            </div>
        </div>
    );
}

export default Input;