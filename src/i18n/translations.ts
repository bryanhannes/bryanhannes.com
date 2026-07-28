export type Lang = "nl" | "en";

export interface TimelineItem {
    icon: string;
    title: string;
    subtitle: string;
    date: string;
}

export interface Translation {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        home: string;
        blog: string;
    };
    cta: string;
    hero: {
        title: string;
        text: string;
    };
    about: {
        title: string;
        paragraphs: string[];
    };
    timeline: {
        title: string;
        items: TimelineItem[];
    };
    toolbox: {
        title: string;
    };
    projects: {
        title: string;
    };
    blog: {
        title: string;
        seeAll: string;
    };
}

export const translations: Record<Lang, Translation> = {
    nl: {
        meta: {
            title: "Ondernemer & software engineer | Bryan Hannes",
            description:
                "Bryan Hannes is ondernemer en software engineer. Mede-zaakvoerder van 3D Worx, bouwt software, AI-agents en automatisaties, en helpt baasjes en hun hond via De Hondernemer.",
        },
        nav: {
            home: "Home",
            blog: "Blog",
        },
        cta: "Stuur me een bericht",
        hero: {
            title: "Ik ben Bryan",
            text: "Ondernemer en software engineer. Meestal allebei tegelijk. Mede-zaakvoerder van 3D Worx, waar ik de software, AI-agents en marketing achter onze 3D-renders bouw.",
        },
        about: {
            title: "Over mij",
            paragraphs: [
                "Ik hou ervan om ideeën tastbaar te maken en orde te brengen in chaos. Techniek heeft voor mij pas waarde als ze iets eenvoudiger maakt. Voor mij, voor mijn team, of voor de klant.",
                "Bij 3D Worx ben ik mede-zaakvoerder. We maken fotorealistische 3D-renders voor vastgoedprojecten, voor projectontwikkelaars, makelaars en architecten die hun plannen willen tonen nog voor er één steen ligt.",
                "Zelf maak ik die renders niet. Ik bouw alles errond: de interne software, de AI-agents en automatisaties die het team echt werk uit handen nemen, en de marketing. Zo kunnen onze 3D-artists doen waar ze goed in zijn: beelden maken die raken én technisch kloppen.",
                "Daarnaast ben ik in hart en nieren software engineer. Jaren ervaring met Angular, TypeScript en NodeJS, backends en CI/CD in Google Cloud. Zo bouwde ik onder meer een module die complexe vlucht- en kaartdata visualiseert voor de luchtvaartsector. Vandaag ontwikkel ik vooral met AI-tooling en agents, omdat ik zo sneller kan bouwen en meer gedaan krijg. Altijd op zoek naar de slimme oplossing, niet de omslachtige.",
                "En omdat ik blijkbaar niet kan stilzitten: met De Hondernemer help ik mensen met hun hond. Ik combineer er mijn passie voor honden met wat ik ken van tech en marketing, zodat baasjes samen met hun hond kunnen genieten, relaxen en groeien.",
                "Want een goede hondenbaas is een kalm, relaxed en betrouwbaar persoon. Toevallig net wat collega's over mij zeggen: rustig, betrouwbaar, iemand die nadenkt voor hij doet maar doorzet tot het werkt. En af en toe wat koppig, op de goeie manier.",
            ],
        },
        timeline: {
            title: "Mijlpalen",
            items: [
                {
                    icon: "heart",
                    title: "De Hondernemer",
                    subtitle:
                        "De Hondernemer gestart: baasjes helpen om samen met hun hond te genieten, relaxen en groeien",
                    date: "Juli 2026",
                },
                {
                    icon: "presentation",
                    title: "Master Communicator Intensive",
                    subtitle: "Master Communicator Intensive gevolgd (Stand Up Company)",
                    date: "Voorjaar 2026",
                },
                {
                    icon: "building",
                    title: "3D Worx",
                    subtitle: "Mede-zaakvoerder geworden bij 3D Worx",
                    date: "Maart 2025",
                },
                {
                    icon: "presentation",
                    title: "Workshoptrainer NG-BE",
                    subtitle: "Large-scale Angular Enterprise Architecture (Simplified Courses)",
                    date: "December 2024",
                },
                {
                    icon: "code",
                    title: "Peepz",
                    subtitle: "Start Peepz (Shoshin): platform voor kandidaten-matching",
                    date: "Juni 2023",
                },
                {
                    icon: "code",
                    title: "Freelance",
                    subtitle: "Gestart als freelance Angular developer",
                    date: "Juni 2023",
                },
                {
                    icon: "presentation",
                    title: "Workshoptrainer NG-BE",
                    subtitle: "Angular Proven Enterprise Solutions (Simplified Courses)",
                    date: "Maart 2023",
                },
                {
                    icon: "youtube",
                    title: "YouTube",
                    subtitle: "YouTube-kanaal gelanceerd",
                    date: "December 2022",
                },
                {
                    icon: "design",
                    title: "Zoli",
                    subtitle: "Zoli gestart: web- en grafisch ontwerp",
                    date: "Oktober 2018",
                },
            ],
        },
        toolbox: {
            title: "Mijn toolbox",
        },
        projects: {
            title: "Nevenprojecten",
        },
        blog: {
            title: "Laatste blogartikelen",
            seeAll: "Alle blogartikelen (Engels)",
        },
    },
    en: {
        meta: {
            title: "Entrepreneur & software engineer | Bryan Hannes",
            description:
                "Bryan Hannes is an entrepreneur and software engineer. Co-owner of 3D Worx, he builds software, AI agents and automations, and helps dog owners through De Hondernemer.",
        },
        nav: {
            home: "Home",
            blog: "Blog",
        },
        cta: "Let's chat",
        hero: {
            title: "I'm Bryan",
            text: "Entrepreneur and software engineer. Usually both at once. Co-owner of 3D Worx, where I build the software, AI agents and marketing behind our 3D renders.",
        },
        about: {
            title: "About me",
            paragraphs: [
                "I love making ideas tangible and bringing order to chaos. To me, technology only has value when it makes something simpler. For me, for my team, or for the client.",
                "At 3D Worx I'm co-owner. We create photorealistic 3D renders for real estate projects, for developers, agents and architects who want to show their plans before a single brick is laid.",
                "I don't make those renders myself. I build everything around them: the internal software, the AI agents and automations that take real work off the team's hands, and the marketing. That way our 3D artists get to do what they do best: create images that move people and are technically right.",
                "Beyond that, I'm a software engineer at heart. Years of experience with Angular, TypeScript and NodeJS, backends and CI/CD on Google Cloud. Among other things, I built a module that visualizes complex flight and map data for the aviation industry. These days I mostly develop with AI tooling and agents, because it lets me build faster and get more done. Always looking for the smart solution, not the cumbersome one.",
                "And because I apparently can't sit still: with De Hondernemer I help people with their dogs. It's where my passion for dogs meets what I know about tech and marketing, so owners and their dogs can enjoy, relax and grow together.",
                "Because a good dog owner is a calm, relaxed and reliable person. Which happens to be exactly what colleagues say about me: calm, reliable, someone who thinks before he acts but keeps going until it works. And a bit stubborn now and then, in a good way.",
            ],
        },
        timeline: {
            title: "Timeline",
            items: [
                {
                    icon: "heart",
                    title: "De Hondernemer",
                    subtitle:
                        "Launched De Hondernemer, helping dog owners enjoy, relax and grow together with their dog",
                    date: "July 2026",
                },
                {
                    icon: "presentation",
                    title: "Master Communicator Intensive",
                    subtitle: "Completed the Master Communicator Intensive (Stand Up Company)",
                    date: "Spring 2026",
                },
                {
                    icon: "building",
                    title: "3D Worx",
                    subtitle: "Joined 3D Worx as co-owner",
                    date: "March 2025",
                },
                {
                    icon: "presentation",
                    title: "Workshop trainer NG-BE",
                    subtitle: "Large-scale Angular Enterprise Architecture (Simplified Courses)",
                    date: "December 2024",
                },
                {
                    icon: "code",
                    title: "Peepz",
                    subtitle: "Started building Peepz (Shoshin), a candidate matching platform",
                    date: "June 2023",
                },
                {
                    icon: "code",
                    title: "Freelance",
                    subtitle: "Started freelance career as Angular developer",
                    date: "June 2023",
                },
                {
                    icon: "presentation",
                    title: "Workshop trainer NG-BE",
                    subtitle: "Angular Proven Enterprise Solutions (Simplified Courses)",
                    date: "March 2023",
                },
                {
                    icon: "youtube",
                    title: "YouTube",
                    subtitle: "Launched YouTube channel",
                    date: "December 2022",
                },
                {
                    icon: "design",
                    title: "Zoli",
                    subtitle: "Launched Zoli, web and graphic design company",
                    date: "October 2018",
                },
            ],
        },
        toolbox: {
            title: "My toolbox",
        },
        projects: {
            title: "My side projects",
        },
        blog: {
            title: "Latest blog articles",
            seeAll: "See all blog articles",
        },
    },
};
