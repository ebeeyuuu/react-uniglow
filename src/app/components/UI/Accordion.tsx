import { ReactNode, useState } from "react";

interface AccordionItem {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`group cursor-pointer transition-all duration-300 ${activeIndex === index ? "bg-white/[0.05]" : "bg-white/[0.01]"
            } rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl ${activeIndex === index
                  ? "bg-purple-500/40"
                  : "bg-white/5"
                  }`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <div
              className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                }`}
            >
              ↓
            </div>
          </div>

          <div
            className={`transition-all duration-300 ${activeIndex === index
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
              }`}
          >
            <div className="p-6 pt-0">
              <p className="text-white/60 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
