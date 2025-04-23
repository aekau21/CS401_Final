from app import app
from models import db, Timeline, Comparative, Thematic

with app.app_context():
    db.drop_all()
    db.create_all()

    # --- TIMELINE DATA (8 Records) ---
    db.session.add_all([
        Timeline(dynasty="Nerva-Antonine", emperor_name="Nerva", dates_ruled="96–98 CE",
                 notable_events="Established adoptive succession", wars="Stabilized unrest post-Domitian",
                 advancements="Restored Senate authority", treaties="Improved imperial relations"),

        Timeline(dynasty="Nerva-Antonine", emperor_name="Trajan", dates_ruled="98–117 CE",
                 notable_events="Expansion of empire to its greatest extent", wars="Dacian Wars, Parthian Campaign",
                 advancements="Public building programs", treaties="Annexed Dacia"),

        Timeline(dynasty="Nerva-Antonine", emperor_name="Hadrian", dates_ruled="117–138 CE",
                 notable_events="Defensive fortification (Hadrian's Wall)", wars="Suppression of Jewish revolts",
                 advancements="Codified Roman law", treaties="Peace treaties in Britain and Judea"),

        Timeline(dynasty="Nerva-Antonine", emperor_name="Antoninus Pius", dates_ruled="138–161 CE",
                 notable_events="Peaceful governance, legal reforms", wars="Minimal external conflicts",
                 advancements="Extended Roman roads", treaties="Stabilized Eastern front"),

        Timeline(dynasty="Nerva-Antonine", emperor_name="Marcus Aurelius", dates_ruled="161–180 CE",
                 notable_events="Stoic philosophy, co-rule with Lucius Verus", wars="Marcomannic Wars, Parthian Wars",
                 advancements="Philosophical contributions", treaties="Temporary peace with Germanic tribes"),

        Timeline(dynasty="Han", emperor_name="Emperor Wu", dates_ruled="141–87 BCE",
                 notable_events="Centralization, Confucianism official ideology", wars="Xiongnu Wars",
                 advancements="Silk Road opened", treaties="Peace with some nomadic tribes"),

        Timeline(dynasty="Han", emperor_name="Emperor Jing", dates_ruled="157–141 BCE",
                 notable_events="Quelled Rebellion of Seven States", wars="Internal suppression",
                 advancements="Economic reform", treaties="Reinforced central power"),

        Timeline(dynasty="Han", emperor_name="Emperor Guangwu", dates_ruled="25–57 CE",
                 notable_events="Restoration of Han after Wang Mang", wars="Reunification campaigns",
                 advancements="Administrative restoration", treaties="Treaty with Xiongnu leaders")
    ])

    # --- COMPARATIVE DATA (8 Records) ---
    db.session.add_all([
        Comparative(category="Military", subcategory="Command Structure",
            han_description="Emperor controlled military through loyal generals",
            nerva_description="Emperor held power but respected senatorial ranks",
            similarities="Centralized leadership in both dynasties",
            differences="Han had stricter internal oversight of generals"),

        Comparative(category="Military", subcategory="Units",
            han_description="Infantry, cavalry, crossbowmen",
            nerva_description="Legions with auxiliary troops",
            similarities="Specialized forces used in both",
            differences="Rome had more formalized legion structures"),

        Comparative(category="Military", subcategory="Tactics",
            han_description="Ambush, envelopment, fortified defense",
            nerva_description="Siege warfare, frontal formations",
            similarities="Use of terrain and formations",
            differences="Rome emphasized engineering and siege mastery"),

        Comparative(category="Military", subcategory="Technology",
            han_description="Iron weapons, chariots, repeating crossbow",
            nerva_description="Advanced siege engines, roads, armor",
            similarities="Technological innovation driven by warfare needs",
            differences="Rome’s road system far surpassed Han infrastructure"),

        Comparative(category="Agriculture", subcategory="Irrigation Systems",
            han_description="State-supported canals and flood control",
            nerva_description="Estate irrigation and aqueducts",
            similarities="Water management seen as vital",
            differences="Rome privatized water systems more than Han"),

        Comparative(category="Agriculture", subcategory="Land Reform",
            han_description="Periodic redistribution during crises",
            nerva_description="Emphasis on elite landholdings",
            similarities="State attempted regulation of land ownership",
            differences="Han used state intervention more than Rome"),

        Comparative(category="Architecture", subcategory="Structures",
            han_description="Watchtowers, city walls, ceremonial tombs",
            nerva_description="Temples, basilicas, Hadrian's Wall",
            similarities="Monumental architecture used for power display",
            differences="Rome built larger-scale public entertainment venues"),

        Comparative(category="Architecture", subcategory="Public Works",
            han_description="Roads and granaries for logistics",
            nerva_description="Forums, aqueducts, public baths",
            similarities="Infrastructure central to imperial control",
            differences="Roman public works included recreation-focused designs")
    ])

    # --- THEMATIC DATA (8 Records) ---
    db.session.add_all([
        Thematic(theme="Governance", dynasty="Han",
            theme_description="Bureaucratic empire run by scholar-officials via civil service exams",
            example_events="Creation of Confucian curriculum for state officials",
            associated_figures="Emperor Wu"),

        Thematic(theme="Governance", dynasty="Nerva-Antonine",
            theme_description="Adoptive succession to ensure competent emperors",
            example_events="Nerva adopts Trajan, setting a precedent",
            associated_figures="Nerva, Trajan"),

        Thematic(theme="Culture", dynasty="Han",
            theme_description="Literature, Confucian ideals, and historical recording emphasized",
            example_events="Sima Qian writes Records of the Grand Historian",
            associated_figures="Sima Qian, Emperor Xuan"),

        Thematic(theme="Culture", dynasty="Nerva-Antonine",
            theme_description="Greco-Roman philosophy and architecture flourished",
            example_events="Marcus Aurelius composes Meditations",
            associated_figures="Marcus Aurelius, Hadrian"),

        Thematic(theme="Religion", dynasty="Han",
            theme_description="State ritual, ancestor worship, Daoism's rise",
            example_events="Ritual sacrifices and Daoist practices institutionalized",
            associated_figures="Emperor Wu, Fangshi advisors"),

        Thematic(theme="Religion", dynasty="Nerva-Antonine",
            theme_description="Polytheistic worship, imperial cult, early Christian persecution",
            example_events="Temples to Jupiter, persecution under Marcus Aurelius",
            associated_figures="Marcus Aurelius, local governors"),

        Thematic(theme="Legal Reform", dynasty="Han",
            theme_description="Leniency laws introduced to reduce harsh punishment",
            example_events="Penal Code of Emperor Wen",
            associated_figures="Emperor Wen"),

        Thematic(theme="Legal Reform", dynasty="Nerva-Antonine",
            theme_description="Emperors revised Roman law to ensure fairness and equity",
            example_events="Legal writings of Antoninus Pius",
            associated_figures="Antoninus Pius")
    ])

    # Commit to DB
    db.session.commit()
    print("You did it!")
