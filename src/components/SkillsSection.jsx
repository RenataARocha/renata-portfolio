import { useRef, useEffect, useState } from "react";
import { skillGroups } from "../data/portfolioData";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function SkillsSection() {
  const [sectionRef, sectionVisible] = useVisible();

  return (
    <section
      id="habilidades"
      className="py-20 px-4 relative"
      aria-labelledby="habilidades-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          id="habilidades-heading"
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Minhas Habilidades
        </h2>

        <div
          ref={sectionRef}
          className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl transition-all duration-700 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-orange-500/70 uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`Habilidades em ${group.category}`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill} role="listitem">
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-orange-900/20 text-orange-300 border border-orange-800/30 hover:bg-orange-800/30 hover:border-orange-600/50 hover:text-orange-200 transition-all duration-300 cursor-default select-none">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
