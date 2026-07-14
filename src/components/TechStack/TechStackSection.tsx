"use client";

import React, { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";
import { buildSkillMacroGroups, flattenSkillCategories, type SkillCategory } from "@/data/skillStack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary/50 text-secondary-foreground border border-border/50">
    {skill}
  </span>
);

const SkillCategoryBlock: React.FC<{ category: SkillCategory; compact?: boolean }> = ({
  category,
  compact = false,
}) => (
  <div className={compact ? "space-y-2" : "p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"}>
    <p className="text-[11px] uppercase tracking-wider font-semibold text-foreground">{category.label}</p>
    <div className="flex flex-wrap gap-1.5">
      {category.skills.map((skill) => (
        <SkillChip key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  const macroGroups = useMemo(() => buildSkillMacroGroups(t), [t]);
  const allCategories = useMemo(() => flattenSkillCategories(macroGroups), [macroGroups]);

  return (
    <div className="mt-16 pt-10 border-t border-border/50">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-6">{t("about_stack")}</p>

      <div className="lg:hidden">
        <Accordion
          type="multiple"
          defaultValue={[macroGroups[0]?.id]}
          className="rounded-xl border border-border/50 bg-card/50 px-4"
        >
          {macroGroups.map((group) => (
            <AccordionItem key={group.id} value={group.id} className="border-border/50 last:border-b-0">
              <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline">
                {t(group.labelKey)}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                {group.categories.map((category) => (
                  <SkillCategoryBlock key={category.id} category={category} compact />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {allCategories.map((category) => (
          <SkillCategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
