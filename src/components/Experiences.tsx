import React, { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";

const Experiences: React.FC = () => {
  const { t } = useLanguage();
  const parseList = (value: string) => value.split(" | ").map((item) => item.trim()).filter(Boolean);

  const copy = useMemo(
    () => ({
      badge: t("exp_badge"),
      title: t("exp_title"),
      current: t("exp_current"),
      stackTitle: t("exp_stack_title"),
    }),
    [t]
  );

  const experiences = useMemo(
    () => [
      {
        period: t("exp_1_period"),
        role: t("exp_1_role"),
        company: t("exp_1_company"),
        context: t("exp_1_context"),
        description: t("exp_1_description"),
        bullets: [t("exp_1_bullet_1"), t("exp_1_bullet_2"), t("exp_1_bullet_3"), t("exp_1_bullet_4")],
        tags: parseList(t("exp_1_tags")),
        techGroups: [
          { label: t("exp_1_group_languages_label"), items: parseList(t("exp_1_group_languages_items")) },
          { label: t("exp_1_group_web_label"), items: parseList(t("exp_1_group_web_items")) },
          { label: t("exp_1_group_backend_label"), items: parseList(t("exp_1_group_backend_items")) },
          { label: t("exp_1_group_build_label"), items: parseList(t("exp_1_group_build_items")) },
          { label: t("exp_1_group_testing_label"), items: parseList(t("exp_1_group_testing_items")) },
          { label: t("exp_1_group_persistence_label"), items: parseList(t("exp_1_group_persistence_items")) },
          { label: t("exp_1_group_databases_label"), items: parseList(t("exp_1_group_databases_items")) },
          { label: t("exp_1_group_version_label"), items: parseList(t("exp_1_group_version_items")) },
          { label: t("exp_1_group_caching_label"), items: parseList(t("exp_1_group_caching_items")) },
          { label: t("exp_1_group_styling_label"), items: parseList(t("exp_1_group_styling_items")) },
          { label: t("exp_1_group_containers_label"), items: parseList(t("exp_1_group_containers_items")) },
          { label: t("exp_1_group_auth_label"), items: parseList(t("exp_1_group_auth_items")) },
          { label: t("exp_1_group_monitoring_label"), items: parseList(t("exp_1_group_monitoring_items")) },
          { label: t("exp_1_group_collab_label"), items: parseList(t("exp_1_group_collab_items")) },
          { label: t("exp_1_group_agile_label"), items: parseList(t("exp_1_group_agile_items")) },
          { label: t("exp_1_group_cloud_label"), items: parseList(t("exp_1_group_cloud_items")) },
          { label: t("exp_1_group_cicd_label"), items: parseList(t("exp_1_group_cicd_items")) },
        ],
        current: true,
      },
      {
        period: t("exp_2_period"),
        role: t("exp_2_role"),
        company: t("exp_2_company"),
        context: t("exp_2_context"),
        description: t("exp_2_description"),
        bullets: [t("exp_2_bullet_1"), t("exp_2_bullet_2"), t("exp_2_bullet_3")],
        tags: parseList(t("exp_2_tags")),
        current: false,
      },
      {
        period: t("exp_3_period"),
        role: t("exp_3_role"),
        company: t("exp_3_company"),
        context: t("exp_3_context"),
        description: t("exp_3_description"),
        bullets: [t("exp_3_bullet_1"), t("exp_3_bullet_2"), t("exp_3_bullet_3")],
        tags: parseList(t("exp_3_tags")),
        current: false,
      },
      {
        period: t("exp_4_period"),
        role: t("exp_4_role"),
        company: t("exp_4_company"),
        context: t("exp_4_context"),
        description: t("exp_4_description"),
        bullets: [t("exp_4_bullet_1"), t("exp_4_bullet_2"), t("exp_4_bullet_3")],
        tags: parseList(t("exp_4_tags")),
        current: false,
      },
    ],
    [t]
  );

  return (
    <section id="experiences" className="py-20 px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mb-20 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            {copy.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {copy.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="group relative grid md:grid-cols-[180px_1fr] gap-6 md:gap-10">
              <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-border/50 group-last:bg-gradient-to-b group-last:from-border/50 group-last:to-transparent" />
              <div className="relative">
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                <div className="hidden md:block absolute -right-[13px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background bg-primary shadow-lg shadow-primary/50" />
              </div>
              <div className="relative pb-12 group-last:pb-0">
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                      {exp.context && <p className="text-xs text-muted-foreground mt-1">{exp.context}</p>}
                    </div>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {copy.current}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <ul className="mb-4 space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                    {exp.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {exp.techGroups && (
                    <div className="mt-5 pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                        {copy.stackTitle}
                      </p>
                      <div className="space-y-2">
                        {exp.techGroups.map((group) => (
                          <p key={group.label} className="text-xs text-muted-foreground leading-relaxed">
                            <span className="text-foreground font-medium">{group.label}:</span> {group.items.join(", ")}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
