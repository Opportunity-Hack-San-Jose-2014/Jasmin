var mock = mock || {};

var furniture =
    [
        "armchair",
        "armoire",
        "bar stool",
        "bassinet",
        "beach chair",
        "bean bag chair",
        "bed",
        "bed table",
        "bench",
        "bentwood rocker",
        "bergere",
        "bookcase",
        "bookshelf",
        "breakfront",
        "buffet",
        "bunk bed",
        "bureau",
        "cabinet",
        "canopy bed",
        "captain's chair",
        "card table",
        "carpet",
        "cart",
        "chair",
        "chaise lounge",
        "chandelier",
        "chest",
        "chest of drawers",
        "china cabinet",
        "clothes valet",
        "club chair",
        "coffee table",
        "console",
        "cot",
        "couch",
        "cradle",
        "credenza",
        "crib",
        "cubbies",
        "cupboard",
        "curio",
        "curtains",
        "cushion",
        "deck chair",
        "desk",
        "desk chair",
        "dining room table",
        "director's chair",
        "display cabinet",
        "divan",
        "drapery",
        "drapes",
        "dresser",
        "easel",
        "easy chair",
        "end table",
        "fateuil",
        "file cabinet",
        "folding chair",
        "folding screen",
        "footrest",
        "footstool",
        "four-poster bed",
        "furnishings",
        "furniture",
        "futon",
        "game table",
        "garden bench",
        "gateleg table",
        "glider rocker",
        "grandfather clock",
        "hall tree",
        "hammock",
        "hassock",
        "hat stand",
        "headboard",
        "highchair",
        "hope chest",
        "hutch ",
        "island",
        "kitchen island",
        "ladderback chair",
        "lamp",
        "lawn chair",
        "lift chair",
        "light",
        "lintel",
        "lounge chair",
        "lounger",
        "love seat",
        "mantle",
        "mattress",
        "mirror",
        "Murphy bed",
        "nightstand",
        "office chair",
        "ottoman",
        "pantry",
        "park bench",
        "patio chair",
        "patio table",
        "pew",
        "piano bench",
        "picnic table",
        "pillow",
        "porch swing",
        "rack",
        "recliner",
        "rocking chair",
        "room divider",
        "rug",
        "sconce",
        "screen",
        "seat",
        "secretary",
        "sectional sofa",
        "settee",
        "shelf",
        "shoji screen",
        "sideboard",
        "sleeper sofa",
        "sofa",
        "sofabed",
        "stool",
        "table",
        "tansu",
        "tea cart",
        "throne",
        "throw rug",
        "trundle bed",
        "tuffet",
        "valet",
        "vanity",
        "Venetian blinds",
        "vitrine",
        "wardrobe",
        "waste basket",
        "waterbed",
        "window shades",
        "Windsor chair",
        "wing chair",
        "work table",
        "writing desk"
    ];

var colors =
    [
        "amber",
        "amethyst",
        "apricot",
        "aqua",
        "aquamarine",
        "auburn",
        "azurebeige",
        "black",
        "blue",
        "bronze",
        "brown",
        "buff",
        "burnt umber",
        "cardinal",
        "carmine",
        "celadon",
        "cerise",
        "cerulean",
        "charcoal",
        "chartreuse",
        "chocolate",
        "cinnamon",
        "color",
        "complementary",
        "copper",
        "coral",
        "cream",
        "crimson",
        "cyan",
        "dark",
        "denim",
        "desert sand",
        "ebony",
        "ecru",
        "eggplant",
        "emerald",
        "forest green",
        "fuchsia",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greyhot pink",
        "hueindigo",
        "ivoryjade",
        "jet",
        "jungle green",
        "kelly green",
        "khakilavender",
        "lemon",
        "light",
        "lilac",
        "lime",
        "magenta",
        "mahogany",
        "maroon",
        "mauve",
        "mustard",
        "navy blue",
        "ocher",
        "olive",
        "orange",
        "orchidpale",
        "pastel",
        "peach",
        "periwinkle",
        "persimmon",
        "pewter",
        "pink",
        "primary",
        "puce",
        "pumpkin",
        "purple",
        "rainbow",
        "red",
        "rose",
        "ruby",
        "russet",
        "rust",
        "saffron",
        "salmon",
        "sapphire",
        "scarlet",
        "sea green",
        "secondary",
        "sepia",
        "shade",
        "shamrock",
        "sienna",
        "silver",
        "spectrum",
        "slate",
        "steel blue",
        "tan",
        "tangerine",
        "taupe",
        "teal",
        "terracotta",
        "thistle",
        "tint",
        "tomato",
        "topaz",
        "turquoise",
        "ultramarine",
        "umber",
        "vermilion",
        "violet",
        "viridian",
        "wheat",
        "white",
        "wisteria",
        "yellow"
    ];

var adjectives =
    [
        "abandoned",
        "able",
        "absolute",
        "adorable",
        "adventurous",
        "academic",
        "acceptable",
        "acclaimed",
        "accomplished",
        "accurate",
        "aching",
        "acidic",
        "acrobatic",
        "active",
        "actual",
        "adept",
        "admirable",
        "admired",
        "adolescent",
        "adorable",
        "adored",
        "advanced",
        "afraid",
        "affectionate",
        "aged",
        "aggravating",
        "aggressive",
        "agile",
        "agitated",
        "agonizing",
        "agreeable",
        "ajar",
        "alarmed",
        "alarming",
        "alert",
        "alienated",
        "alive",
        "all",
        "altruistic",
        "amazing",
        "ambitious",
        "ample",
        "amused",
        "amusing",
        "anchored",
        "ancient",
        "angelic",
        "angry",
        "anguished",
        "animated",
        "annual",
        "another",
        "antique",
        "anxious",
        "any",
        "apprehensive",
        "appropriate",
        "apt",
        "arctic",
        "arid",
        "aromatic",
        "artistic",
        "ashamed",
        "assured",
        "astonishing",
        "athletic",
        "attached",
        "attentive",
        "attractive",
        "austere",
        "authentic",
        "authorized",
        "automatic",
        "avaricious",
        "average",
        "aware",
        "awesome",
        "awful",
        "awkward",
        "babyish",
        "bad",
        "back",
        "baggy",
        "bare",
        "barren",
        "basic",
        "beautiful",
        "belated",
        "beloved",
        "beneficial",
        "better",
        "best",
        "bewitched",
        "big",
        "big-hearted",
        "biodegradable",
        "bite-sized",
        "bitter",
        "black",
        "black-and-white",
        "bland",
        "blank",
        "blaring",
        "bleak",
        "blind",
        "blissful",
        "blond",
        "blue",
        "blushing",
        "bogus",
        "boiling",
        "bold",
        "bony",
        "boring",
        "bossy",
        "both",
        "bouncy",
        "bountiful",
        "bowed",
        "brave",
        "breakable",
        "brief",
        "bright",
        "brilliant",
        "brisk",
        "broken",
        "bronze",
        "brown",
        "bruised",
        "bubbly",
        "bulky",
        "bumpy",
        "buoyant",
        "burdensome",
        "burly",
        "bustling",
        "busy",
        "buttery",
        "buzzing",
        "calculating",
        "calm",
        "candid",
        "canine",
        "capital",
        "carefree",
        "careful",
        "careless",
        "caring",
        "cautious",
        "cavernous",
        "celebrated",
        "charming",
        "cheap",
        "cheerful",
        "cheery",
        "chief",
        "chilly",
        "chubby",
        "circular",
        "classic",
        "clean",
        "clear",
        "clear-cut",
        "clever",
        "close",
        "closed",
        "cloudy",
        "clueless",
        "clumsy",
        "cluttered",
        "coarse",
        "cold",
        "colorful",
        "colorless",
        "colossal",
        "comfortable",
        "common",
        "compassionate",
        "competent",
        "complete",
        "complex",
        "complicated",
        "composed",
        "concerned",
        "concrete",
        "confused",
        "conscious",
        "considerate",
        "constant",
        "content",
        "conventional",
        "cooked",
        "cool",
        "cooperative",
        "coordinated",
        "corny",
        "corrupt",
        "costly",
        "courageous",
        "courteous",
        "crafty",
        "crazy",
        "creamy",
        "creative",
        "creepy",
        "criminal",
        "crisp",
        "critical",
        "crooked",
        "crowded",
        "cruel",
        "crushing",
        "cuddly",
        "cultivated",
        "cultured",
        "cumbersome",
        "curly",
        "curvy",
        "cute",
        "cylindrical",
        "damaged",
        "damp",
        "dangerous",
        "dapper",
        "daring",
        "darling",
        "dark",
        "dazzling",
        "dead",
        "deadly",
        "deafening",
        "dear",
        "dearest",
        "decent",
        "decimal",
        "decisive",
        "deep",
        "defenseless",
        "defensive",
        "defiant",
        "deficient",
        "definite",
        "definitive",
        "delayed",
        "delectable",
        "delicious",
        "delightful",
        "delirious",
        "demanding",
        "dense",
        "dental",
        "dependable",
        "dependent",
        "descriptive",
        "deserted",
        "detailed",
        "determined",
        "devoted",
        "different",
        "difficult",
        "digital",
        "diligent",
        "dim",
        "dimpled",
        "dimwitted",
        "direct",
        "disastrous",
        "discrete",
        "disfigured",
        "disgusting",
        "disloyal",
        "dismal",
        "distant",
        "downright",
        "dreary",
        "dirty",
        "disguised",
        "dishonest",
        "dismal",
        "distant",
        "distinct",
        "distorted",
        "dizzy",
        "dopey",
        "doting",
        "double",
        "downright",
        "drab",
        "drafty",
        "dramatic",
        "dreary",
        "droopy",
        "dry",
        "dual",
        "dull",
        "dutiful",
        "each",
        "eager",
        "earnest",
        "early",
        "easy",
        "easy-going",
        "ecstatic",
        "edible",
        "educated",
        "elaborate",
        "elastic",
        "elated",
        "elderly",
        "electric",
        "elegant",
        "elementary",
        "elliptical",
        "embarrassed",
        "embellished",
        "eminent",
        "emotional",
        "empty",
        "enchanted",
        "enchanting",
        "energetic",
        "enlightened",
        "enormous",
        "enraged",
        "entire",
        "envious",
        "equal",
        "equatorial",
        "essential",
        "esteemed",
        "ethical",
        "euphoric",
        "even",
        "evergreen",
        "everlasting",
        "every",
        "evil",
        "exalted",
        "excellent",
        "exemplary",
        "exhausted",
        "excitable",
        "excited",
        "exciting",
        "exotic",
        "expensive",
        "experienced",
        "expert",
        "extraneous",
        "extroverted",
        "extra-large",
        "extra-small",
        "fabulous",
        "failing",
        "faint",
        "fair",
        "faithful",
        "fake",
        "false",
        "familiar",
        "famous",
        "fancy",
        "fantastic",
        "far",
        "faraway",
        "far-flung",
        "far-off",
        "fast",
        "fat",
        "fatal",
        "fatherly",
        "favorable",
        "favorite",
        "fearful",
        "fearless",
        "feisty",
        "feline",
        "female",
        "feminine",
        "few",
        "fickle",
        "filthy",
        "fine",
        "finished",
        "firm",
        "first",
        "firsthand",
        "fitting",
        "fixed",
        "flaky",
        "flamboyant",
        "flashy",
        "flat",
        "flawed",
        "flawless",
        "flickering",
        "flimsy",
        "flippant",
        "flowery",
        "fluffy",
        "fluid",
        "flustered",
        "focused",
        "fond",
        "foolhardy",
        "foolish",
        "forceful",
        "forked",
        "formal",
        "forsaken",
        "forthright",
        "fortunate",
        "fragrant",
        "frail",
        "frank",
        "frayed",
        "free",
        "French",
        "fresh",
        "frequent",
        "friendly",
        "frightened",
        "frightening",
        "frigid",
        "frilly",
        "frizzy",
        "frivolous",
        "front",
        "frosty",
        "frozen",
        "frugal",
        "fruitful",
        "full",
        "fumbling",
        "functional",
        "funny",
        "fussy",
        "fuzzy",
        "gargantuan",
        "gaseous",
        "general",
        "generous",
        "gentle",
        "genuine",
        "giant",
        "giddy",
        "gigantic",
        "gifted",
        "giving",
        "glamorous",
        "glaring",
        "glass",
        "gleaming",
        "gleeful",
        "glistening",
        "glittering",
        "gloomy",
        "glorious",
        "glossy",
        "glum",
        "golden",
        "good",
        "good-natured",
        "gorgeous",
        "graceful",
        "gracious",
        "grand",
        "grandiose",
        "granular",
        "grateful",
        "grave",
        "gray",
        "great",
        "greedy",
        "green",
        "gregarious",
        "grim",
        "grimy",
        "gripping",
        "grizzled",
        "gross",
        "grotesque",
        "grouchy",
        "grounded",
        "growing",
        "growling",
        "grown",
        "grubby",
        "gruesome",
        "grumpy",
        "guilty",
        "gullible",
        "gummy",
        "hairy",
        "half",
        "handmade",
        "handsome",
        "handy",
        "happy",
        "happy-go-lucky",
        "hard",
        "hard-to-find",
        "harmful",
        "harmless",
        "harmonious",
        "harsh",
        "hasty",
        "hateful",
        "haunting",
        "healthy",
        "heartfelt",
        "hearty",
        "heavenly",
        "heavy",
        "hefty",
        "helpful",
        "helpless",
        "hidden",
        "hideous",
        "high",
        "high-level",
        "hilarious",
        "hoarse",
        "hollow",
        "homely",
        "honest",
        "honorable",
        "honored",
        "hopeful",
        "horrible",
        "hospitable",
        "hot",
        "huge",
        "humble",
        "humiliating",
        "humming",
        "humongous",
        "hungry",
        "hurtful",
        "husky",
        "icky",
        "icy",
        "ideal",
        "idealistic",
        "identical",
        "idle",
        "idiotic",
        "idolized",
        "ignorant",
        "ill",
        "illegal",
        "ill-fated",
        "ill-informed",
        "illiterate",
        "illustrious",
        "imaginary",
        "imaginative",
        "immaculate",
        "immaterial",
        "immediate",
        "immense",
        "impassioned",
        "impeccable",
        "impartial",
        "imperfect",
        "imperturbable",
        "impish",
        "impolite",
        "important",
        "impossible",
        "impractical",
        "impressionable",
        "impressive",
        "improbable",
        "impure",
        "inborn",
        "incomparable",
        "incompatible",
        "incomplete",
        "inconsequential",
        "incredible",
        "indelible",
        "inexperienced",
        "indolent",
        "infamous",
        "infantile",
        "infatuated",
        "inferior",
        "infinite",
        "informal",
        "innocent",
        "insecure",
        "insidious",
        "insignificant",
        "insistent",
        "instructive",
        "insubstantial",
        "intelligent",
        "intent",
        "intentional",
        "interesting",
        "internal",
        "international",
        "intrepid",
        "ironclad",
        "irresponsible",
        "irritating",
        "itchy",
        "jaded",
        "jagged",
        "jam-packed",
        "jaunty",
        "jealous",
        "jittery",
        "joint",
        "jolly",
        "jovial",
        "joyful",
        "joyous",
        "jubilant",
        "judicious",
        "juicy",
        "jumbo",
        "junior",
        "jumpy",
        "juvenile",
        "kaleidoscopic",
        "keen",
        "key",
        "kind",
        "kindhearted",
        "kindly",
        "klutzy",
        "knobby",
        "knotty",
        "knowledgeable",
        "knowing",
        "known",
        "kooky",
        "kosher",
        "lame",
        "lanky",
        "large",
        "last",
        "lasting",
        "late",
        "lavish",
        "lawful",
        "lazy",
        "leading",
        "lean",
        "leafy",
        "left",
        "legal",
        "legitimate",
        "light",
        "lighthearted",
        "likable",
        "likely",
        "limited",
        "limp",
        "limping",
        "linear",
        "lined",
        "liquid",
        "little",
        "live",
        "lively",
        "livid",
        "loathsome",
        "lone",
        "lonely",
        "long",
        "long-term",
        "loose",
        "lopsided",
        "lost",
        "loud",
        "lovable",
        "lovely",
        "loving",
        "low",
        "loyal",
        "lucky",
        "lumbering",
        "luminous",
        "lumpy",
        "lustrous",
        "luxurious",
        "mad",
        "made-up",
        "magnificent",
        "majestic",
        "major",
        "male",
        "mammoth",
        "married",
        "marvelous",
        "masculine",
        "massive",
        "mature",
        "meager",
        "mealy",
        "mean",
        "measly",
        "meaty",
        "medical",
        "mediocre",
        "medium",
        "meek",
        "mellow",
        "melodic",
        "memorable",
        "menacing",
        "merry",
        "messy",
        "metallic",
        "mild",
        "milky",
        "mindless",
        "miniature",
        "minor",
        "minty",
        "miserable",
        "miserly",
        "misguided",
        "misty",
        "mixed",
        "modern",
        "modest",
        "moist",
        "monstrous",
        "monthly",
        "monumental",
        "moral",
        "mortified",
        "motherly",
        "motionless",
        "mountainous",
        "muddy",
        "muffled",
        "multicolored",
        "mundane",
        "murky",
        "mushy",
        "musty",
        "muted",
        "mysterious",
        "naive",
        "narrow",
        "nasty",
        "natural",
        "naughty",
        "nautical",
        "near",
        "neat",
        "necessary",
        "needy",
        "negative",
        "neglected",
        "negligible",
        "neighboring",
        "nervous",
        "new",
        "next",
        "nice",
        "nifty",
        "nimble",
        "nippy",
        "nocturnal",
        "noisy",
        "nonstop",
        "normal",
        "notable",
        "noted",
        "noteworthy",
        "novel",
        "noxious",
        "numb",
        "nutritious",
        "nutty",
        "obedient",
        "obese",
        "oblong",
        "oily",
        "oblong",
        "obvious",
        "occasional",
        "odd",
        "oddball",
        "offbeat",
        "offensive",
        "official",
        "old",
        "old-fashioned",
        "only",
        "open",
        "optimal",
        "optimistic",
        "opulent",
        "orange",
        "orderly",
        "organic",
        "ornate",
        "ornery",
        "ordinary",
        "original",
        "other",
        "our",
        "outlying",
        "outgoing",
        "outlandish",
        "outrageous",
        "outstanding",
        "oval",
        "overcooked",
        "overdue",
        "overjoyed",
        "overlooked",
        "palatable",
        "pale",
        "paltry",
        "parallel",
        "parched",
        "partial",
        "passionate",
        "past",
        "pastel",
        "peaceful",
        "peppery",
        "perfect",
        "perfumed",
        "periodic",
        "perky",
        "personal",
        "pertinent",
        "pesky",
        "pessimistic",
        "petty",
        "phony",
        "physical",
        "piercing",
        "pink",
        "pitiful",
        "plain",
        "plaintive",
        "plastic",
        "playful",
        "pleasant",
        "pleased",
        "pleasing",
        "plump",
        "plush",
        "polished",
        "polite",
        "political",
        "pointed",
        "pointless",
        "poised",
        "poor",
        "popular",
        "portly",
        "posh",
        "positive",
        "possible",
        "potable",
        "powerful",
        "powerless",
        "practical",
        "precious",
        "present",
        "prestigious",
        "pretty",
        "precious",
        "previous",
        "pricey",
        "prickly",
        "primary",
        "prime",
        "pristine",
        "private",
        "prize",
        "probable",
        "productive",
        "profitable",
        "profuse",
        "proper",
        "proud",
        "prudent",
        "punctual",
        "pungent",
        "puny",
        "pure",
        "purple",
        "pushy",
        "putrid",
        "puzzled",
        "puzzling",
        "quaint",
        "qualified",
        "quarrelsome",
        "quarterly",
        "queasy",
        "querulous",
        "questionable",
        "quick",
        "quick-witted",
        "quiet",
        "quintessential",
        "quirky",
        "quixotic",
        "quizzical",
        "radiant",
        "ragged",
        "rapid",
        "rare",
        "rash",
        "raw",
        "recent",
        "reckless",
        "rectangular",
        "ready",
        "real",
        "realistic",
        "reasonable",
        "red",
        "reflecting",
        "regal",
        "regular",
        "reliable",
        "relieved",
        "remarkable",
        "remorseful",
        "remote",
        "repentant",
        "required",
        "respectful",
        "responsible",
        "repulsive",
        "revolving",
        "rewarding",
        "rich",
        "rigid",
        "right",
        "ringed",
        "ripe",
        "roasted",
        "robust",
        "rosy",
        "rotating",
        "rotten",
        "rough",
        "round",
        "rowdy",
        "royal",
        "rubbery",
        "rundown",
        "ruddy",
        "rude",
        "runny",
        "rural",
        "rusty",
        "sad",
        "safe",
        "salty",
        "same",
        "sandy",
        "sane",
        "sarcastic",
        "sardonic",
        "satisfied",
        "scaly",
        "scarce",
        "scared",
        "scary",
        "scented",
        "scholarly",
        "scientific",
        "scornful",
        "scratchy",
        "scrawny",
        "second",
        "secondary",
        "second-hand",
        "secret",
        "self-assured",
        "self-reliant",
        "selfish",
        "sentimental",
        "separate",
        "serene",
        "serious",
        "serpentine",
        "several",
        "severe",
        "shabby",
        "shadowy",
        "shady",
        "shallow",
        "shameful",
        "shameless",
        "sharp",
        "shimmering",
        "shiny",
        "shocked",
        "shocking",
        "shoddy",
        "short",
        "short-term",
        "showy",
        "shrill",
        "shy",
        "sick",
        "silent",
        "silky",
        "silly",
        "silver",
        "similar",
        "simple",
        "simplistic",
        "sinful",
        "single",
        "sizzling",
        "skeletal",
        "skinny",
        "sleepy",
        "slight",
        "slim",
        "slimy",
        "slippery",
        "slow",
        "slushy",
        "small",
        "smart",
        "smoggy",
        "smooth",
        "smug",
        "snappy",
        "snarling",
        "sneaky",
        "sniveling",
        "snoopy",
        "sociable",
        "soft",
        "soggy",
        "solid",
        "somber",
        "some",
        "spherical",
        "sophisticated",
        "sore",
        "sorrowful",
        "soulful",
        "soupy",
        "sour",
        "Spanish",
        "sparkling",
        "sparse",
        "specific",
        "spectacular",
        "speedy",
        "spicy",
        "spiffy",
        "spirited",
        "spiteful",
        "splendid",
        "spotless",
        "spotted",
        "spry",
        "square",
        "squeaky",
        "squiggly",
        "stable",
        "staid",
        "stained",
        "stale",
        "standard",
        "starchy",
        "stark",
        "starry",
        "steep",
        "sticky",
        "stiff",
        "stimulating",
        "stingy",
        "stormy",
        "straight",
        "strange",
        "steel",
        "strict",
        "strident",
        "striking",
        "striped",
        "strong",
        "studious",
        "stunning",
        "stupendous",
        "stupid",
        "sturdy",
        "stylish",
        "subdued",
        "submissive",
        "substantial",
        "subtle",
        "suburban",
        "sudden",
        "sugary",
        "sunny",
        "super",
        "superb",
        "superficial",
        "superior",
        "supportive",
        "sure-footed",
        "surprised",
        "suspicious",
        "svelte",
        "sweaty",
        "sweet",
        "sweltering",
        "swift",
        "sympathetic",
        "tall",
        "talkative",
        "tame",
        "tan",
        "tangible",
        "tart",
        "tasty",
        "tattered",
        "taut",
        "tedious",
        "teeming",
        "tempting",
        "tender",
        "tense",
        "tepid",
        "terrible",
        "terrific",
        "testy",
        "thankful",
        "that",
        "these",
        "thick",
        "thin",
        "third",
        "thirsty",
        "this",
        "thorough",
        "thorny",
        "those",
        "thoughtful",
        "threadbare",
        "thrifty",
        "thunderous",
        "tidy",
        "tight",
        "timely",
        "tinted",
        "tiny",
        "tired",
        "torn",
        "total",
        "tough",
        "traumatic",
        "treasured",
        "tremendous",
        "tragic",
        "trained",
        "tremendous",
        "triangular",
        "tricky",
        "trifling",
        "trim",
        "trivial",
        "troubled",
        "true",
        "trusting",
        "trustworthy",
        "trusty",
        "truthful",
        "tubby",
        "turbulent",
        "twin",
        "ugly",
        "ultimate",
        "unacceptable",
        "unaware",
        "uncomfortable",
        "uncommon",
        "unconscious",
        "understated",
        "unequaled",
        "uneven",
        "unfinished",
        "unfit",
        "unfolded",
        "unfortunate",
        "unhappy",
        "unhealthy",
        "uniform",
        "unimportant",
        "unique",
        "united",
        "unkempt",
        "unknown",
        "unlawful",
        "unlined",
        "unlucky",
        "unnatural",
        "unpleasant",
        "unrealistic",
        "unripe",
        "unruly",
        "unselfish",
        "unsightly",
        "unsteady",
        "unsung",
        "untidy",
        "untimely",
        "untried",
        "untrue",
        "unused",
        "unusual",
        "unwelcome",
        "unwieldy",
        "unwilling",
        "unwitting",
        "unwritten",
        "upbeat",
        "upright",
        "upset",
        "urban",
        "usable",
        "used",
        "useful",
        "useless",
        "utilized",
        "utter",
        "vacant",
        "vague",
        "vain",
        "valid",
        "valuable",
        "vapid",
        "variable",
        "vast",
        "velvety",
        "venerated",
        "vengeful",
        "verifiable",
        "vibrant",
        "vicious",
        "victorious",
        "vigilant",
        "vigorous",
        "villainous",
        "violet",
        "violent",
        "virtual",
        "virtuous",
        "visible",
        "vital",
        "vivacious",
        "vivid",
        "voluminous",
        "wan",
        "warlike",
        "warm",
        "warmhearted",
        "warped",
        "wary",
        "wasteful",
        "watchful",
        "waterlogged",
        "watery",
        "wavy",
        "wealthy",
        "weak",
        "weary",
        "webbed",
        "wee",
        "weekly",
        "weepy",
        "weighty",
        "weird",
        "welcome",
        "well-documented",
        "well-groomed",
        "well-informed",
        "well-lit",
        "well-made",
        "well-off",
        "well-to-do",
        "well-worn",
        "wet",
        "which",
        "whimsical",
        "whirlwind",
        "whispered",
        "white",
        "whole",
        "whopping",
        "wicked",
        "wide",
        "wide-eyed",
        "wiggly",
        "wild",
        "willing",
        "wilted",
        "winding",
        "windy",
        "winged",
        "wiry",
        "wise",
        "witty",
        "wobbly",
        "woeful",
        "wonderful",
        "wooden",
        "woozy",
        "wordy",
        "worldly",
        "worn",
        "worried",
        "worrisome",
        "worse",
        "worst",
        "worthless",
        "worthwhile",
        "worthy",
        "wrathful",
        "wretched",
        "writhing",
        "wrong",
        "wry",
        "yawning",
        "yearly",
        "yellow",
        "yellowish",
        "young",
        "youthful",
        "yummy",
        "zany",
        "zealous",
        "zesty",
        "zigzag"
    ];

var streetNames =
    [
        [ 1, "489E9258-8C32-472F-A309-7ADBA1D0FEB5", 1, 1413041315, "403253", 1413041315, "403253", "{\n}", "01ST ST", "01ST", "ST" ]
        ,
        [ 2, "D24DE4CB-1386-4AFB-8AE6-EF478B9FBB68", 2, 1413041315, "403253", 1413041315, "403253", "{\n}", "01ST TI ST", "01ST TI", "ST" ]
        ,
        [ 3, "ECD3CC5F-ED2E-4E3C-9FB3-39AE37BE05CD", 3, 1413041315, "403253", 1413041315, "403253", "{\n}", "02ND AVE", "02ND", "AVE" ]
        ,
        [ 4, "B9AF8A0C-F760-4F7A-B61D-E2738B0E0E82", 4, 1413041315, "403253", 1413041315, "403253", "{\n}", "02ND ST", "02ND", "ST" ]
        ,
        [ 5, "4660842A-D7D4-4830-A8AA-B8B979DB6A8D", 5, 1413041315, "403253", 1413041315, "403253", "{\n}", "02ND TI ST", "02ND TI", "ST" ]
        ,
        [ 6, "41942479-3137-4934-B5C4-438CC70297C2", 6, 1413041315, "403253", 1413041315, "403253", "{\n}", "03RD AVE", "03RD", "AVE" ]
        ,
        [ 7, "1D156950-A8E3-417D-A7B1-F8A705DFBFE8", 7, 1413041315, "403253", 1413041315, "403253", "{\n}", "03RD ST", "03RD", "ST" ]
        ,
        [ 8, "55DC976D-3E15-4A2E-B07A-B8F8DAF15D7E", 8, 1413041315, "403253", 1413041315, "403253", "{\n}", "03RD TI ST", "03RD TI", "ST" ]
        ,
        [ 9, "D7CA5762-DE02-4DBE-998F-E955D16086ED", 9, 1413041315, "403253", 1413041315, "403253", "{\n}", "04TH AVE", "04TH", "AVE" ]
        ,
        [ 10, "77CB11A9-0783-471D-B675-75F93C2F7C38", 10, 1413041315, "403253", 1413041315, "403253", "{\n}", "04TH ST", "04TH", "ST" ]
        ,
        [ 11, "DF2E6E4D-5846-4292-9BC0-26323C58A85F", 11, 1413041315, "403253", 1413041315, "403253", "{\n}", "04TH TI ST", "04TH TI", "ST" ]
        ,
        [ 12, "ECCA7092-F58E-4C30-AF89-3BB76C2A449C", 12, 1413041315, "403253", 1413041315, "403253", "{\n}", "05TH AVE", "05TH", "AVE" ]
        ,
        [ 13, "C4FE4DED-9E88-4E6D-AA5F-21FC23D88310", 13, 1413041315, "403253", 1413041315, "403253", "{\n}", "05TH ST", "05TH", "ST" ]
        ,
        [ 14, "5F8660D3-E166-4578-842C-C3E5306939DC", 14, 1413041315, "403253", 1413041315, "403253", "{\n}", "05TH TI ST", "05TH TI", "ST" ]
        ,
        [ 15, "108EEE50-1467-4022-8015-69E69A776546", 15, 1413041315, "403253", 1413041315, "403253", "{\n}", "06TH AVE", "06TH", "AVE" ]
        ,
        [ 16, "E4A3A444-991C-4F07-AC70-D2B3FF2ACBB9", 16, 1413041315, "403253", 1413041315, "403253", "{\n}", "06TH ST", "06TH", "ST" ]
        ,
        [ 17, "34FD4B08-449E-4B69-9B99-12D7521B9597", 17, 1413041315, "403253", 1413041315, "403253", "{\n}", "06TH HP AVE", "06TH HP", "AVE" ]
        ,
        [ 18, "7D0AF497-5001-47FB-907A-8D4720435429", 18, 1413041315, "403253", 1413041315, "403253", "{\n}", "06TH TI ST", "06TH TI", "ST" ]
        ,
        [ 19, "0FAFE812-5C88-4D03-91D4-43A458455576", 19, 1413041315, "403253", 1413041315, "403253", "{\n}", "07TH AVE", "07TH", "AVE" ]
        ,
        [ 20, "32D3C9DB-9BEB-4BFD-9B2C-E8C8736D9DB1", 20, 1413041315, "403253", 1413041315, "403253", "{\n}", "07TH ST", "07TH", "ST" ]
        ,
        [ 21, "CC01B88E-0F6D-4264-8C85-FE8F8E6049F4", 21, 1413041315, "403253", 1413041315, "403253", "{\n}", "08TH AVE", "08TH", "AVE" ]
        ,
        [ 22, "8C3FE99C-D1D8-4B23-91AE-5216FE9E7144", 22, 1413041315, "403253", 1413041315, "403253", "{\n}", "08TH ST", "08TH", "ST" ]
        ,
        [ 23, "28390BFE-3C55-4420-8A60-11417E74819A", 23, 1413041315, "403253", 1413041315, "403253", "{\n}", "08TH TI ST", "08TH TI", "ST" ]
        ,
        [ 24, "723B6A48-4D63-4455-9F6E-99F1088CF486", 24, 1413041315, "403253", 1413041315, "403253", "{\n}", "09TH AVE", "09TH", "AVE" ]
        ,
        [ 25, "9B6145F6-B489-4ABC-BB4E-FBBD4D0E81F9", 25, 1413041315, "403253", 1413041315, "403253", "{\n}", "09TH ST", "09TH", "ST" ]
        ,
        [ 26, "9250EC48-56F1-4343-9C76-FF6B1FAF3A51", 26, 1413041315, "403253", 1413041315, "403253", "{\n}", "09TH TI ST", "09TH TI", "ST" ]
        ,
        [ 27, "D1EC1C1D-C4EF-4409-A907-3825917FC157", 27, 1413041315, "403253", 1413041315, "403253", "{\n}", "10TH AVE", "10TH", "AVE" ]
        ,
        [ 28, "E8C76BFD-790F-4983-ABE2-445C6A990DAF", 28, 1413041315, "403253", 1413041315, "403253", "{\n}", "10TH ST", "10TH", "ST" ]
        ,
        [ 29, "D56E749D-4A08-458A-868C-00007483C1DD", 29, 1413041315, "403253", 1413041315, "403253", "{\n}", "10TH TI ST", "10TH TI", "ST" ]
        ,
        [ 30, "784E5CD0-0F19-41B3-A22F-C938D9AEB368", 30, 1413041315, "403253", 1413041315, "403253", "{\n}", "11TH AVE", "11TH", "AVE" ]
        ,
        [ 31, "D9D563DA-6AE8-483F-A391-6F364FB94DD4", 31, 1413041315, "403253", 1413041315, "403253", "{\n}", "11TH ST", "11TH", "ST" ]
        ,
        [ 32, "97866D6C-68E5-433D-812B-BA630F0C53C1", 32, 1413041315, "403253", 1413041315, "403253", "{\n}", "11TH TI ST", "11TH TI", "ST" ]
        ,
        [ 33, "4E745A9C-053E-4BB5-A6F9-169C8BE9F8A0", 33, 1413041315, "403253", 1413041315, "403253", "{\n}", "12TH AVE", "12TH", "AVE" ]
        ,
        [ 34, "372991BA-3324-4627-9B85-7A19A6ED8EDC", 34, 1413041315, "403253", 1413041315, "403253", "{\n}", "12TH ST", "12TH", "ST" ]
        ,
        [ 35, "FDE82D59-9586-4C96-A1AB-B4AF46536514", 35, 1413041315, "403253", 1413041315, "403253", "{\n}", "12TH TI ST", "12TH TI", "ST" ]
        ,
        [ 36, "CDA17010-0435-4F33-9608-F95A9C08EAAF", 36, 1413041315, "403253", 1413041315, "403253", "{\n}", "13TH ST", "13TH", "ST" ]
        ,
        [ 37, "A82BC681-0A34-4F47-A2F8-19AA1F9FEAFB", 37, 1413041315, "403253", 1413041315, "403253", "{\n}", "13TH TI ST", "13TH TI", "ST" ]
        ,
        [ 38, "BE043C3A-41EC-4C6D-A7B4-2DC8BBDD9756", 38, 1413041315, "403253", 1413041315, "403253", "{\n}", "14TH AVE", "14TH", "AVE" ]
        ,
        [ 39, "7EA6F98F-0E0F-45FD-9C42-FCA0445FCD4B", 39, 1413041315, "403253", 1413041315, "403253", "{\n}", "14TH ST", "14TH", "ST" ]
        ,
        [ 40, "60CC47C1-C8F7-4F2B-A77E-6ADAA1E3F12A", 40, 1413041315, "403253", 1413041315, "403253", "{\n}", "14TH TI ST", "14TH TI", "ST" ]
        ,
        [ 41, "B85D8A15-3F3F-4D70-A1C1-60BBA6E51D02", 41, 1413041315, "403253", 1413041315, "403253", "{\n}", "15TH AVE", "15TH", "AVE" ]
        ,
        [ 42, "09D4CBAC-6E00-4242-A407-16DBED6DC398", 42, 1413041315, "403253", 1413041315, "403253", "{\n}", "15TH ST", "15TH", "ST" ]
        ,
        [ 43, "DB4513D9-AC6D-493D-884F-9A7CDA564F53", 43, 1413041315, "403253", 1413041315, "403253", "{\n}", "16TH AVE", "16TH", "AVE" ]
        ,
        [ 44, "BE8B77D3-0096-41AB-A009-3BC7CDD077EA", 44, 1413041315, "403253", 1413041315, "403253", "{\n}", "16TH ST", "16TH", "ST" ]
        ,
        [ 45, "DCF7350C-325F-42D9-B791-2E2E1DCC9E12", 45, 1413041315, "403253", 1413041315, "403253", "{\n}", "17TH AVE", "17TH", "AVE" ]
        ,
        [ 46, "2D13EAFC-0AA6-4564-A211-DB7476CFBF96", 46, 1413041315, "403253", 1413041315, "403253", "{\n}", "17TH ST", "17TH", "ST" ]
        ,
        [ 47, "E31A8746-507E-4BDC-B5E5-5E4D5365EEAB", 47, 1413041315, "403253", 1413041315, "403253", "{\n}", "18TH AVE", "18TH", "AVE" ]
        ,
        [ 48, "F70B3E30-5513-47ED-891F-5A9DCC4EE3E1", 48, 1413041315, "403253", 1413041315, "403253", "{\n}", "18TH ST", "18TH", "ST" ]
        ,
        [ 49, "1627D28C-F58B-4FAD-93A2-DB33ACDDDC4B", 49, 1413041315, "403253", 1413041315, "403253", "{\n}", "19TH AVE", "19TH", "AVE" ]
        ,
        [ 50, "9F697E2F-642C-461B-AFC8-2FD99D27BDAC", 50, 1413041315, "403253", 1413041315, "403253", "{\n}", "19TH ST", "19TH", "ST" ]
        ,
        [ 51, "B8ADD2B0-7FD6-4CE3-90A7-5F71FA3702E9", 51, 1413041315, "403253", 1413041315, "403253", "{\n}", "20TH AVE", "20TH", "AVE" ]
        ,
        [ 52, "BD7292CD-E114-4517-946C-1D285C423CDB", 52, 1413041315, "403253", 1413041315, "403253", "{\n}", "20TH ST", "20TH", "ST" ]
        ,
        [ 53, "7C17C7BC-F09F-4BF4-ADA3-EA9B2D92AFBD", 53, 1413041315, "403253", 1413041315, "403253", "{\n}", "21ST AVE", "21ST", "AVE" ]
        ,
        [ 54, "8F892EA2-4A06-4EAF-8F73-B4DA57AA3E3F", 54, 1413041315, "403253", 1413041315, "403253", "{\n}", "21ST ST", "21ST", "ST" ]
        ,
        [ 55, "FC6787AE-B8FD-4127-AD5B-8E40619F0545", 55, 1413041315, "403253", 1413041315, "403253", "{\n}", "22ND AVE", "22ND", "AVE" ]
        ,
        [ 56, "A6520758-8ED2-4ABE-882F-491B8362582C", 56, 1413041315, "403253", 1413041315, "403253", "{\n}", "22ND ST", "22ND", "ST" ]
        ,
        [ 57, "26191569-3B01-432F-9AE4-B43C5C6B43D1", 57, 1413041315, "403253", 1413041315, "403253", "{\n}", "23RD AVE", "23RD", "AVE" ]
        ,
        [ 58, "F9613CE2-29B9-43DF-890E-72DD39543530", 58, 1413041315, "403253", 1413041315, "403253", "{\n}", "23RD ST", "23RD", "ST" ]
        ,
        [ 59, "0186FD06-78AC-4273-B3F9-C841A2DF9CEF", 59, 1413041315, "403253", 1413041315, "403253", "{\n}", "24TH AVE", "24TH", "AVE" ]
        ,
        [ 60, "D7C4A445-0B4A-4AA0-9D78-8691502460A7", 60, 1413041315, "403253", 1413041315, "403253", "{\n}", "24TH ST", "24TH", "ST" ]
        ,
        [ 61, "12928254-47F7-47DB-ACA0-0A388DB8A24F", 61, 1413041315, "403253", 1413041315, "403253", "{\n}", "25TH AVE", "25TH", "AVE" ]
        ,
        [ 62, "E79BDD5D-8748-4CF4-ACE3-E3E6C78F8864", 62, 1413041315, "403253", 1413041315, "403253", "{\n}", "25TH AVE NORTH", "25TH", "AVE" ]
        ,
        [ 63, "D5B15F59-5E81-4B11-B9AC-283936E2CEC4", 63, 1413041315, "403253", 1413041315, "403253", "{\n}", "25TH ST", "25TH", "ST" ]
        ,
        [ 64, "3A6F06DC-34FD-423D-8070-B2670E73478C", 64, 1413041315, "403253", 1413041315, "403253", "{\n}", "26TH AVE", "26TH", "AVE" ]
        ,
        [ 65, "D8C1A136-EE29-42FE-9E7E-639CFEF05372", 65, 1413041315, "403253", 1413041315, "403253", "{\n}", "26TH ST", "26TH", "ST" ]
        ,
        [ 66, "8E55134B-7B22-4255-9BC3-1E5E31044191", 66, 1413041315, "403253", 1413041315, "403253", "{\n}", "27TH AVE", "27TH", "AVE" ]
        ,
        [ 67, "9C63711B-CF8C-4D0B-848A-AC755B67771B", 67, 1413041315, "403253", 1413041315, "403253", "{\n}", "27TH ST", "27TH", "ST" ]
        ,
        [ 68, "FF3851A6-3B54-42BE-B0AD-3B09B588D733", 68, 1413041315, "403253", 1413041315, "403253", "{\n}", "28TH AVE", "28TH", "AVE" ]
        ,
        [ 69, "6421D6C2-C561-4632-A924-6905163032F0", 69, 1413041315, "403253", 1413041315, "403253", "{\n}", "28TH ST", "28TH", "ST" ]
        ,
        [ 70, "782D3BB9-F9D0-43FF-AE09-693BC6505329", 70, 1413041315, "403253", 1413041315, "403253", "{\n}", "29TH AVE", "29TH", "AVE" ]
        ,
        [ 71, "0E21794F-45E6-4AA1-9025-B9DE6AE2983C", 71, 1413041315, "403253", 1413041315, "403253", "{\n}", "29TH ST", "29TH", "ST" ]
        ,
        [ 72, "CF036EB1-51DE-46E3-B490-C5B8F3B8DA43", 72, 1413041315, "403253", 1413041315, "403253", "{\n}", "30TH AVE", "30TH", "AVE" ]
        ,
        [ 73, "2D9BAC2D-043D-4674-9E33-CB17921A6AC8", 73, 1413041315, "403253", 1413041315, "403253", "{\n}", "30TH ST", "30TH", "ST" ]
        ,
        [ 74, "8132EE5F-FB53-4DFD-BD87-C6841710ADB6", 74, 1413041315, "403253", 1413041315, "403253", "{\n}", "31ST AVE", "31ST", "AVE" ]
        ,
        [ 75, "EA5C4252-11AA-45A4-A378-6A9CCA683B24", 75, 1413041315, "403253", 1413041315, "403253", "{\n}", "31ST ST", "31ST", "ST" ]
        ,
        [ 76, "F138846A-91DB-4A0E-BBEC-2AD9C0B46300", 76, 1413041315, "403253", 1413041315, "403253", "{\n}", "32ND AVE", "32ND", "AVE" ]
        ,
        [ 77, "29ED1B1B-FA64-4FBE-BB8C-03BA19BE44E3", 77, 1413041315, "403253", 1413041315, "403253", "{\n}", "33RD AVE", "33RD", "AVE" ]
        ,
        [ 78, "E0D45B79-4954-49FA-ABC2-B3AF15969B2C", 78, 1413041315, "403253", 1413041315, "403253", "{\n}", "34TH AVE", "34TH", "AVE" ]
        ,
        [ 79, "1A2E76CD-1DAE-4D44-8ED6-4D25CEBF2F3C", 79, 1413041315, "403253", 1413041315, "403253", "{\n}", "35TH AVE", "35TH", "AVE" ]
        ,
        [ 80, "22BFB937-CC07-4A33-B553-ECFB9A3DCF71", 80, 1413041315, "403253", 1413041315, "403253", "{\n}", "36TH AVE", "36TH", "AVE" ]
        ,
        [ 81, "C97C3293-4B8A-40E7-B0A8-43509242C05F", 81, 1413041315, "403253", 1413041315, "403253", "{\n}", "37TH AVE", "37TH", "AVE" ]
        ,
        [ 82, "FB7A73BB-BD0D-4E34-9F25-D28D2774EAAD", 82, 1413041315, "403253", 1413041315, "403253", "{\n}", "38TH AVE", "38TH", "AVE" ]
        ,
        [ 83, "1712B6FB-EB61-4258-BCD1-E306F42323E0", 83, 1413041315, "403253", 1413041315, "403253", "{\n}", "39TH AVE", "39TH", "AVE" ]
        ,
        [ 84, "0ED9AEAE-DBC9-4DE2-974C-3C715773175F", 84, 1413041315, "403253", 1413041315, "403253", "{\n}", "40TH AVE", "40TH", "AVE" ]
        ,
        [ 85, "FCC47E6B-9EAA-445B-BDDF-BC8888788209", 85, 1413041315, "403253", 1413041315, "403253", "{\n}", "41ST AVE", "41ST", "AVE" ]
        ,
        [ 86, "9CE28F16-6274-453D-A467-D42B35FF8262", 86, 1413041315, "403253", 1413041315, "403253", "{\n}", "42ND AVE", "42ND", "AVE" ]
        ,
        [ 87, "D127AEF6-C302-4047-8E49-29C369579052", 87, 1413041315, "403253", 1413041315, "403253", "{\n}", "43RD AVE", "43RD", "AVE" ]
        ,
        [ 88, "77341024-EBA4-41C8-857A-EC6F3B270A1F", 88, 1413041315, "403253", 1413041315, "403253", "{\n}", "44TH AVE", "44TH", "AVE" ]
        ,
        [ 89, "93E3D829-B05B-4961-9FD1-F7F709DEF92B", 89, 1413041315, "403253", 1413041315, "403253", "{\n}", "45TH AVE", "45TH", "AVE" ]
        ,
        [ 90, "A2B0461A-B9C6-4D6B-9BCD-CF4F3212EA14", 90, 1413041315, "403253", 1413041315, "403253", "{\n}", "46TH AVE", "46TH", "AVE" ]
        ,
        [ 91, "93EFCE7C-6A9C-4FB0-A691-7B1DE50EFCD6", 91, 1413041315, "403253", 1413041315, "403253", "{\n}", "47TH AVE", "47TH", "AVE" ]
        ,
        [ 92, "D0D916DB-C95B-4541-8AE6-888D5D225050", 92, 1413041315, "403253", 1413041315, "403253", "{\n}", "48TH AVE", "48TH", "AVE" ]
        ,
        [ 93, "CB237B00-3942-421D-8D90-C357A76587AA", 93, 1413041315, "403253", 1413041315, "403253", "{\n}", "A ST", "A", "ST" ]
        ,
        [ 94, "C2949A3B-150B-43ED-90EF-4E299DE7A8D8", 94, 1413041315, "403253", 1413041315, "403253", "{\n}", "ABBEY ST", "ABBEY", "ST" ]
        ,
        [ 95, "1D9BF9D4-DE13-4012-95A9-3C4B5E3ABDC9", 95, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACACIA AVE", "ACACIA", "AVE" ]
        ,
        [ 96, "58C53F97-B920-4144-9032-FBEF36297E8F", 96, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACACIA ST", "ACACIA", "ST" ]
        ,
        [ 97, "483270D5-D0A2-42FF-93AD-7538476EC1F2", 97, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACADIA ST", "ACADIA", "ST" ]
        ,
        [ 98, "1D8FFCF1-11ED-4CFF-B814-25B2E2013E51", 98, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACEVEDO AVE", "ACEVEDO", "AVE" ]
        ,
        [ 99, "F0DA9613-B0B7-44BF-A529-B4E0F119D9DD", 99, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACME ALY", "ACME", "ALY" ]
        ,
        [ 100, "646F30DE-2FE0-4650-8235-96A995447C07", 100, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACORN ALY", "ACORN", "ALY" ]
        ,
        [ 101, "67BBBBCA-7E54-46B4-AC71-3CA2718692B6", 101, 1413041315, "403253", 1413041315, "403253", "{\n}", "ACTON ST", "ACTON", "ST" ]
        ,
        [ 102, "BA1F3B82-6F19-45B1-B925-6AC8734CFB8A", 102, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADA CT", "ADA", "CT" ]
        ,
        [ 103, "A575E0EB-E625-441C-87E3-245E9750B765", 103, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADAIR ST", "ADAIR", "ST" ]
        ,
        [ 104, "73E7BD3B-B7C8-43A7-A8D8-953068348BF7", 104, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADAM ST", "ADAM", "ST" ]
        ,
        [ 105, "9F8C459F-9EC0-4E2E-AD4F-BEB747634BE4", 105, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADDISON ST", "ADDISON", "ST" ]
        ,
        [ 106, "65EEDDF8-E8CA-4B99-B6FC-535513B2C53B", 106, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADELE CT", "ADELE", "CT" ]
        ,
        [ 107, "23B670D1-C2FF-4C96-BFBB-2E5EC935AC0E", 107, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADMIRAL AVE", "ADMIRAL", "AVE" ]
        ,
        [ 108, "C766BC3E-D1E1-4372-9C37-D8C4F7DC8D62", 108, 1413041315, "403253", 1413041315, "403253", "{\n}", "ADOLPH SUTRO CT", "ADOLPH SUTRO", "CT" ]
        ,
        [ 109, "5680A856-9260-43A6-BEE5-445B73905FA9", 109, 1413041315, "403253", 1413041315, "403253", "{\n}", "AERIAL WAY", "AERIAL", "WAY" ]
        ,
        [ 110, "449AD28A-7A2A-4276-BCE5-1CDEFDEB76D2", 110, 1413041315, "403253", 1413041315, "403253", "{\n}", "AGNON AVE", "AGNON", "AVE" ]
        ,
        [ 111, "405498D8-0AF5-4273-8202-15BC465F7353", 111, 1413041315, "403253", 1413041315, "403253", "{\n}", "AGUA WAY", "AGUA", "WAY" ]
        ,
        [ 112, "27066850-F183-4A29-ACC5-469151DCDA7D", 112, 1413041315, "403253", 1413041315, "403253", "{\n}", "AHERN WAY", "AHERN", "WAY" ]
        ,
        [ 113, "720AAEC6-0AFB-4936-9332-D3E23CFAB76F", 113, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALABAMA ST", "ALABAMA", "ST" ]
        ,
        [ 114, "B023B586-44D7-48E8-B875-F1BFBC5C57CA", 114, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALADDIN TER", "ALADDIN", "TER" ]
        ,
        [ 115, "C6F0D1A4-42D0-4F43-8AB0-42A9DCF78E57", 115, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALAMEDA ST", "ALAMEDA", "ST" ]
        ,
        [ 116, "0E00E612-DBF5-46A8-893B-84E4F39A2034", 116, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALANA WAY", "ALANA", "WAY" ]
        ,
        [ 117, "A3686E3C-4FED-4C2A-9DE7-F3DD450C80F7", 117, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALBATROSS CT", "ALBATROSS", "CT" ]
        ,
        [ 118, "4836A23C-D196-416B-9481-9323718524E1", 118, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALBERTA ST", "ALBERTA", "ST" ]
        ,
        [ 119, "63B69867-6DEA-4DE3-86E5-65B285F92630", 119, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALBION ST", "ALBION", "ST" ]
        ,
        [ 120, "7C2B2FF8-FEDC-4F2F-8679-3E42662191BC", 120, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALDER ST", "ALDER", "ST" ]
        ,
        [ 121, "A7A03286-3EAB-4C5D-A19E-68DB4B949179", 121, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALEMANY BLVD", "ALEMANY", "BLVD" ]
        ,
        [ 122, "FFA5EB3F-5938-4E13-B2E5-3FBF2492B971", 122, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALEMANY BLVD OFF RAMP", "ALEMANY BLVD OFF", "RAMP" ]
        ,
        [ 123, "BFB46D84-F82B-49C9-AD19-35571CFECDBD", 123, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALERT ALY", "ALERT", "ALY" ]
        ,
        [ 124, "DDF8365B-E704-4D0C-B6E3-3D3F5DBDFC95", 124, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALHAMBRA ST", "ALHAMBRA", "ST" ]
        ,
        [ 125, "7222E95F-0886-4A3B-B30B-F1F19C1A68FE", 125, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALICE B TOKLAS PL", "ALICE B TOKLAS", "PL" ]
        ,
        [ 126, "BB53D98C-9FB8-4D0C-A113-1E953133CDFC", 126, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALLEN ST", "ALLEN", "ST" ]
        ,
        [ 127, "D8EE7CEC-CED0-4536-BC53-597F0A99545C", 127, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALLISON ST", "ALLISON", "ST" ]
        ,
        [ 128, "B02C820B-78A7-430A-A8F2-014812C14CBE", 128, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALLSTON WAY", "ALLSTON", "WAY" ]
        ,
        [ 129, "468ECC90-C199-4DF1-818D-A07073AD0722", 129, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALMA ST", "ALMA", "ST" ]
        ,
        [ 130, "829D58E3-1173-46DB-8ADC-9771913B55C5", 130, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALMADEN CT", "ALMADEN", "CT" ]
        ,
        [ 131, "B811816A-0B9E-4441-BADE-15085D2A9AB5", 131, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALOHA AVE", "ALOHA", "AVE" ]
        ,
        [ 132, "30E7FE83-7FFF-4813-9D1B-1CDC26A06588", 132, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALPHA ST", "ALPHA", "ST" ]
        ,
        [ 133, "5D696067-822B-4646-875A-859982029568", 133, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALPINE TER", "ALPINE", "TER" ]
        ,
        [ 134, "47881597-1639-4CCB-B066-15FCD8A23DE7", 134, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALTA ST", "ALTA", "ST" ]
        ,
        [ 135, "317A30C6-AE71-4698-A429-3400B201CB93", 135, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALTA MAR WAY", "ALTA MAR", "WAY" ]
        ,
        [ 136, "CFEBBAA8-ECEA-48B6-BAF3-9D8AC85F208C", 136, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALTA VISTA TER", "ALTA VISTA", "TER" ]
        ,
        [ 137, "0DF08DC2-E328-46DE-A9F4-36D1626ED65A", 137, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALTON AVE", "ALTON", "AVE" ]
        ,
        [ 138, "AD8B265A-EDA1-45A2-8B2B-95E63686F79E", 138, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALVARADO ST", "ALVARADO", "ST" ]
        ,
        [ 139, "04F7E570-A819-4D42-BAEF-7ED765E2A438", 139, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALVISO ST", "ALVISO", "ST" ]
        ,
        [ 140, "6D008212-9180-49CE-A7E9-745636A82FB6", 140, 1413041315, "403253", 1413041315, "403253", "{\n}", "ALVORD ST", "ALVORD", "ST" ]
        ,
        [ 141, "C96DD63C-5DE8-4378-9A09-1C9C1758FBFC", 141, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMADOR ST", "AMADOR", "ST" ]
        ,
        [ 142, "B23DB13A-FCFB-4A2D-BB0E-C785073ED546", 142, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMATISTA LN", "AMATISTA", "LN" ]
        ,
        [ 143, "985C1B43-E022-413F-A695-A91FB88A10DC", 143, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMATURY LOOP", "AMATURY", "LOOP" ]
        ,
        [ 144, "9EAB6AEF-6558-411A-A72B-C40CC55C493E", 144, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMAZON AVE", "AMAZON", "AVE" ]
        ,
        [ 145, "232D2B27-4153-4518-8663-1445003FA090", 145, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMBER DR", "AMBER", "DR" ]
        ,
        [ 146, "7BA7B24F-ECD5-4261-A158-9F5878E2C5C6", 146, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMBROSE BIERCE ST", "AMBROSE BIERCE", "ST" ]
        ,
        [ 147, "16BFBFA9-05C8-4D46-8BFA-AF5354D09B95", 147, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMES ST", "AMES", "ST" ]
        ,
        [ 148, "500C5E5E-33AA-4E07-BEFC-942AF9FA92B8", 148, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMETHYST WAY", "AMETHYST", "WAY" ]
        ,
        [ 149, "B94DBAE9-AED7-43D3-9817-7ECB1EC59ECB", 149, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMHERST ST", "AMHERST", "ST" ]
        ,
        [ 150, "D7A38404-E1E2-4458-B604-BBE9F6634EEB", 150, 1413041315, "403253", 1413041315, "403253", "{\n}", "AMITY ALY", "AMITY", "ALY" ]
        ,
        [ 151, "477828EA-9542-407C-85CF-C96917279C76", 151, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANDERSON ST", "ANDERSON", "ST" ]
        ,
        [ 152, "F45703F8-8FA2-482A-93BF-3E5E775DE077", 152, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANDOVER ST", "ANDOVER", "ST" ]
        ,
        [ 153, "2DD30510-0C3C-4B0F-8687-0BB3912DF593", 153, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANDREW ST", "ANDREW", "ST" ]
        ,
        [ 154, "0A0190A2-69DE-48D4-997E-8BAA2B7A5133", 154, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANGELOS ALY", "ANGELOS", "ALY" ]
        ,
        [ 155, "165DA638-AD2C-4DB3-9C02-3596B3D4A012", 155, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANGLO ALY", "ANGLO", "ALY" ]
        ,
        [ 156, "8344CA3F-4BF0-441B-B7C1-1D54CD4CEFAE", 156, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANKENY ST", "ANKENY", "ST" ]
        ,
        [ 157, "01ED9F42-44E7-4265-AC64-21D8407FB844", 157, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANNAPOLIS TER", "ANNAPOLIS", "TER" ]
        ,
        [ 158, "3A505231-893A-4DBF-A8C1-6A5342E508A0", 158, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANNIE ST", "ANNIE", "ST" ]
        ,
        [ 159, "7092F978-54E0-4944-9464-9F8DCB208E3B", 159, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANSON PL", "ANSON", "PL" ]
        ,
        [ 160, "FB8D37FF-9D4F-42D6-BEB6-C59ADF2C2B19", 160, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANTHONY ST", "ANTHONY", "ST" ]
        ,
        [ 161, "6FD4CCAD-3E53-4225-9C86-42FEB76FFD89", 161, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANTONIO ST", "ANTONIO", "ST" ]
        ,
        [ 162, "42318DD4-C8D6-4402-9FE6-96798C057C60", 162, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANZA AVE", "ANZA", "AVE" ]
        ,
        [ 163, "76006E4B-B36A-4CEC-8D86-BA918DE078B9", 163, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANZA ST", "ANZA", "ST" ]
        ,
        [ 164, "C34CEFFD-3095-439B-A557-03F87F64ACB8", 164, 1413041315, "403253", 1413041315, "403253", "{\n}", "ANZAVISTA AVE", "ANZAVISTA", "AVE" ]
        ,
        [ 165, "1E6B6692-5A30-42CB-A35F-58F8E7CF5E7D", 165, 1413041315, "403253", 1413041315, "403253", "{\n}", "APOLLO ST", "APOLLO", "ST" ]
        ,
        [ 166, "F754441D-6374-4983-9143-D8693A7C18EF", 166, 1413041315, "403253", 1413041315, "403253", "{\n}", "APPAREL WAY", "APPAREL", "WAY" ]
        ,
        [ 167, "9C5E49E8-A526-4644-A073-84DCA3AF893B", 167, 1413041315, "403253", 1413041315, "403253", "{\n}", "APPLETON AVE", "APPLETON", "AVE" ]
        ,
        [ 168, "B6CB829C-6243-4B62-83E8-01555A536325", 168, 1413041315, "403253", 1413041315, "403253", "{\n}", "APPLETON ST", "APPLETON", "ST" ]
        ,
        [ 169, "16E87C2B-AF32-47C9-BE71-9F2717C89A97", 169, 1413041315, "403253", 1413041315, "403253", "{\n}", "APTOS AVE", "APTOS", "AVE" ]
        ,
        [ 170, "CD99233B-B161-4B27-AF52-9BF6D6FEFDF9", 170, 1413041315, "403253", 1413041315, "403253", "{\n}", "AQUAVISTA WAY", "AQUAVISTA", "WAY" ]
        ,
        [ 171, "E180D993-C8A7-4E06-9FDA-73296CB221FA", 171, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARAGO ST", "ARAGO", "ST" ]
        ,
        [ 172, "DC37BFDB-BD4B-4C9B-BA61-7D3687FAF8FB", 172, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARBALLO DR", "ARBALLO", "DR" ]
        ,
        [ 173, "20C28DFE-9D63-434A-85C1-32EF91CD9A65", 173, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARBOL LN", "ARBOL", "LN" ]
        ,
        [ 174, "850CFE16-D5EB-413A-9C24-7EB0BD480CCA", 174, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARBOR ST", "ARBOR", "ST" ]
        ,
        [ 175, "B7235936-9936-4BB0-8AA4-9D1AEF26D0E2", 175, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARCH ST", "ARCH", "ST" ]
        ,
        [ 176, "76A16AED-E1A8-4435-B2E9-F608B7C55FE5", 176, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARCO WAY", "ARCO", "WAY" ]
        ,
        [ 177, "14ABA532-A1F5-4B02-9936-C8116B61C991", 177, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARDATH CT", "ARDATH", "CT" ]
        ,
        [ 178, "F49D7E73-2695-4359-B1CA-CFB562A6F4A3", 178, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARDENWOOD WAY", "ARDENWOOD", "WAY" ]
        ,
        [ 179, "A609EE00-A43F-410A-B70A-2ECD690B8681", 179, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARELIOUS WALKER DR", "ARELIOUS WALKER", "DR" ]
        ,
        [ 180, "C671070D-5F5F-4137-AFAF-56B10A5E6514", 180, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARELLANO AVE", "ARELLANO", "AVE" ]
        ,
        [ 181, "25D34538-65EE-43B8-882E-F0720032B5DE", 181, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARGENT ALY", "ARGENT", "ALY" ]
        ,
        [ 182, "24493A08-BD7F-4C7B-A4C4-05C3CA5ABB54", 182, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARGONAUT AVE", "ARGONAUT", "AVE" ]
        ,
        [ 183, "04453531-DAF1-4B6A-9D72-2296466C6C03", 183, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARGUELLO BLVD", "ARGUELLO", "BLVD" ]
        ,
        [ 184, "5136A2B6-8627-4C0E-BCFA-758FBD3A05DD", 184, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARKANSAS ST", "ARKANSAS", "ST" ]
        ,
        [ 185, "540D38A7-1CE7-4EA7-B8D4-C957DB406DAE", 185, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARLETA AVE", "ARLETA", "AVE" ]
        ,
        [ 186, "CABEB4F1-9E77-4875-9782-3BD16BE6CFF9", 186, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARLINGTON ST", "ARLINGTON", "ST" ]
        ,
        [ 187, "B8C8A7AF-334B-4719-B555-13EF9B68C78F", 187, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARMISTEAD RD", "ARMISTEAD", "RD" ]
        ,
        [ 188, "CBC103DB-E322-4E63-B7A6-CD21B4965588", 188, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARMORY DR", "ARMORY", "DR" ]
        ,
        [ 189, "8819D80D-EF06-45FB-BD3C-2EB44F53060C", 189, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARMSTRONG AVE", "ARMSTRONG", "AVE" ]
        ,
        [ 190, "D3CFC8A0-2A5A-40F3-8225-AC942545F0E3", 190, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARNOLD AVE", "ARNOLD", "AVE" ]
        ,
        [ 191, "8694CC91-3C4D-48C6-AFD0-0980C06D0020", 191, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARROYO WAY", "ARROYO", "WAY" ]
        ,
        [ 192, "B543821E-77CD-44E8-B2E4-4BFADC47D0B4", 192, 1413041315, "403253", 1413041315, "403253", "{\n}", "ARTHUR AVE", "ARTHUR", "AVE" ]
        ,
        [ 193, "D8EF6332-DD1C-49EE-8980-EB56C6F569A1", 193, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASH ST", "ASH", "ST" ]
        ,
        [ 194, "DBE73EB1-CFFD-4282-AB5B-B63AF71D861E", 194, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASHBURTON PL", "ASHBURTON", "PL" ]
        ,
        [ 195, "B9CE19B9-F14C-40F4-A15A-AAD000EE463B", 195, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASHBURY ST", "ASHBURY", "ST" ]
        ,
        [ 196, "BD58D6A4-8062-4E0B-A056-923FDCED1F9F", 196, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASHBURY TER", "ASHBURY", "TER" ]
        ,
        [ 197, "691DD67A-05D2-4B2A-A180-7CC08C60E1C2", 197, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASHTON AVE", "ASHTON", "AVE" ]
        ,
        [ 198, "44BCAE49-297E-410E-9130-104460A70CFE", 198, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASHWOOD LN", "ASHWOOD", "LN" ]
        ,
        [ 199, "4A547BD1-3441-4B9F-80BE-85B5099ED25A", 199, 1413041315, "403253", 1413041315, "403253", "{\n}", "ASPEN CT", "ASPEN", "CT" ]
        ,
        [ 200, "3EDAE261-7DBA-412F-B632-20E754953EDD", 200, 1413041315, "403253", 1413041315, "403253", "{\n}", "ATALAYA TER", "ATALAYA", "TER" ]
        ,
        [ 201, "B5A7407B-FD8D-42DE-BE40-511C41758FBC", 201, 1413041315, "403253", 1413041315, "403253", "{\n}", "ATHENS ST", "ATHENS", "ST" ]
        ,
        [ 202, "3495E493-5127-4DDF-BE64-895EFA873E13", 202, 1413041315, "403253", 1413041315, "403253", "{\n}", "ATOLL CIR", "ATOLL", "CIR" ]
        ,
        [ 203, "F446D0C0-FAF9-4D95-9361-5512E43E0CF5", 203, 1413041315, "403253", 1413041315, "403253", "{\n}", "ATTRIDGE ALY", "ATTRIDGE", "ALY" ]
        ,
        [ 204, "DBC78BDD-E29E-4B46-BA3B-1BEF7EBA6250", 204, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUBURN ST", "AUBURN", "ST" ]
        ,
        [ 205, "015B7488-1687-4F1B-BF90-0C4568B95ACF", 205, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUGUST ALY", "AUGUST", "ALY" ]
        ,
        [ 206, "FDC19FFA-CD8D-4357-8CAB-38C7FE6BDB25", 206, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUGUSTA ST", "AUGUSTA", "ST" ]
        ,
        [ 207, "5360B275-B767-4B78-B951-F051D700FD6D", 207, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUSTIN ST", "AUSTIN", "ST" ]
        ,
        [ 208, "B187E0A5-77A9-4EB4-AAC8-B89CF3AFCDB6", 208, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUTO DR", "AUTO", "DR" ]
        ,
        [ 209, "D491E6B6-E4DE-4080-8867-622A09A5EC7E", 209, 1413041315, "403253", 1413041315, "403253", "{\n}", "AUTOMOBILE DR", "AUTOMOBILE", "DR" ]
        ,
        [ 210, "48A64515-C1F7-4A92-AE41-813A7D3E2470", 210, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVALON AVE", "AVALON", "AVE" ]
        ,
        [ 211, "7162747B-7BB8-4EB6-A37F-91C729C29394", 211, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE B", "AVENUE B", null ]
        ,
        [ 212, "98B1E297-5204-4A30-BD28-AD620AD8B454", 212, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE C", "AVENUE C", null ]
        ,
        [ 213, "BE159DB5-659C-4667-AEC0-70345936A799", 213, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE D", "AVENUE D", null ]
        ,
        [ 214, "C3581592-3A5A-4255-91C2-4AB95F435A31", 214, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE E", "AVENUE E", null ]
        ,
        [ 215, "B1AA25DC-B0DF-4D2A-BF3E-A09F06065CAE", 215, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE F", "AVENUE F", null ]
        ,
        [ 216, "0320BC86-571D-4C52-928B-59D6885E4294", 216, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE H", "AVENUE H", null ]
        ,
        [ 217, "0C6B7E5C-BB04-458D-8117-CE803C2FBADE", 217, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE I", "AVENUE I", null ]
        ,
        [ 218, "8B0AE26B-CA9C-4B90-8B4E-F06DD8EABE2C", 218, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE M", "AVENUE M", null ]
        ,
        [ 219, "93CB1E70-0EA9-41A8-AAF3-C953617898CA", 219, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE N", "AVENUE N", null ]
        ,
        [ 220, "8EEA1DB8-98CC-4F29-86B4-64B301FC2B91", 220, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVENUE OF THE PALMS", "AVENUE OF THE PALMS", null ]
        ,
        [ 221, "DCB09DD5-8D0E-4114-9D85-575E191C9271", 221, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVERY ST", "AVERY", "ST" ]
        ,
        [ 222, "A4B96BF0-406D-4AC9-BF78-EF38EE0FC17F", 222, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVILA ST", "AVILA", "ST" ]
        ,
        [ 223, "1AE3378B-C602-41EB-81F3-C0C1C66319F5", 223, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVOCA ALY", "AVOCA", "ALY" ]
        ,
        [ 224, "A4D83584-12D9-43EA-AF22-205C725221E4", 224, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVOCET WAY", "AVOCET", "WAY" ]
        ,
        [ 225, "7274A851-7D72-450F-BCE1-16A35248BF7F", 225, 1413041315, "403253", 1413041315, "403253", "{\n}", "AVON WAY", "AVON", "WAY" ]
        ,
        [ 226, "FBF63746-1DBC-45A0-9032-C3D19C996350", 226, 1413041315, "403253", 1413041315, "403253", "{\n}", "AZTEC ST", "AZTEC", "ST" ]
        ,
        [ 227, "7D82EEFB-071D-4071-90A0-63A3BC6B6815", 227, 1413041315, "403253", 1413041315, "403253", "{\n}", "BACHE ST", "BACHE", "ST" ]
        ,
        [ 228, "24E3699E-8B2E-4386-8130-44BE2310DACB", 228, 1413041315, "403253", 1413041315, "403253", "{\n}", "BACON ST", "BACON", "ST" ]
        ,
        [ 229, "833A1695-4AF8-4DF6-ADF3-45A0FE251FDE", 229, 1413041315, "403253", 1413041315, "403253", "{\n}", "BADEN ST", "BADEN", "ST" ]
        ,
        [ 230, "395EF6AD-ACCD-43DB-9A0A-E62F56C6F031", 230, 1413041315, "403253", 1413041315, "403253", "{\n}", "BADGER ST", "BADGER", "ST" ]
        ,
        [ 231, "DEEA803F-2B87-4A9D-AF0D-35E422E8FF31", 231, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAKER CT", "BAKER", "CT" ]
        ,
        [ 232, "CF59F149-5ACD-4EEB-9FE6-958A05E72E17", 232, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAKER ST", "BAKER", "ST" ]
        ,
        [ 233, "F6C0E994-38DC-4F7F-B1B9-9205E0A2F343", 233, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALANCE ST", "BALANCE", "ST" ]
        ,
        [ 234, "6BBD6866-2FD3-445B-87A0-729709C700BF", 234, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALBOA ST", "BALBOA", "ST" ]
        ,
        [ 235, "5038A2E8-9687-4BC0-B3DB-F80F1EED7F48", 235, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALCETA AVE", "BALCETA", "AVE" ]
        ,
        [ 236, "3814E295-E19F-4266-ACC1-4D441D182C1D", 236, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALDWIN CT", "BALDWIN", "CT" ]
        ,
        [ 237, "451373BE-927B-4FC6-A41F-A098A42D3C4A", 237, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALHI CT", "BALHI", "CT" ]
        ,
        [ 238, "0B3C29F4-F346-4E45-90EB-F67C8CE31105", 238, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALMY ST", "BALMY", "ST" ]
        ,
        [ 239, "5BBA0203-149C-47A5-85E3-005123241425", 239, 1413041315, "403253", 1413041315, "403253", "{\n}", "BALTIMORE WAY", "BALTIMORE", "WAY" ]
        ,
        [ 240, "0F6D021D-A2C2-4CE9-B983-E0D421FA9D1F", 240, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANBURY DR", "BANBURY", "DR" ]
        ,
        [ 241, "0A5A6F7C-BDEB-4721-B7B7-23D050495C4E", 241, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANCROFT AVE", "BANCROFT", "AVE" ]
        ,
        [ 242, "8D830B94-2CC0-425D-A60E-7063DF247CC0", 242, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANK ST", "BANK", "ST" ]
        ,
        [ 243, "240FBA53-403D-4D80-A351-89513C9AF4D6", 243, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANKS ST", "BANKS", "ST" ]
        ,
        [ 244, "6677A10B-5DE3-4D90-AAF6-90D54CFEA253", 244, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANNAN PL", "BANNAN", "PL" ]
        ,
        [ 245, "DE700D27-983C-48C5-A3C1-1B58D5DE777D", 245, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANNEKER WAY", "BANNEKER", "WAY" ]
        ,
        [ 246, "A9903004-7098-4306-B2BD-02D562F5F262", 246, 1413041315, "403253", 1413041315, "403253", "{\n}", "BANNOCK ST", "BANNOCK", "ST" ]
        ,
        [ 247, "E5AE604F-6C4A-4433-8413-0DB79D4522F7", 247, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARCELONA AVE", "BARCELONA", "AVE" ]
        ,
        [ 248, "78E4143F-8B4C-4106-A8B5-10327B2CDA09", 248, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARNARD AVE", "BARNARD", "AVE" ]
        ,
        [ 249, "A7C0C1CF-3075-4BC4-9713-A6A5BA0C8F6E", 249, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARNEVELD AVE", "BARNEVELD", "AVE" ]
        ,
        [ 250, "CFCB163E-54A6-4901-8ABC-2F1CD818B0C1", 250, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARRY CT", "BARRY", "CT" ]
        ,
        [ 251, "BAEB192F-A868-4538-B078-A1DC11759601", 251, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARTLETT ST", "BARTLETT", "ST" ]
        ,
        [ 252, "AA43256C-2CA1-4720-925A-217FDED891A9", 252, 1413041315, "403253", 1413041315, "403253", "{\n}", "BARTOL ST", "BARTOL", "ST" ]
        ,
        [ 253, "E471971C-3608-4F92-A30D-1E1E93F57997", 253, 1413041315, "403253", 1413041315, "403253", "{\n}", "BASS CT", "BASS", "CT" ]
        ,
        [ 254, "2CC44868-CD01-4CAB-A244-F473A0DEEE5C", 254, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY ST", "BATTERY", "ST" ]
        ,
        [ 255, "A07B9F0E-6588-4D59-B855-6BDD7CCD5881", 255, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY BLANEY RD", "BATTERY BLANEY", "RD" ]
        ,
        [ 256, "F3E75E23-796A-49BB-9B4E-649D2334984B", 256, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY CAULFIELD RD", "BATTERY CAULFIELD", "RD" ]
        ,
        [ 257, "10EA2040-AF14-4AEF-98AE-5CFE0FC72A3C", 257, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY CHAMBERLIN RD", "BATTERY CHAMBERLIN", "RD" ]
        ,
        [ 258, "B6445D26-C61C-43C3-B462-D7820D672F0A", 258, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY CRANSTON RD", "BATTERY CRANSTON", "RD" ]
        ,
        [ 259, "9A3D91D4-2F88-40FF-BDDC-29CD7FEF760B", 259, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY CROSBY RD", "BATTERY CROSBY", "RD" ]
        ,
        [ 260, "0AA92115-AAC9-4829-AB7E-88A31C831C80", 260, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY DYNAMITE RD", "BATTERY DYNAMITE", "RD" ]
        ,
        [ 261, "0848907A-C7D5-4CC8-AE9E-476021D6A6DB", 261, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY EAST RD", "BATTERY EAST", "RD" ]
        ,
        [ 262, "9721520A-471A-48AE-979E-1160FC604418", 262, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY SAFFORD RD", "BATTERY SAFFORD", "RD" ]
        ,
        [ 263, "1C0D6AF4-FA2B-4514-A800-0A13DFDABEDE", 263, 1413041315, "403253", 1413041315, "403253", "{\n}", "BATTERY WAGNER RD", "BATTERY WAGNER", "RD" ]
        ,
        [ 264, "3D6D9DB6-9F02-440A-AC8C-982770F73D43", 264, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAXTER ALY", "BAXTER", "ALY" ]
        ,
        [ 265, "22AF126F-EBEF-4187-89CA-1B75B5B5E700", 265, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAY ST", "BAY", "ST" ]
        ,
        [ 266, "405E98A2-A6B5-4BB8-AF4F-3BE23BB11E08", 266, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAY SHORE BLVD", "BAY SHORE", "BLVD" ]
        ,
        [ 267, "1C74A707-BB9F-4A98-928D-3B26B922328B", 267, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAY SHORE BLVD OFF RAMP", "BAY SHORE BLVD OFF", "RAMP" ]
        ,
        [ 268, "664221E8-39BD-47D3-9B30-7FE40C2B9D44", 268, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAY SHORE BLVD ON RAMP", "BAY SHORE BLVD ON", "RAMP" ]
        ,
        [ 269, "032DE8EA-EA75-478E-805B-8AC28F4980D3", 269, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAY VIEW ST", "BAY VIEW", "ST" ]
        ,
        [ 270, "5822EEF6-CFE9-43FF-8B68-1220BD11C883", 270, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAYSIDE DR", "BAYSIDE", "DR" ]
        ,
        [ 271, "C7D708D7-1847-46D5-8700-B4D9E47CE2FD", 271, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAYSIDE VILLAGE PL", "BAYSIDE VILLAGE", "PL" ]
        ,
        [ 272, "93250FEF-1743-4946-ABB5-0C47E56A8D44", 272, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAYVIEW CIR", "BAYVIEW", "CIR" ]
        ,
        [ 273, "FB5FA63A-1A24-4232-8B25-C857A0030F33", 273, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAYVIEW PARK RD", "BAYVIEW PARK", "RD" ]
        ,
        [ 274, "EE5D27DF-75DB-4841-BD91-12C653CC232B", 274, 1413041315, "403253", 1413041315, "403253", "{\n}", "BAYWOOD CT", "BAYWOOD", "CT" ]
        ,
        [ 275, "F8D4D8D3-031B-4AC8-A535-09F0941C2F29", 275, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEACH ST", "BEACH", "ST" ]
        ,
        [ 276, "14BD7B92-4EC7-4223-B6BD-713B7DF2BB4D", 276, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEACHMONT DR", "BEACHMONT", "DR" ]
        ,
        [ 277, "1D131011-26D8-41BD-8824-1F97300C6C9C", 277, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEACON ST", "BEACON", "ST" ]
        ,
        [ 278, "5C6A82A3-F73B-4309-BA66-7322EAD2F5A9", 278, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEALE ST", "BEALE", "ST" ]
        ,
        [ 279, "73CF1BCD-DADB-442B-898F-B86D3EB48206", 279, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEATRICE LN", "BEATRICE", "LN" ]
        ,
        [ 280, "15A73EA8-0D13-4E27-807A-B06B80FC24A4", 280, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEAUMONT AVE", "BEAUMONT", "AVE" ]
        ,
        [ 281, "01E829FB-9B04-4B89-9C22-6A401BC50118", 281, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEAVER ST", "BEAVER", "ST" ]
        ,
        [ 282, "1C0993CC-E939-4EF4-82D1-D7831EEDFFF7", 282, 1413041315, "403253", 1413041315, "403253", "{\n}", "BECKETT ST", "BECKETT", "ST" ]
        ,
        [ 283, "EB9F2BEC-6085-48BF-92BB-28650F8F0516", 283, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEDFORD PL", "BEDFORD", "PL" ]
        ,
        [ 284, "28A2A1F7-DFE1-4EE6-A754-2871DA18D1A4", 284, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEEMAN LN", "BEEMAN", "LN" ]
        ,
        [ 285, "3DCC33C8-325D-47E6-A968-A326A1BCF543", 285, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEHR AVE", "BEHR", "AVE" ]
        ,
        [ 286, "C2248AE3-06BE-4CF9-8B9E-33FC3BC7E3DF", 286, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEIDEMAN ST", "BEIDEMAN", "ST" ]
        ,
        [ 287, "34F55387-8596-4AE1-98FF-FBCD8C2F8EB2", 287, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELCHER ST", "BELCHER", "ST" ]
        ,
        [ 288, "0275258E-9264-423F-8259-C1F43301337D", 288, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELDEN ST", "BELDEN", "ST" ]
        ,
        [ 289, "42C23EB7-C06B-48CD-8ABB-64127344D65A", 289, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELGRAVE AVE", "BELGRAVE", "AVE" ]
        ,
        [ 290, "2E04C53E-A1C6-4240-BB7A-D29B61E9773D", 290, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELL CT", "BELL", "CT" ]
        ,
        [ 291, "ABBB1D38-B596-42C6-AF5D-8CD7DFB72942", 291, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELLA VISTA WAY", "BELLA VISTA", "WAY" ]
        ,
        [ 292, "917F2065-6DFC-4D68-82CD-209E5B502919", 292, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELLAIR PL", "BELLAIR", "PL" ]
        ,
        [ 293, "B7E61CD6-BC27-45AB-8CB3-EEA5C1BAC696", 293, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELLE AVE", "BELLE", "AVE" ]
        ,
        [ 294, "3677D112-004D-4C6C-B4C2-6B356FC01924", 294, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELLES ST", "BELLES", "ST" ]
        ,
        [ 295, "60FD94DF-536D-4CD4-9A09-42A8ECE0E6ED", 295, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELLEVUE AVE", "BELLEVUE", "AVE" ]
        ,
        [ 296, "3D0182F6-49BB-4D48-8097-DA45CCAD74F6", 296, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELMONT AVE", "BELMONT", "AVE" ]
        ,
        [ 297, "07D6263B-2B64-4205-87C0-A4465A8EF6BB", 297, 1413041315, "403253", 1413041315, "403253", "{\n}", "BELVEDERE ST", "BELVEDERE", "ST" ]
        ,
        [ 298, "AD82A27A-6153-4ECE-87FD-EF564F13DB4C", 298, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEMIS ST", "BEMIS", "ST" ]
        ,
        [ 299, "EC1D3E79-C84B-4378-9F22-84FD528DB1D3", 299, 1413041315, "403253", 1413041315, "403253", "{\n}", "BENGAL ALY", "BENGAL", "ALY" ]
        ,
        [ 300, "A6713FE2-7F1B-4E37-8A6E-D851F00E4B06", 300, 1413041315, "403253", 1413041315, "403253", "{\n}", "BENNINGTON ST", "BENNINGTON", "ST" ]
        ,
        [ 301, "37C61410-A285-4A0A-B17E-39988DD268BB", 301, 1413041315, "403253", 1413041315, "403253", "{\n}", "BENTON AVE", "BENTON", "AVE" ]
        ,
        [ 302, "A5A4AE34-C79B-4CE2-AD1D-63A14B0A6240", 302, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEPLER ST", "BEPLER", "ST" ]
        ,
        [ 303, "5C548E0F-65D8-4D8F-9217-70EFCCB5A36B", 303, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERCUT ACCESS RD", "BERCUT ACCESS", "RD" ]
        ,
        [ 304, "9E3A6D42-1257-4A79-B90C-68F10A3A2593", 304, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERGEN ALY", "BERGEN", "ALY" ]
        ,
        [ 305, "0894F28E-1AA9-46E5-826D-D5CA60992DB8", 305, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERKELEY WAY", "BERKELEY", "WAY" ]
        ,
        [ 306, "D660B546-5443-4B6F-930A-BC95BF6120B9", 306, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERKSHIRE WAY", "BERKSHIRE", "WAY" ]
        ,
        [ 307, "6F229594-5DBC-47FF-9A45-BA729B0B8F89", 307, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERNAL HEIGHTS BLVD", "BERNAL HEIGHTS", "BLVD" ]
        ,
        [ 308, "AC29A9F8-D772-4E42-B158-F0379453C40E", 308, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERNARD ST", "BERNARD", "ST" ]
        ,
        [ 309, "49AF874B-E635-4F6F-8FCC-B83E60980376", 309, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERNICE ST", "BERNICE", "ST" ]
        ,
        [ 310, "CBB8D4E2-C519-4B40-B5C9-4FDB5D3CAD93", 310, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERNICE RODGERS WAY", "BERNICE RODGERS", "WAY" ]
        ,
        [ 311, "6E585781-07EF-428B-841A-2D8555268434", 311, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERRY ST", "BERRY", "ST" ]
        ,
        [ 312, "20F155C7-DC6A-41E7-A6C8-3507DA4E70D8", 312, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERRY EXTENSION ST", "BERRY EXTENSION", "ST" ]
        ,
        [ 313, "4DAD8594-3021-469B-9B42-54DE00BE9FED", 313, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERTHA LN", "BERTHA", "LN" ]
        ,
        [ 314, "D11E4E63-15B9-4222-884C-15B6DC3C3DC9", 314, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERTIE MINOR LN", "BERTIE MINOR", "LN" ]
        ,
        [ 315, "34A1D13B-8F87-46B9-BA83-F6F608EA3B2A", 315, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERTITA ST", "BERTITA", "ST" ]
        ,
        [ 316, "A8B0FF6C-221D-4E42-8982-E6A490B41F2C", 316, 1413041315, "403253", 1413041315, "403253", "{\n}", "BERWICK PL", "BERWICK", "PL" ]
        ,
        [ 317, "1A85CB6C-DBBC-45FB-8F68-19947310368E", 317, 1413041315, "403253", 1413041315, "403253", "{\n}", "BESSIE ST", "BESSIE", "ST" ]
        ,
        [ 318, "54EF502C-BB4E-4010-B05B-D3F01AFA050F", 318, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEULAH ST", "BEULAH", "ST" ]
        ,
        [ 319, "A7AD20DE-C9EE-44BB-8C7A-2A6BEBAECF96", 319, 1413041315, "403253", 1413041315, "403253", "{\n}", "BEVERLY ST", "BEVERLY", "ST" ]
        ,
        [ 320, "7215E70F-428F-4BCE-B885-F9735868B827", 320, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIGELOW CT", "BIGELOW", "CT" ]
        ,
        [ 321, "0C79BE13-352B-448A-9693-E644AFA42641", 321, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIGLER AVE", "BIGLER", "AVE" ]
        ,
        [ 322, "8F072EC8-D102-473C-87B1-066B99B49584", 322, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIRCH ST", "BIRCH", "ST" ]
        ,
        [ 323, "4F96887B-0CC1-47CF-8249-8310EBE7A58E", 323, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIRCHWOOD CT", "BIRCHWOOD", "CT" ]
        ,
        [ 324, "BA2A32F6-6F21-4588-816E-902C14F7B530", 324, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIRD ST", "BIRD", "ST" ]
        ,
        [ 325, "E8B0B562-0D84-4E9A-81A5-066320217262", 325, 1413041315, "403253", 1413041315, "403253", "{\n}", "BIRMINGHAM RD", "BIRMINGHAM", "RD" ]
        ,
        [ 326, "A16D6DC3-FE4E-4E08-9AEE-CF07F200DB61", 326, 1413041315, "403253", 1413041315, "403253", "{\n}", "BISHOP ST", "BISHOP", "ST" ]
        ,
        [ 327, "3D2F6D06-5AB9-4A41-BC83-57B1ECBCABE2", 327, 1413041315, "403253", 1413041315, "403253", "{\n}", "BITTING AVE", "BITTING", "AVE" ]
        ,
        [ 328, "F64DC014-AFB8-4CF5-A4B6-E273719FEDDA", 328, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLACK PL", "BLACK", "PL" ]
        ,
        [ 329, "B7FDC309-6EE6-4717-8809-D581F6CAD450", 329, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLACKSTONE CT", "BLACKSTONE", "CT" ]
        ,
        [ 330, "5CADFF9E-C404-4C52-95EB-21BDBEDC5345", 330, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLAIR TER", "BLAIR", "TER" ]
        ,
        [ 331, "73295B6C-7073-4239-9BCC-45F3CCCD77CC", 331, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLAIRWOOD LN", "BLAIRWOOD", "LN" ]
        ,
        [ 332, "141BE3C9-2057-47BA-BF2C-EA91F25A5EA1", 332, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLAKE ST", "BLAKE", "ST" ]
        ,
        [ 333, "E7C83438-650C-4138-8AA9-89519694ABDE", 333, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLANCHE ST", "BLANCHE", "ST" ]
        ,
        [ 334, "3C036319-C8F7-412D-A9B6-1B86D9A0CBD9", 334, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLANDY ST", "BLANDY", "ST" ]
        ,
        [ 335, "2BC06A08-64B6-41B7-B2D0-1E47EC8976C2", 335, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLANKEN AVE", "BLANKEN", "AVE" ]
        ,
        [ 336, "2367D37B-DB23-42B9-B5AE-2F530C226D32", 336, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLATCHFORD LN", "BLATCHFORD", "LN" ]
        ,
        [ 337, "3849E9F8-47A6-4C50-9CEF-01E61DDB467B", 337, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLISS CT", "BLISS", "CT" ]
        ,
        [ 338, "555F4C80-BEFC-4516-9CE8-A89DAB171C79", 338, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLISS RD", "BLISS", "RD" ]
        ,
        [ 339, "7214B7A4-8480-4FC1-8103-9CB53D1F7778", 339, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLUXOME ST", "BLUXOME", "ST" ]
        ,
        [ 340, "0F7F1D31-8BF5-4FFC-BA88-F70542B621F6", 340, 1413041315, "403253", 1413041315, "403253", "{\n}", "BLYTHDALE AVE", "BLYTHDALE", "AVE" ]
        ,
        [ 341, "A149AAED-8A15-4A58-B809-FD093285A851", 341, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOALT ST", "BOALT", "ST" ]
        ,
        [ 342, "6CA5A4D5-95B0-4BA2-A250-B38F4A1181E2", 342, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOARDMAN PL", "BOARDMAN", "PL" ]
        ,
        [ 343, "CE054DA4-9C29-41A2-BB07-9DC0B3BA7162", 343, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOB KAUFMAN ALY", "BOB KAUFMAN", "ALY" ]
        ,
        [ 344, "4E1376D5-8F71-44A8-BE6B-57A0C98AF23C", 344, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOCANA ST", "BOCANA", "ST" ]
        ,
        [ 345, "8FCA9EB7-6F4D-416D-932C-255F0EA13879", 345, 1413041315, "403253", 1413041315, "403253", "{\n}", "BONIFACIO ST", "BONIFACIO", "ST" ]
        ,
        [ 346, "3338257B-720F-4240-BCAB-3D19CAC3154A", 346, 1413041315, "403253", 1413041315, "403253", "{\n}", "BONITA ST", "BONITA", "ST" ]
        ,
        [ 347, "FC1895CE-E172-42DB-919A-C6B9500AE94D", 347, 1413041315, "403253", 1413041315, "403253", "{\n}", "BONNIE BRAE LN", "BONNIE BRAE", "LN" ]
        ,
        [ 348, "0A790CEB-0C16-4AC5-9298-DE65ECAEDBF9", 348, 1413041315, "403253", 1413041315, "403253", "{\n}", "BONVIEW ST", "BONVIEW", "ST" ]
        ,
        [ 349, "7F75A416-FEF4-4A8B-9351-4993BAE3EADB", 349, 1413041315, "403253", 1413041315, "403253", "{\n}", "BORICA ST", "BORICA", "ST" ]
        ,
        [ 350, "E4E4F183-DCC2-4D70-BDE7-782C249C306D", 350, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOSWORTH ST", "BOSWORTH", "ST" ]
        ,
        [ 351, "AB49BD32-5B25-45DB-A7A7-370EC290361A", 351, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOUTWELL ST", "BOUTWELL", "ST" ]
        ,
        [ 352, "76D8169F-979C-44A7-B92C-2968A8E4CCCD", 352, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOWDOIN ST", "BOWDOIN", "ST" ]
        ,
        [ 353, "31297FA1-2DCA-49E6-9DAF-292A26EFC16B", 353, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOWLEY CT", "BOWLEY", "CT" ]
        ,
        [ 354, "350E854E-6170-4197-AF3C-A039CB620B08", 354, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOWLEY ST", "BOWLEY", "ST" ]
        ,
        [ 355, "9B5B7597-764E-41D8-A3A6-A712CBD94010", 355, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOWLING GREEN DR", "BOWLING GREEN", "DR" ]
        ,
        [ 356, "A5CC9FF6-14BC-4507-A613-7CC8D5A423B3", 356, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOWMAN CT", "BOWMAN", "CT" ]
        ,
        [ 357, "B076D818-25D1-4C72-88DC-DFBE00123611", 357, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOYD ST", "BOYD", "ST" ]
        ,
        [ 358, "EB5BFBFD-9EEE-499F-BD23-8B3377D0B187", 358, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOYLSTON ST", "BOYLSTON", "ST" ]
        ,
        [ 359, "7F86DBAD-98BA-47E0-87A1-556B58D8475B", 359, 1413041315, "403253", 1413041315, "403253", "{\n}", "BOYNTON CT", "BOYNTON", "CT" ]
        ,
        [ 360, "465A080E-C68F-4FEA-BBDF-2ECF789654FD", 360, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRADFORD ST", "BRADFORD", "ST" ]
        ,
        [ 361, "56AFB662-0283-4034-8446-963D7D4466F7", 361, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRADY ST", "BRADY", "ST" ]
        ,
        [ 362, "AC5F95BB-C272-40BC-A157-A122DBD10A39", 362, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRANNAN ST", "BRANNAN", "ST" ]
        ,
        [ 363, "4CCC15DB-9A21-4D4E-8F33-2BEA3CCE5033", 363, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRANT ALY", "BRANT", "ALY" ]
        ,
        [ 364, "0A15D71F-4BA0-4424-BED6-56C4D0BD5DDF", 364, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRAZIL AVE", "BRAZIL", "AVE" ]
        ,
        [ 365, "B0C565FD-D4C1-4462-976D-816A8668624B", 365, 1413041315, "403253", 1413041315, "403253", "{\n}", "BREEN PL", "BREEN", "PL" ]
        ,
        [ 366, "4AD3141C-859A-469B-A9F9-725FC502F1D9", 366, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRENTWOOD AVE", "BRENTWOOD", "AVE" ]
        ,
        [ 367, "14B9E16F-A6BC-46AB-B2BB-9E0CE468F878", 367, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRET HARTE TER", "BRET HARTE", "TER" ]
        ,
        [ 368, "D93699DC-D94C-40D9-817D-E684B0E96FD2", 368, 1413041315, "403253", 1413041315, "403253", "{\n}", "BREWSTER ST", "BREWSTER", "ST" ]
        ,
        [ 369, "A984FE6F-4929-409B-8747-4D93868C7FFE", 369, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRICE TER", "BRICE", "TER" ]
        ,
        [ 370, "3B5E23BE-773A-4B42-9515-C4B851E62EBF", 370, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRIDGEVIEW DR", "BRIDGEVIEW", "DR" ]
        ,
        [ 371, "194EE2C3-0C44-4314-9DF9-C180AC862087", 371, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRIDGEVIEW WAY", "BRIDGEVIEW", "WAY" ]
        ,
        [ 372, "D56FD9B0-DA28-46AD-B913-74E223A37762", 372, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRIGHT ST", "BRIGHT", "ST" ]
        ,
        [ 373, "509F063F-DDEA-44D9-9BC1-2FAFDEEEC637", 373, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRIGHTON AVE", "BRIGHTON", "AVE" ]
        ,
        [ 374, "7D874F89-C650-4A86-B0C9-E28E05322CC5", 374, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRITTON ST", "BRITTON", "ST" ]
        ,
        [ 375, "27620CCE-F7D0-4C05-BDAB-F98553706789", 375, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROAD ST", "BROAD", "ST" ]
        ,
        [ 376, "048CC074-F454-47D1-B80F-F76733B831ED", 376, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROADMOOR DR", "BROADMOOR", "DR" ]
        ,
        [ 377, "E4D679D1-E2D2-4D7B-8998-443A00C5D0B2", 377, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROADWAY", "BROADWAY", null ]
        ,
        [ 378, "661547A5-A366-42E7-9FBD-C80CF62665EB", 378, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRODERICK ST", "BRODERICK", "ST" ]
        ,
        [ 379, "F6764934-B953-4851-8269-B43D621CB74F", 379, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROMLEY PL", "BROMLEY", "PL" ]
        ,
        [ 380, "34BD297E-DC34-4253-8AFF-A4B40A063BF9", 380, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROMPTON AVE", "BROMPTON", "AVE" ]
        ,
        [ 381, "090EA7FA-8DF6-4476-9CE1-280700CBF119", 381, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRONTE ST", "BRONTE", "ST" ]
        ,
        [ 382, "DE48214E-3181-4ACE-BBEB-4A54E2C5DD78", 382, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROOK ST", "BROOK", "ST" ]
        ,
        [ 383, "2075E7B9-D240-43A5-82DC-6AF04C02FB4B", 383, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROOKDALE AVE", "BROOKDALE", "AVE" ]
        ,
        [ 384, "A36E4EBA-25C6-4000-9BBD-1B17D1C39CF4", 384, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROOKHAVEN LN", "BROOKHAVEN", "LN" ]
        ,
        [ 385, "6730CA3D-ABCF-443A-AB93-8CA60583434B", 385, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROOKLYN PL", "BROOKLYN", "PL" ]
        ,
        [ 386, "A322D573-5299-4FE5-A8F0-EA6DE87D8D5C", 386, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROOKS ST", "BROOKS", "ST" ]
        ,
        [ 387, "E88CA9EB-D65C-4027-AD8B-4AA3877A4F0E", 387, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROSNAN ST", "BROSNAN", "ST" ]
        ,
        [ 388, "BEB3C448-2583-4635-9BB4-87ACE8DF4DC2", 388, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROTHERHOOD WAY", "BROTHERHOOD", "WAY" ]
        ,
        [ 389, "A09FD265-1180-4F1F-A565-64F44DB87977", 389, 1413041315, "403253", 1413041315, "403253", "{\n}", "BROWN ST", "BROWN", "ST" ]
        ,
        [ 390, "B59127F2-1F6D-4DDB-9A04-2C14D75A9451", 390, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUCE AVE", "BRUCE", "AVE" ]
        ,
        [ 391, "2BCBFD83-690C-466A-BD1A-3467805036E6", 391, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUMISS TER", "BRUMISS", "TER" ]
        ,
        [ 392, "6C5FD3FE-3EFC-40D5-A9F0-ED4754B6FF61", 392, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUNSWICK ST", "BRUNSWICK", "ST" ]
        ,
        [ 393, "22BD7217-2D71-41C8-8D08-D4DF3EBA2D58", 393, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUSH LN", "BRUSH", "LN" ]
        ,
        [ 394, "485B4D32-F112-4C57-B2DD-B5869A7F95A1", 394, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUSH PL", "BRUSH", "PL" ]
        ,
        [ 395, "3C724521-32D3-4446-A215-AA721BEC2313", 395, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRUSSELS ST", "BRUSSELS", "ST" ]
        ,
        [ 396, "952A1588-6628-4351-A887-84005EF78C74", 396, 1413041315, "403253", 1413041315, "403253", "{\n}", "BRYANT ST", "BRYANT", "ST" ]
        ,
        [ 397, "93C84A16-7A2C-4F56-87BA-6D213A3910D8", 397, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUCARELI DR", "BUCARELI", "DR" ]
        ,
        [ 398, "625701AD-12E6-4E03-B6BD-F1B6865369DB", 398, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUCHANAN ST", "BUCHANAN", "ST" ]
        ,
        [ 399, "9296AED4-B4B0-43B4-B229-606DB36927CF", 399, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUCKINGHAM WAY", "BUCKINGHAM", "WAY" ]
        ,
        [ 400, "7C90BEF3-F822-4780-AD3B-70D5D6200336", 400, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUENA VISTA AVE EAST", "BUENA VISTA", "AVE" ]
        ,
        [ 401, "5AB7F17A-B72C-41FF-9404-688856BFD7DA", 401, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUENA VISTA AVE WEST", "BUENA VISTA", "AVE" ]
        ,
        [ 402, "AB45EA53-3E3E-41D3-84FB-6B05AB3D11DA", 402, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUENA VISTA TER", "BUENA VISTA", "TER" ]
        ,
        [ 403, "B7DBF9DB-64EF-4838-A3BE-DA417BE4B685", 403, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURGOYNE ST", "BURGOYNE", "ST" ]
        ,
        [ 404, "6C442A6F-C845-4329-8175-798DCBA80CA9", 404, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURKE AVE", "BURKE", "AVE" ]
        ,
        [ 405, "D1D05CFF-5FD5-4416-9CD6-371DA49B4D64", 405, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURLWOOD DR", "BURLWOOD", "DR" ]
        ,
        [ 406, "1D09260D-2340-4C2E-A055-7CAED9C41B62", 406, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURNETT AVE", "BURNETT", "AVE" ]
        ,
        [ 407, "801B6580-E215-4959-8B72-50CDF1951DF4", 407, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURNETT AVE NORTH", "BURNETT", "AVE" ]
        ,
        [ 408, "9253C40D-2462-4B2E-A31D-C8A976A6CCCB", 408, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURNS PL", "BURNS", "PL" ]
        ,
        [ 409, "2530185F-0D83-4F18-8AF7-2A84B323868C", 409, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURNSIDE AVE", "BURNSIDE", "AVE" ]
        ,
        [ 410, "84D46DCA-2357-462A-8A5F-0F7C27CD2E11", 410, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURR AVE", "BURR", "AVE" ]
        ,
        [ 411, "C8D7A1BE-908D-43C3-85E4-711D04710963", 411, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURRITT ST", "BURRITT", "ST" ]
        ,
        [ 412, "AE329E1F-708F-44F9-99AF-FB7D7ADE6901", 412, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURROWS DR", "BURROWS", "DR" ]
        ,
        [ 413, "5E1B9F13-0808-4110-B1F3-3E0BB87BBEE1", 413, 1413041315, "403253", 1413041315, "403253", "{\n}", "BURROWS ST", "BURROWS", "ST" ]
        ,
        [ 414, "B4BF186A-8157-4AA0-9FD9-61AE8EA2D822", 414, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUSH ST", "BUSH", "ST" ]
        ,
        [ 415, "FEE5DE4D-FCD5-48E1-8E7B-A509B36CCE04", 415, 1413041315, "403253", 1413041315, "403253", "{\n}", "BUTTE PL", "BUTTE", "PL" ]
        ,
        [ 416, "491BB615-35E0-4DBB-BE23-7654F41994A4", 416, 1413041315, "403253", 1413041315, "403253", "{\n}", "BYRON CT", "BYRON", "CT" ]
        ,
        [ 417, "D3DE5215-45EA-40C0-BD6B-805DA82618CE", 417, 1413041315, "403253", 1413041315, "403253", "{\n}", "BYXBEE ST", "BYXBEE", "ST" ]
        ,
        [ 418, "A613AB18-1AF8-4F55-ACB2-525D666C3D93", 418, 1413041315, "403253", 1413041315, "403253", "{\n}", "C ST", "C", "ST" ]
        ,
        [ 419, "DDB11598-BA3D-4AC0-99FA-7F71CBC6B581", 419, 1413041315, "403253", 1413041315, "403253", "{\n}", "CABRILLO ST", "CABRILLO", "ST" ]
        ,
        [ 420, "2B533DA3-008A-4FCC-BCB3-C9820A202A27", 420, 1413041315, "403253", 1413041315, "403253", "{\n}", "CADELL PL", "CADELL", "PL" ]
        ,
        [ 421, "9DB4C7AE-3E6D-4EE1-9CCB-2BD0C297B662", 421, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAINE AVE", "CAINE", "AVE" ]
        ,
        [ 422, "97959C7D-BC2E-4FD0-B68D-0F0740CE2A11", 422, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAIRE TER", "CAIRE", "TER" ]
        ,
        [ 423, "47B4B6F6-47D0-4A62-9938-86408B68EDC6", 423, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALEDONIA ST", "CALEDONIA", "ST" ]
        ,
        [ 424, "F3C11DD6-BB06-436A-9F57-8A0C8055DC21", 424, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALGARY ST", "CALGARY", "ST" ]
        ,
        [ 425, "4393AF19-51A2-472A-9092-135763200546", 425, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALHOUN TER", "CALHOUN", "TER" ]
        ,
        [ 426, "51E2A407-3C25-473E-A77B-45B2E660E416", 426, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALIFORNIA AVE", "CALIFORNIA", "AVE" ]
        ,
        [ 427, "D8F73843-BC7A-4624-AA59-B5BC572A9963", 427, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALIFORNIA ST", "CALIFORNIA", "ST" ]
        ,
        [ 428, "D1CE73A1-55AC-48CF-9AB3-27BF7E03C4CA", 428, 1413041315, "403253", 1413041315, "403253", "{\n}", "CALVERT DR", "CALVERT", "DR" ]
        ,
        [ 429, "FC032306-AEC0-4B2E-95C1-891EFF458EC8", 429, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMBON DR", "CAMBON", "DR" ]
        ,
        [ 430, "A4EED8A1-664E-4FAB-B240-B0AF764ECEA7", 430, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMBRIDGE ST", "CAMBRIDGE", "ST" ]
        ,
        [ 431, "4422D661-A6AF-4270-B17D-E3DF988D3504", 431, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMELLIA AVE", "CAMELLIA", "AVE" ]
        ,
        [ 432, "092F231C-2F44-4003-9869-41D2E38A2B58", 432, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMEO WAY", "CAMEO", "WAY" ]
        ,
        [ 433, "A536A71B-807C-43CB-9290-C6D222A33DEC", 433, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMERON WAY", "CAMERON", "WAY" ]
        ,
        [ 434, "1DE45306-EFF1-4F36-B063-93B0D45EAD70", 434, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMP ST", "CAMP", "ST" ]
        ,
        [ 435, "92B7B99C-FF93-4EAE-82C8-442DB5827109", 435, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMPBELL AVE", "CAMPBELL", "AVE" ]
        ,
        [ 436, "3B08A92E-0117-4379-9583-0DE6A709E097", 436, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMPTON PL", "CAMPTON", "PL" ]
        ,
        [ 437, "D24E2BFA-9FAF-4ABB-9E24-F2A21FCD6D72", 437, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMPUS LN", "CAMPUS", "LN" ]
        ,
        [ 438, "BA30CE11-93B3-4526-84F0-C8613BEDC3F4", 438, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAMPUS WAY", "CAMPUS", "WAY" ]
        ,
        [ 439, "A2B98EAF-40B6-4BEC-8397-548720136CFD", 439, 1413041315, "403253", 1413041315, "403253", "{\n}", "CANBY LN", "CANBY", "LN" ]
        ,
        [ 440, "91C95981-5C15-4B2B-9FFF-BBD53D1A857C", 440, 1413041315, "403253", 1413041315, "403253", "{\n}", "CANBY ST", "CANBY", "ST" ]
        ,
        [ 441, "226D7EF8-3E15-4FAD-A223-929A8FCF6AEF", 441, 1413041315, "403253", 1413041315, "403253", "{\n}", "CANDLESTICK COVE WAY", "CANDLESTICK COVE", "WAY" ]
        ,
        [ 442, "B7BDB0EB-FC65-4DD3-9B1D-2D0AF176ED56", 442, 1413041315, "403253", 1413041315, "403253", "{\n}", "CANDLESTICK POINT SRA", "CANDLESTICK POINT SRA", null ]
        ,
        [ 443, "25F2C50F-F060-4B94-B1B7-62F9EE2E3C35", 443, 1413041315, "403253", 1413041315, "403253", "{\n}", "CANYON DR", "CANYON", "DR" ]
        ,
        [ 444, "152A5C8A-53CB-4676-AAC8-A543D6A6DF68", 444, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAPISTRANO AVE", "CAPISTRANO", "AVE" ]
        ,
        [ 445, "233AD5A4-862C-423C-948B-8DD70DB0A76A", 445, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAPITOL AVE", "CAPITOL", "AVE" ]
        ,
        [ 446, "5F3342BB-3421-4AFF-99A1-A1EF40995417", 446, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAPP ST", "CAPP", "ST" ]
        ,
        [ 447, "6E47F7CE-072A-48C3-BFCD-E25EF5908CD4", 447, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAPRA WAY", "CAPRA", "WAY" ]
        ,
        [ 448, "E9B84C22-7E4C-4E4A-B687-0CB56AC72160", 448, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARD ALY", "CARD", "ALY" ]
        ,
        [ 449, "8078345C-05CA-46B4-9AD7-D1FB600B2E92", 449, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARDENAS AVE", "CARDENAS", "AVE" ]
        ,
        [ 450, "27D4E4CB-D2DE-4C5A-976B-42BF49C2574F", 450, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARGO WAY", "CARGO", "WAY" ]
        ,
        [ 451, "3C6636DD-22F6-49B1-A101-C2A86ACF402A", 451, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARL ST", "CARL", "ST" ]
        ,
        [ 452, "8000A9EA-62AB-46A4-9781-7437F5AC876A", 452, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARMEL ST", "CARMEL", "ST" ]
        ,
        [ 453, "5DC69CD8-C44D-4193-B70D-5502DE1CE107", 453, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARMELITA ST", "CARMELITA", "ST" ]
        ,
        [ 454, "DEED1EB9-2EBE-4E43-B06B-003CE41B1B78", 454, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARNELIAN WAY", "CARNELIAN", "WAY" ]
        ,
        [ 455, "70768111-228E-43F0-BB70-09981CE27932", 455, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAROLINA ST", "CAROLINA", "ST" ]
        ,
        [ 456, "4306305A-2B36-4A62-80DF-FA3D839DCC10", 456, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARPENTER CT", "CARPENTER", "CT" ]
        ,
        [ 457, "03A6EB15-BB8B-4A49-B6C9-EAD306772648", 457, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARR ST", "CARR", "ST" ]
        ,
        [ 458, "BB7837BE-AA58-422D-82D0-948B62620E70", 458, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARRIE ST", "CARRIE", "ST" ]
        ,
        [ 459, "F1177E01-8D94-493C-8E56-C6D671A6C118", 459, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARRIZAL ST", "CARRIZAL", "ST" ]
        ,
        [ 460, "2635AB33-C428-4505-86BA-6ABE415E4997", 460, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARROLL AVE", "CARROLL", "AVE" ]
        ,
        [ 461, "2DC89504-2C35-4CA6-BC86-72048CE49E8A", 461, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARSON ST", "CARSON", "ST" ]
        ,
        [ 462, "FEAA72FC-6D0C-4462-A2EE-9EB950E896A5", 462, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARTER ST", "CARTER", "ST" ]
        ,
        [ 463, "8FEDBE0B-EBB3-4861-8830-2C9BBCDACEDD", 463, 1413041315, "403253", 1413041315, "403253", "{\n}", "CARVER ST", "CARVER", "ST" ]
        ,
        [ 464, "953144F8-4B2E-4992-A29B-988152BACDCA", 464, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASA WAY", "CASA", "WAY" ]
        ,
        [ 465, "0A88CD72-F4E4-4EC6-AE4B-B0B0A96C6444", 465, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASCADE WALK", "CASCADE", "WALK" ]
        ,
        [ 466, "D096F2A9-8A4A-4BA0-8ACA-1F943BC5C1CA", 466, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASE ST", "CASE", "ST" ]
        ,
        [ 467, "DBC9F196-3B22-4A4D-9E80-BBEDDF9B2EF5", 467, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASELLI AVE", "CASELLI", "AVE" ]
        ,
        [ 468, "695C3829-9263-49A7-8F99-FE16F026303F", 468, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASHMERE ST", "CASHMERE", "ST" ]
        ,
        [ 469, "B973DEA6-3A27-4B89-AA86-A79DE6EF0D70", 469, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASITAS AVE", "CASITAS", "AVE" ]
        ,
        [ 470, "F079D662-2CD0-40CF-894F-8D7504DAA103", 470, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASSANDRA CT", "CASSANDRA", "CT" ]
        ,
        [ 471, "A8A5C661-90A1-497E-918C-996B99B537D2", 471, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTELO AVE", "CASTELO", "AVE" ]
        ,
        [ 472, "997877F8-9C93-472B-9C20-7AC28C40A6F9", 472, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTENADA AVE", "CASTENADA", "AVE" ]
        ,
        [ 473, "BFD8A72F-33A3-4DAA-9237-87EDCD9D2DCA", 473, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTILLO ST", "CASTILLO", "ST" ]
        ,
        [ 474, "62ED160C-4083-4EB2-ADE8-354D6990E481", 474, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTLE ST", "CASTLE", "ST" ]
        ,
        [ 475, "6C706CEB-992F-4BB2-823B-A715442C4B40", 475, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTLE MANOR AVE", "CASTLE MANOR", "AVE" ]
        ,
        [ 476, "26447A25-BD2F-41C7-AB0C-DBCEE063AFBC", 476, 1413041315, "403253", 1413041315, "403253", "{\n}", "CASTRO ST", "CASTRO", "ST" ]
        ,
        [ 477, "F0BD168F-FB4F-40C7-A620-73D4FB0DBD2C", 477, 1413041315, "403253", 1413041315, "403253", "{\n}", "CATALINA ST", "CATALINA", "ST" ]
        ,
        [ 478, "DC6E489B-5D6F-4D94-852E-A1760691DFA8", 478, 1413041315, "403253", 1413041315, "403253", "{\n}", "CATHERINE CT", "CATHERINE", "CT" ]
        ,
        [ 479, "CF6E4E9A-3652-43BE-B231-1AA4B888634C", 479, 1413041315, "403253", 1413041315, "403253", "{\n}", "CAYUGA AVE", "CAYUGA", "AVE" ]
        ,
        [ 480, "8774B7AB-315E-4B66-9F5E-6F286CCDF6AC", 480, 1413041315, "403253", 1413041315, "403253", "{\n}", "CCSF PARKING LOT", "CCSF PARKING LOT", null ]
        ,
        [ 481, "81EBB658-C81D-4B1D-9C28-00A511091D0C", 481, 1413041315, "403253", 1413041315, "403253", "{\n}", "CECILIA AVE", "CECILIA", "AVE" ]
        ,
        [ 482, "C058776F-B70A-489A-84C5-A4B424006273", 482, 1413041315, "403253", 1413041315, "403253", "{\n}", "CEDAR ST", "CEDAR", "ST" ]
        ,
        [ 483, "65E9982A-DFBA-4E4A-8FA0-F22DBE2EAA37", 483, 1413041315, "403253", 1413041315, "403253", "{\n}", "CEDRO AVE", "CEDRO", "AVE" ]
        ,
        [ 484, "2CA8F5F8-75AF-4829-B647-CF3DC3027781", 484, 1413041315, "403253", 1413041315, "403253", "{\n}", "CENTRAL AVE", "CENTRAL", "AVE" ]
        ,
        [ 485, "1BFD667C-A65D-4879-9328-28F15FE6335B", 485, 1413041315, "403253", 1413041315, "403253", "{\n}", "CENTRAL MAGAZINE RD", "CENTRAL MAGAZINE", "RD" ]
        ,
        [ 486, "DD9C823D-4287-4571-ACFB-6072AADACE38", 486, 1413041315, "403253", 1413041315, "403253", "{\n}", "CENTURY PL", "CENTURY", "PL" ]
        ,
        [ 487, "31B72F75-E135-4DA3-89C4-8CE8469342B0", 487, 1413041315, "403253", 1413041315, "403253", "{\n}", "CERES ST", "CERES", "ST" ]
        ,
        [ 488, "762E41DC-F25D-492A-AB96-2223190709E1", 488, 1413041315, "403253", 1413041315, "403253", "{\n}", "CERRITOS AVE", "CERRITOS", "AVE" ]
        ,
        [ 489, "414211A5-FC63-4F04-80F3-9EB468B4982D", 489, 1413041315, "403253", 1413041315, "403253", "{\n}", "CERVANTES BLVD", "CERVANTES", "BLVD" ]
        ,
        [ 490, "40DFBC9D-7148-4B5D-8D74-0A7ABF290A35", 490, 1413041315, "403253", 1413041315, "403253", "{\n}", "CESAR CHAVEZ ST", "CESAR CHAVEZ", "ST" ]
        ,
        [ 491, "B9D31871-2E2F-45BF-AD6F-27FB091DCC74", 491, 1413041315, "403253", 1413041315, "403253", "{\n}", "CESAR CHAVEZ ON RAMP", "CESAR CHAVEZ ON", "RAMP" ]
        ,
        [ 492, "68CE7FE4-BC24-48D3-AA48-70654BD577C2", 492, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHABOT TER", "CHABOT", "TER" ]
        ,
        [ 493, "3C08DE97-6C0A-4C89-AE54-A2CD7C69F13F", 493, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHAIN OF LAKES DR", "CHAIN OF LAKES", "DR" ]
        ,
        [ 494, "1D87CC3B-135F-4114-8BD7-EC8757AB4FE8", 494, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHANCERY LN", "CHANCERY", "LN" ]
        ,
        [ 495, "2A82C5BB-7629-4319-9199-6502AF5E815A", 495, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHANNEL", "CHANNEL", null ]
        ,
        [ 496, "342FE105-6556-4ADE-BD11-4D20D18F4000", 496, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHANNEL ST", "CHANNEL", "ST" ]
        ,
        [ 497, "8E57D777-BD32-4227-8B3D-6A407C38EC1C", 497, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHAPMAN ST", "CHAPMAN", "ST" ]
        ,
        [ 498, "C483FDF7-2647-47DF-B4A7-55E197D1C134", 498, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHARLES ST", "CHARLES", "ST" ]
        ,
        [ 499, "57C28817-D10B-4686-8794-15F88B1DB1F4", 499, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHARLES J BRENHAM PL", "CHARLES J BRENHAM", "PL" ]
        ,
        [ 500, "1C1FDD15-5ADB-445E-BB2D-4B0B026B8005", 500, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHARLTON CT", "CHARLTON", "CT" ]
        ,
        [ 501, "58AB4363-1EAB-445F-B942-45DEEA4533BD", 501, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHARTER OAK AVE", "CHARTER OAK", "AVE" ]
        ,
        [ 502, "EF402D1F-21C4-4951-86B2-E0C857EC3613", 502, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHASE CT", "CHASE", "CT" ]
        ,
        [ 503, "5BFE413E-A797-4E56-87EC-0601B25C7E37", 503, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHATHAM PL", "CHATHAM", "PL" ]
        ,
        [ 504, "F71E7104-76DC-4E50-B79F-C88FD4A22CAD", 504, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHATTANOOGA ST", "CHATTANOOGA", "ST" ]
        ,
        [ 505, "6733E7EF-D232-4339-9BAA-719DFE295716", 505, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHAVES AVE", "CHAVES", "AVE" ]
        ,
        [ 506, "CC85559C-6FA8-4F1C-BE78-F385B1B732ED", 506, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHENERY ST", "CHENERY", "ST" ]
        ,
        [ 507, "72BC6F42-A6C1-40E4-BCCF-7AC2E0CE7810", 507, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHERRY ST", "CHERRY", "ST" ]
        ,
        [ 508, "F6A661FB-CC0F-414C-88AD-D85B45F80972", 508, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHESLEY ST", "CHESLEY", "ST" ]
        ,
        [ 509, "5E88C19F-CDC8-4378-8594-C33FCCF013B5", 509, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHESTER AVE", "CHESTER", "AVE" ]
        ,
        [ 510, "C50D1D97-D50E-4304-B40D-C144C1546F3B", 510, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHESTNUT ST", "CHESTNUT", "ST" ]
        ,
        [ 511, "32218262-4761-467D-847C-210050D69EE2", 511, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHICAGO WAY", "CHICAGO", "WAY" ]
        ,
        [ 512, "01136052-DA27-429D-95DB-6828B7BC57ED", 512, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHILD ST", "CHILD", "ST" ]
        ,
        [ 513, "CDB637ED-20D0-4B44-85BA-1AB91279104C", 513, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHILTON AVE", "CHILTON", "AVE" ]
        ,
        [ 514, "B2377DF4-CE25-42D8-BF14-6F2A2709A4CF", 514, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHINA BASIN ST", "CHINA BASIN", "ST" ]
        ,
        [ 515, "DAE10993-8059-4273-B764-4D7B1F6DFED4", 515, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHINOOK CT", "CHINOOK", "CT" ]
        ,
        [ 516, "EA58A767-B4B6-44DA-9DE9-E2576964B04C", 516, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHRISTMAS TREE POINT RD", "CHRISTMAS TREE POINT", "RD" ]
        ,
        [ 517, "F9C80243-60F9-46E1-BDA1-D9F9159004F7", 517, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHRISTOPHER DR", "CHRISTOPHER", "DR" ]
        ,
        [ 518, "FFDE2A53-6213-4E68-BDAD-6929F8B84504", 518, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHULA LN", "CHULA", "LN" ]
        ,
        [ 519, "3A6FD4B7-1FEC-462F-B3BD-914F6F6E0E5C", 519, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHUMASERO DR", "CHUMASERO", "DR" ]
        ,
        [ 520, "12434BE2-6E3F-4FDF-8197-83CF5ECBEB9E", 520, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHURCH ST", "CHURCH", "ST" ]
        ,
        [ 521, "60367320-A27B-4CB0-AE50-A73A3E631313", 521, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHURCH ACCESS RD", "CHURCH ACCESS", "RD" ]
        ,
        [ 522, "E4904CEA-CDF7-4093-9CB7-88A5487F24C7", 522, 1413041315, "403253", 1413041315, "403253", "{\n}", "CHURCH PARKING LOT", "CHURCH PARKING LOT", null ]
        ,
        [ 523, "23C3AFB7-16F0-437E-9D97-406954E2EB96", 523, 1413041315, "403253", 1413041315, "403253", "{\n}", "CIELITO DR", "CIELITO", "DR" ]
        ,
        [ 524, "5B9528D6-EA9B-4ABA-BB8E-34C1EF5C93D2", 524, 1413041315, "403253", 1413041315, "403253", "{\n}", "CIRCULAR AVE", "CIRCULAR", "AVE" ]
        ,
        [ 525, "1CD8DF68-FB4B-48AA-89FB-213BA34A4E83", 525, 1413041315, "403253", 1413041315, "403253", "{\n}", "CITYVIEW WAY", "CITYVIEW", "WAY" ]
        ,
        [ 526, "2BB020F4-05CD-4590-BA65-55D29219AE51", 526, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLAIRVIEW CT", "CLAIRVIEW", "CT" ]
        ,
        [ 527, "B38E7B65-6FAB-4F24-A832-44BDBD5F2C8D", 527, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARA ST", "CLARA", "ST" ]
        ,
        [ 528, "DC6C71B1-559B-41FA-A134-AA2357961CF6", 528, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLAREMONT BLVD", "CLAREMONT", "BLVD" ]
        ,
        [ 529, "7AD64856-E0A9-4949-A1BA-4C5C877FA413", 529, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARENCE PL", "CLARENCE", "PL" ]
        ,
        [ 530, "3A14D46E-E992-4B4A-B9C2-FA2046D030C5", 530, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARENDON AVE", "CLARENDON", "AVE" ]
        ,
        [ 531, "6C457F1A-EAF5-47E8-BCAF-BEFF50C3E75C", 531, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARION ALY", "CLARION", "ALY" ]
        ,
        [ 532, "70158D15-BE5D-4315-BA04-23A43E9A357B", 532, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARKE LN", "CLARKE", "LN" ]
        ,
        [ 533, "53C6B33D-BCB3-4394-AEE6-587B93B18F45", 533, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARKE ST", "CLARKE", "ST" ]
        ,
        [ 534, "208812EE-53C6-48AE-8874-94FF0220308E", 534, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLARKSON ST", "CLARKSON", "ST" ]
        ,
        [ 535, "B03329CD-51CB-46EA-AD2D-77F4F215D8D4", 535, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLAUDE LN", "CLAUDE", "LN" ]
        ,
        [ 536, "2C00257E-D574-492B-887C-229F33254388", 536, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLAY ST", "CLAY", "ST" ]
        ,
        [ 537, "778B6614-64A1-49A3-826D-54D47128F4D8", 537, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLAYTON ST", "CLAYTON", "ST" ]
        ,
        [ 538, "0B5CDFAC-706B-441E-AF3F-F5AAB8503266", 538, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEARFIELD DR", "CLEARFIELD", "DR" ]
        ,
        [ 539, "B7B09A28-690C-4BFA-8691-1CD8C7C762B5", 539, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEARVIEW CT", "CLEARVIEW", "CT" ]
        ,
        [ 540, "8001044C-4FE4-4D26-A5E8-AC82846C5606", 540, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEARY CT", "CLEARY", "CT" ]
        ,
        [ 541, "630A26A1-2D1A-4BF2-B35E-D3EEE1D73012", 541, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEMENT ST", "CLEMENT", "ST" ]
        ,
        [ 542, "32D9FA30-4558-42E7-8256-3AA0246DE285", 542, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEMENTINA ST", "CLEMENTINA", "ST" ]
        ,
        [ 543, "64EFE5D7-D069-468E-8265-83E936C96A4C", 543, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEO RAND AVE", "CLEO RAND", "AVE" ]
        ,
        [ 544, "854189B7-CA3E-49ED-BA26-53D2415037C5", 544, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLEVELAND ST", "CLEVELAND", "ST" ]
        ,
        [ 545, "85EEE355-CFE3-4F7D-8FA3-96427762556A", 545, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLIFFORD TER", "CLIFFORD", "TER" ]
        ,
        [ 546, "E73288D4-4366-4AD5-A0A6-DF16BFCDBC28", 546, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLINTON PARK", "CLINTON", "PARK" ]
        ,
        [ 547, "6D5B797C-399B-434C-8114-559E6DA41DD8", 547, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLIPPER ST", "CLIPPER", "ST" ]
        ,
        [ 548, "817F0DE1-3DEB-486D-9B0D-CCCE001FD2B4", 548, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLIPPER TER", "CLIPPER", "TER" ]
        ,
        [ 549, "256FF5DF-6BBD-45B2-A7C7-47D8D103C330", 549, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLIPPER COVE WAY", "CLIPPER COVE", "WAY" ]
        ,
        [ 550, "F5C4458F-987C-4C8F-AC2C-A10E36591DC7", 550, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLOUD", "CLOUD", null ]
        ,
        [ 551, "A285E8C3-2C11-434D-86F7-2C0F33A5020F", 551, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLOUD CIR", "CLOUD", "CIR" ]
        ,
        [ 552, "B3DFADF5-F408-4B7F-8420-D9624253C1CD", 552, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLOVER LN", "CLOVER", "LN" ]
        ,
        [ 553, "8DD6C3EB-865A-4DC1-AE53-D50142ECBFF9", 553, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLOVER ST", "CLOVER", "ST" ]
        ,
        [ 554, "C8206C3D-2CAB-4C5A-90AD-A48132375695", 554, 1413041315, "403253", 1413041315, "403253", "{\n}", "CLYDE ST", "CLYDE", "ST" ]
        ,
        [ 555, "520449E0-76B2-42DA-99CB-91BE03B8F7CD", 555, 1413041315, "403253", 1413041315, "403253", "{\n}", "COCHRANE ST", "COCHRANE", "ST" ]
        ,
        [ 556, "B11BEC20-D2AA-48FE-8FF2-6B7777659FBC", 556, 1413041315, "403253", 1413041315, "403253", "{\n}", "CODMAN PL", "CODMAN", "PL" ]
        ,
        [ 557, "9CC96A85-13B9-4173-BF9B-F6D5A9C81C7F", 557, 1413041315, "403253", 1413041315, "403253", "{\n}", "COHEN PL", "COHEN", "PL" ]
        ,
        [ 558, "B1846E13-7D9A-4834-94CA-463970D3FC36", 558, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLBY ST", "COLBY", "ST" ]
        ,
        [ 559, "90119785-D68F-4A0B-8133-FA4E856E0305", 559, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLE ST", "COLE", "ST" ]
        ,
        [ 560, "108A53BD-73F9-43F9-9579-0456EAD06089", 560, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLEMAN ST", "COLEMAN", "ST" ]
        ,
        [ 561, "07EEB5B1-D7EE-4111-BC40-50F9A3FCC851", 561, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLERIDGE ST", "COLERIDGE", "ST" ]
        ,
        [ 562, "D3AE8891-DB02-4C18-9A78-56E01015D8A2", 562, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLIN PL", "COLIN", "PL" ]
        ,
        [ 563, "B6AB8ECF-F3FC-431C-A3E2-EA020114E461", 563, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLIN P KELLY JR ST", "COLIN P KELLY JR", "ST" ]
        ,
        [ 564, "25612214-17D6-4A8F-8011-316CEB2E36BD", 564, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLLEEN WAY", "COLLEEN", "WAY" ]
        ,
        [ 565, "64073B7E-194D-41DF-8838-4C71CBFC5C1D", 565, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLLEGE AVE", "COLLEGE", "AVE" ]
        ,
        [ 566, "74C23ABB-82DA-4F55-81E0-AAD5794C6F68", 566, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLLEGE TER", "COLLEGE", "TER" ]
        ,
        [ 567, "274601EB-C9C9-4686-94FD-FB60C536AE35", 567, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLLINGWOOD ST", "COLLINGWOOD", "ST" ]
        ,
        [ 568, "7255D3B6-640E-470C-B369-DBA9351B5E49", 568, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLLINS ST", "COLLINS", "ST" ]
        ,
        [ 569, "A78CDC63-89E9-4FC7-98F9-E5F2AECABBA3", 569, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLON AVE", "COLON", "AVE" ]
        ,
        [ 570, "EA18EB2D-A1F8-41AD-BDF5-451C9B31CD8C", 570, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLONIAL WAY", "COLONIAL", "WAY" ]
        ,
        [ 571, "2D5B6C85-5F32-4460-9775-FE65F665302B", 571, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLTON ST", "COLTON", "ST" ]
        ,
        [ 572, "44CC3CEA-003C-41EC-9D7B-607FA9947A40", 572, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLUMBIA SQUARE ST", "COLUMBIA SQUARE", "ST" ]
        ,
        [ 573, "B7858EDA-222A-4894-A924-947E017A77A8", 573, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLUMBUS AVE", "COLUMBUS", "AVE" ]
        ,
        [ 574, "95719139-6B69-44E9-BA8B-21BE2F4C2E31", 574, 1413041315, "403253", 1413041315, "403253", "{\n}", "COLUSA PL", "COLUSA", "PL" ]
        ,
        [ 575, "BF156EBA-878D-4181-BEF1-5C3B29345C99", 575, 1413041315, "403253", 1413041315, "403253", "{\n}", "COMERFORD ST", "COMERFORD", "ST" ]
        ,
        [ 576, "B713E8F3-3C0B-4954-A672-6F607A0DE785", 576, 1413041315, "403253", 1413041315, "403253", "{\n}", "COMMER CT", "COMMER", "CT" ]
        ,
        [ 577, "A91101B5-B47A-4943-A12F-997C3DD8F84B", 577, 1413041315, "403253", 1413041315, "403253", "{\n}", "COMMERCIAL ST", "COMMERCIAL", "ST" ]
        ,
        [ 578, "806523FE-4E87-45EB-93D2-C6AF070799CD", 578, 1413041315, "403253", 1413041315, "403253", "{\n}", "COMMONWEALTH AVE", "COMMONWEALTH", "AVE" ]
        ,
        [ 579, "AA1598D7-CEF0-419A-9C40-A09F979585B8", 579, 1413041315, "403253", 1413041315, "403253", "{\n}", "COMPTON RD", "COMPTON", "RD" ]
        ,
        [ 580, "14D5A337-0B2B-4574-A7B0-CCBD6282C6A0", 580, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONCORD ST", "CONCORD", "ST" ]
        ,
        [ 581, "FC939C7B-351A-401C-B998-1C0D368610C7", 581, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONCOURSE DR", "CONCOURSE", "DR" ]
        ,
        [ 582, "4C5F23FB-F6BE-454B-86DE-5E1D8D977359", 582, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONGDON ST", "CONGDON", "ST" ]
        ,
        [ 583, "58474246-8CF1-4A7D-8524-91CDB5C8C130", 583, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONGO ST", "CONGO", "ST" ]
        ,
        [ 584, "B97644AE-DFC0-4257-9849-A33665E30C5A", 584, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONKLING ST", "CONKLING", "ST" ]
        ,
        [ 585, "5877CDB7-ED3C-4301-8A37-2372A9DB68CF", 585, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONNECTICUT ST", "CONNECTICUT", "ST" ]
        ,
        [ 586, "1AEDC1AF-31EC-4473-A0A5-F83962A43094", 586, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONRAD ST", "CONRAD", "ST" ]
        ,
        [ 587, "4E7AECC6-27A9-4E1D-B394-975297DB34DA", 587, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONSERVATORY DR EAST", "CONSERVATORY", "DR" ]
        ,
        [ 588, "C79A9390-A760-4502-A352-3EC1F9F1BE44", 588, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONSERVATORY DR WEST", "CONSERVATORY", "DR" ]
        ,
        [ 589, "B4924186-2FC7-4C86-A906-95A3808C860A", 589, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONSERVATORY ACCESS RD", "CONSERVATORY ACCESS", "RD" ]
        ,
        [ 590, "9E626E59-EF10-4F68-8916-06CFC6AD66EB", 590, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONSTANSO WAY", "CONSTANSO", "WAY" ]
        ,
        [ 591, "EAC913A0-FBCA-4E09-B7B7-E1C35C23B474", 591, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONTINUUM WAY", "CONTINUUM", "WAY" ]
        ,
        [ 592, "2ABAEFEF-0140-43DC-ACBF-2E8E18831C7C", 592, 1413041315, "403253", 1413041315, "403253", "{\n}", "CONVERSE ST", "CONVERSE", "ST" ]
        ,
        [ 593, "5F104BD1-0F54-445D-A4A8-7962DBD81DFB", 593, 1413041315, "403253", 1413041315, "403253", "{\n}", "COOK ST", "COOK", "ST" ]
        ,
        [ 594, "A6119C70-DC69-4C54-9282-226740B96679", 594, 1413041315, "403253", 1413041315, "403253", "{\n}", "COOPER ALY", "COOPER", "ALY" ]
        ,
        [ 595, "649A868F-3867-43EC-809D-D917A858B3C7", 595, 1413041315, "403253", 1413041315, "403253", "{\n}", "COPPER ALY", "COPPER", "ALY" ]
        ,
        [ 596, "000EEDBE-E8CD-4ABE-80B8-3487BA08759C", 596, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORA ST", "CORA", "ST" ]
        ,
        [ 597, "0EF749FA-BFAA-4B12-A06F-4E02C2F3F878", 597, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORAL CT", "CORAL", "CT" ]
        ,
        [ 598, "1771B144-209B-406E-8A96-31613A4561F4", 598, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORAL RD", "CORAL", "RD" ]
        ,
        [ 599, "489EDB0A-A3ED-40B4-B085-0C68698CB851", 599, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORALINO LN", "CORALINO", "LN" ]
        ,
        [ 600, "E1180A9F-3A19-4993-9960-CA6322005E19", 600, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORBETT AVE", "CORBETT", "AVE" ]
        ,
        [ 601, "699213BA-C75B-4218-923F-ECD22E8BE13F", 601, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORBIN PL", "CORBIN", "PL" ]
        ,
        [ 602, "0C813CB9-F607-4F1C-8C9E-36F6912E8ED7", 602, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORDELIA ST", "CORDELIA", "ST" ]
        ,
        [ 603, "114CB5D7-2D2A-4111-8663-BB0E06C1B816", 603, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORDOVA ST", "CORDOVA", "ST" ]
        ,
        [ 604, "86103D36-93B3-4330-B2D9-9D46A39FCAE7", 604, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORNWALL ST", "CORNWALL", "ST" ]
        ,
        [ 605, "4F05936B-5315-4011-9C22-05F0F1D7D2C4", 605, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORONA ST", "CORONA", "ST" ]
        ,
        [ 606, "6E5711F2-6862-4931-B26E-BBCC0CBA152A", 606, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORONADO ST", "CORONADO", "ST" ]
        ,
        [ 607, "0F6F5C8D-6448-4065-91C1-B798A5BB6797", 607, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORTES AVE", "CORTES", "AVE" ]
        ,
        [ 608, "17338538-25E8-45E2-94AB-A86727DFE9B4", 608, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORTLAND AVE", "CORTLAND", "AVE" ]
        ,
        [ 609, "7D2319DB-CE27-4E6F-AF28-F7B0762801B5", 609, 1413041315, "403253", 1413041315, "403253", "{\n}", "CORWIN ST", "CORWIN", "ST" ]
        ,
        [ 610, "B52D9B34-6219-4522-BD7E-36C0D835C466", 610, 1413041315, "403253", 1413041315, "403253", "{\n}", "COSGROVE ST", "COSGROVE", "ST" ]
        ,
        [ 611, "53AE597F-474B-433A-A898-6D8A8B5E647E", 611, 1413041315, "403253", 1413041315, "403253", "{\n}", "COSMO PL", "COSMO", "PL" ]
        ,
        [ 612, "95DB61CB-744B-4D67-BE0D-8A199A476A16", 612, 1413041315, "403253", 1413041315, "403253", "{\n}", "COSO AVE", "COSO", "AVE" ]
        ,
        [ 613, "3335F70C-9206-4322-9C4B-7B4A6D1CF578", 613, 1413041315, "403253", 1413041315, "403253", "{\n}", "COSTA ST", "COSTA", "ST" ]
        ,
        [ 614, "0CE547B0-1FAF-404D-A60A-3313980FC468", 614, 1413041315, "403253", 1413041315, "403253", "{\n}", "COTTAGE ROW", "COTTAGE", "ROW" ]
        ,
        [ 615, "FFBBB374-15AD-460E-AE88-84A9DF656C39", 615, 1413041315, "403253", 1413041315, "403253", "{\n}", "COTTER ST", "COTTER", "ST" ]
        ,
        [ 616, "37C504FF-1C13-4F2B-BF8D-6F033F2E30E4", 616, 1413041315, "403253", 1413041315, "403253", "{\n}", "COUNTRY CLUB DR", "COUNTRY CLUB", "DR" ]
        ,
        [ 617, "DC513046-FB73-4051-8B54-29ECD5D3AB32", 617, 1413041315, "403253", 1413041315, "403253", "{\n}", "COVENTRY CT", "COVENTRY", "CT" ]
        ,
        [ 618, "73D23986-6937-4F3C-A45F-73A248BF6286", 618, 1413041315, "403253", 1413041315, "403253", "{\n}", "COVENTRY LN", "COVENTRY", "LN" ]
        ,
        [ 619, "940715C5-8C95-40DB-96CF-2B2B915B44F3", 619, 1413041315, "403253", 1413041315, "403253", "{\n}", "COWELL PL", "COWELL", "PL" ]
        ,
        [ 620, "17200B95-D59A-4F27-8294-8936632DA3F3", 620, 1413041315, "403253", 1413041315, "403253", "{\n}", "COWLES ST", "COWLES", "ST" ]
        ,
        [ 621, "5F10EC21-07B1-4940-9B1D-1674692A0AA6", 621, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRAGMONT AVE", "CRAGMONT", "AVE" ]
        ,
        [ 622, "F9E18110-F79E-4DB6-A7A9-A972B613278D", 622, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRAGS CT", "CRAGS", "CT" ]
        ,
        [ 623, "7B47E2BC-393C-41F8-9D95-82998195571F", 623, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRAIG CT", "CRAIG", "CT" ]
        ,
        [ 624, "73B71FF9-015F-47A9-9EBE-FA8880B4D381", 624, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRANE ST", "CRANE", "ST" ]
        ,
        [ 625, "4EF7C884-8445-4ABA-89F5-2E94789E7DC7", 625, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRANLEIGH DR", "CRANLEIGH", "DR" ]
        ,
        [ 626, "0F6244F8-6671-401D-A62B-3B516CDB5146", 626, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRAUT ST", "CRAUT", "ST" ]
        ,
        [ 627, "5E1FEC44-3652-4347-B7ED-1AF9DD42F2B0", 627, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESCENT AVE", "CRESCENT", "AVE" ]
        ,
        [ 628, "3D4A2291-FCCD-4C45-8DBC-D5562321CAF2", 628, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESCENT CT", "CRESCENT", "CT" ]
        ,
        [ 629, "4D0A5E28-FD41-4AB7-8285-F3459FBA2023", 629, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESCENT WAY", "CRESCENT", "WAY" ]
        ,
        [ 630, "2CA827D3-AE5E-4834-8C18-BE9CBCF73E97", 630, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESCIO CT", "CRESCIO", "CT" ]
        ,
        [ 631, "5F77BEDC-E951-4789-BE83-18AA4D74E5D3", 631, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESPI DR", "CRESPI", "DR" ]
        ,
        [ 632, "26859B3C-4759-48A8-80EF-D1B88DEA53CA", 632, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESTA VISTA DR", "CRESTA VISTA", "DR" ]
        ,
        [ 633, "088F20BB-E779-4969-86A4-E4E58A278703", 633, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESTLAKE DR", "CRESTLAKE", "DR" ]
        ,
        [ 634, "CC0F7849-0DA6-4427-8DE3-9FA41FE64C68", 634, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESTLINE DR", "CRESTLINE", "DR" ]
        ,
        [ 635, "6C203890-D9D2-4C45-8B33-10C4C3AF5852", 635, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESTMONT DR", "CRESTMONT", "DR" ]
        ,
        [ 636, "4D8E8E65-35A8-4F8B-8199-BC9061F4695B", 636, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRESTWELL WALK", "CRESTWELL", "WALK" ]
        ,
        [ 637, "62004F08-97E7-431E-A1B1-0D7F2ABDA86D", 637, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRISP RD", "CRISP", "RD" ]
        ,
        [ 638, "F09F8097-2261-466C-8587-7ACF6B2FDFB6", 638, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRISSY FIELD AVE", "CRISSY FIELD", "AVE" ]
        ,
        [ 639, "5FB54422-5FEA-4F24-89C8-E19F428BEAA4", 639, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROAKER CT", "CROAKER", "CT" ]
        ,
        [ 640, "A756E769-EC5B-4496-9BEA-C99ADF82C0A3", 640, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROOK ST", "CROOK", "ST" ]
        ,
        [ 641, "FB1DC418-4178-4A9D-997D-6E16221BD2DB", 641, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROSS ST", "CROSS", "ST" ]
        ,
        [ 642, "A2EF74F6-05C9-438B-A001-3D4A57E1BBA0", 642, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROSSOVER DR", "CROSSOVER", "DR" ]
        ,
        [ 643, "59CB043B-7707-482F-9560-BB3AA7B29686", 643, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROWN CT", "CROWN", "CT" ]
        ,
        [ 644, "F6D6C4CB-84D7-4F9D-8770-E03CE2CFF357", 644, 1413041315, "403253", 1413041315, "403253", "{\n}", "CROWN TER", "CROWN", "TER" ]
        ,
        [ 645, "71FC6183-1B85-41E7-971F-4ADD95C9DEFA", 645, 1413041315, "403253", 1413041315, "403253", "{\n}", "CRYSTAL ST", "CRYSTAL", "ST" ]
        ,
        [ 646, "48402B45-E9D7-46FF-ABB3-2B8C4A479961", 646, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUBA ALY", "CUBA", "ALY" ]
        ,
        [ 647, "790ADF1C-D2BB-48E9-8B4C-933BF4F8CEE8", 647, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUESTA CT", "CUESTA", "CT" ]
        ,
        [ 648, "F5FE6CA5-7F49-4CC5-9557-03E07AAF1724", 648, 1413041315, "403253", 1413041315, "403253", "{\n}", "CULEBRA TER", "CULEBRA", "TER" ]
        ,
        [ 649, "18C14848-D86F-49F9-807F-68A84BCAC58E", 649, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUMBERLAND ST", "CUMBERLAND", "ST" ]
        ,
        [ 650, "B8B86690-D79D-4C52-9D4D-F342B703EC36", 650, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUNNINGHAM PL", "CUNNINGHAM", "PL" ]
        ,
        [ 651, "EE32A0D1-0E22-4FCC-A1B3-A408EE8779BC", 651, 1413041315, "403253", 1413041315, "403253", "{\n}", "CURTIS ST", "CURTIS", "ST" ]
        ,
        [ 652, "CE54ECBD-AC7D-4FE2-A030-D7702D423143", 652, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUSHMAN ST", "CUSHMAN", "ST" ]
        ,
        [ 653, "B895791F-630C-4223-9DBE-5F868BB8D06A", 653, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUSTER AVE", "CUSTER", "AVE" ]
        ,
        [ 654, "0CA9F630-F8E8-4DD9-82A3-D543DD528D17", 654, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUSTOM HOUSE PL", "CUSTOM HOUSE", "PL" ]
        ,
        [ 655, "997253C7-9132-4163-8385-56A829C58BA1", 655, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUTLER AVE", "CUTLER", "AVE" ]
        ,
        [ 656, "7CDF2217-3066-42ED-8765-2C7E8C3F7F1C", 656, 1413041315, "403253", 1413041315, "403253", "{\n}", "CUVIER ST", "CUVIER", "ST" ]
        ,
        [ 657, "0E91565D-3EFC-4DAB-9BF3-909F191AA9BD", 657, 1413041315, "403253", 1413041315, "403253", "{\n}", "CYPRESS ST", "CYPRESS", "ST" ]
        ,
        [ 658, "685DFC12-DA2B-4583-BA25-B6A0C3B523D8", 658, 1413041315, "403253", 1413041315, "403253", "{\n}", "CYRIL MAGNIN ST", "CYRIL MAGNIN", "ST" ]
        ,
        [ 659, "2E574B5A-4664-4EB2-96E5-781056E51AC5", 659, 1413041315, "403253", 1413041315, "403253", "{\n}", "CYRUS PL", "CYRUS", "PL" ]
        ,
        [ 660, "53A57AAB-BABB-4441-8F68-20F0666F7C4C", 660, 1413041315, "403253", 1413041315, "403253", "{\n}", "D ST", "D", "ST" ]
        ,
        [ 661, "5CB834A4-8CD7-462E-B250-AFC801F8EAA7", 661, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAGGETT ST", "DAGGETT", "ST" ]
        ,
        [ 662, "086F53E4-3F15-4EB5-8E55-4BFA00A27DF3", 662, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAKOTA ST", "DAKOTA", "ST" ]
        ,
        [ 663, "C654DCF5-44BC-4F1F-AE87-96CBCB4E08AF", 663, 1413041315, "403253", 1413041315, "403253", "{\n}", "DALEWOOD WAY", "DALEWOOD", "WAY" ]
        ,
        [ 664, "CB9EB099-0D79-4BBF-864E-AD667683CD95", 664, 1413041315, "403253", 1413041315, "403253", "{\n}", "DANIEL BURNHAM CT", "DANIEL BURNHAM", "CT" ]
        ,
        [ 665, "828CF710-9614-4479-A7CB-4568CF2F8FF4", 665, 1413041315, "403253", 1413041315, "403253", "{\n}", "DANTON ST", "DANTON", "ST" ]
        ,
        [ 666, "80694C88-0E93-4127-ADFA-6773E1C49D96", 666, 1413041315, "403253", 1413041315, "403253", "{\n}", "DANVERS ST", "DANVERS", "ST" ]
        ,
        [ 667, "8495EF67-7083-410B-B1CE-2F0BDD9E7A77", 667, 1413041315, "403253", 1413041315, "403253", "{\n}", "DARIEN WAY", "DARIEN", "WAY" ]
        ,
        [ 668, "5B818AE9-1CDF-4C88-AA68-24AE1D845B9F", 668, 1413041315, "403253", 1413041315, "403253", "{\n}", "DARRELL PL", "DARRELL", "PL" ]
        ,
        [ 669, "2E1B5937-A891-4A34-9CDD-E07970731823", 669, 1413041315, "403253", 1413041315, "403253", "{\n}", "DARTMOUTH ST", "DARTMOUTH", "ST" ]
        ,
        [ 670, "AD07C10F-246C-43D6-9E93-5511643053A8", 670, 1413041315, "403253", 1413041315, "403253", "{\n}", "DASHIELL HAMMETT ST", "DASHIELL HAMMETT", "ST" ]
        ,
        [ 671, "40BB1186-FF80-4056-B5A0-D647002208EB", 671, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAVENPORT LN", "DAVENPORT", "LN" ]
        ,
        [ 672, "181CFCA7-8E94-4D16-A63E-34DACA074556", 672, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAVIDSON AVE", "DAVIDSON", "AVE" ]
        ,
        [ 673, "BCF52F33-9804-4E9A-8E8A-E237A8F2BC28", 673, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAVIS CT", "DAVIS", "CT" ]
        ,
        [ 674, "C5CFDDC8-5BE0-4B6F-871C-A394403CE8E9", 674, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAVIS ST", "DAVIS", "ST" ]
        ,
        [ 675, "63BAE3FD-A004-42D5-9246-5086731A35C6", 675, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAWNVIEW WAY", "DAWNVIEW", "WAY" ]
        ,
        [ 676, "71DA56C6-1AF8-4301-A43E-F65917B63CB8", 676, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAWSON PL", "DAWSON", "PL" ]
        ,
        [ 677, "951054F1-6090-4288-B360-502F41313AA7", 677, 1413041315, "403253", 1413041315, "403253", "{\n}", "DAY ST", "DAY", "ST" ]
        ,
        [ 678, "C3D820A4-E3C0-4F04-9C3D-19E7346D696B", 678, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE BOOM ST", "DE BOOM", "ST" ]
        ,
        [ 679, "C9AC1D74-01FA-457B-8916-DF2B51F39F51", 679, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE FOREST WAY", "DE FOREST", "WAY" ]
        ,
        [ 680, "BC73C432-0E5D-4E3B-811B-E0B2609F949A", 680, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE HARO ST", "DE HARO", "ST" ]
        ,
        [ 681, "F231DC72-BC68-4C03-A67F-6B6E14E85CAD", 681, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE LONG ST", "DE LONG", "ST" ]
        ,
        [ 682, "2127F6CF-3608-416E-AB1F-20806E9F9F15", 682, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE MONTFORT AVE", "DE MONTFORT", "AVE" ]
        ,
        [ 683, "4BD2DC81-2E90-437F-988C-0F1145ECFC15", 683, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE SOTO ST", "DE SOTO", "ST" ]
        ,
        [ 684, "22B10213-5327-4577-9ABB-5920476F230F", 684, 1413041315, "403253", 1413041315, "403253", "{\n}", "DE WOLF ST", "DE WOLF", "ST" ]
        ,
        [ 685, "7B4D6652-E49D-4045-B7DC-722021FBFECE", 685, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEARBORN ST", "DEARBORN", "ST" ]
        ,
        [ 686, "402482C4-C78C-4BCE-A1F2-FE3584A6FAE5", 686, 1413041315, "403253", 1413041315, "403253", "{\n}", "DECATUR ST", "DECATUR", "ST" ]
        ,
        [ 687, "41705DED-60E8-44C9-97B5-115BDB4DD77A", 687, 1413041315, "403253", 1413041315, "403253", "{\n}", "DECKER ALY", "DECKER", "ALY" ]
        ,
        [ 688, "E41EFF5E-3527-468A-963A-FE88667FC052", 688, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEDMAN CT", "DEDMAN", "CT" ]
        ,
        [ 689, "04798A81-DF5A-484E-85D9-0F151D04347F", 689, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEEMS RD", "DEEMS", "RD" ]
        ,
        [ 690, "F2DE0B87-69B0-4263-840A-198CDB291D4C", 690, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEHON ST", "DEHON", "ST" ]
        ,
        [ 691, "43D764EC-FF42-42D7-BEC6-AF7C1150B947", 691, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEL MONTE ST", "DEL MONTE", "ST" ]
        ,
        [ 692, "04D035F7-D4D6-4E8A-82B0-64144DEB5258", 692, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEL SUR AVE", "DEL SUR", "AVE" ]
        ,
        [ 693, "C9E45DB9-D4A2-474C-AA30-2D35DDDB1553", 693, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEL VALE AVE", "DEL VALE", "AVE" ]
        ,
        [ 694, "581B4E85-AB64-4ADC-A6B4-5BB1D6626D9D", 694, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELANCEY ST", "DELANCEY", "ST" ]
        ,
        [ 695, "BA8546A0-94B6-4ED3-8F22-ABA718C8CCA7", 695, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELANO AVE", "DELANO", "AVE" ]
        ,
        [ 696, "D326C6E5-AA74-41F2-8403-DDAAF0298687", 696, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELAWARE ST", "DELAWARE", "ST" ]
        ,
        [ 697, "8C5EB55B-E2B0-4D54-85D0-4E8050041630", 697, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELGADO PL", "DELGADO", "PL" ]
        ,
        [ 698, "37BCC1B8-3995-4D7C-8335-1C7058292A87", 698, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELLBROOK AVE", "DELLBROOK", "AVE" ]
        ,
        [ 699, "894A353B-1665-45EF-BFF8-A1C4C8525928", 699, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELMAR ST", "DELMAR", "ST" ]
        ,
        [ 700, "EC39ACAF-3552-490D-ACDB-9071A7714931", 700, 1413041315, "403253", 1413041315, "403253", "{\n}", "DELTA ST", "DELTA", "ST" ]
        ,
        [ 701, "25A88300-9DEB-4187-AB90-4518D41C4086", 701, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEMING ST", "DEMING", "ST" ]
        ,
        [ 702, "4049B1E8-37E7-49DC-A95B-BBC6F10C658A", 702, 1413041315, "403253", 1413041315, "403253", "{\n}", "DENSLOWE DR", "DENSLOWE", "DR" ]
        ,
        [ 703, "90773C4D-D57E-4AC1-9B9B-B9A72CAAEC98", 703, 1413041315, "403253", 1413041315, "403253", "{\n}", "DERBY ST", "DERBY", "ST" ]
        ,
        [ 704, "16A66476-F34E-446F-ABAE-21ADEF7DF7A9", 704, 1413041315, "403253", 1413041315, "403253", "{\n}", "DESMOND ST", "DESMOND", "ST" ]
        ,
        [ 705, "6AD2E426-87A1-4DC8-9F04-14C661E91269", 705, 1413041315, "403253", 1413041315, "403253", "{\n}", "DETROIT ST", "DETROIT", "ST" ]
        ,
        [ 706, "A9496851-BACC-4F43-A956-9271E70247C9", 706, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEVONSHIRE WAY", "DEVONSHIRE", "WAY" ]
        ,
        [ 707, "FFCAE0E1-3C97-49CE-8B6C-368F07E8D42C", 707, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEWEY BLVD", "DEWEY", "BLVD" ]
        ,
        [ 708, "7B9C947E-DA07-4238-9FF4-0F0F7C05E5B0", 708, 1413041315, "403253", 1413041315, "403253", "{\n}", "DEWITT RD", "DEWITT", "RD" ]
        ,
        [ 709, "4102C986-7A54-46D0-95E6-DAD2DE5C3B82", 709, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIAMOND ST", "DIAMOND", "ST" ]
        ,
        [ 710, "D12F77E5-C425-478B-95E9-6DBA9A4BE66A", 710, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIAMOND COVE TER", "DIAMOND COVE", "TER" ]
        ,
        [ 711, "ACC23E36-D772-4328-93AD-5A2A9D56BFA5", 711, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIAMOND HEIGHTS BLVD", "DIAMOND HEIGHTS", "BLVD" ]
        ,
        [ 712, "D17AA595-5A6D-4699-9408-793ADFF26582", 712, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIANA ST", "DIANA", "ST" ]
        ,
        [ 713, "30C5A331-F43A-4CE7-81E2-AA881120474B", 713, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIAZ AVE", "DIAZ", "AVE" ]
        ,
        [ 714, "5DB1F886-3F7F-4B87-9F8B-CC6282BA6A03", 714, 1413041315, "403253", 1413041315, "403253", "{\n}", "DICHA ALY", "DICHA", "ALY" ]
        ,
        [ 715, "CF8B4E55-BDD3-498F-A165-B6D57B681165", 715, 1413041315, "403253", 1413041315, "403253", "{\n}", "DICHIERA CT", "DICHIERA", "CT" ]
        ,
        [ 716, "2B4744DE-1F28-4C5A-A69E-5189C423A8D0", 716, 1413041315, "403253", 1413041315, "403253", "{\n}", "DICKINSON ST", "DICKINSON", "ST" ]
        ,
        [ 717, "D792FC28-0A6E-44A5-9941-9AFB9882B77C", 717, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIGBY ST", "DIGBY", "ST" ]
        ,
        [ 718, "D9093BDA-47A3-4D0A-AEB8-9AF4D2510326", 718, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIRK DIRKSEN PL", "DIRK DIRKSEN", "PL" ]
        ,
        [ 719, "0EB4AFCE-F11B-4185-A4DC-C319860DB248", 719, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIVISADERO ST", "DIVISADERO", "ST" ]
        ,
        [ 720, "F3A057E8-B334-407B-88B4-622F4E860F21", 720, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIVISION ST", "DIVISION", "ST" ]
        ,
        [ 721, "84B934C0-5CD2-496E-908C-15802BD4E38E", 721, 1413041315, "403253", 1413041315, "403253", "{\n}", "DIXIE ALY", "DIXIE", "ALY" ]
        ,
        [ 722, "AEF514C3-437F-4DEE-9B19-7C1F23DD1B6B", 722, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOCK ST", "DOCK", "ST" ]
        ,
        [ 723, "2BE98AEC-BF41-4DF6-A26C-345C8EEA9A2F", 723, 1413041315, "403253", 1413041315, "403253", "{\n}", "DODGE ST", "DODGE", "ST" ]
        ,
        [ 724, "E99306F6-6253-4EEE-9502-7AAE9B74B0CF", 724, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOLORES ST", "DOLORES", "ST" ]
        ,
        [ 725, "0AEB7E3B-2C6D-4908-A921-90E94D438BAC", 725, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOLORES TER", "DOLORES", "TER" ]
        ,
        [ 726, "87EF3381-871B-4FCC-B9E9-053CAF02C3F3", 726, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOLPHIN CT", "DOLPHIN", "CT" ]
        ,
        [ 727, "6E7D6C97-FE35-4CBB-8593-8DB91C40CC63", 727, 1413041315, "403253", 1413041315, "403253", "{\n}", "DON CHEE WAY", "DON CHEE", "WAY" ]
        ,
        [ 728, "1157E914-2E78-4163-B62C-0A83622C80B2", 728, 1413041315, "403253", 1413041315, "403253", "{\n}", "DONAHUE ST", "DONAHUE", "ST" ]
        ,
        [ 729, "6B28071A-F9F5-42E6-A665-D9FC5BC6D0E4", 729, 1413041315, "403253", 1413041315, "403253", "{\n}", "DONNER AVE", "DONNER", "AVE" ]
        ,
        [ 730, "A9EDDE70-604B-40BC-8DF8-D0BE60C9E5BE", 730, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORADO TER", "DORADO", "TER" ]
        ,
        [ 731, "F9AFF657-C642-41A0-93E9-4077C2BC040D", 731, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORANTES AVE", "DORANTES", "AVE" ]
        ,
        [ 732, "3B3D21FC-183F-4D41-A2B2-E319F44A9676", 732, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORCAS WAY", "DORCAS", "WAY" ]
        ,
        [ 733, "5BFA3F74-B77A-4B02-831D-A881EED8AB76", 733, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORCHESTER WAY", "DORCHESTER", "WAY" ]
        ,
        [ 734, "8F052EA4-E920-488D-AC66-2E7AC9F18DB3", 734, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORE ST", "DORE", "ST" ]
        ,
        [ 735, "769593FE-D6BE-48C9-8E7B-24EB27360705", 735, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORIC ALY", "DORIC", "ALY" ]
        ,
        [ 736, "2679A6C7-85A2-4A24-83D1-18E60919BCA4", 736, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORLAND ST", "DORLAND", "ST" ]
        ,
        [ 737, "44E6C094-F013-461B-92EE-FE7DE76BDA8E", 737, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORMAN AVE", "DORMAN", "AVE" ]
        ,
        [ 738, "698EFDAD-6A51-4109-B4A9-460E6BC71DD1", 738, 1413041315, "403253", 1413041315, "403253", "{\n}", "DORMITORY RD", "DORMITORY", "RD" ]
        ,
        [ 739, "32C88F07-4E1F-4793-AC2B-6D07F26EC18F", 739, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOUBLE ROCK ST", "DOUBLE ROCK", "ST" ]
        ,
        [ 740, "81FE0D6B-ECEC-4439-A85A-D0E19DE8BA82", 740, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOUGLASS ST", "DOUGLASS", "ST" ]
        ,
        [ 741, "662E4C2B-3438-47AD-BB93-691FCC10FC68", 741, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOVE LOOP", "DOVE", "LOOP" ]
        ,
        [ 742, "C99ECB70-3AA3-4F9D-A81E-E4D439D68819", 742, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOW PL", "DOW", "PL" ]
        ,
        [ 743, "09D2DEC7-581B-49BF-8DF6-8C494E2FFD7B", 743, 1413041315, "403253", 1413041315, "403253", "{\n}", "DOWNEY ST", "DOWNEY", "ST" ]
        ,
        [ 744, "3783E2F2-3FD7-4648-8BB1-5D0F0CF8E12E", 744, 1413041315, "403253", 1413041315, "403253", "{\n}", "DR CARLTON B GOODLETT PL", "DR CARLTON B GOODLETT", "PL" ]
        ,
        [ 745, "BB13D741-BF6F-416C-98CC-4F4DAF8291B5", 745, 1413041315, "403253", 1413041315, "403253", "{\n}", "DRAKE ST", "DRAKE", "ST" ]
        ,
        [ 746, "CC230CAA-BA1D-43A1-8F54-17C2EE5AF4CC", 746, 1413041315, "403253", 1413041315, "403253", "{\n}", "DRUMM ST", "DRUMM", "ST" ]
        ,
        [ 747, "304338EF-AA1E-4E13-820C-F05CAD4AE215", 747, 1413041315, "403253", 1413041315, "403253", "{\n}", "DRUMMOND ALY", "DRUMMOND", "ALY" ]
        ,
        [ 748, "A588C052-4815-498B-961E-EAC0E7F338C7", 748, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUBLIN ST", "DUBLIN", "ST" ]
        ,
        [ 749, "C216088A-6771-451F-AF3F-EC9F42481836", 749, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUBOCE AVE", "DUBOCE", "AVE" ]
        ,
        [ 750, "8B6D826C-478C-466A-B284-58EAF44206F3", 750, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUDLEY RD", "DUDLEY", "RD" ]
        ,
        [ 751, "A6F8E219-59CE-4447-A7B4-73627496B794", 751, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUKES CT", "DUKES", "CT" ]
        ,
        [ 752, "53E300F4-6979-4902-869F-7FBA356C5ECA", 752, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUNCAN ST", "DUNCAN", "ST" ]
        ,
        [ 753, "A17947CE-7C5C-475C-A1E3-DBBE10F334AB", 753, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUNCOMBE ALY", "DUNCOMBE", "ALY" ]
        ,
        [ 754, "3D7EF430-7DE3-4068-ACD2-55842FD84365", 754, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUNNES ALY", "DUNNES", "ALY" ]
        ,
        [ 755, "357FC810-E0B1-49CB-8495-E7CCEE430B8C", 755, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUNSHEE ST", "DUNSHEE", "ST" ]
        ,
        [ 756, "CBBCD6E7-66A2-4D2A-8596-4B47B585CC78", 756, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUNSMUIR ST", "DUNSMUIR", "ST" ]
        ,
        [ 757, "9E110848-889F-4B35-97D8-8B354216DAAA", 757, 1413041315, "403253", 1413041315, "403253", "{\n}", "DUTCH WINDMILL ACCESS RD", "DUTCH WINDMILL ACCESS", "RD" ]
        ,
        [ 758, "364889E8-274D-4268-BE91-53595CC46285", 758, 1413041315, "403253", 1413041315, "403253", "{\n}", "DWIGHT ST", "DWIGHT", "ST" ]
        ,
        [ 759, "A2964F19-8345-4E69-BFDB-D7C088CB5FDD", 759, 1413041315, "403253", 1413041315, "403253", "{\n}", "E ST", "E", "ST" ]
        ,
        [ 760, "03FEF8CE-E6D4-4739-8BC5-59E1E70819C0", 760, 1413041315, "403253", 1413041315, "403253", "{\n}", "EAGLE ST", "EAGLE", "ST" ]
        ,
        [ 761, "4355E702-B1A5-44BF-BA1A-0FCC1558CE93", 761, 1413041315, "403253", 1413041315, "403253", "{\n}", "EARL ST", "EARL", "ST" ]
        ,
        [ 762, "1C5A4A3C-4CC2-4DDC-A586-D20BFD9B9FCC", 762, 1413041315, "403253", 1413041315, "403253", "{\n}", "EASEMENT", "EASEMENT", null ]
        ,
        [ 763, "53B2492E-C7F7-434A-A02B-BD57F6C44E19", 763, 1413041315, "403253", 1413041315, "403253", "{\n}", "EAST RD", "EAST", "RD" ]
        ,
        [ 764, "F4F1217E-4099-4579-A78A-158D9C264BBC", 764, 1413041315, "403253", 1413041315, "403253", "{\n}", "EAST BEACH RD", "EAST BEACH", "RD" ]
        ,
        [ 765, "A0832CCE-3268-46AE-8D88-60467DDEA7AE", 765, 1413041315, "403253", 1413041315, "403253", "{\n}", "EAST CRYSTAL COVE TER", "EAST CRYSTAL COVE", "TER" ]
        ,
        [ 766, "42687732-2FA9-4ECA-89A3-6456C6D75FF3", 766, 1413041315, "403253", 1413041315, "403253", "{\n}", "EAST FORT MILEY RD", "EAST FORT MILEY", "RD" ]
        ,
        [ 767, "88FBE901-886E-4420-A79C-629E936D7F56", 767, 1413041315, "403253", 1413041315, "403253", "{\n}", "EASTMAN ST", "EASTMAN", "ST" ]
        ,
        [ 768, "250E795C-5406-4C90-A697-32DEC953B321", 768, 1413041315, "403253", 1413041315, "403253", "{\n}", "EASTWOOD DR", "EASTWOOD", "DR" ]
        ,
        [ 769, "28BBDA0A-8DDB-43FC-B7FB-9E6A95259C2C", 769, 1413041315, "403253", 1413041315, "403253", "{\n}", "EATON PL", "EATON", "PL" ]
        ,
        [ 770, "E823B1B7-77AB-48B7-B63C-088FBE85F71B", 770, 1413041315, "403253", 1413041315, "403253", "{\n}", "ECKER ST", "ECKER", "ST" ]
        ,
        [ 771, "EDD83791-E8BE-48B9-925E-85A82BF5EDF6", 771, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDDY ST", "EDDY", "ST" ]
        ,
        [ 772, "044A7D32-6BF0-46BC-BBCE-F3FEAFD25EE6", 772, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDGAR AVE", "EDGAR", "AVE" ]
        ,
        [ 773, "218CF60D-43B7-4EFC-9549-37BB00696430", 773, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDGARDO PL", "EDGARDO", "PL" ]
        ,
        [ 774, "5B596988-1D01-4FBA-ACA7-0450614ADF02", 774, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDGEHILL WAY", "EDGEHILL", "WAY" ]
        ,
        [ 775, "8B2EDA28-F44F-4414-87BA-C9F3434D2F83", 775, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDGEWOOD AVE", "EDGEWOOD", "AVE" ]
        ,
        [ 776, "6090A959-7026-4D95-9F62-9142FC16BC6E", 776, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDIE RD", "EDIE", "RD" ]
        ,
        [ 777, "9B7E9497-9DC4-4C74-87F3-E8934EFFFF2A", 777, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDINBURGH ST", "EDINBURGH", "ST" ]
        ,
        [ 778, "4283FAE5-0CBC-4350-BFAC-8377A253C5BB", 778, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDITH ST", "EDITH", "ST" ]
        ,
        [ 779, "BF18BAEC-711A-41A9-9C26-60E8708168BB", 779, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDNA ST", "EDNA", "ST" ]
        ,
        [ 780, "813E5378-1819-41F5-BFE3-EDEF81DE59CB", 780, 1413041315, "403253", 1413041315, "403253", "{\n}", "EDWARD ST", "EDWARD", "ST" ]
        ,
        [ 781, "C0ED03EC-78FF-4B58-9080-933A5B6390D7", 781, 1413041315, "403253", 1413041315, "403253", "{\n}", "EGBERT AVE", "EGBERT", "AVE" ]
        ,
        [ 782, "8383AAFB-6EE1-4D71-8271-ABA91F0A32E1", 782, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL CAMINO DEL MAR", "EL CAMINO DEL MAR", null ]
        ,
        [ 783, "C535EBF7-AB92-4CC9-876E-ECDE5BE582FE", 783, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL DORADO ST", "EL DORADO", "ST" ]
        ,
        [ 784, "F7A9C4AA-E9A1-479C-9018-729116E947F1", 784, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL MIRASOL PL", "EL MIRASOL", "PL" ]
        ,
        [ 785, "0DAC38B5-C111-488D-8D92-60D084A3CD19", 785, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL PLAZUELA WAY", "EL PLAZUELA", "WAY" ]
        ,
        [ 786, "AEA43EC6-B9BE-4FA7-B1EE-90C6FABF0CA1", 786, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL POLIN LOOP", "EL POLIN", "LOOP" ]
        ,
        [ 787, "41A8EFAB-8734-432C-A787-8A9B1E2A8A32", 787, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL SERENO CT", "EL SERENO", "CT" ]
        ,
        [ 788, "05F5A415-DDAE-42DD-89CC-18EB988518EE", 788, 1413041315, "403253", 1413041315, "403253", "{\n}", "EL VERANO WAY", "EL VERANO", "WAY" ]
        ,
        [ 789, "9B86BA90-02E8-4C58-A2E7-70172E194ED4", 789, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELDRIDGE ST", "ELDRIDGE", "ST" ]
        ,
        [ 790, "4386FB1B-D907-4509-8DD1-7637B92118E8", 790, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELGIN PARK", "ELGIN", "PARK" ]
        ,
        [ 791, "B1820BCE-E3E0-41A1-B3C9-832B1F1D8AB3", 791, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELIM ALY", "ELIM", "ALY" ]
        ,
        [ 792, "D2800B92-3924-4976-AA1E-77B48D528D85", 792, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELIZABETH ST", "ELIZABETH", "ST" ]
        ,
        [ 793, "D0E1F58A-D72B-40E8-BDB9-8B011C132121", 793, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELK ST", "ELK", "ST" ]
        ,
        [ 794, "F75352D9-3AD0-419F-884D-233722403E44", 794, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELLERT ST", "ELLERT", "ST" ]
        ,
        [ 795, "4C655C5D-6499-46AB-8471-1C576ABE04F9", 795, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELLINGTON AVE", "ELLINGTON", "AVE" ]
        ,
        [ 796, "5CCA24CC-03EA-45EA-B2F8-87968C4E2F7A", 796, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELLIOT ST", "ELLIOT", "ST" ]
        ,
        [ 797, "A8C2407E-6253-4732-8203-7B7F6DE63862", 797, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELLIS ST", "ELLIS", "ST" ]
        ,
        [ 798, "252AF646-A9ED-4944-8324-FF66BAEEA115", 798, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELLSWORTH ST", "ELLSWORTH", "ST" ]
        ,
        [ 799, "61927C19-FBA7-44EC-847D-1E4DB0AF4E03", 799, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELM ST", "ELM", "ST" ]
        ,
        [ 800, "3AB4F5CD-A167-4CDD-B9AD-031C16AE13C8", 800, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELMHURST DR", "ELMHURST", "DR" ]
        ,
        [ 801, "82689F46-7480-4865-BDF3-54E1C7DF8CB0", 801, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELMIRA ST", "ELMIRA", "ST" ]
        ,
        [ 802, "76B5BA1E-6423-41D9-9F80-76DB08D51B4B", 802, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELMWOOD WAY", "ELMWOOD", "WAY" ]
        ,
        [ 803, "5FB00925-4463-4249-8A93-64B5E8A19707", 803, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELSIE ST", "ELSIE", "ST" ]
        ,
        [ 804, "F63FF633-3AA1-4514-A294-671238FC96E7", 804, 1413041315, "403253", 1413041315, "403253", "{\n}", "ELWOOD ST", "ELWOOD", "ST" ]
        ,
        [ 805, "456BB678-DB53-4E42-BB0C-E1C435EF36DD", 805, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMERALD LN", "EMERALD", "LN" ]
        ,
        [ 806, "0295E528-28C9-4A6C-B42A-525E5329ED77", 806, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMERALD COVE WAY", "EMERALD COVE", "WAY" ]
        ,
        [ 807, "F881854B-C218-4F20-AEDB-54829BE8EEB3", 807, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMERSON ST", "EMERSON", "ST" ]
        ,
        [ 808, "B5C5F578-54AC-4CAA-AC54-02B926D7674D", 808, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMERY LN", "EMERY", "LN" ]
        ,
        [ 809, "D7926B0D-75A3-4F5A-A6A9-D85AF64ED479", 809, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMIL LN", "EMIL", "LN" ]
        ,
        [ 810, "D8862CF5-55A0-4750-8578-D8943A02CCBC", 810, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMMA ST", "EMMA", "ST" ]
        ,
        [ 811, "CA04C32F-0AAB-4434-BCB8-C802B2D11CB7", 811, 1413041315, "403253", 1413041315, "403253", "{\n}", "EMMETT CT", "EMMETT", "CT" ]
        ,
        [ 812, "25380DD1-F2C6-4237-9B70-8A8D6DB710E1", 812, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENCANTO AVE", "ENCANTO", "AVE" ]
        ,
        [ 813, "CC2B5CED-B555-4301-AD11-C189136486CF", 813, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENCINAL WALK", "ENCINAL", "WALK" ]
        ,
        [ 814, "08D18101-8406-42F2-9451-150364FF02E9", 814, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENCLINE CT", "ENCLINE", "CT" ]
        ,
        [ 815, "5534FF42-F22A-43BC-9447-730227F1682D", 815, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENGLISH ST", "ENGLISH", "ST" ]
        ,
        [ 816, "90EC7414-CDAD-4F1D-BB0A-191FD25F3933", 816, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENTERPRISE ST", "ENTERPRISE", "ST" ]
        ,
        [ 817, "53C683B3-1815-41F9-9607-48476558FDBF", 817, 1413041315, "403253", 1413041315, "403253", "{\n}", "ENTRADA CT", "ENTRADA", "CT" ]
        ,
        [ 818, "6BA56E24-E530-44A4-A5E7-63B63CC8B82F", 818, 1413041315, "403253", 1413041315, "403253", "{\n}", "ERIE ST", "ERIE", "ST" ]
        ,
        [ 819, "8CD2391E-74A4-4461-88B5-4780A362649A", 819, 1413041315, "403253", 1413041315, "403253", "{\n}", "ERKSON CT", "ERKSON", "CT" ]
        ,
        [ 820, "9B722D5B-B490-487A-A421-9EB1C537D0DE", 820, 1413041315, "403253", 1413041315, "403253", "{\n}", "ERVINE ST", "ERVINE", "ST" ]
        ,
        [ 821, "E8A826BA-E348-4109-A0F6-969F23A213B1", 821, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESCOLTA WAY", "ESCOLTA", "WAY" ]
        ,
        [ 822, "F6716864-E5D8-406F-A8BB-8E406C0079DB", 822, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESCONDIDO AVE", "ESCONDIDO", "AVE" ]
        ,
        [ 823, "8FE7FC45-AE0E-47E2-9A8D-F1B58FEDCEB4", 823, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESMERALDA AVE", "ESMERALDA", "AVE" ]
        ,
        [ 824, "AC1CD7E2-93E0-4DE5-867D-8B02A43D9A21", 824, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESPANOLA ST", "ESPANOLA", "ST" ]
        ,
        [ 825, "9ABD1DA7-9DC2-422D-A3AB-85684A01A95F", 825, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESQUINA DR", "ESQUINA", "DR" ]
        ,
        [ 826, "4C1B09FD-A5C5-489E-B6D8-F5548E7E0B3B", 826, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESSEX ST", "ESSEX", "ST" ]
        ,
        [ 827, "E51D516E-2860-4C5F-90FB-EC47B3C2E214", 827, 1413041315, "403253", 1413041315, "403253", "{\n}", "ESTERO AVE", "ESTERO", "AVE" ]
        ,
        [ 828, "C2FC121E-83FD-4A29-BDAA-67BAD38E1488", 828, 1413041315, "403253", 1413041315, "403253", "{\n}", "EUCALYPTUS DR", "EUCALYPTUS", "DR" ]
        ,
        [ 829, "3F709D6B-70E6-46A5-8318-8715B5E2BC2E", 829, 1413041315, "403253", 1413041315, "403253", "{\n}", "EUCLID AVE", "EUCLID", "AVE" ]
        ,
        [ 830, "A5789F45-A97C-49A0-96ED-9E0E5C26C5EC", 830, 1413041315, "403253", 1413041315, "403253", "{\n}", "EUGENIA AVE", "EUGENIA", "AVE" ]
        ,
        [ 831, "E7680641-735F-4527-91A2-523ED92D31E1", 831, 1413041315, "403253", 1413041315, "403253", "{\n}", "EUREKA ST", "EUREKA", "ST" ]
        ,
        [ 832, "D866E57E-F779-4FD6-8D8F-ED9780CE18BD", 832, 1413041315, "403253", 1413041315, "403253", "{\n}", "EVANS AVE", "EVANS", "AVE" ]
        ,
        [ 833, "F91B123A-569B-4889-A8B6-B3E72DFE77D4", 833, 1413041315, "403253", 1413041315, "403253", "{\n}", "EVE ST", "EVE", "ST" ]
        ,
        [ 834, "B3E52AA1-2812-4885-8EF8-0C34A339244A", 834, 1413041315, "403253", 1413041315, "403253", "{\n}", "EVELYN WAY", "EVELYN", "WAY" ]
        ,
        [ 835, "C507BD1D-5B82-485C-82A7-972FB770A530", 835, 1413041315, "403253", 1413041315, "403253", "{\n}", "EVERGLADE DR", "EVERGLADE", "DR" ]
        ,
        [ 836, "3584AAC7-7201-4140-8120-9F9E25CFED18", 836, 1413041315, "403253", 1413041315, "403253", "{\n}", "EVERSON ST", "EVERSON", "ST" ]
        ,
        [ 837, "F47F7407-6802-4807-A93B-6DE9CEC040FD", 837, 1413041315, "403253", 1413041315, "403253", "{\n}", "EWER PL", "EWER", "PL" ]
        ,
        [ 838, "4B79B13E-D986-4622-A903-9AE15F7AE4D1", 838, 1413041315, "403253", 1413041315, "403253", "{\n}", "EWING TER", "EWING", "TER" ]
        ,
        [ 839, "7D46A92D-1ABB-4098-A222-A6611E0329A8", 839, 1413041315, "403253", 1413041315, "403253", "{\n}", "EXCELSIOR AVE", "EXCELSIOR", "AVE" ]
        ,
        [ 840, "43C8890D-434F-486F-A4AE-90CECBE35EDC", 840, 1413041315, "403253", 1413041315, "403253", "{\n}", "EXCHANGE PL", "EXCHANGE", "PL" ]
        ,
        [ 841, "064DB8BE-2216-4A02-AE0C-9287A8E9D65C", 841, 1413041315, "403253", 1413041315, "403253", "{\n}", "EXECUTIVE PARK BLVD", "EXECUTIVE PARK", "BLVD" ]
        ,
        [ 842, "484826CC-28B6-4865-B8B2-B5BEF65F5BF9", 842, 1413041315, "403253", 1413041315, "403253", "{\n}", "EXETER ST", "EXETER", "ST" ]
        ,
        [ 843, "9A7EC775-DA46-4EBE-B6C4-B098CA686CB9", 843, 1413041315, "403253", 1413041315, "403253", "{\n}", "EXPOSITION DR", "EXPOSITION", "DR" ]
        ,
        [ 844, "85750EB8-BF8D-4202-A14E-395D884CED5A", 844, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIR AVE", "FAIR", "AVE" ]
        ,
        [ 845, "072710F5-D1C1-46C3-80D3-ED43283B01B4", 845, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIR OAKS ST", "FAIR OAKS", "ST" ]
        ,
        [ 846, "5F0949E7-7BA4-45D7-807A-5C3B45C9D804", 846, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIRBANKS ST", "FAIRBANKS", "ST" ]
        ,
        [ 847, "61192183-DCD0-4617-AF2E-5B1880E20FB9", 847, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIRFAX AVE", "FAIRFAX", "AVE" ]
        ,
        [ 848, "B4C5732F-8B24-4642-8A41-EA1E89E2A2B5", 848, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIRFIELD WAY", "FAIRFIELD", "WAY" ]
        ,
        [ 849, "CEAE3350-0515-4441-9898-6DA2080CABE8", 849, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAIRMOUNT ST", "FAIRMOUNT", "ST" ]
        ,
        [ 850, "B5D49D28-703D-41C9-8B00-5B5EF6366193", 850, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAITH ST", "FAITH", "ST" ]
        ,
        [ 851, "773C1AEC-31B2-4654-AAA2-1D52922363C8", 851, 1413041315, "403253", 1413041315, "403253", "{\n}", "FALLON PL", "FALLON", "PL" ]
        ,
        [ 852, "F899BF1A-32CD-42C6-8A56-116C8D1661FD", 852, 1413041315, "403253", 1413041315, "403253", "{\n}", "FALMOUTH ST", "FALMOUTH", "ST" ]
        ,
        [ 853, "BC5367AF-6765-4261-B1A2-2B9BB1C48BC9", 853, 1413041315, "403253", 1413041315, "403253", "{\n}", "FANNING WAY", "FANNING", "WAY" ]
        ,
        [ 854, "0B094407-6B78-499F-BA81-4724BA263AB8", 854, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARALLONES ST", "FARALLONES", "ST" ]
        ,
        [ 855, "E8B4BF30-18DC-491C-81BF-C93A0D820501", 855, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARGO PL", "FARGO", "PL" ]
        ,
        [ 856, "1BB4855D-BBD0-4011-BB16-873CF60EC54F", 856, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARNSWORTH LN", "FARNSWORTH", "LN" ]
        ,
        [ 857, "B170B10F-2B73-4A96-9E86-A166F3862EC0", 857, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARNUM ST", "FARNUM", "ST" ]
        ,
        [ 858, "0B95BC7B-E121-4301-AD0C-F364ECCD4C90", 858, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARRAGUT AVE", "FARRAGUT", "AVE" ]
        ,
        [ 859, "52A274E2-7F51-40FA-82F8-51ADD226FB5C", 859, 1413041315, "403253", 1413041315, "403253", "{\n}", "FARVIEW CT", "FARVIEW", "CT" ]
        ,
        [ 860, "70793AD6-288D-4BF1-8C6F-38CAF33BAA38", 860, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAUNTLEROY LN", "FAUNTLEROY", "LN" ]
        ,
        [ 861, "8C5AA031-CDB9-4BBA-A902-95F5A6D86F79", 861, 1413041315, "403253", 1413041315, "403253", "{\n}", "FAXON AVE", "FAXON", "AVE" ]
        ,
        [ 862, "A4FD4E33-B203-44E1-A5F2-375617D3F629", 862, 1413041315, "403253", 1413041315, "403253", "{\n}", "FEDERAL ST", "FEDERAL", "ST" ]
        ,
        [ 863, "C25883A9-85DF-48F9-9B85-297A196AB7EC", 863, 1413041315, "403253", 1413041315, "403253", "{\n}", "FELIX AVE", "FELIX", "AVE" ]
        ,
        [ 864, "0612C690-377F-4192-B2DC-30CE90A19EB2", 864, 1413041315, "403253", 1413041315, "403253", "{\n}", "FELL ST", "FELL", "ST" ]
        ,
        [ 865, "601161CE-D030-426A-8615-A620F1D58B5A", 865, 1413041315, "403253", 1413041315, "403253", "{\n}", "FELL ACCESS RD", "FELL ACCESS", "RD" ]
        ,
        [ 866, "01DB1786-5231-447B-8F61-59899FEA37C8", 866, 1413041315, "403253", 1413041315, "403253", "{\n}", "FELLA PL", "FELLA", "PL" ]
        ,
        [ 867, "A3F231E6-D044-4326-8107-AC8072DDDFA9", 867, 1413041315, "403253", 1413041315, "403253", "{\n}", "FELTON ST", "FELTON", "ST" ]
        ,
        [ 868, "2D156EF6-DA91-4A4C-A6DA-5F3B602BABD9", 868, 1413041315, "403253", 1413041315, "403253", "{\n}", "FENTON LN", "FENTON", "LN" ]
        ,
        [ 869, "C85F07F5-B5DC-49A7-9311-5E0E01B0E027", 869, 1413041315, "403253", 1413041315, "403253", "{\n}", "FERN ST", "FERN", "ST" ]
        ,
        [ 870, "26D9ABE1-805E-4C5F-B226-E75C2993A5BD", 870, 1413041315, "403253", 1413041315, "403253", "{\n}", "FERNANDEZ ST", "FERNANDEZ", "ST" ]
        ,
        [ 871, "2E2F92B1-1FE6-40B0-9181-2535DCF8BCE8", 871, 1413041315, "403253", 1413041315, "403253", "{\n}", "FERNWOOD DR", "FERNWOOD", "DR" ]
        ,
        [ 872, "8AAD79F3-4EE5-4C8E-B898-06AFACD89FC1", 872, 1413041315, "403253", 1413041315, "403253", "{\n}", "FIELDING ST", "FIELDING", "ST" ]
        ,
        [ 873, "AF5702A2-7C69-49E1-B3D7-F9AFAE616377", 873, 1413041315, "403253", 1413041315, "403253", "{\n}", "FIFTH ST", "FIFTH", "ST" ]
        ,
        [ 874, "4C14A694-7517-43C2-93A0-AB3DAAE204CE", 874, 1413041315, "403253", 1413041315, "403253", "{\n}", "FILBERT ST", "FILBERT", "ST" ]
        ,
        [ 875, "5CB8CF60-36C6-4FE7-B0F5-7692BA38A43C", 875, 1413041315, "403253", 1413041315, "403253", "{\n}", "FILLMORE ST", "FILLMORE", "ST" ]
        ,
        [ 876, "FC846F8C-4749-4D1D-A9C7-8CC41A3B8856", 876, 1413041315, "403253", 1413041315, "403253", "{\n}", "FINLEY RD", "FINLEY", "RD" ]
        ,
        [ 877, "DFF82F84-F751-401E-A86A-569813976E61", 877, 1413041315, "403253", 1413041315, "403253", "{\n}", "FIRST DR EAST", "FIRST", "DR" ]
        ,
        [ 878, "D6AA43E3-9824-4C14-B86A-8B44CD9670A2", 878, 1413041315, "403253", 1413041315, "403253", "{\n}", "FIRST DR WEST", "FIRST", "DR" ]
        ,
        [ 879, "66AAD6FE-7A07-4F94-936A-119B662D049B", 879, 1413041315, "403253", 1413041315, "403253", "{\n}", "FISHER ALY", "FISHER", "ALY" ]
        ,
        [ 880, "17C1C03E-474B-4502-A5C2-A6F4A3422F2D", 880, 1413041315, "403253", 1413041315, "403253", "{\n}", "FISHER AVE", "FISHER", "AVE" ]
        ,
        [ 881, "C89F7287-4442-47DF-8BF9-D2CFB9D6D04C", 881, 1413041315, "403253", 1413041315, "403253", "{\n}", "FISHER LOOP", "FISHER", "LOOP" ]
        ,
        [ 882, "4B34C6E2-9003-4BD6-918D-D276980B6A91", 882, 1413041315, "403253", 1413041315, "403253", "{\n}", "FITCH ST", "FITCH", "ST" ]
        ,
        [ 883, "D7B20649-0612-4D18-A67E-67E4D56D49F0", 883, 1413041315, "403253", 1413041315, "403253", "{\n}", "FITZGERALD AVE", "FITZGERALD", "AVE" ]
        ,
        [ 884, "AB2BEA38-FB65-427B-B29A-B87D46177A11", 884, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLINT ST", "FLINT", "ST" ]
        ,
        [ 885, "93463190-A7D4-4420-BFF5-5D54B0D0D744", 885, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLOOD AVE", "FLOOD", "AVE" ]
        ,
        [ 886, "F5433D6D-4D08-4884-8361-135EA51456BE", 886, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLORA ST", "FLORA", "ST" ]
        ,
        [ 887, "823768F6-1CDA-45FC-937A-7CDABCB4BC20", 887, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLORENCE ST", "FLORENCE", "ST" ]
        ,
        [ 888, "53F1B52C-7CF2-4C3B-BE8F-915F77C7BD8F", 888, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLORENTINE AVE", "FLORENTINE", "AVE" ]
        ,
        [ 889, "B3503874-245E-4CEB-B01E-E884CF662615", 889, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLORIDA ST", "FLORIDA", "ST" ]
        ,
        [ 890, "7B3098F0-112C-477A-B7B4-44EC4324154B", 890, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLOUNDER CT", "FLOUNDER", "CT" ]
        ,
        [ 891, "77FA5966-5671-42A8-8FBE-29C4C66A3947", 891, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLOURNOY ST", "FLOURNOY", "ST" ]
        ,
        [ 892, "3DA70598-80AA-479B-8F14-45D3F3EAAE95", 892, 1413041315, "403253", 1413041315, "403253", "{\n}", "FLOWER ST", "FLOWER", "ST" ]
        ,
        [ 893, "74B6215F-E973-41AB-92DD-8D26E3F8049B", 893, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOERSTER ST", "FOERSTER", "ST" ]
        ,
        [ 894, "498E6C3D-E720-4E7F-BF60-2E4402B75797", 894, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOLSOM ST", "FOLSOM", "ST" ]
        ,
        [ 895, "E29B5B16-EBBB-4DBB-B4CA-240859789432", 895, 1413041315, "403253", 1413041315, "403253", "{\n}", "FONT BLVD", "FONT", "BLVD" ]
        ,
        [ 896, "A4C7D989-6892-4111-88EE-235C7442A6E2", 896, 1413041315, "403253", 1413041315, "403253", "{\n}", "FONTINELLA TER", "FONTINELLA", "TER" ]
        ,
        [ 897, "052EF446-575C-4E10-B9C6-BD39E6E46BAB", 897, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOOTE AVE", "FOOTE", "AVE" ]
        ,
        [ 898, "3E833373-ECCD-44E7-BAB4-FF21EE837A88", 898, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORD ST", "FORD", "ST" ]
        ,
        [ 899, "8AAAB653-2A68-41B4-980B-A9FBF7A64746", 899, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOREST RD", "FOREST", "RD" ]
        ,
        [ 900, "00B94B0E-6E3D-423F-AEAF-C5AD832856B8", 900, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOREST HILL PATH", "FOREST HILL", "PATH" ]
        ,
        [ 901, "209B2765-AC3E-4753-A75A-8DB3880787CF", 901, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOREST KNOLLS DR", "FOREST KNOLLS", "DR" ]
        ,
        [ 902, "E4817D93-A41B-48F5-9D55-79BB355005AD", 902, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOREST SIDE AVE", "FOREST SIDE", "AVE" ]
        ,
        [ 903, "C9A90C90-46E4-4996-9B0B-1CAE4C72A70A", 903, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOREST VIEW DR", "FOREST VIEW", "DR" ]
        ,
        [ 904, "94D80243-4BA8-4F01-98D1-4B0D600BF344", 904, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORSYTH LN", "FORSYTH", "LN" ]
        ,
        [ 905, "3E1976A7-0B54-4C4D-8F96-A7C138980C5E", 905, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT FUNSTON RD", "FORT FUNSTON", "RD" ]
        ,
        [ 906, "B00B4B38-0A9C-467F-AD5C-5CD107715B1C", 906, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 10", "FORT MASON 10", null ]
        ,
        [ 907, "7D243513-712F-40F1-9F6D-C362706CAD23", 907, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 12", "FORT MASON 12", null ]
        ,
        [ 908, "12756401-A6E3-4F3F-98ED-203F2D6C6D6B", 908, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 13", "FORT MASON 13", null ]
        ,
        [ 909, "F0C0A669-CB66-4B2F-94BE-B43497C60BAB", 909, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 15", "FORT MASON 15", null ]
        ,
        [ 910, "D0382A5F-E348-4CA6-A19A-180ECA393C41", 910, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 16", "FORT MASON 16", null ]
        ,
        [ 911, "A95C05F6-88FC-4BB9-BD0D-8F69C7046A70", 911, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 17", "FORT MASON 17", null ]
        ,
        [ 912, "3AB96DE3-03BE-4975-BC35-A7BC749153A0", 912, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 18", "FORT MASON 18", null ]
        ,
        [ 913, "6BDF4C0C-9BE8-4143-B83A-BD9FD9064102", 913, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 19", "FORT MASON 19", null ]
        ,
        [ 914, "CE111D39-91D6-4BBD-88FC-D06617C3599A", 914, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 20", "FORT MASON 20", null ]
        ,
        [ 915, "BC30BB1B-6B69-4438-96C2-0032131D046A", 915, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 21", "FORT MASON 21", null ]
        ,
        [ 916, "AF56B5D2-7A58-4A63-A29C-A50F3CB1DBE6", 916, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 8", "FORT MASON 8", null ]
        ,
        [ 917, "449E1C88-E102-4F54-A482-32ED169AA036", 917, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MASON 9", "FORT MASON 9", null ]
        ,
        [ 918, "8FF88494-2CA5-476A-ACA3-BF3086AEB6AE", 918, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MILEY 3", "FORT MILEY 3", null ]
        ,
        [ 919, "1DF5C1CF-6390-4081-94A4-09D6D231EE36", 919, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MILEY 5", "FORT MILEY 5", null ]
        ,
        [ 920, "D361420D-BB3C-4ED3-81F7-31F1E897301B", 920, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MILEY 6", "FORT MILEY 6", null ]
        ,
        [ 921, "7E7E6745-C2EF-4420-A7C7-53985476D1DF", 921, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORT MILEY 7", "FORT MILEY 7", null ]
        ,
        [ 922, "39164BE4-A30C-4606-B5FC-C0E90FF94743", 922, 1413041315, "403253", 1413041315, "403253", "{\n}", "FORTUNA AVE", "FORTUNA", "AVE" ]
        ,
        [ 923, "AFCB25C7-429D-4430-A1D8-B4C1C24D7327", 923, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOUNTAIN ST", "FOUNTAIN", "ST" ]
        ,
        [ 924, "33EDC03A-E30F-4B76-ADFD-71729E60895C", 924, 1413041315, "403253", 1413041315, "403253", "{\n}", "FOWLER AVE", "FOWLER", "AVE" ]
        ,
        [ 925, "D30767B5-90CB-4D73-9146-FED98FA81531", 925, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANCE AVE", "FRANCE", "AVE" ]
        ,
        [ 926, "8707D440-72F3-4955-A4FA-494AF3E1E6EA", 926, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANCIS ST", "FRANCIS", "ST" ]
        ,
        [ 927, "F4BD17D9-27B0-4702-89DB-4CFB975558F1", 927, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANCISCO ST", "FRANCISCO", "ST" ]
        ,
        [ 928, "6E12E191-2520-4EA8-B8D9-D6E33C9CB488", 928, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANCONIA ST", "FRANCONIA", "ST" ]
        ,
        [ 929, "8295EE4F-B0A8-4D7D-B78F-AD52551D45CB", 929, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANK NORRIS ST", "FRANK NORRIS", "ST" ]
        ,
        [ 930, "FC1F3A23-5D10-4D51-8695-9DC021F59F61", 930, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRANKLIN ST", "FRANKLIN", "ST" ]
        ,
        [ 931, "450A931F-941D-487C-96DD-D5AF8F2874AC", 931, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRATESSA CT", "FRATESSA", "CT" ]
        ,
        [ 932, "8D7A635B-BB30-48F3-9D6E-A878F2B17C6F", 932, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREDELA LN", "FREDELA", "LN" ]
        ,
        [ 933, "114F06DF-1C5A-41C6-AB5E-F2A4FA9E3960", 933, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREDERICK ST", "FREDERICK", "ST" ]
        ,
        [ 934, "D0E595E4-47A2-49E5-9268-17F1C8394592", 934, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREDSON CT", "FREDSON", "CT" ]
        ,
        [ 935, "7D251F1A-BB47-45C5-B371-439082AC38E8", 935, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREELON ST", "FREELON", "ST" ]
        ,
        [ 936, "54ECCDE6-4008-45F0-9E30-42E52E01AE1C", 936, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREEMAN CT", "FREEMAN", "CT" ]
        ,
        [ 937, "9DB03500-BD53-483F-88C9-9CD1AAD44519", 937, 1413041315, "403253", 1413041315, "403253", "{\n}", "FREMONT ST", "FREMONT", "ST" ]
        ,
        [ 938, "9CD5B709-988F-4E21-A3A1-CBF5F4DABDDC", 938, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRENCH CT", "FRENCH", "CT" ]
        ,
        [ 939, "05511D65-9C0E-4507-B02B-ACAAFA30747B", 939, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRESNEL WAY", "FRESNEL", "WAY" ]
        ,
        [ 940, "6EAEB223-0442-44BA-873A-685FD97B5482", 940, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRESNO ST", "FRESNO", "ST" ]
        ,
        [ 941, "DAB06369-82EB-4A3B-98CB-0CD6AB939034", 941, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRIEDELL ST", "FRIEDELL", "ST" ]
        ,
        [ 942, "425B93FE-3BC5-4FD0-A2F1-D78894EE4B72", 942, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRIENDSHIP CT", "FRIENDSHIP", "CT" ]
        ,
        [ 943, "444EC748-810E-4BA2-B526-DFF4766851AD", 943, 1413041315, "403253", 1413041315, "403253", "{\n}", "FRONT ST", "FRONT", "ST" ]
        ,
        [ 944, "D3B6C3B5-61E5-49AD-BB7A-49DDFDDF06B7", 944, 1413041315, "403253", 1413041315, "403253", "{\n}", "FUENTE AVE", "FUENTE", "AVE" ]
        ,
        [ 945, "406E4BEA-6C51-48BB-8AAF-5EA18650677D", 945, 1413041315, "403253", 1413041315, "403253", "{\n}", "FULTON ST", "FULTON", "ST" ]
        ,
        [ 946, "050EF279-B108-4AF3-A2BD-31A773C2C1DE", 946, 1413041315, "403253", 1413041315, "403253", "{\n}", "FUNSTON AVE", "FUNSTON", "AVE" ]
        ,
        [ 947, "2DD563E9-7555-4634-8DB2-2F4C16469310", 947, 1413041315, "403253", 1413041315, "403253", "{\n}", "FUNSTON RD", "FUNSTON", "RD" ]
        ,
        [ 948, "5B69CFC2-0736-4B9A-A9A3-A1914F8DA5DE", 948, 1413041315, "403253", 1413041315, "403253", "{\n}", "GABILAN WAY", "GABILAN", "WAY" ]
        ,
        [ 949, "FCBA7D7C-CD2D-4837-87AB-C52083DD5A12", 949, 1413041315, "403253", 1413041315, "403253", "{\n}", "GAISER CT", "GAISER", "CT" ]
        ,
        [ 950, "459AB1D8-4897-47DF-82DD-100A59D52006", 950, 1413041315, "403253", 1413041315, "403253", "{\n}", "GALEWOOD CIR", "GALEWOOD", "CIR" ]
        ,
        [ 951, "56D96A30-B2FE-44C1-A8D8-6493C75A46D1", 951, 1413041315, "403253", 1413041315, "403253", "{\n}", "GALILEE LN", "GALILEE", "LN" ]
        ,
        [ 952, "0FB06B20-9D97-4A55-A2C0-00B1CD373C20", 952, 1413041315, "403253", 1413041315, "403253", "{\n}", "GALINDO AVE", "GALINDO", "AVE" ]
        ,
        [ 953, "0666F63C-0B2E-4838-9757-EA6BBF665832", 953, 1413041315, "403253", 1413041315, "403253", "{\n}", "GALLAGHER LN", "GALLAGHER", "LN" ]
        ,
        [ 954, "B65BBFCE-7A9A-43FA-A013-56D2E0099F89", 954, 1413041315, "403253", 1413041315, "403253", "{\n}", "GALVEZ AVE", "GALVEZ", "AVE" ]
        ,
        [ 955, "05AE8F0C-A958-4B2A-9CAE-38F842551F89", 955, 1413041315, "403253", 1413041315, "403253", "{\n}", "GAMBIER ST", "GAMBIER", "ST" ]
        ,
        [ 956, "09B5F2DD-A1D5-4715-8243-367F60E2C642", 956, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARCES DR", "GARCES", "DR" ]
        ,
        [ 957, "89B504D4-348B-4B52-8170-F74EEDF46A7E", 957, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARCIA AVE", "GARCIA", "AVE" ]
        ,
        [ 958, "8DD36899-42DF-45EF-A051-212A7A189FA0", 958, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARDEN ST", "GARDEN", "ST" ]
        ,
        [ 959, "9E5D1A02-E48E-4B92-8105-5EB47541718D", 959, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARDEN WAY", "GARDEN", "WAY" ]
        ,
        [ 960, "B4B807B7-1C31-4151-9EE8-FFF6158FCEFC", 960, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARDENER RD", "GARDENER", "RD" ]
        ,
        [ 961, "2190F37C-65DD-4BA2-92A0-34FD31CD73BC", 961, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARDENSIDE DR", "GARDENSIDE", "DR" ]
        ,
        [ 962, "5CF2C8F6-A1D6-40AC-A59B-9E85E6A683CD", 962, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARFIELD ST", "GARFIELD", "ST" ]
        ,
        [ 963, "76763787-4813-4183-B3D6-BDE20958EC36", 963, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARLINGTON CT", "GARLINGTON", "CT" ]
        ,
        [ 964, "2F930D40-4E45-4487-BEAF-9C55F523CC47", 964, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARNETT TER", "GARNETT", "TER" ]
        ,
        [ 965, "F5CA4AF0-D447-4818-8F7F-C84241142F97", 965, 1413041315, "403253", 1413041315, "403253", "{\n}", "GARRISON AVE", "GARRISON", "AVE" ]
        ,
        [ 966, "8464F91B-7C13-4E02-93A6-F3C72A609908", 966, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATES ST", "GATES", "ST" ]
        ,
        [ 967, "A6C48FCD-F89E-413D-B236-0B405719457E", 967, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATEVIEW AVE", "GATEVIEW", "AVE" ]
        ,
        [ 968, "9B9AC59B-421F-4403-B630-6C74C42B2E47", 968, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATEVIEW CT", "GATEVIEW", "CT" ]
        ,
        [ 969, "C6130FC1-0E32-4D87-BE34-0DC78B279DD7", 969, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATEVIEW 1 CT", "GATEVIEW 1", "CT" ]
        ,
        [ 970, "B4ABD724-3043-4702-AD0E-56C0C34168C7", 970, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATEVIEW 2 CT", "GATEVIEW 2", "CT" ]
        ,
        [ 971, "4514422C-140A-4A11-9A0E-F2D2FB9A5679", 971, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATEVIEW 3 CT", "GATEVIEW 3", "CT" ]
        ,
        [ 972, "826E41FB-8B65-4F6D-92B3-79AB9BA290FB", 972, 1413041315, "403253", 1413041315, "403253", "{\n}", "GATUN ALY", "GATUN", "ALY" ]
        ,
        [ 973, "7B141555-43E4-4DE5-886B-4821F7905147", 973, 1413041315, "403253", 1413041315, "403253", "{\n}", "GAVEN ST", "GAVEN", "ST" ]
        ,
        [ 974, "49D87195-E428-4F8B-A1D6-72E70C5DB575", 974, 1413041315, "403253", 1413041315, "403253", "{\n}", "GAVIOTA WAY", "GAVIOTA", "WAY" ]
        ,
        [ 975, "42345B7C-03D8-4861-8D0F-4BDE65403125", 975, 1413041315, "403253", 1413041315, "403253", "{\n}", "GEARY BLVD", "GEARY", "BLVD" ]
        ,
        [ 976, "6F8CF03F-56A7-45EE-A1F9-09C12601F3AF", 976, 1413041315, "403253", 1413041315, "403253", "{\n}", "GEARY ST", "GEARY", "ST" ]
        ,
        [ 977, "4A0D2463-7615-4DCC-951C-E3A109443C0D", 977, 1413041315, "403253", 1413041315, "403253", "{\n}", "GELLERT DR", "GELLERT", "DR" ]
        ,
        [ 978, "BD1A1CEA-8C46-46BB-8490-445AE87ADB27", 978, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENE FRIEND WAY", "GENE FRIEND", "WAY" ]
        ,
        [ 979, "D5E0DE74-773B-4371-BBB4-A259AB4C906F", 979, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENEBERN WAY", "GENEBERN", "WAY" ]
        ,
        [ 980, "CCFAA184-F565-4E37-9930-3E04F897BE4C", 980, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENERAL KENNEDY AVE", "GENERAL KENNEDY", "AVE" ]
        ,
        [ 981, "2243FB2E-1AB8-49A8-8343-2A70A5072D72", 981, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENEVA AVE", "GENEVA", "AVE" ]
        ,
        [ 982, "4666C580-46E9-46D8-9085-A5591BA3581D", 982, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENNESSEE ST", "GENNESSEE", "ST" ]
        ,
        [ 983, "BC82D040-8E62-4CE2-A09E-79EA7F1CD319", 983, 1413041315, "403253", 1413041315, "403253", "{\n}", "GENOA PL", "GENOA", "PL" ]
        ,
        [ 984, "6AC51C69-4FA1-4A89-87D0-8A01A0B9D6DC", 984, 1413041315, "403253", 1413041315, "403253", "{\n}", "GEORGE CT", "GEORGE", "CT" ]
        ,
        [ 985, "ED67B16D-4A3F-4399-B0BE-3EA5E0736AB8", 985, 1413041315, "403253", 1413041315, "403253", "{\n}", "GEORGIA ST", "GEORGIA", "ST" ]
        ,
        [ 986, "49FF368E-B396-4922-878F-4486AC4C1E38", 986, 1413041315, "403253", 1413041315, "403253", "{\n}", "GERKE ALY", "GERKE", "ALY" ]
        ,
        [ 987, "993A2D48-4DFF-472E-99AF-1D07509C985E", 987, 1413041315, "403253", 1413041315, "403253", "{\n}", "GERMANIA ST", "GERMANIA", "ST" ]
        ,
        [ 988, "91D7A6F5-1E1A-4140-B92E-6B4684D78C02", 988, 1413041315, "403253", 1413041315, "403253", "{\n}", "GETZ ST", "GETZ", "ST" ]
        ,
        [ 989, "4F8C00CC-9B7D-453A-9578-7123D08B036D", 989, 1413041315, "403253", 1413041315, "403253", "{\n}", "GGP ACCESS ROAD", "GGP ACCESS ROAD", null ]
        ,
        [ 990, "445AB37B-92F3-4C90-8DC0-7086BDCD6C08", 990, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIANTS DR", "GIANTS", "DR" ]
        ,
        [ 991, "6A80A263-D948-4C6F-850D-77DBA28C0F91", 991, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIBB ST", "GIBB", "ST" ]
        ,
        [ 992, "E1D31487-F8B8-446B-9082-F5ACA37FD15F", 992, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIBBON CT", "GIBBON", "CT" ]
        ,
        [ 993, "C8B92955-D6FA-4ECC-9439-C67D29C47C53", 993, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIBBON LN", "GIBBON", "LN" ]
        ,
        [ 994, "9D199B4F-37EE-40D4-90B9-74DFBA946148", 994, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIBSON RD", "GIBSON", "RD" ]
        ,
        [ 995, "7941105D-B882-4DE1-9701-26595589B79B", 995, 1413041315, "403253", 1413041315, "403253", "{\n}", "GILBERT ST", "GILBERT", "ST" ]
        ,
        [ 996, "DED73714-D9F1-4A6D-A294-B220DFC117E0", 996, 1413041315, "403253", 1413041315, "403253", "{\n}", "GILLETTE AVE", "GILLETTE", "AVE" ]
        ,
        [ 997, "2957B16E-423B-43B0-AB4A-1C417CD0A360", 997, 1413041315, "403253", 1413041315, "403253", "{\n}", "GILMAN AVE", "GILMAN", "AVE" ]
        ,
        [ 998, "F905A20E-2C8E-4D54-B165-88E3BED2B2AA", 998, 1413041315, "403253", 1413041315, "403253", "{\n}", "GILROY ST", "GILROY", "ST" ]
        ,
        [ 999, "511659CB-04BD-4EF4-AF75-50A45B06BC42", 999, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIRARD RD", "GIRARD", "RD" ]
        ,
        [ 1000, "2D08678B-00F7-4184-9972-B1656D2C4697", 1000, 1413041315, "403253", 1413041315, "403253", "{\n}", "GIRARD ST", "GIRARD", "ST" ]
        ,
        [ 1001, "308591E5-5F8F-4EB7-A78B-F8C24A6BC9DF", 1001, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLADEVIEW WAY", "GLADEVIEW", "WAY" ]
        ,
        [ 1002, "4B8FF736-E05F-4A56-B428-0D2F09C2946B", 1002, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLADIOLUS LN", "GLADIOLUS", "LN" ]
        ,
        [ 1003, "ADF22F59-035A-4169-B9F3-EB1EA29C76FF", 1003, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLADSTONE DR", "GLADSTONE", "DR" ]
        ,
        [ 1004, "D77BEC33-65E8-4FF3-9FF9-B3EDD3211F21", 1004, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLADYS ST", "GLADYS", "ST" ]
        ,
        [ 1005, "18003BEB-E465-4FF6-A896-0D8610E085CB", 1005, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLEN CT", "GLEN", "CT" ]
        ,
        [ 1006, "80CE60DE-6CD6-4167-9711-4F6DC85FFC95", 1006, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLENBROOK AVE", "GLENBROOK", "AVE" ]
        ,
        [ 1007, "81F06888-D2C5-4A53-B73F-A0AE451720B5", 1007, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLENDALE ST", "GLENDALE", "ST" ]
        ,
        [ 1008, "253B1A65-128D-4E95-9235-11C8314B6A20", 1008, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLENHAVEN LN", "GLENHAVEN", "LN" ]
        ,
        [ 1009, "8CC7B2BE-A667-4A14-9D90-63D2216F845C", 1009, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLENVIEW DR", "GLENVIEW", "DR" ]
        ,
        [ 1010, "B9792145-4FD3-4ADB-8234-5867F70D8E77", 1010, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLOBE ALY", "GLOBE", "ALY" ]
        ,
        [ 1011, "B4D4C2D5-309C-4691-BAFC-73F3290A6AC3", 1011, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLORIA CT", "GLORIA", "CT" ]
        ,
        [ 1012, "A6501A05-92C8-4A31-B974-6A836E398B8F", 1012, 1413041315, "403253", 1413041315, "403253", "{\n}", "GLOVER ST", "GLOVER", "ST" ]
        ,
        [ 1013, "D89C7232-1CED-47D1-87C1-B2717D901F38", 1013, 1413041315, "403253", 1413041315, "403253", "{\n}", "GODEUS ST", "GODEUS", "ST" ]
        ,
        [ 1014, "3D8B4B89-3211-4E80-AC9A-F46722E2D085", 1014, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOETHE ST", "GOETHE", "ST" ]
        ,
        [ 1015, "9A19D190-8A9E-452A-844B-217E9EE95369", 1015, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOETTINGEN ST", "GOETTINGEN", "ST" ]
        ,
        [ 1016, "E00EE08F-87D9-44EA-BC3E-E55EE5E373AE", 1016, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLD ST", "GOLD", "ST" ]
        ,
        [ 1017, "B5C1A03D-3FA0-4AA4-AE13-90FA40572431", 1017, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLD MINE DR", "GOLD MINE", "DR" ]
        ,
        [ 1018, "A4D7B81F-6850-4107-94A8-68357357C365", 1018, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLDBERG LN", "GOLDBERG", "LN" ]
        ,
        [ 1019, "C2FD9ED0-CD45-430A-BA99-E0ABBE291EC0", 1019, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLDEN CT", "GOLDEN", "CT" ]
        ,
        [ 1020, "DC1C5ADA-8896-4637-8ECC-FF9E7444344F", 1020, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLDEN GATE AVE", "GOLDEN GATE", "AVE" ]
        ,
        [ 1021, "61FD13ED-1EE0-4EFD-AA97-FA20DEF4537D", 1021, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLDING LN", "GOLDING", "LN" ]
        ,
        [ 1022, "89E80371-7C52-40B1-BC2D-76AD39C64F24", 1022, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLETA AVE", "GOLETA", "AVE" ]
        ,
        [ 1023, "42CBE777-C19B-4091-A0A9-B7BB9A20F093", 1023, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOLF COURSE ACCESS RD", "GOLF COURSE ACCESS", "RD" ]
        ,
        [ 1024, "F04CEB89-9E89-4FA2-9CBC-A85B03A6BFF1", 1024, 1413041315, "403253", 1413041315, "403253", "{\n}", "GONZALEZ DR", "GONZALEZ", "DR" ]
        ,
        [ 1025, "EED094A9-DFDB-4905-A889-D461CE0809EB", 1025, 1413041315, "403253", 1413041315, "403253", "{\n}", "GORDON ST", "GORDON", "ST" ]
        ,
        [ 1026, "7BEF3469-DEA7-4221-97D9-8B47869E4FE8", 1026, 1413041315, "403253", 1413041315, "403253", "{\n}", "GORGAS AVE", "GORGAS", "AVE" ]
        ,
        [ 1027, "45C23208-5C29-42BB-9EF3-8F60B8409475", 1027, 1413041315, "403253", 1413041315, "403253", "{\n}", "GORHAM ST", "GORHAM", "ST" ]
        ,
        [ 1028, "57F8E97B-FB9F-499F-89EF-70DA2715DC43", 1028, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOUGH ST", "GOUGH", "ST" ]
        ,
        [ 1029, "DE472641-1134-4EE4-A1BE-7A4C9A03F7D5", 1029, 1413041315, "403253", 1413041315, "403253", "{\n}", "GOULD ST", "GOULD", "ST" ]
        ,
        [ 1030, "3D0B9C38-BCA1-40A2-BA41-324C4FD4CFC0", 1030, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRACE ST", "GRACE", "ST" ]
        ,
        [ 1031, "95990172-1653-4612-8708-7BA6868D416B", 1031, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRAFTON AVE", "GRAFTON", "AVE" ]
        ,
        [ 1032, "0FAA92BC-584E-4D12-9AC9-B10CB606A8A0", 1032, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRAHAM ST", "GRAHAM", "ST" ]
        ,
        [ 1033, "391CA0B0-D222-4914-B7E6-F1DCA627231D", 1033, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRANADA AVE", "GRANADA", "AVE" ]
        ,
        [ 1034, "621EED9E-0161-4496-B2D5-3AD83DD2E288", 1034, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRAND VIEW AVE", "GRAND VIEW", "AVE" ]
        ,
        [ 1035, "E0710ACB-038A-4833-864B-C464E8F290E4", 1035, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRAND VIEW TER", "GRAND VIEW", "TER" ]
        ,
        [ 1036, "68F584A6-5A7D-4D69-B127-C392222FC9FD", 1036, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRANT AVE", "GRANT", "AVE" ]
        ,
        [ 1037, "0B0DD896-9A07-4BA7-9F0A-72687DE7E03A", 1037, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRANVILLE WAY", "GRANVILLE", "WAY" ]
        ,
        [ 1038, "15930CBC-7822-485C-A5F5-7E228F67E487", 1038, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRATTAN ST", "GRATTAN", "ST" ]
        ,
        [ 1039, "D56F5715-7AD6-467E-A9BF-9EB8EA5953A9", 1039, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRAYSTONE TER", "GRAYSTONE", "TER" ]
        ,
        [ 1040, "53066B49-EA22-4603-B2EF-F80CDDCA317C", 1040, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREAT HWY", "GREAT", "HWY" ]
        ,
        [ 1041, "6C0234E8-25B7-4335-9555-D631BE3A8496", 1041, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREELY CT", "GREELY", "CT" ]
        ,
        [ 1042, "E8275262-7199-498A-99D6-8FD887DA2AB0", 1042, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREEN ST", "GREEN", "ST" ]
        ,
        [ 1043, "D740659C-FB52-4CA9-B17A-BCC7C6E4A328", 1043, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREENOUGH AVE", "GREENOUGH", "AVE" ]
        ,
        [ 1044, "D5DCFE76-9AE0-467C-A036-D6DF3947A0FC", 1044, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREENVIEW CT", "GREENVIEW", "CT" ]
        ,
        [ 1045, "8B6E1767-2DA6-4713-8AAA-FE7253C6E7A3", 1045, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREENWICH CT", "GREENWICH", "CT" ]
        ,
        [ 1046, "A5CF2973-F8BA-486D-BCB4-B6F77450F725", 1046, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREENWICH ST", "GREENWICH", "ST" ]
        ,
        [ 1047, "0B4EA2C9-CE84-40B1-9D8C-649ABA406E35", 1047, 1413041315, "403253", 1413041315, "403253", "{\n}", "GREENWOOD AVE", "GREENWOOD", "AVE" ]
        ,
        [ 1048, "386A3453-647E-4ACF-9039-F69DFBAD82A8", 1048, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRENARD TER", "GRENARD", "TER" ]
        ,
        [ 1049, "30458C1E-0843-480C-9F79-68447C6DF507", 1049, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRIFFITH ST", "GRIFFITH", "ST" ]
        ,
        [ 1050, "EB66CEE7-09ED-4824-90B9-8E80F060CD74", 1050, 1413041315, "403253", 1413041315, "403253", "{\n}", "GRIJALVA DR", "GRIJALVA", "DR" ]
        ,
        [ 1051, "88F4BEC1-ABB7-4FC6-903E-BBC54CCE7C57", 1051, 1413041315, "403253", 1413041315, "403253", "{\n}", "GROTE PL", "GROTE", "PL" ]
        ,
        [ 1052, "29207BC4-0BD2-4D21-9973-8F6B9053F5C5", 1052, 1413041315, "403253", 1413041315, "403253", "{\n}", "GROVE ST", "GROVE", "ST" ]
        ,
        [ 1053, "C9282CD1-6CDE-461F-80EA-57BF877AE172", 1053, 1413041315, "403253", 1413041315, "403253", "{\n}", "GUERRERO ST", "GUERRERO", "ST" ]
        ,
        [ 1054, "7F694477-7B64-4DC2-88EE-99680E50DDA5", 1054, 1413041315, "403253", 1413041315, "403253", "{\n}", "GUTTENBERG ST", "GUTTENBERG", "ST" ]
        ,
        [ 1055, "AD8DE0AE-9545-497F-AC4B-22F22F6FEA44", 1055, 1413041315, "403253", 1413041315, "403253", "{\n}", "GUY PL", "GUY", "PL" ]
        ,
        [ 1056, "542DF92A-4F81-436A-B06D-DFDC83795D64", 1056, 1413041315, "403253", 1413041315, "403253", "{\n}", "H ST", "H", "ST" ]
        ,
        [ 1057, "9141C253-59AE-4E4E-B77B-3B5465D97610", 1057, 1413041315, "403253", 1413041315, "403253", "{\n}", "HABITAT TER", "HABITAT", "TER" ]
        ,
        [ 1058, "CD257562-A4A7-48ED-BB9A-AF67D4986787", 1058, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAGIWARA TEA GARDEN DR", "HAGIWARA TEA GARDEN", "DR" ]
        ,
        [ 1059, "28EAADD2-560F-4C35-8844-6ED6FE4A4C0D", 1059, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAHN ST", "HAHN", "ST" ]
        ,
        [ 1060, "04491100-39EC-4F41-8FFD-4B8DF7C7B34A", 1060, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAIGHT ST", "HAIGHT", "ST" ]
        ,
        [ 1061, "1DC60C4A-2C11-4A9A-808C-2755DEBB9335", 1061, 1413041315, "403253", 1413041315, "403253", "{\n}", "HALE ST", "HALE", "ST" ]
        ,
        [ 1062, "3029B597-3B0D-431A-95FD-7179818AADE8", 1062, 1413041315, "403253", 1413041315, "403253", "{\n}", "HALIBUT CT", "HALIBUT", "CT" ]
        ,
        [ 1063, "B2EE09CA-ED8B-402B-A53A-18A037FEC0BC", 1063, 1413041315, "403253", 1413041315, "403253", "{\n}", "HALLAM ST", "HALLAM", "ST" ]
        ,
        [ 1064, "1D39AF1A-1012-4C15-96BA-64722D8A9918", 1064, 1413041315, "403253", 1413041315, "403253", "{\n}", "HALLECK ST", "HALLECK", "ST" ]
        ,
        [ 1065, "8929D88F-D365-4779-B873-AAF0CEE50B97", 1065, 1413041315, "403253", 1413041315, "403253", "{\n}", "HALYBURTON CT", "HALYBURTON", "CT" ]
        ,
        [ 1066, "3E11E10F-9428-4FA2-84E7-55872FB6222D", 1066, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAMERTON AVE", "HAMERTON", "AVE" ]
        ,
        [ 1067, "9DFF7BCE-DFF6-41C9-9083-5A3A4FFCFBFF", 1067, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAMILTON ST", "HAMILTON", "ST" ]
        ,
        [ 1068, "3D881719-D943-489E-9346-07D8A1C240E9", 1068, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAMLIN ST", "HAMLIN", "ST" ]
        ,
        [ 1069, "C116121C-2004-49CC-99F8-352242BB4706", 1069, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAMPSHIRE ST", "HAMPSHIRE", "ST" ]
        ,
        [ 1070, "5ED37A95-E20D-4F2B-8D1F-52067E1AEDC2", 1070, 1413041315, "403253", 1413041315, "403253", "{\n}", "HANCOCK ST", "HANCOCK", "ST" ]
        ,
        [ 1071, "ADE580BA-CAF4-4702-9611-130750A9AB68", 1071, 1413041315, "403253", 1413041315, "403253", "{\n}", "HANGAH ST", "HANGAH", "ST" ]
        ,
        [ 1072, "E1FEED5B-8CAA-49D9-96BE-5DA1FB8F7D7B", 1072, 1413041315, "403253", 1413041315, "403253", "{\n}", "HANOVER ST", "HANOVER", "ST" ]
        ,
        [ 1073, "A8BC48CB-94A4-469D-AD15-E320D3455D2C", 1073, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARBOR RD", "HARBOR", "RD" ]
        ,
        [ 1074, "FD5EA91E-BCCF-4E4E-A1E7-75758D0771B6", 1074, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARDIE AVE", "HARDIE", "AVE" ]
        ,
        [ 1075, "A5B51E7D-BBE6-4EF3-A2DC-2720F6BE28FC", 1075, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARDIE PL", "HARDIE", "PL" ]
        ,
        [ 1076, "E0BDA743-F729-4418-A1B9-4CE5E9276654", 1076, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARDING RD", "HARDING", "RD" ]
        ,
        [ 1077, "0B097D36-65F6-41B1-85EB-32DE116B5957", 1077, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARE ST", "HARE", "ST" ]
        ,
        [ 1078, "A7DCEF38-052B-4D4E-9E1C-C70061AF803D", 1078, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARKNESS AVE", "HARKNESS", "AVE" ]
        ,
        [ 1079, "D20E8BA6-700D-429D-97D4-957FC3568A35", 1079, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARLAN PL", "HARLAN", "PL" ]
        ,
        [ 1080, "B51761B7-AA92-44C7-B45E-D2D824ABD6B3", 1080, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARLEM ALY", "HARLEM", "ALY" ]
        ,
        [ 1081, "02048059-D132-4B9A-962C-21CC3C9D4820", 1081, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARLOW ST", "HARLOW", "ST" ]
        ,
        [ 1082, "558E8887-8E6B-42BB-9D8E-EC1BF8F8B3DA", 1082, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARNEY WAY", "HARNEY", "WAY" ]
        ,
        [ 1083, "DA8FCF01-8769-485D-9D75-ABC6759EDA58", 1083, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAROLD AVE", "HAROLD", "AVE" ]
        ,
        [ 1084, "CA83126D-A856-4AB6-92F8-DD18A30944C9", 1084, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARPER ST", "HARPER", "ST" ]
        ,
        [ 1085, "7AB417E9-E983-4780-B28A-DE3D6F549AE7", 1085, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRIET LN", "HARRIET", "LN" ]
        ,
        [ 1086, "99B4AF4C-A550-4B1D-BA88-10895203AA76", 1086, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRIET ST", "HARRIET", "ST" ]
        ,
        [ 1087, "E5F27A1A-6B57-4056-BCF9-EEA0BF6284C9", 1087, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRINGTON ST", "HARRINGTON", "ST" ]
        ,
        [ 1088, "A98B43B3-A505-427E-B65B-822B9526BEC5", 1088, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRIS PL", "HARRIS", "PL" ]
        ,
        [ 1089, "B775833F-1010-4A01-9C11-B73E4A6B2416", 1089, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRISON BLVD", "HARRISON", "BLVD" ]
        ,
        [ 1090, "E7DFE17D-DA1B-432B-9923-21528F7AF03E", 1090, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRISON ST", "HARRISON", "ST" ]
        ,
        [ 1091, "4A18D849-025B-44FF-8412-DD572E74C011", 1091, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARRY ST", "HARRY", "ST" ]
        ,
        [ 1092, "4634E72E-E067-4C9F-B249-8CC74D10EAB4", 1092, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARTFORD ST", "HARTFORD", "ST" ]
        ,
        [ 1093, "13590649-F922-4F5E-B2D1-42A75F7B84A1", 1093, 1413041315, "403253", 1413041315, "403253", "{\n}", "HARVARD ST", "HARVARD", "ST" ]
        ,
        [ 1094, "2DD03239-0782-424D-8766-6C7BBD7D0ADB", 1094, 1413041315, "403253", 1413041315, "403253", "{\n}", "HASTINGS TER", "HASTINGS", "TER" ]
        ,
        [ 1095, "101FA22E-B861-41A2-9684-FFB67D227343", 1095, 1413041315, "403253", 1413041315, "403253", "{\n}", "HATTIE ST", "HATTIE", "ST" ]
        ,
        [ 1096, "A7AE7B7A-E30A-4DE0-98F2-FEBEB59F81BB", 1096, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAVELOCK ST", "HAVELOCK", "ST" ]
        ,
        [ 1097, "CF3D9D9F-F51C-4F89-9AE7-8E6F41AA8704", 1097, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAVENS ST", "HAVENS", "ST" ]
        ,
        [ 1098, "F780226E-E7DE-4F26-9787-CF6421929098", 1098, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAVENSIDE DR", "HAVENSIDE", "DR" ]
        ,
        [ 1099, "944AA5BA-5CF0-4DD2-A3BB-B1FDAD5C2B49", 1099, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAWES ST", "HAWES", "ST" ]
        ,
        [ 1100, "F6B57DB7-DDDA-4252-8FD9-DF88A2BFF131", 1100, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAWKINS LN", "HAWKINS", "LN" ]
        ,
        [ 1101, "EFF1CE38-1204-4516-967E-77C9E5693DD0", 1101, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAWTHORNE ST", "HAWTHORNE", "ST" ]
        ,
        [ 1102, "841C5BC0-8CA7-49A3-90B3-7C516567E297", 1102, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAYES ST", "HAYES", "ST" ]
        ,
        [ 1103, "11DB2704-1EB5-40E0-97B2-19057AFDA124", 1103, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAYS ST", "HAYS", "ST" ]
        ,
        [ 1104, "8B2AFE67-6C47-465B-97DA-4767ECD7237B", 1104, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAYWARD ST", "HAYWARD", "ST" ]
        ,
        [ 1105, "611CEABA-91C3-43DB-83C3-EA862E7222F6", 1105, 1413041315, "403253", 1413041315, "403253", "{\n}", "HAZELWOOD AVE", "HAZELWOOD", "AVE" ]
        ,
        [ 1106, "403996BC-ABFE-4EAB-82D3-E5CD42D8E887", 1106, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEAD ST", "HEAD", "ST" ]
        ,
        [ 1107, "998BAF82-4385-428E-B6AC-8D90F532708F", 1107, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEALY AVE", "HEALY", "AVE" ]
        ,
        [ 1108, "5DB1D920-955D-42C3-B1D6-856E8807269C", 1108, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEARST AVE", "HEARST", "AVE" ]
        ,
        [ 1109, "081D0EB0-AC1C-4E16-95D3-EB8641BC9EA9", 1109, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEATHER AVE", "HEATHER", "AVE" ]
        ,
        [ 1110, "482D5770-03C2-4C03-956D-24F3D6C8E3FC", 1110, 1413041315, "403253", 1413041315, "403253", "{\n}", "HELEN ST", "HELEN", "ST" ]
        ,
        [ 1111, "681965F3-04B5-4EE6-9818-51C8B0E97468", 1111, 1413041315, "403253", 1413041315, "403253", "{\n}", "HELENA ST", "HELENA", "ST" ]
        ,
        [ 1112, "89990B17-3B68-4E78-B9BF-CCA432D2BB56", 1112, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEMLOCK ST", "HEMLOCK", "ST" ]
        ,
        [ 1113, "7D809367-BA98-4BE3-BC72-99A02DB04FCA", 1113, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEMWAY TER", "HEMWAY", "TER" ]
        ,
        [ 1114, "49E26FDB-8CEB-48F4-8DBE-D03B6D327D18", 1114, 1413041315, "403253", 1413041315, "403253", "{\n}", "HENRY ST", "HENRY", "ST" ]
        ,
        [ 1115, "A1EE59E0-63F3-4089-9C2E-0A3E611E9B23", 1115, 1413041315, "403253", 1413041315, "403253", "{\n}", "HENRY ADAMS ST", "HENRY ADAMS", "ST" ]
        ,
        [ 1116, "F26CE956-1929-48B5-8479-647F2A932057", 1116, 1413041315, "403253", 1413041315, "403253", "{\n}", "HERITAGE LN", "HERITAGE", "LN" ]
        ,
        [ 1117, "54E1FEB8-7DD9-4342-80FF-0FA40BD90342", 1117, 1413041315, "403253", 1413041315, "403253", "{\n}", "HERMANN ST", "HERMANN", "ST" ]
        ,
        [ 1118, "0FF76458-528F-49EE-9CBF-EA967A66CF0A", 1118, 1413041315, "403253", 1413041315, "403253", "{\n}", "HERNANDEZ AVE", "HERNANDEZ", "AVE" ]
        ,
        [ 1119, "9EE9CDA4-9AB9-4DFF-B8F0-3881E52066E3", 1119, 1413041315, "403253", 1413041315, "403253", "{\n}", "HERON ST", "HERON", "ST" ]
        ,
        [ 1120, "12384986-C2F5-49B8-83BC-86CC37C6FF2A", 1120, 1413041315, "403253", 1413041315, "403253", "{\n}", "HESTER AVE", "HESTER", "AVE" ]
        ,
        [ 1121, "EE0F8524-4475-4868-B2F7-E1ED853441F7", 1121, 1413041315, "403253", 1413041315, "403253", "{\n}", "HEYMAN AVE", "HEYMAN", "AVE" ]
        ,
        [ 1122, "9086CB73-9CE0-402B-A6CD-21B2F759B5B9", 1122, 1413041315, "403253", 1413041315, "403253", "{\n}", "HICKORY ST", "HICKORY", "ST" ]
        ,
        [ 1123, "43332E09-C985-40D6-984E-E33403DFCC1E", 1123, 1413041315, "403253", 1413041315, "403253", "{\n}", "HICKS RD", "HICKS", "RD" ]
        ,
        [ 1124, "43EE96AA-6CC6-45AA-A94A-13FC44124D79", 1124, 1413041315, "403253", 1413041315, "403253", "{\n}", "HIDALGO TER", "HIDALGO", "TER" ]
        ,
        [ 1125, "84BD89AA-4DAC-403E-AADA-E7A9222BD20F", 1125, 1413041315, "403253", 1413041315, "403253", "{\n}", "HIGH ST", "HIGH", "ST" ]
        ,
        [ 1126, "69225B0A-A474-442C-99B8-FAE2B0846178", 1126, 1413041315, "403253", 1413041315, "403253", "{\n}", "HIGHLAND AVE", "HIGHLAND", "AVE" ]
        ,
        [ 1127, "473C577E-29AF-47C1-ACB6-9F6B7ED2DE04", 1127, 1413041315, "403253", 1413041315, "403253", "{\n}", "HIGUERA AVE", "HIGUERA", "AVE" ]
        ,
        [ 1128, "11FE55A1-5E69-4CC2-8634-3FA19F2770A2", 1128, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILIRITAS AVE", "HILIRITAS", "AVE" ]
        ,
        [ 1129, "B0CC9D5D-E450-42C5-8E85-7526AC683DB7", 1129, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILL DR", "HILL", "DR" ]
        ,
        [ 1130, "B51B54AA-2C78-417D-BFD5-06F02E89C655", 1130, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILL ST", "HILL", "ST" ]
        ,
        [ 1131, "5729D4EE-8CED-495D-B85D-4547C5D5CA80", 1131, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILL POINT AVE", "HILL POINT", "AVE" ]
        ,
        [ 1132, "1D1178CD-AD2F-4B27-9593-3065838C474B", 1132, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILLCREST CT", "HILLCREST", "CT" ]
        ,
        [ 1133, "A405E8A8-F7EE-49E8-A0F0-9FE78A219FA4", 1133, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILLCREST RD", "HILLCREST", "RD" ]
        ,
        [ 1134, "64333AF8-BDBA-46C5-B4E5-D76E31EE539F", 1134, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILLSIDE LN", "HILLSIDE", "LN" ]
        ,
        [ 1135, "8987226D-16AD-49A1-ACBD-8C02B6370565", 1135, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILLVIEW CT", "HILLVIEW", "CT" ]
        ,
        [ 1136, "1D2EE853-14BD-424A-A16D-069F627675A3", 1136, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILLWAY AVE", "HILLWAY", "AVE" ]
        ,
        [ 1137, "404385D4-4860-4DB0-AA42-85A17F38DC66", 1137, 1413041315, "403253", 1413041315, "403253", "{\n}", "HILTON ST", "HILTON", "ST" ]
        ,
        [ 1138, "2ADE44A4-B3F4-4999-8D21-6EDBA027D696", 1138, 1413041315, "403253", 1413041315, "403253", "{\n}", "HIMMELMANN PL", "HIMMELMANN", "PL" ]
        ,
        [ 1139, "0CEF66F3-2057-406F-8601-4B77D39517A0", 1139, 1413041315, "403253", 1413041315, "403253", "{\n}", "HITCHCOCK LN", "HITCHCOCK", "LN" ]
        ,
        [ 1140, "EB3383B9-46BB-45D4-AC38-F01015080406", 1140, 1413041315, "403253", 1413041315, "403253", "{\n}", "HITCHCOCK ST", "HITCHCOCK", "ST" ]
        ,
        [ 1141, "5EEEBCA0-2680-4290-84CB-7568F10DC26A", 1141, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOBART ALY", "HOBART", "ALY" ]
        ,
        [ 1142, "67ED20F7-0B89-4BEB-AE52-661FE3F61794", 1142, 1413041315, "403253", 1413041315, "403253", "{\n}", "HODGES ALY", "HODGES", "ALY" ]
        ,
        [ 1143, "40B18E21-78B3-4C38-BA2B-802F4F386BD3", 1143, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOFF ST", "HOFF", "ST" ]
        ,
        [ 1144, "C7CF4451-8E19-44BD-A679-45F221E95456", 1144, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOFFMAN AVE", "HOFFMAN", "AVE" ]
        ,
        [ 1145, "4C7D41C0-9E79-4EB5-89D7-E13FA4663137", 1145, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOFFMAN ST", "HOFFMAN", "ST" ]
        ,
        [ 1146, "7D59510A-0645-4EF0-B7EF-13F737289930", 1146, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLADAY AVE", "HOLLADAY", "AVE" ]
        ,
        [ 1147, "2D797014-FEBB-49EA-A283-A717406C55FD", 1147, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLAND CT", "HOLLAND", "CT" ]
        ,
        [ 1148, "CB92777B-EBEC-4705-BA93-D56EFD5386AF", 1148, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLIS ST", "HOLLIS", "ST" ]
        ,
        [ 1149, "720329D6-3E46-4B36-A3B9-A9AC349229FE", 1149, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLISTER AVE", "HOLLISTER", "AVE" ]
        ,
        [ 1150, "87F586F0-D709-4207-834C-682B58C2BE31", 1150, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLOWAY AVE", "HOLLOWAY", "AVE" ]
        ,
        [ 1151, "0DD6EB9B-E3B8-4142-8C93-C2C3265FB2FF", 1151, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLY PARK CIR", "HOLLY PARK", "CIR" ]
        ,
        [ 1152, "EC846910-A6FF-4847-BF04-0B9A8E5BFD24", 1152, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLLYWOOD CT", "HOLLYWOOD", "CT" ]
        ,
        [ 1153, "369B2B07-F19D-4B38-9071-2E6C274467DC", 1153, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOLYOKE ST", "HOLYOKE", "ST" ]
        ,
        [ 1154, "1B974C83-031F-4C09-9F5D-B610AE2F4AB9", 1154, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOMER ST", "HOMER", "ST" ]
        ,
        [ 1155, "B89BD36F-6A9F-4E2F-94D6-DE5598F075D3", 1155, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOMESTEAD ST", "HOMESTEAD", "ST" ]
        ,
        [ 1156, "CDE44E14-4FA5-4E02-9275-6C2CFDA8247D", 1156, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOMEWOOD CT", "HOMEWOOD", "CT" ]
        ,
        [ 1157, "49A9CC78-1658-4E8B-8974-58A321BAF0FF", 1157, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOOKER ALY", "HOOKER", "ALY" ]
        ,
        [ 1158, "824029C1-B2E4-4114-9A37-E3193E8DCEE0", 1158, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOOPER ST", "HOOPER", "ST" ]
        ,
        [ 1159, "2C113809-34AE-4E3F-8502-73864FCFB383", 1159, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOPKINS AVE", "HOPKINS", "AVE" ]
        ,
        [ 1160, "530969BC-0A74-4A8C-A494-B6A81FE32DDB", 1160, 1413041315, "403253", 1413041315, "403253", "{\n}", "HORACE ST", "HORACE", "ST" ]
        ,
        [ 1161, "7DAE8F82-0A63-4F80-A77D-3DE9FEF8EB68", 1161, 1413041315, "403253", 1413041315, "403253", "{\n}", "HORNE AVE", "HORNE", "AVE" ]
        ,
        [ 1162, "13D42C87-E132-4FD7-B8B8-913EBA2AF665", 1162, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOTALING PL", "HOTALING", "PL" ]
        ,
        [ 1163, "123D7548-7F8A-4EFB-8007-2532D1DB26D8", 1163, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOUSTON ST", "HOUSTON", "ST" ]
        ,
        [ 1164, "C196BB2A-12C8-4B87-BC9B-F7CE1A1D8BDC", 1164, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOWARD CT", "HOWARD", "CT" ]
        ,
        [ 1165, "73A22634-2AD1-4BFE-91D4-FB3739932482", 1165, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOWARD RD", "HOWARD", "RD" ]
        ,
        [ 1166, "F9D5D2B2-DB63-4424-B2CB-41F202ADE19C", 1166, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOWARD ST", "HOWARD", "ST" ]
        ,
        [ 1167, "06B97DE3-D801-4A00-B8F3-8E235630BB9B", 1167, 1413041315, "403253", 1413041315, "403253", "{\n}", "HOWTH ST", "HOWTH", "ST" ]
        ,
        [ 1168, "2066C468-0CA5-4B31-B476-DD7C98D65D53", 1168, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUBBELL ST", "HUBBELL", "ST" ]
        ,
        [ 1169, "37C720E9-7C0D-4165-A3B7-89E84D1BE2CF", 1169, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUDSON AVE", "HUDSON", "AVE" ]
        ,
        [ 1170, "A9A37BBA-008C-44D3-9583-F398BF2BA727", 1170, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUGO ST", "HUGO", "ST" ]
        ,
        [ 1171, "DA733AB3-A9F6-4596-AD03-D4C3C0AA3049", 1171, 1413041315, "403253", 1413041315, "403253", "{\n}", "HULBERT ALY", "HULBERT", "ALY" ]
        ,
        [ 1172, "C344D118-27EB-44A1-9056-D34331D2A847", 1172, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUMBOLDT ST", "HUMBOLDT", "ST" ]
        ,
        [ 1173, "EB524180-6A68-45F8-9002-E81278967C0F", 1173, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNT ST", "HUNT", "ST" ]
        ,
        [ 1174, "13ED8E49-3791-4E81-887B-29332A415DEF", 1174, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNTER RD", "HUNTER", "RD" ]
        ,
        [ 1175, "FF4B6D18-68A2-444D-B10B-FD76939B5D1D", 1175, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNTER ST", "HUNTER", "ST" ]
        ,
        [ 1176, "EAA030E4-2B11-410C-8C7E-72DCB30984C0", 1176, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNTERS POINT BLVD", "HUNTERS POINT", "BLVD" ]
        ,
        [ 1177, "05DEF538-BCA9-409E-AA7A-EF0111493536", 1177, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNTERS POINT EXPY", "HUNTERS POINT", "EXPY" ]
        ,
        [ 1178, "2A91DA21-3171-447C-862D-C0D2D1F5128A", 1178, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUNTINGTON DR", "HUNTINGTON", "DR" ]
        ,
        [ 1179, "CAF90DF6-AC00-4D1D-9180-07BFE0F57343", 1179, 1413041315, "403253", 1413041315, "403253", "{\n}", "HURON AVE", "HURON", "AVE" ]
        ,
        [ 1180, "FA303FD6-9CEA-4FD1-AE91-1E7D801C6E05", 1180, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUSSEY ST", "HUSSEY", "ST" ]
        ,
        [ 1181, "C22E477E-E12D-4274-8A34-2D21E9616193", 1181, 1413041315, "403253", 1413041315, "403253", "{\n}", "HUTCHINS CT", "HUTCHINS", "CT" ]
        ,
        [ 1182, "B6C4623A-3092-418E-B733-266715FFC47A", 1182, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 1 NORTHBOUND", "HWY 1 NORTHBOUND", null ]
        ,
        [ 1183, "CEDC8B61-9465-488F-A5A6-B13B4F0E9444", 1183, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 1 SOUTHBOUND", "HWY 1 SOUTHBOUND", null ]
        ,
        [ 1184, "64011DD1-3DB7-4B52-80A8-F7A5B30FEBD0", 1184, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 1 TO HWY 101 NORTHBOUND RAMP", "HWY 1 TO HWY 101 NORTHBOUND", "RAMP" ]
        ,
        [ 1185, "9C66418A-615A-412E-B2A3-43AB55F36617", 1185, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 1 TO HWY 101 SOUTHBOUND RAMP", "HWY 1 TO HWY 101 SOUTHBOUND", "RAMP" ]
        ,
        [ 1186, "A2E5C76F-01D2-4492-89CE-AF16164041DC", 1186, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 N OFF RAMP", "HWY 101 N OFF", "RAMP" ]
        ,
        [ 1187, "CB6E7FB0-5490-4468-A069-106C8A680607", 1187, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 N ON RAMP", "HWY 101 N ON", "RAMP" ]
        ,
        [ 1188, "31FE8D74-2968-43DD-B750-C94A5389CB29", 1188, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 NORTHBOUND", "HWY 101 NORTHBOUND", null ]
        ,
        [ 1189, "B770685B-26EB-450A-9344-FE4E774E3DE3", 1189, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 NORTHBOUND RAMP", "HWY 101 NORTHBOUND", "RAMP" ]
        ,
        [ 1190, "C6359C8B-BD00-4344-8CF6-0F205A3C905C", 1190, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 S OFF RAMP", "HWY 101 S OFF", "RAMP" ]
        ,
        [ 1191, "3E4C4E31-C659-4B5B-9F70-B191ABCE138B", 1191, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 S ON RAMP", "HWY 101 S ON", "RAMP" ]
        ,
        [ 1192, "564908D7-8BE8-4B54-B174-3E26B964BF13", 1192, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 SOUTHBOUND", "HWY 101 SOUTHBOUND", null ]
        ,
        [ 1193, "8A1B500B-1E6E-4B30-85F2-2C3F34F7ED08", 1193, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 SOUTHBOUND RAMP", "HWY 101 SOUTHBOUND", "RAMP" ]
        ,
        [ 1194, "56CAC58B-9D0E-4689-9F09-E66EF7EF451B", 1194, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 TO HWY 1 RAMP", "HWY 101 TO HWY 1", "RAMP" ]
        ,
        [ 1195, "C91FBAE8-52F0-4080-A9E8-698C8E1A2B49", 1195, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 TO I-280 RAMP", "HWY 101 TO I-280", "RAMP" ]
        ,
        [ 1196, "725EBE04-DDBE-4334-8EBF-39FFD0D7EF4E", 1196, 1413041315, "403253", 1413041315, "403253", "{\n}", "HWY 101 TO I-80 RAMP", "HWY 101 TO I-80", "RAMP" ]
        ,
        [ 1197, "DCD87DD0-7C4C-46E4-B8C0-B683B8537942", 1197, 1413041315, "403253", 1413041315, "403253", "{\n}", "HYDE ST", "HYDE", "ST" ]
        ,
        [ 1198, "B2DA0A4A-0FB7-4C88-9338-936BB01E9A5A", 1198, 1413041315, "403253", 1413041315, "403253", "{\n}", "I ST", "I", "ST" ]
        ,
        [ 1199, "5C6F0C38-0B93-4560-B5FA-1EAC3BA8097F", 1199, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 N OFF RAMP", "I-280 N OFF", "RAMP" ]
        ,
        [ 1200, "5FFCD30C-7DB9-48A4-8CDC-2F0E687A2588", 1200, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 N ON RAMP", "I-280 N ON", "RAMP" ]
        ,
        [ 1201, "7CB2AAEA-882B-46F2-AB90-A71199EF159B", 1201, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 NORTHBOUND", "I-280 NORTHBOUND", null ]
        ,
        [ 1202, "555D7077-6CA1-49EB-A535-E8BD7A8A0AE8", 1202, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 S OFF RAMP", "I-280 S OFF", "RAMP" ]
        ,
        [ 1203, "5FBD3F41-9C2D-4AF7-8B99-3B5CAE4DD84D", 1203, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 S ON RAMP", "I-280 S ON", "RAMP" ]
        ,
        [ 1204, "6BDAB0D6-D41D-4347-815E-51DF2B56311D", 1204, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 SOUTHBOUND", "I-280 SOUTHBOUND", null ]
        ,
        [ 1205, "A60898AD-6418-4DF0-B628-EA5DE9F58005", 1205, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-280 TO HWY 101 RAMP", "I-280 TO HWY 101", "RAMP" ]
        ,
        [ 1206, "AEF1E738-F567-4096-A53B-D7F74E4CA725", 1206, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 E OFF RAMP", "I-80 E OFF", "RAMP" ]
        ,
        [ 1207, "AA8D655F-96D2-4ECE-9744-45F5D2AE0D66", 1207, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 E ON RAMP", "I-80 E ON", "RAMP" ]
        ,
        [ 1208, "C5ADA431-58E1-48EA-8399-928B7C52A304", 1208, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 EASTBOUND", "I-80 EASTBOUND", null ]
        ,
        [ 1209, "2ED62A74-3871-44D5-B21A-78170A23C6CC", 1209, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 TO HWY 101 RAMP", "I-80 TO HWY 101", "RAMP" ]
        ,
        [ 1210, "66B98C54-C37E-4FEE-B9E9-C4FE7396F2A2", 1210, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 W OFF RAMP", "I-80 W OFF", "RAMP" ]
        ,
        [ 1211, "673CF975-1824-4889-8E21-B1A871781385", 1211, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 W ON RAMP", "I-80 W ON", "RAMP" ]
        ,
        [ 1212, "B51ABF71-2DC5-4A30-9DC0-135C3A5A1199", 1212, 1413041315, "403253", 1413041315, "403253", "{\n}", "I-80 WESTBOUND", "I-80 WESTBOUND", null ]
        ,
        [ 1213, "9A5DD82B-50F4-4471-8534-7051A52885C3", 1213, 1413041315, "403253", 1413041315, "403253", "{\n}", "ICEHOUSE ALY", "ICEHOUSE", "ALY" ]
        ,
        [ 1214, "A9AC5136-0778-4C09-864B-63DC3F56913E", 1214, 1413041315, "403253", 1413041315, "403253", "{\n}", "IDORA AVE", "IDORA", "AVE" ]
        ,
        [ 1215, "CDCA497A-2088-443E-AC65-4E146BC17671", 1215, 1413041315, "403253", 1413041315, "403253", "{\n}", "IGNACIO AVE", "IGNACIO", "AVE" ]
        ,
        [ 1216, "4BCEFB1B-DF2C-4A0C-854C-DC71D208C85E", 1216, 1413041315, "403253", 1413041315, "403253", "{\n}", "ILLINOIS ST", "ILLINOIS", "ST" ]
        ,
        [ 1217, "50709700-A8A9-444E-963A-1264EB18A44F", 1217, 1413041315, "403253", 1413041315, "403253", "{\n}", "ILS LN", "ILS", "LN" ]
        ,
        [ 1218, "8D76FB4F-C580-43AB-B2A0-AB2E556A06DE", 1218, 1413041315, "403253", 1413041315, "403253", "{\n}", "IMPERIAL ALY", "IMPERIAL", "ALY" ]
        ,
        [ 1219, "89A4C29E-685F-445C-894A-7489C51634E3", 1219, 1413041315, "403253", 1413041315, "403253", "{\n}", "INA CT", "INA", "CT" ]
        ,
        [ 1220, "0035CFB0-D26E-4E2E-95A9-BA6271924AEE", 1220, 1413041315, "403253", 1413041315, "403253", "{\n}", "INCA LN", "INCA", "LN" ]
        ,
        [ 1221, "6DAF3CB5-699D-4DF5-9518-8D5CDCD2DFD8", 1221, 1413041315, "403253", 1413041315, "403253", "{\n}", "INCINERATOR RD", "INCINERATOR", "RD" ]
        ,
        [ 1222, "BD1A9A0C-6B5F-4E35-8419-6916386F363B", 1222, 1413041315, "403253", 1413041315, "403253", "{\n}", "INDIA ST", "INDIA", "ST" ]
        ,
        [ 1223, "C50CB1BE-EE02-4A99-85A7-D8EA906F6830", 1223, 1413041315, "403253", 1413041315, "403253", "{\n}", "INDIANA ST", "INDIANA", "ST" ]
        ,
        [ 1224, "65F88FB9-90AE-4D42-847A-D2D2BBF34C20", 1224, 1413041315, "403253", 1413041315, "403253", "{\n}", "INDUSTRIAL ST", "INDUSTRIAL", "ST" ]
        ,
        [ 1225, "0FD86162-4AB3-4D9C-8566-1E0B1D1ED113", 1225, 1413041315, "403253", 1413041315, "403253", "{\n}", "INDUSTRIAL ST OFF RAMP", "INDUSTRIAL ST OFF", "RAMP" ]
        ,
        [ 1226, "35893B2D-DD62-4080-B6C3-2C7135ABF7EF", 1226, 1413041315, "403253", 1413041315, "403253", "{\n}", "INDUSTRIAL ST ON RAMP", "INDUSTRIAL ST ON", "RAMP" ]
        ,
        [ 1227, "BF594581-32AC-4B63-A352-7DC9A9366A74", 1227, 1413041315, "403253", 1413041315, "403253", "{\n}", "INFANTRY TER", "INFANTRY", "TER" ]
        ,
        [ 1228, "F633C4F5-5DF4-4149-80CD-7AF177D57A66", 1228, 1413041315, "403253", 1413041315, "403253", "{\n}", "INGALLS ST", "INGALLS", "ST" ]
        ,
        [ 1229, "353E7A47-B423-4D9B-B342-88CA009FE02B", 1229, 1413041315, "403253", 1413041315, "403253", "{\n}", "INGERSON AVE", "INGERSON", "AVE" ]
        ,
        [ 1230, "7BFDF7B0-7B8F-4C4E-AD1B-E4F11B87CF85", 1230, 1413041315, "403253", 1413041315, "403253", "{\n}", "INGLESIDE PATH", "INGLESIDE", "PATH" ]
        ,
        [ 1231, "287DA9A8-8C55-4B26-B645-BA943A2A5FB6", 1231, 1413041315, "403253", 1413041315, "403253", "{\n}", "INNES AVE", "INNES", "AVE" ]
        ,
        [ 1232, "C9EFDBAB-A13C-479C-AF11-A2C360E579D8", 1232, 1413041315, "403253", 1413041315, "403253", "{\n}", "INNES CT", "INNES", "CT" ]
        ,
        [ 1233, "4C11F8C8-42FA-4B47-BB1A-5F11CB98326D", 1233, 1413041315, "403253", 1413041315, "403253", "{\n}", "INVERNESS DR", "INVERNESS", "DR" ]
        ,
        [ 1234, "0152E8F4-73F2-4F23-AE2D-D2A508D9D300", 1234, 1413041315, "403253", 1413041315, "403253", "{\n}", "IOWA ST", "IOWA", "ST" ]
        ,
        [ 1235, "496B7832-4912-4559-AB56-EA9934CA7372", 1235, 1413041315, "403253", 1413041315, "403253", "{\n}", "IRIS AVE", "IRIS", "AVE" ]
        ,
        [ 1236, "F1104031-206B-4E54-BA1F-EC8141D9D459", 1236, 1413041315, "403253", 1413041315, "403253", "{\n}", "IRON ALY", "IRON", "ALY" ]
        ,
        [ 1237, "2DE66CE9-D8C8-466D-8A12-87E6348D3C58", 1237, 1413041315, "403253", 1413041315, "403253", "{\n}", "IRONWOOD WAY", "IRONWOOD", "WAY" ]
        ,
        [ 1238, "CEFF1088-6397-4E05-866C-9AE4DD646B80", 1238, 1413041315, "403253", 1413041315, "403253", "{\n}", "IRVING ST", "IRVING", "ST" ]
        ,
        [ 1239, "50B13A63-D16A-4608-B67C-BDBE7FEA0034", 1239, 1413041315, "403253", 1413041315, "403253", "{\n}", "IRWIN ST", "IRWIN", "ST" ]
        ,
        [ 1240, "CCD4E46F-98A6-4E36-B64B-08A3A69070F4", 1240, 1413041315, "403253", 1413041315, "403253", "{\n}", "ISADORA DUNCAN LN", "ISADORA DUNCAN", "LN" ]
        ,
        [ 1241, "71FD1381-CEA5-4E9E-A189-651FE5ECF2D6", 1241, 1413041315, "403253", 1413041315, "403253", "{\n}", "ISIS ST", "ISIS", "ST" ]
        ,
        [ 1242, "663DA8B7-F194-4EAD-852D-C615BEE3B1B2", 1242, 1413041315, "403253", 1413041315, "403253", "{\n}", "ISLAIS ST", "ISLAIS", "ST" ]
        ,
        [ 1243, "7A59F058-28C6-4AFB-9C11-B06B75E19A94", 1243, 1413041315, "403253", 1413041315, "403253", "{\n}", "ISOLA WAY", "ISOLA", "WAY" ]
        ,
        [ 1244, "65D62DA7-A6A1-4B92-BF40-0A68BA30E448", 1244, 1413041315, "403253", 1413041315, "403253", "{\n}", "ISSLEIB AVE", "ISSLEIB", "AVE" ]
        ,
        [ 1245, "3569E640-F2A2-44E6-B7EE-D3B7E282C453", 1245, 1413041315, "403253", 1413041315, "403253", "{\n}", "ITALY AVE", "ITALY", "AVE" ]
        ,
        [ 1246, "E2799581-08AA-4274-9E73-762F98EE70C2", 1246, 1413041315, "403253", 1413041315, "403253", "{\n}", "IVY ST", "IVY", "ST" ]
        ,
        [ 1247, "52A7E834-6D35-4A4A-A0C0-DE2841064966", 1247, 1413041315, "403253", 1413041315, "403253", "{\n}", "J ST", "J", "ST" ]
        ,
        [ 1248, "E928C595-5AD3-4D2B-991F-82945BFB5873", 1248, 1413041315, "403253", 1413041315, "403253", "{\n}", "JACK KEROUAC ALY", "JACK KEROUAC", "ALY" ]
        ,
        [ 1249, "8254F68E-255D-49A9-A15E-8FDC55236AFF", 1249, 1413041315, "403253", 1413041315, "403253", "{\n}", "JACK LONDON ALY", "JACK LONDON", "ALY" ]
        ,
        [ 1250, "877CAE19-0DD4-4CDA-AEDF-66980F81DB3A", 1250, 1413041315, "403253", 1413041315, "403253", "{\n}", "JACK MICHELINE ALY", "JACK MICHELINE", "ALY" ]
        ,
        [ 1251, "4703D9E1-F42E-470B-9A9E-764F621AD7C7", 1251, 1413041315, "403253", 1413041315, "403253", "{\n}", "JACKSON ST", "JACKSON", "ST" ]
        ,
        [ 1252, "040BED30-1BD3-48F5-95F9-D09793676571", 1252, 1413041315, "403253", 1413041315, "403253", "{\n}", "JADE PL", "JADE", "PL" ]
        ,
        [ 1253, "068FFD70-0745-4145-AF32-22D776802DD7", 1253, 1413041315, "403253", 1413041315, "403253", "{\n}", "JAKEY CT", "JAKEY", "CT" ]
        ,
        [ 1254, "21656B27-FDA7-4B8B-A7B9-BAAAA2D99C33", 1254, 1413041315, "403253", 1413041315, "403253", "{\n}", "JAMES PL", "JAMES", "PL" ]
        ,
        [ 1255, "4A383CA9-AF7D-4321-B2FC-1EB072258864", 1255, 1413041315, "403253", 1413041315, "403253", "{\n}", "JAMESTOWN AVE", "JAMESTOWN", "AVE" ]
        ,
        [ 1256, "DFE3B870-8B3A-4457-ABDD-3D338737405E", 1256, 1413041315, "403253", 1413041315, "403253", "{\n}", "JANSEN ST", "JANSEN", "ST" ]
        ,
        [ 1257, "843D1A32-F857-423B-A8A0-A968F2E32EE2", 1257, 1413041315, "403253", 1413041315, "403253", "{\n}", "JARBOE AVE", "JARBOE", "AVE" ]
        ,
        [ 1258, "D8ACF553-AFF6-45BB-8EE4-CDFBF758E3C9", 1258, 1413041315, "403253", 1413041315, "403253", "{\n}", "JASON CT", "JASON", "CT" ]
        ,
        [ 1259, "1E607D8B-C920-4060-AAE5-B6408799B8DA", 1259, 1413041315, "403253", 1413041315, "403253", "{\n}", "JASPER PL", "JASPER", "PL" ]
        ,
        [ 1260, "A23BE26C-2AE3-4DF8-AFFD-0A579B5C83FA", 1260, 1413041315, "403253", 1413041315, "403253", "{\n}", "JAUSS ST", "JAUSS", "ST" ]
        ,
        [ 1261, "89EA811F-7147-428B-9078-374519FAD479", 1261, 1413041315, "403253", 1413041315, "403253", "{\n}", "JAVA ST", "JAVA", "ST" ]
        ,
        [ 1262, "D2F9329F-D445-408A-BB7D-FB75743F183F", 1262, 1413041315, "403253", 1413041315, "403253", "{\n}", "JEAN WAY", "JEAN", "WAY" ]
        ,
        [ 1263, "D61343EC-920A-4D08-BFCF-CB9A5DB3FBE2", 1263, 1413041315, "403253", 1413041315, "403253", "{\n}", "JEFFERSON ST", "JEFFERSON", "ST" ]
        ,
        [ 1264, "CF0A292A-0F50-4285-A1CA-9F8DC6E31A56", 1264, 1413041315, "403253", 1413041315, "403253", "{\n}", "JENNIFER PL", "JENNIFER", "PL" ]
        ,
        [ 1265, "3BADFAD6-96E0-4A1E-BF5C-7AC87540E884", 1265, 1413041315, "403253", 1413041315, "403253", "{\n}", "JENNINGS CT", "JENNINGS", "CT" ]
        ,
        [ 1266, "437A4439-953F-4843-BA3F-6CE1E39C3819", 1266, 1413041315, "403253", 1413041315, "403253", "{\n}", "JENNINGS ST", "JENNINGS", "ST" ]
        ,
        [ 1267, "D5751B5C-D175-4ABF-A540-4B687F1C8858", 1267, 1413041315, "403253", 1413041315, "403253", "{\n}", "JEROME ALY", "JEROME", "ALY" ]
        ,
        [ 1268, "B5A66218-354D-4DF7-A09F-9F6DB4633B82", 1268, 1413041315, "403253", 1413041315, "403253", "{\n}", "JERROLD AVE", "JERROLD", "AVE" ]
        ,
        [ 1269, "11F11322-4E81-4F7A-ADBC-B085FF895D2E", 1269, 1413041315, "403253", 1413041315, "403253", "{\n}", "JERSEY ST", "JERSEY", "ST" ]
        ,
        [ 1270, "A9813BBE-3C8D-4F34-998C-4C48490AE9D0", 1270, 1413041315, "403253", 1413041315, "403253", "{\n}", "JESSIE ST", "JESSIE", "ST" ]
        ,
        [ 1271, "AF06BB0B-0AA9-4D22-81AE-0CB96AD3B6E0", 1271, 1413041315, "403253", 1413041315, "403253", "{\n}", "JESSIE EAST ST", "JESSIE EAST", "ST" ]
        ,
        [ 1272, "869965C8-C95F-4F29-8A58-CE0054F78065", 1272, 1413041315, "403253", 1413041315, "403253", "{\n}", "JESSIE WEST ST", "JESSIE WEST", "ST" ]
        ,
        [ 1273, "CC7ED415-93AB-4646-B532-82E6FB50E833", 1273, 1413041315, "403253", 1413041315, "403253", "{\n}", "JEWETT ST", "JEWETT", "ST" ]
        ,
        [ 1274, "B17F87D6-F864-49A1-BB0B-8FB2DEB8EE21", 1274, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHN ST", "JOHN", "ST" ]
        ,
        [ 1275, "3591A1EE-00B8-4E55-A013-93714955B641", 1275, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHN F KENNEDY DR", "JOHN F KENNEDY", "DR" ]
        ,
        [ 1276, "26E33F9D-BF76-46C6-9B1D-FA2964A22FB9", 1276, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHN F SHELLEY DR", "JOHN F SHELLEY", "DR" ]
        ,
        [ 1277, "3C8400BC-0A01-4FFF-96E7-E065FD7B572B", 1277, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHN MAHER ST", "JOHN MAHER", "ST" ]
        ,
        [ 1278, "08D3AA42-8E7B-4528-8A8D-D434BB6F9F91", 1278, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHN MUIR DR", "JOHN MUIR", "DR" ]
        ,
        [ 1279, "8D142F83-6964-4B18-B1BB-118365473693", 1279, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOHNSTONE DR", "JOHNSTONE", "DR" ]
        ,
        [ 1280, "5DD41B15-CFD3-440D-B4B7-448DD1450525", 1280, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOICE ST", "JOICE", "ST" ]
        ,
        [ 1281, "25835912-D5DB-4E7D-A881-1846A7F9C60B", 1281, 1413041315, "403253", 1413041315, "403253", "{\n}", "JONES ST", "JONES", "ST" ]
        ,
        [ 1282, "E3BCCFB2-9CC1-403D-A288-BF99517C3A31", 1282, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOOST AVE", "JOOST", "AVE" ]
        ,
        [ 1283, "4E73BE41-7199-4CE0-B78A-771887D3B1FC", 1283, 1413041315, "403253", 1413041315, "403253", "{\n}", "JORDAN AVE", "JORDAN", "AVE" ]
        ,
        [ 1284, "17A8B870-AE41-42A2-9BA7-6B6557183C69", 1284, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOSE SARRIA CT", "JOSE SARRIA", "CT" ]
        ,
        [ 1285, "69A2997C-500F-4673-A4A9-CDA1A8412046", 1285, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOSEPHA AVE", "JOSEPHA", "AVE" ]
        ,
        [ 1286, "0FB829E7-6E78-448F-851D-0195BB3DA1D4", 1286, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOSIAH AVE", "JOSIAH", "AVE" ]
        ,
        [ 1287, "65F86EE7-594D-458E-BEB3-3AB930F089B8", 1287, 1413041315, "403253", 1413041315, "403253", "{\n}", "JOY ST", "JOY", "ST" ]
        ,
        [ 1288, "97D49E9D-5525-4344-9B91-3D3034881108", 1288, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUAN BAUTISTA CIR", "JUAN BAUTISTA", "CIR" ]
        ,
        [ 1289, "6738C6F7-3159-4555-8E90-86082C036CEC", 1289, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUANITA WAY", "JUANITA", "WAY" ]
        ,
        [ 1290, "BF3BDCCE-7AA2-44B1-AC9D-0E1986D697D7", 1290, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUDAH ST", "JUDAH", "ST" ]
        ,
        [ 1291, "9C496874-38BD-4339-9787-2121D26734A7", 1291, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUDSON AVE", "JUDSON", "AVE" ]
        ,
        [ 1292, "9BE17E8A-4E7D-4F68-9AAB-FF7E5CAA62F1", 1292, 1413041315, "403253", 1413041315, "403253", "{\n}", "JULES AVE", "JULES", "AVE" ]
        ,
        [ 1293, "72363B93-4369-4C78-9BB6-DEC975FBBE4B", 1293, 1413041315, "403253", 1413041315, "403253", "{\n}", "JULIA ST", "JULIA", "ST" ]
        ,
        [ 1294, "D493D825-C54F-4EF9-811C-E627CB0E5BFD", 1294, 1413041315, "403253", 1413041315, "403253", "{\n}", "JULIAN AVE", "JULIAN", "AVE" ]
        ,
        [ 1295, "4AEFE9A0-6550-4F1C-8C9E-0138BF204888", 1295, 1413041315, "403253", 1413041315, "403253", "{\n}", "JULIUS ST", "JULIUS", "ST" ]
        ,
        [ 1296, "8FC2D4BA-5D66-4FFD-B238-59B2392FFEF9", 1296, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIOR TER", "JUNIOR", "TER" ]
        ,
        [ 1297, "2CEB4013-A0AF-4CD8-B856-088F32E22613", 1297, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPER ST", "JUNIPER", "ST" ]
        ,
        [ 1298, "31B17FD0-E18D-4846-9807-84A81D47435E", 1298, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPERO SERRA BLVD", "JUNIPERO SERRA", "BLVD" ]
        ,
        [ 1299, "D095AE33-3B22-4AD9-85E0-3B8E13D6EE19", 1299, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPERO SERRA  BLVD OFF RAMP", "JUNIPERO SERRA  BLVD OFF", "RAMP" ]
        ,
        [ 1300, "EC518570-ED74-4BA4-A98D-34B69389777D", 1300, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPERO SERRA  BLVD ON RAMP", "JUNIPERO SERRA  BLVD ON", "RAMP" ]
        ,
        [ 1301, "7ACAE94A-F066-4BCF-8ABF-F3BD0C60A929", 1301, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPERO SERRA BLVD OFF RAMP", "JUNIPERO SERRA BLVD OFF", "RAMP" ]
        ,
        [ 1302, "E6898C8E-F779-45A3-AE25-1B53266A3024", 1302, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUNIPERO SERRA BLVD ON RAMP", "JUNIPERO SERRA BLVD ON", "RAMP" ]
        ,
        [ 1303, "14ECDE35-6727-41B7-B7EF-0AD53C6BCBF8", 1303, 1413041315, "403253", 1413041315, "403253", "{\n}", "JURI ST", "JURI", "ST" ]
        ,
        [ 1304, "8F3AF075-B0C7-4CC9-9F82-DE214A254134", 1304, 1413041315, "403253", 1413041315, "403253", "{\n}", "JUSTIN DR", "JUSTIN", "DR" ]
        ,
        [ 1305, "3B0A316D-E05C-4BD5-8C7B-FAEA721EB0F5", 1305, 1413041315, "403253", 1413041315, "403253", "{\n}", "KALMANOVITZ ST", "KALMANOVITZ", "ST" ]
        ,
        [ 1306, "08EAC23C-DED2-45A8-819F-4B2871850D7D", 1306, 1413041315, "403253", 1413041315, "403253", "{\n}", "KAMILLE CT", "KAMILLE", "CT" ]
        ,
        [ 1307, "D83AF17B-8CE2-4BE4-94E3-E39311FB35F8", 1307, 1413041315, "403253", 1413041315, "403253", "{\n}", "KANSAS ST", "KANSAS", "ST" ]
        ,
        [ 1308, "DEF47EB5-1B73-41F1-A1D9-8269FF439FE9", 1308, 1413041315, "403253", 1413041315, "403253", "{\n}", "KAPLAN LN", "KAPLAN", "LN" ]
        ,
        [ 1309, "1B66EDAC-E98B-4BC5-890D-C0B747988693", 1309, 1413041315, "403253", 1413041315, "403253", "{\n}", "KAREN CT", "KAREN", "CT" ]
        ,
        [ 1310, "25E62127-0854-410D-BBBA-8F4D4658C9BA", 1310, 1413041315, "403253", 1413041315, "403253", "{\n}", "KATE ST", "KATE", "ST" ]
        ,
        [ 1311, "42107345-3D80-48A1-AFCF-376278C7F67C", 1311, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEARNY LN", "KEARNY", "LN" ]
        ,
        [ 1312, "DB8C7F36-FD69-4EF0-BFFE-4C2A64DFF8A6", 1312, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEARNY ST", "KEARNY", "ST" ]
        ,
        [ 1313, "E858F909-DE90-4CD9-BFDB-170622F494AC", 1313, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEITH ST", "KEITH", "ST" ]
        ,
        [ 1314, "973DB75C-6781-47B4-ABBC-DF8C2553DD7F", 1314, 1413041315, "403253", 1413041315, "403253", "{\n}", "KELLOCH AVE", "KELLOCH", "AVE" ]
        ,
        [ 1315, "ECA9B8B6-EDD0-4D8E-85B8-21B4C3693B28", 1315, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEMPTON AVE", "KEMPTON", "AVE" ]
        ,
        [ 1316, "2E27FF30-BEE3-4C8E-B985-A5B5DFD9C455", 1316, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENDALL DR", "KENDALL", "DR" ]
        ,
        [ 1317, "108F98D5-6BC2-4243-BF71-28BAE456A7AE", 1317, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENNEDY PL", "KENNEDY", "PL" ]
        ,
        [ 1318, "87B40C8C-3E85-4DB1-ADAE-BB6583FE28BA", 1318, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENNETH REXROTH PL", "KENNETH REXROTH", "PL" ]
        ,
        [ 1319, "703438B6-5A9D-45EB-945F-7253CE67A130", 1319, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENNY ALY", "KENNY", "ALY" ]
        ,
        [ 1320, "964B1F9C-3F96-4F59-BCFD-0136E8800437", 1320, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENSINGTON WAY", "KENSINGTON", "WAY" ]
        ,
        [ 1321, "BF0C8D70-3053-4F2A-9616-7DEBD7413D94", 1321, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENT ST", "KENT", "ST" ]
        ,
        [ 1322, "9FE182BC-C7B6-4A54-8480-2B50243831B5", 1322, 1413041315, "403253", 1413041315, "403253", "{\n}", "KENWOOD WAY", "KENWOOD", "WAY" ]
        ,
        [ 1323, "976430D7-37E0-4531-853B-033781003240", 1323, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEPPLER CT", "KEPPLER", "CT" ]
        ,
        [ 1324, "DA365F24-E38F-48A4-8FE6-D42E0BE64188", 1324, 1413041315, "403253", 1413041315, "403253", "{\n}", "KERN ST", "KERN", "ST" ]
        ,
        [ 1325, "93BF48AA-D107-4ACC-945D-E955CD1758F0", 1325, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEY AVE", "KEY", "AVE" ]
        ,
        [ 1326, "75DE9B26-DB98-4BCF-80B7-CF93CC4F008B", 1326, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEYES ALY", "KEYES", "ALY" ]
        ,
        [ 1327, "4E645BCB-0C3F-4881-BCC7-9CB21620D8FC", 1327, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEYES AVE", "KEYES", "AVE" ]
        ,
        [ 1328, "1598ABE6-040B-4329-9D8A-1697EB47191C", 1328, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEYSTONE WAY", "KEYSTONE", "WAY" ]
        ,
        [ 1329, "CC1ED80D-5636-4151-B586-02686C8D2367", 1329, 1413041315, "403253", 1413041315, "403253", "{\n}", "KEZAR DR", "KEZAR", "DR" ]
        ,
        [ 1330, "5DA47440-01D5-4D68-9F47-02A776397849", 1330, 1413041315, "403253", 1413041315, "403253", "{\n}", "KIMBALL PL", "KIMBALL", "PL" ]
        ,
        [ 1331, "307B5624-AA88-4F1B-8703-4F42866FE6E1", 1331, 1413041315, "403253", 1413041315, "403253", "{\n}", "KING ST", "KING", "ST" ]
        ,
        [ 1332, "E3ECEE64-EF59-4437-9AFD-A02195920D7A", 1332, 1413041315, "403253", 1413041315, "403253", "{\n}", "KINGSTON ST", "KINGSTON", "ST" ]
        ,
        [ 1333, "65655C13-6BAE-4909-B5C6-E59EF679DCD9", 1333, 1413041315, "403253", 1413041315, "403253", "{\n}", "KINZEY ST", "KINZEY", "ST" ]
        ,
        [ 1334, "171979A5-2E75-4BC6-A9FE-8C6C2AC65C96", 1334, 1413041315, "403253", 1413041315, "403253", "{\n}", "KIRKHAM ST", "KIRKHAM", "ST" ]
        ,
        [ 1335, "C7B712D6-CF99-4250-8183-F9767EB0AD70", 1335, 1413041315, "403253", 1413041315, "403253", "{\n}", "KIRKWOOD AVE", "KIRKWOOD", "AVE" ]
        ,
        [ 1336, "8111F496-CD24-436A-BA8D-E01F61030C27", 1336, 1413041315, "403253", 1413041315, "403253", "{\n}", "KISKA RD", "KISKA", "RD" ]
        ,
        [ 1337, "FD6B6236-C399-40C9-B14E-64CAE25A3940", 1337, 1413041315, "403253", 1413041315, "403253", "{\n}", "KISSLING ST", "KISSLING", "ST" ]
        ,
        [ 1338, "2DACFCA1-AAAF-41C8-B2B3-99524F04DD6D", 1338, 1413041315, "403253", 1413041315, "403253", "{\n}", "KITTREDGE TER", "KITTREDGE", "TER" ]
        ,
        [ 1339, "13079BA2-178D-4EAE-BD29-48E927B7EF6B", 1339, 1413041315, "403253", 1413041315, "403253", "{\n}", "KNOCKASH HL", "KNOCKASH", "HL" ]
        ,
        [ 1340, "7E011179-F192-4125-9802-F5BD01A3CB64", 1340, 1413041315, "403253", 1413041315, "403253", "{\n}", "KNOLLVIEW WAY", "KNOLLVIEW", "WAY" ]
        ,
        [ 1341, "AB84EA9D-DFF1-45CF-8397-0B48B7207389", 1341, 1413041315, "403253", 1413041315, "403253", "{\n}", "KNOTT CT", "KNOTT", "CT" ]
        ,
        [ 1342, "5B0BDA2F-8F9F-43B6-953B-13A99F4E5756", 1342, 1413041315, "403253", 1413041315, "403253", "{\n}", "KOBBE AVE", "KOBBE", "AVE" ]
        ,
        [ 1343, "59759730-E262-4682-B678-A806244468A6", 1343, 1413041315, "403253", 1413041315, "403253", "{\n}", "KOHLER PL", "KOHLER", "PL" ]
        ,
        [ 1344, "87C1BF3A-FE68-4BBF-AA5E-55B582D447E2", 1344, 1413041315, "403253", 1413041315, "403253", "{\n}", "KORET WAY", "KORET", "WAY" ]
        ,
        [ 1345, "D2D7C9D6-5824-4E1F-8203-72961F7EC6CE", 1345, 1413041315, "403253", 1413041315, "403253", "{\n}", "KRAMER PL", "KRAMER", "PL" ]
        ,
        [ 1346, "6695FDED-F50E-4741-8D2E-DB2961033707", 1346, 1413041315, "403253", 1413041315, "403253", "{\n}", "KRAUSGRILL PL", "KRAUSGRILL", "PL" ]
        ,
        [ 1347, "F0604D41-521C-43EA-A3BC-9EF00ED48B48", 1347, 1413041315, "403253", 1413041315, "403253", "{\n}", "KRONQUIST CT", "KRONQUIST", "CT" ]
        ,
        [ 1348, "825C1F9E-2D29-41A8-9A3D-2AC8A84A5BE6", 1348, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA AVANZADA", "LA AVANZADA", null ]
        ,
        [ 1349, "F59E181A-B6F7-4085-9EFA-0878A86E3B6F", 1349, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA BICA WAY", "LA BICA", "WAY" ]
        ,
        [ 1350, "65B30E8F-FD49-4FFD-A6C9-1881F7FD8E32", 1350, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA FERRERA TER", "LA FERRERA", "TER" ]
        ,
        [ 1351, "0BBFD717-0AC4-42C2-AA67-6A2A2A4069BE", 1351, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA GRANDE AVE", "LA GRANDE", "AVE" ]
        ,
        [ 1352, "C84D4C06-BD7C-481F-B5C3-12A50E9056E4", 1352, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA PLAYA", "LA PLAYA", null ]
        ,
        [ 1353, "7F9F32E4-5D5B-40EB-882A-59105D6C6C19", 1353, 1413041315, "403253", 1413041315, "403253", "{\n}", "LA SALLE AVE", "LA SALLE", "AVE" ]
        ,
        [ 1354, "424F8AAA-56A9-48EC-B696-305FFDD0A31D", 1354, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAFAYETTE ST", "LAFAYETTE", "ST" ]
        ,
        [ 1355, "1F27E284-686A-4C4A-886C-C561F8583888", 1355, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAGUNA ST", "LAGUNA", "ST" ]
        ,
        [ 1356, "FFD748F2-7C60-47E1-98C3-74F73AAFC6B0", 1356, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAGUNA HONDA BLVD", "LAGUNA HONDA", "BLVD" ]
        ,
        [ 1357, "4C1D4616-A9DD-43A4-9A09-496F848F4243", 1357, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAGUNITAS DR", "LAGUNITAS", "DR" ]
        ,
        [ 1358, "E49E86A8-FBF9-473E-B0D4-94872DF08DA8", 1358, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAIDLEY ST", "LAIDLEY", "ST" ]
        ,
        [ 1359, "62F8378B-27E9-4765-942C-0EE9DD6D89C2", 1359, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE ST", "LAKE", "ST" ]
        ,
        [ 1360, "F55853AD-0B2E-46AF-B57E-BD899019EB9F", 1360, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE FOREST CT", "LAKE FOREST", "CT" ]
        ,
        [ 1361, "74B9434F-21F4-4801-89B4-9A55522ED353", 1361, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE MERCED BLVD", "LAKE MERCED", "BLVD" ]
        ,
        [ 1362, "4EFDC85B-D285-4D8F-B642-DFCEB751E0A4", 1362, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE MERCED HILL", "LAKE MERCED HILL", null ]
        ,
        [ 1363, "DAFB2A69-EEBD-4694-BBCD-72C2A8C553FB", 1363, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE MERCED HILL ST NORTH", "LAKE MERCED HILL", "ST" ]
        ,
        [ 1364, "283B9450-D848-4DE9-B291-A1C1A3E4702C", 1364, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKE MERCED HILL ST SOUTH", "LAKE MERCED HILL", "ST" ]
        ,
        [ 1365, "25FD570F-1D68-42C2-9179-5ABE22C2B5B9", 1365, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKESHORE DR", "LAKESHORE", "DR" ]
        ,
        [ 1366, "1D16D246-609B-4D68-97F2-079245D364BA", 1366, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKESHORE PLZ", "LAKESHORE", "PLZ" ]
        ,
        [ 1367, "F83252C5-946F-4098-8C53-627CE4A9F9A0", 1367, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKEVIEW AVE", "LAKEVIEW", "AVE" ]
        ,
        [ 1368, "E4F21889-165F-4EF9-8646-69968F902842", 1368, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAKEWOOD AVE", "LAKEWOOD", "AVE" ]
        ,
        [ 1369, "0B080B96-5785-4BB4-9E3A-F372C70CEB3F", 1369, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAMARTINE ST", "LAMARTINE", "ST" ]
        ,
        [ 1370, "4987C00E-9FFE-43D2-8187-368C81B900B4", 1370, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAMSON LN", "LAMSON", "LN" ]
        ,
        [ 1371, "119DC5AE-DD86-442F-ACE7-4374DF8ACE6C", 1371, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANCASTER LN", "LANCASTER", "LN" ]
        ,
        [ 1372, "3B8E59D4-6A0C-4610-8FE0-4CF7B74DC243", 1372, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANDERS ST", "LANDERS", "ST" ]
        ,
        [ 1373, "C87CCA98-C0CE-403A-AC21-39171B7FF1BF", 1373, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANE ST", "LANE", "ST" ]
        ,
        [ 1374, "E0914050-E82D-4713-BAB5-84770A75E3E6", 1374, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANGDON CT", "LANGDON", "CT" ]
        ,
        [ 1375, "88B27E48-05C5-4771-BF7F-316E168C634B", 1375, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANGTON ST", "LANGTON", "ST" ]
        ,
        [ 1376, "D6127323-0D2B-46E8-B4D1-16B6E5DFA8C7", 1376, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANSDALE AVE", "LANSDALE", "AVE" ]
        ,
        [ 1377, "551546B3-C785-4F3A-9ADA-42A3CE372F5D", 1377, 1413041315, "403253", 1413041315, "403253", "{\n}", "LANSING ST", "LANSING", "ST" ]
        ,
        [ 1378, "2781C032-312E-4A04-A394-8165C65CC547", 1378, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAPHAM WAY", "LAPHAM", "WAY" ]
        ,
        [ 1379, "91D5287F-D6FD-4D7A-A2D1-F8043DD0F4A7", 1379, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAPIDGE ST", "LAPIDGE", "ST" ]
        ,
        [ 1380, "6B14CA7B-A119-4C47-AEDF-309CAC6D0AD1", 1380, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAPU-LAPU ST", "LAPU-LAPU", "ST" ]
        ,
        [ 1381, "53A90E1B-4E95-46D5-AA69-3DCB97020913", 1381, 1413041315, "403253", 1413041315, "403253", "{\n}", "LARCH ST", "LARCH", "ST" ]
        ,
        [ 1382, "11228D98-05FB-46E1-AC6F-495E2148FF3E", 1382, 1413041315, "403253", 1413041315, "403253", "{\n}", "LARKIN ST", "LARKIN", "ST" ]
        ,
        [ 1383, "2352F9F1-74DA-4761-8ACE-BB77E5A0720E", 1383, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAS VILLAS CT", "LAS VILLAS", "CT" ]
        ,
        [ 1384, "46EB48A4-DB8A-4AF1-BCA6-840397414596", 1384, 1413041315, "403253", 1413041315, "403253", "{\n}", "LASKIE ST", "LASKIE", "ST" ]
        ,
        [ 1385, "F3175441-D82D-423A-B92C-34E5EE2BB73F", 1385, 1413041315, "403253", 1413041315, "403253", "{\n}", "LASSEN ALY", "LASSEN", "ALY" ]
        ,
        [ 1386, "45261455-A6C8-4CA6-8648-88B8EA9BE91C", 1386, 1413041315, "403253", 1413041315, "403253", "{\n}", "LATHROP AVE", "LATHROP", "AVE" ]
        ,
        [ 1387, "D22B2FFA-E789-40BF-B86D-A2DFF1279ECB", 1387, 1413041315, "403253", 1413041315, "403253", "{\n}", "LATONA ST", "LATONA", "ST" ]
        ,
        [ 1388, "2AAD3640-F615-49BD-AEE5-31987A1C163B", 1388, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAURA ST", "LAURA", "ST" ]
        ,
        [ 1389, "D96E064C-AE5E-4C66-96A9-853C78AACD0F", 1389, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAUREL ST", "LAUREL", "ST" ]
        ,
        [ 1390, "05038FA1-3CA0-4BFE-83C6-A5C8DFA72060", 1390, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAUREN CT", "LAUREN", "CT" ]
        ,
        [ 1391, "EA564393-1A36-4FA8-A660-963F318952E5", 1391, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAUSSAT ST", "LAUSSAT", "ST" ]
        ,
        [ 1392, "B5B15CD6-EC0D-409E-B05D-8C0061DB07A6", 1392, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAWRENCE AVE", "LAWRENCE", "AVE" ]
        ,
        [ 1393, "D61FE017-C8F7-4446-8FE4-BA44E5DFA1CE", 1393, 1413041315, "403253", 1413041315, "403253", "{\n}", "LAWTON ST", "LAWTON", "ST" ]
        ,
        [ 1394, "1F932B81-B9E0-4BA0-9B50-50A3FFE7CCEE", 1394, 1413041315, "403253", 1413041315, "403253", "{\n}", "LE CONTE AVE", "LE CONTE", "AVE" ]
        ,
        [ 1395, "E2232294-44C9-4591-90C7-96739FC58EE1", 1395, 1413041315, "403253", 1413041315, "403253", "{\n}", "LE CONTE CIR", "LE CONTE", "CIR" ]
        ,
        [ 1396, "E51BF025-A160-4E66-A58C-4FEDE5635962", 1396, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEAVENWORTH ST", "LEAVENWORTH", "ST" ]
        ,
        [ 1397, "4AC3F95B-A563-43B7-B96F-7431FD9125A2", 1397, 1413041315, "403253", 1413041315, "403253", "{\n}", "LECH WALESA ST", "LECH WALESA", "ST" ]
        ,
        [ 1398, "0B19503A-6595-467E-8ACF-92C7E13458E2", 1398, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEDYARD ST", "LEDYARD", "ST" ]
        ,
        [ 1399, "2F349595-7B0D-421D-96FA-9BDFCBA893A5", 1399, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEE AVE", "LEE", "AVE" ]
        ,
        [ 1400, "5B5DE27B-8D11-4416-B66C-9653028824B5", 1400, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEESE ST", "LEESE", "ST" ]
        ,
        [ 1401, "732D2F81-66D8-4271-B5D4-531323DD91AE", 1401, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEGION CT", "LEGION", "CT" ]
        ,
        [ 1402, "0CB568FF-0D01-4B04-B10F-FC9EDDE79B96", 1402, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEGION OF HONOR DR", "LEGION OF HONOR", "DR" ]
        ,
        [ 1403, "25F6E144-AC5D-4ECF-82ED-BCB80161C55A", 1403, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEIDESDORFF ST", "LEIDESDORFF", "ST" ]
        ,
        [ 1404, "1896FD7E-A229-4C18-AFC4-CDC96A3496DE", 1404, 1413041315, "403253", 1413041315, "403253", "{\n}", "LELAND AVE", "LELAND", "AVE" ]
        ,
        [ 1405, "2991BD97-64CC-4279-B311-2F3EC6E8091A", 1405, 1413041315, "403253", 1413041315, "403253", "{\n}", "LENDRUM CT", "LENDRUM", "CT" ]
        ,
        [ 1406, "176753A2-FEF5-45A4-9D16-1AF16DCC6D3F", 1406, 1413041315, "403253", 1413041315, "403253", "{\n}", "LENOX WAY", "LENOX", "WAY" ]
        ,
        [ 1407, "91ECA47E-020A-4E0A-8B25-A968720BE7CA", 1407, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEO ST", "LEO", "ST" ]
        ,
        [ 1408, "6A97999D-F5F4-46E9-8DDE-FF3525D72977", 1408, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEONA TER", "LEONA", "TER" ]
        ,
        [ 1409, "3FFE5FF8-C319-442C-A534-C278FDEF06BD", 1409, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEROY PL", "LEROY", "PL" ]
        ,
        [ 1410, "2859056E-E503-4F97-A02D-A854412C4CB1", 1410, 1413041315, "403253", 1413041315, "403253", "{\n}", "LESSING ST", "LESSING", "ST" ]
        ,
        [ 1411, "F6246D3A-EB69-438A-BF5A-4788320DD81D", 1411, 1413041315, "403253", 1413041315, "403253", "{\n}", "LESTER CT", "LESTER", "CT" ]
        ,
        [ 1412, "FE635B0B-945D-4166-8499-1C6268BA5A3D", 1412, 1413041315, "403253", 1413041315, "403253", "{\n}", "LETTERMAN DR", "LETTERMAN", "DR" ]
        ,
        [ 1413, "89C041F5-9B3B-447C-B075-3AB74369DC94", 1413, 1413041315, "403253", 1413041315, "403253", "{\n}", "LETTERMAN HOSPITAL ACCESS", "LETTERMAN HOSPITAL ACCESS", null ]
        ,
        [ 1414, "3EF04DA8-B398-4ED0-A604-411CA6EFA77A", 1414, 1413041315, "403253", 1413041315, "403253", "{\n}", "LETTUCE LN", "LETTUCE", "LN" ]
        ,
        [ 1415, "6F553F32-554F-4528-B5F8-EF289C83858D", 1415, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEVANT ST", "LEVANT", "ST" ]
        ,
        [ 1416, "DB726731-0AA9-49EA-9476-68E3B0D975BD", 1416, 1413041315, "403253", 1413041315, "403253", "{\n}", "LEXINGTON ST", "LEXINGTON", "ST" ]
        ,
        [ 1417, "3CCCECCD-163A-4750-A57F-9E9472398918", 1417, 1413041315, "403253", 1413041315, "403253", "{\n}", "LIBERTY ST", "LIBERTY", "ST" ]
        ,
        [ 1418, "AB51540B-583F-4AF7-96B9-A01A58C67DD1", 1418, 1413041315, "403253", 1413041315, "403253", "{\n}", "LICK PL", "LICK", "PL" ]
        ,
        [ 1419, "104B7C59-0C9F-4264-B0B3-EC5EAACBF01F", 1419, 1413041315, "403253", 1413041315, "403253", "{\n}", "LIEBIG ST", "LIEBIG", "ST" ]
        ,
        [ 1420, "26E2DC71-AD11-4A03-A47A-007389271645", 1420, 1413041315, "403253", 1413041315, "403253", "{\n}", "LIGGETT AVE", "LIGGETT", "AVE" ]
        ,
        [ 1421, "5E63AE3C-A38C-4B2F-BDF2-E066D7A58800", 1421, 1413041315, "403253", 1413041315, "403253", "{\n}", "LILAC ST", "LILAC", "ST" ]
        ,
        [ 1422, "13AF9E03-A099-4204-B2FF-EA4826354876", 1422, 1413041315, "403253", 1413041315, "403253", "{\n}", "LILLIAN ST", "LILLIAN", "ST" ]
        ,
        [ 1423, "E21ACDB9-7231-4C72-A370-0E0E4EA4FF6D", 1423, 1413041315, "403253", 1413041315, "403253", "{\n}", "LILY ST", "LILY", "ST" ]
        ,
        [ 1424, "E220AC15-1027-47FF-8607-6AD48150B917", 1424, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINARES AVE", "LINARES", "AVE" ]
        ,
        [ 1425, "33D91DAD-CAFF-4962-81CC-A447EDF4AEA3", 1425, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINCOLN BLVD", "LINCOLN", "BLVD" ]
        ,
        [ 1426, "5C354148-6D7B-477B-B812-2AACB245697D", 1426, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINCOLN CT", "LINCOLN", "CT" ]
        ,
        [ 1427, "1FA80DCF-74BD-4298-99AF-679320A7F2B6", 1427, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINCOLN WAY", "LINCOLN", "WAY" ]
        ,
        [ 1428, "7AA62372-B9BC-46D1-83B5-53EF8DE219D0", 1428, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINDA ST", "LINDA", "ST" ]
        ,
        [ 1429, "A86998EE-E224-475B-8303-C93C200E6069", 1429, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINDA VISTA STPS", "LINDA VISTA", "STPS" ]
        ,
        [ 1430, "7A4C85E0-BE7D-4ECC-93E2-6DBD9627BC06", 1430, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINDEN ST", "LINDEN", "ST" ]
        ,
        [ 1431, "E8FA683A-C973-4E40-AE1D-6C1800B17340", 1431, 1413041315, "403253", 1413041315, "403253", "{\n}", "LINDSAY CIR", "LINDSAY", "CIR" ]
        ,
        [ 1432, "C6A893BD-26CD-46B1-A2AA-9384B63BA733", 1432, 1413041315, "403253", 1413041315, "403253", "{\n}", "LIPPARD AVE", "LIPPARD", "AVE" ]
        ,
        [ 1433, "92FBE544-4F1F-46B3-850E-3DB117A746CA", 1433, 1413041315, "403253", 1413041315, "403253", "{\n}", "LISBON ST", "LISBON", "ST" ]
        ,
        [ 1434, "98A38C5A-A41F-4BBE-9C1C-A8C76AD4B221", 1434, 1413041315, "403253", 1413041315, "403253", "{\n}", "LITTLEFIELD TER", "LITTLEFIELD", "TER" ]
        ,
        [ 1435, "53614446-5DAC-4C83-BAC8-45C6D9A14004", 1435, 1413041315, "403253", 1413041315, "403253", "{\n}", "LIVINGSTON ST", "LIVINGSTON", "ST" ]
        ,
        [ 1436, "36E1CDB3-FED5-4A1A-A626-B4EE1F7D65C8", 1436, 1413041315, "403253", 1413041315, "403253", "{\n}", "LLOYD ST", "LLOYD", "ST" ]
        ,
        [ 1437, "833701FB-71B3-4DE1-B36F-984819AF4ADD", 1437, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOBOS ST", "LOBOS", "ST" ]
        ,
        [ 1438, "C6090636-6779-44B8-8AA0-DC0283A61690", 1438, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOCKSLEY AVE", "LOCKSLEY", "AVE" ]
        ,
        [ 1439, "892CA31A-DC64-475D-BC6F-12DD96617341", 1439, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOCKWOOD ST", "LOCKWOOD", "ST" ]
        ,
        [ 1440, "13AE9CDF-3DCA-4158-B07C-D399C97D0FEE", 1440, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOCUST ST", "LOCUST", "ST" ]
        ,
        [ 1441, "0D5BB002-8114-49F5-B691-560FFB2A2815", 1441, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOEHR ST", "LOEHR", "ST" ]
        ,
        [ 1442, "CA7425F0-F9F2-4F9B-8026-31002249E0F4", 1442, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOIS LN", "LOIS", "LN" ]
        ,
        [ 1443, "595162DE-26EB-4D61-9DB7-BFDBB15F2114", 1443, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOMA VISTA TER", "LOMA VISTA", "TER" ]
        ,
        [ 1444, "842D3B9F-B379-45B8-A865-17C513ACE9A4", 1444, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOMBARD ST", "LOMBARD", "ST" ]
        ,
        [ 1445, "31778EAF-58B1-44BC-8579-07370AB5EFF0", 1445, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOMITA AVE", "LOMITA", "AVE" ]
        ,
        [ 1446, "B9DA89BD-26FB-41A6-8E69-A45CCE42285A", 1446, 1413041315, "403253", 1413041315, "403253", "{\n}", "LONDON ST", "LONDON", "ST" ]
        ,
        [ 1447, "C27204A4-0538-4A59-B033-6A39AE212E6C", 1447, 1413041315, "403253", 1413041315, "403253", "{\n}", "LONE MOUNTAIN TER", "LONE MOUNTAIN", "TER" ]
        ,
        [ 1448, "EDC4F08B-134B-43A3-BE76-C8CB170411F6", 1448, 1413041315, "403253", 1413041315, "403253", "{\n}", "LONG AVE", "LONG", "AVE" ]
        ,
        [ 1449, "990B0677-B48A-49F6-9A0A-8003FB5E1660", 1449, 1413041315, "403253", 1413041315, "403253", "{\n}", "LONG BRIDGE ST", "LONG BRIDGE", "ST" ]
        ,
        [ 1450, "B7E68474-BBC3-48C8-9BCE-75DE9CCE15D1", 1450, 1413041315, "403253", 1413041315, "403253", "{\n}", "LONGVIEW CT", "LONGVIEW", "CT" ]
        ,
        [ 1451, "501D6ABA-88BE-4348-B886-1C2AC90C53DB", 1451, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOOMIS ST", "LOOMIS", "ST" ]
        ,
        [ 1452, "817B3A7C-9317-49F2-869E-D71FB350640F", 1452, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOPEZ AVE", "LOPEZ", "AVE" ]
        ,
        [ 1453, "E9CAB1C7-7069-4A12-9F1D-B3D163EA2AD4", 1453, 1413041315, "403253", 1413041315, "403253", "{\n}", "LORAINE CT", "LORAINE", "CT" ]
        ,
        [ 1454, "61FB07F4-D1DE-4332-A198-81B6230FCC0D", 1454, 1413041315, "403253", 1413041315, "403253", "{\n}", "LORI LN", "LORI", "LN" ]
        ,
        [ 1455, "3E7D6C2F-254D-45B3-84E1-E2F87E5C43F9", 1455, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOS PALMOS DR", "LOS PALMOS", "DR" ]
        ,
        [ 1456, "5E3AB30B-F602-4921-8A08-A19291A426DE", 1456, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOTTIE BENNETT LN", "LOTTIE BENNETT", "LN" ]
        ,
        [ 1457, "1484F71B-98D9-4A58-BDBB-2A6622098A03", 1457, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOUISBURG ST", "LOUISBURG", "ST" ]
        ,
        [ 1458, "F371751C-E2E8-492A-B7EB-0166F12D3ABF", 1458, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOUISIANA ST", "LOUISIANA", "ST" ]
        ,
        [ 1459, "7CC5CF2A-64B7-4929-9AEC-DFC17EAC53FB", 1459, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOWELL ST", "LOWELL", "ST" ]
        ,
        [ 1460, "CF14D8B2-156B-4E26-8459-B37AF6F2A656", 1460, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOWER TER", "LOWER", "TER" ]
        ,
        [ 1461, "177F8296-F8F7-44F0-AAA7-9A08D5F0AC01", 1461, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOWER FORT MASON ST", "LOWER FORT MASON", "ST" ]
        ,
        [ 1462, "2A53ABBB-B79A-4AB1-923B-C8F5E1740D49", 1462, 1413041315, "403253", 1413041315, "403253", "{\n}", "LOYOLA TER", "LOYOLA", "TER" ]
        ,
        [ 1463, "7F0FCD25-5084-4014-A170-8F635DAEE41D", 1463, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUCERNE ST", "LUCERNE", "ST" ]
        ,
        [ 1464, "4F8C9F08-1E16-41D9-AD2A-029C5171FB03", 1464, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUCKY ST", "LUCKY", "ST" ]
        ,
        [ 1465, "9347E380-8725-4ECF-90E7-E60FC3131BC3", 1465, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUCY ST", "LUCY", "ST" ]
        ,
        [ 1466, "B2793FEC-C5A0-4EBF-A1A5-78E3F47330DD", 1466, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUDLOW ALY", "LUDLOW", "ALY" ]
        ,
        [ 1467, "BAFA6F30-EC77-475E-A148-1A9C3097F0A2", 1467, 1413041315, "403253", 1413041315, "403253", "{\n}", "LULU ALY", "LULU", "ALY" ]
        ,
        [ 1468, "56D03242-EA5A-4687-8F86-70089F5A57A1", 1468, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUNADO CT", "LUNADO", "CT" ]
        ,
        [ 1469, "EF8A5660-2243-44C5-B26C-0064CA1142E3", 1469, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUNADO WAY", "LUNADO", "WAY" ]
        ,
        [ 1470, "2CEA0FEF-8186-4C00-BFFD-693BA29CCD8A", 1470, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUNDEEN ST", "LUNDEEN", "ST" ]
        ,
        [ 1471, "5172D610-549B-46F2-AC27-23A1EED8AC94", 1471, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUNDYS LN", "LUNDYS", "LN" ]
        ,
        [ 1472, "DA6418F0-0703-48D6-8206-1CF090251058", 1472, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUPINE AVE", "LUPINE", "AVE" ]
        ,
        [ 1473, "C0E1CF01-BAF2-4140-8148-0943B0BB22B6", 1473, 1413041315, "403253", 1413041315, "403253", "{\n}", "LURLINE ST", "LURLINE", "ST" ]
        ,
        [ 1474, "FBB37FB2-3D40-4BC9-B4C5-6F5768025C86", 1474, 1413041315, "403253", 1413041315, "403253", "{\n}", "LURMONT TER", "LURMONT", "TER" ]
        ,
        [ 1475, "B96F6464-5B7E-435E-98C3-1BC749CAEAF8", 1475, 1413041315, "403253", 1413041315, "403253", "{\n}", "LUSK ST", "LUSK", "ST" ]
        ,
        [ 1476, "482012AA-6479-4729-9CDF-63E1A86F924C", 1476, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYDIA AVE", "LYDIA", "AVE" ]
        ,
        [ 1477, "A9076B35-FE1B-450C-961E-4F715CCA38AD", 1477, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYELL ST", "LYELL", "ST" ]
        ,
        [ 1478, "B5B0C0B2-1AD9-427D-AAB8-8C8C724348B6", 1478, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYNCH ST", "LYNCH", "ST" ]
        ,
        [ 1479, "27B03FBF-20E6-4DBF-A3F4-DB2AD2881F63", 1479, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYNDHURST DR", "LYNDHURST", "DR" ]
        ,
        [ 1480, "9FBE2784-2744-46CF-874A-CDD7168A6DB0", 1480, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYON ST", "LYON", "ST" ]
        ,
        [ 1481, "B9DBE73F-30A3-4E75-B2FC-3CD820BE74B4", 1481, 1413041315, "403253", 1413041315, "403253", "{\n}", "LYSETTE ST", "LYSETTE", "ST" ]
        ,
        [ 1482, "C0C8CFB5-DA19-47AE-B636-19325ADAC1AD", 1482, 1413041315, "403253", 1413041315, "403253", "{\n}", "MABEL ALY", "MABEL", "ALY" ]
        ,
        [ 1483, "02164AC9-226B-4518-8251-5C401D787DF1", 1483, 1413041315, "403253", 1413041315, "403253", "{\n}", "MABINI ST", "MABINI", "ST" ]
        ,
        [ 1484, "7B1913A5-896D-4524-A745-5EA292B6740F", 1484, 1413041315, "403253", 1413041315, "403253", "{\n}", "MABREY CT", "MABREY", "CT" ]
        ,
        [ 1485, "3B5D2425-EE88-46A8-BF79-976B973A9B7D", 1485, 1413041315, "403253", 1413041315, "403253", "{\n}", "MACALLA CT", "MACALLA", "CT" ]
        ,
        [ 1486, "EF785CAF-02BA-4CFA-946B-15208B10C41C", 1486, 1413041315, "403253", 1413041315, "403253", "{\n}", "MACALLA RD", "MACALLA", "RD" ]
        ,
        [ 1487, "D3375D49-B4B0-4BF7-98D4-57447096C87A", 1487, 1413041315, "403253", 1413041315, "403253", "{\n}", "MACARTHUR AVE", "MACARTHUR", "AVE" ]
        ,
        [ 1488, "C2F966D1-DF3C-4CF1-BE94-2146BEE3D561", 1488, 1413041315, "403253", 1413041315, "403253", "{\n}", "MACEDONIA ST", "MACEDONIA", "ST" ]
        ,
        [ 1489, "A93AD2D4-9173-4D96-A3AE-A48F2C9CCE2F", 1489, 1413041315, "403253", 1413041315, "403253", "{\n}", "MACONDRAY LN", "MACONDRAY", "LN" ]
        ,
        [ 1490, "2714C425-5AF8-40C1-A1CA-71083421936F", 1490, 1413041315, "403253", 1413041315, "403253", "{\n}", "MADDUX AVE", "MADDUX", "AVE" ]
        ,
        [ 1491, "BA20952A-6B36-43BB-A88F-B9E237B15B86", 1491, 1413041315, "403253", 1413041315, "403253", "{\n}", "MADERA ST", "MADERA", "ST" ]
        ,
        [ 1492, "AAF45024-2BDE-43D8-A90E-6DD5838BC7E8", 1492, 1413041315, "403253", 1413041315, "403253", "{\n}", "MADISON ST", "MADISON", "ST" ]
        ,
        [ 1493, "9F0D96E0-DAED-4B83-A818-BA7A31B93311", 1493, 1413041315, "403253", 1413041315, "403253", "{\n}", "MADRID ST", "MADRID", "ST" ]
        ,
        [ 1494, "EB9BBB1C-E0D0-486E-8D0B-5A1C99B95038", 1494, 1413041315, "403253", 1413041315, "403253", "{\n}", "MADRONE AVE", "MADRONE", "AVE" ]
        ,
        [ 1495, "BB7838FA-5023-43EF-879F-A3836EFE59D0", 1495, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAGELLAN AVE", "MAGELLAN", "AVE" ]
        ,
        [ 1496, "C938D815-1E9E-4483-A552-EB5B533FD2E7", 1496, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAGNOLIA ST", "MAGNOLIA", "ST" ]
        ,
        [ 1497, "ECB2BB2E-2078-499F-BCC2-33BE355E58BF", 1497, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAHAN ST", "MAHAN", "ST" ]
        ,
        [ 1498, "75E3EC23-F883-4DC0-98E7-E1016E6DBF5E", 1498, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAIDEN LN", "MAIDEN", "LN" ]
        ,
        [ 1499, "FF098523-A553-4EB2-82D0-B985AB100E2A", 1499, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAIN DR", "MAIN", "DR" ]
        ,
        [ 1500, "D3A4786E-7301-46FA-B198-50BBE134D496", 1500, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAIN ST", "MAIN", "ST" ]
        ,
        [ 1501, "DC7B6F46-F515-425D-981F-9B02FDE5F70B", 1501, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAJESTIC AVE", "MAJESTIC", "AVE" ]
        ,
        [ 1502, "9AB64E55-7627-4180-9D61-7A79B12DC912", 1502, 1413041315, "403253", 1413041315, "403253", "{\n}", "MALDEN ALY", "MALDEN", "ALY" ]
        ,
        [ 1503, "80052718-771F-4EAA-8C34-ED77FD7CAAFA", 1503, 1413041315, "403253", 1413041315, "403253", "{\n}", "MALLORCA WAY", "MALLORCA", "WAY" ]
        ,
        [ 1504, "B0F415EF-89D2-400B-B22C-3F384380BD8C", 1504, 1413041315, "403253", 1413041315, "403253", "{\n}", "MALTA DR", "MALTA", "DR" ]
        ,
        [ 1505, "D56A377D-3D89-40CC-B6ED-618FD641892C", 1505, 1413041315, "403253", 1413041315, "403253", "{\n}", "MALVINA PL", "MALVINA", "PL" ]
        ,
        [ 1506, "5317795A-9CDC-4FA9-8F6A-D37F9887C028", 1506, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANCHESTER ST", "MANCHESTER", "ST" ]
        ,
        [ 1507, "E53C5017-F6C2-414C-8370-02C90900EAEB", 1507, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANDALAY LN", "MANDALAY", "LN" ]
        ,
        [ 1508, "2B32E9A1-0E39-4F17-B5D0-3AAD2B52460F", 1508, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANGELS AVE", "MANGELS", "AVE" ]
        ,
        [ 1509, "44254E50-D5CA-4F83-BB14-E210DAA4208B", 1509, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANOR DR", "MANOR", "DR" ]
        ,
        [ 1510, "BA25A2DA-C784-42C1-99EF-1F91A040AE97", 1510, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANSEAU ST", "MANSEAU", "ST" ]
        ,
        [ 1511, "5077E22A-6663-4788-8448-7C9A95099CB6", 1511, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANSELL ST", "MANSELL", "ST" ]
        ,
        [ 1512, "569FDE07-EA89-4AD9-A95D-56AAED5270E5", 1512, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANSFIELD ST", "MANSFIELD", "ST" ]
        ,
        [ 1513, "EF3F8764-F6B5-45B9-A7E9-B86FA837CD9C", 1513, 1413041315, "403253", 1413041315, "403253", "{\n}", "MANZANITA AVE", "MANZANITA", "AVE" ]
        ,
        [ 1514, "20C6C8B1-DBC0-4544-89C3-0D978E672D67", 1514, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAPLE ST", "MAPLE", "ST" ]
        ,
        [ 1515, "F4DF466E-779F-4152-BBA0-1B9179F4FF43", 1515, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARCELA AVE", "MARCELA", "AVE" ]
        ,
        [ 1516, "44044289-E94E-416D-83ED-289C76F1FF42", 1516, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARCY PL", "MARCY", "PL" ]
        ,
        [ 1517, "29AE7814-3E43-4E73-8CE0-34A3DE5A53B0", 1517, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARENGO ST", "MARENGO", "ST" ]
        ,
        [ 1518, "8C1EE34C-46AB-4C15-A986-814F5611F3EA", 1518, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARGARET AVE", "MARGARET", "AVE" ]
        ,
        [ 1519, "1D6DD760-1DE9-4920-AFE0-740EE732A6FC", 1519, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARGRAVE PL", "MARGRAVE", "PL" ]
        ,
        [ 1520, "8ED98F47-69E7-40E3-91F8-06133ED8CC3C", 1520, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARIETTA DR", "MARIETTA", "DR" ]
        ,
        [ 1521, "49FE67DE-ABFF-463C-88CB-0A018ED5AE36", 1521, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARIN ST", "MARIN", "ST" ]
        ,
        [ 1522, "FBF95A10-688A-4113-956D-7C1FE95D57A4", 1522, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARINA BLVD", "MARINA", "BLVD" ]
        ,
        [ 1523, "4A01A89F-D320-4123-A81A-9049A481A1B5", 1523, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARINA GREEN DR", "MARINA GREEN", "DR" ]
        ,
        [ 1524, "A5E84F67-16B6-4230-BD4A-6C2A052ECA7A", 1524, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARINE DR", "MARINE", "DR" ]
        ,
        [ 1525, "EB77DF81-D48F-4EB0-AE32-724C32C8E576", 1525, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARINER DR", "MARINER", "DR" ]
        ,
        [ 1526, "8E1862F8-926C-4E3F-88A6-386EC2771678", 1526, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARION PL", "MARION", "PL" ]
        ,
        [ 1527, "4F52357B-0EEB-414A-B957-0B1177D6559A", 1527, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARIPOSA ST", "MARIPOSA", "ST" ]
        ,
        [ 1528, "44BB7FC0-9931-49B9-9BF5-1238E7091D8B", 1528, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARIST CT", "MARIST", "CT" ]
        ,
        [ 1529, "B41C9AE5-495E-47A3-B6FD-25ABE1F9F77F", 1529, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARK LN", "MARK", "LN" ]
        ,
        [ 1530, "2405BBE5-B2C8-47D2-A90A-529018AC476A", 1530, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARK TWAIN PL", "MARK TWAIN", "PL" ]
        ,
        [ 1531, "4431D41A-5E15-42E3-8C01-033A25E67AAC", 1531, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARKET ST", "MARKET", "ST" ]
        ,
        [ 1532, "DF2B6585-95DA-44B7-BDA0-B4726C2C807E", 1532, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARLIN CT", "MARLIN", "CT" ]
        ,
        [ 1533, "1852DA14-CFE0-4957-B8A9-C6272FBD38B4", 1533, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARNE AVE", "MARNE", "AVE" ]
        ,
        [ 1534, "6C7C8775-ED3B-432F-BAB3-42177910CB92", 1534, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARS ST", "MARS", "ST" ]
        ,
        [ 1535, "16FDEA75-CD28-448B-8BCF-7BD9BCF02402", 1535, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARSHALL ST", "MARSHALL", "ST" ]
        ,
        [ 1536, "5AA2DD7D-C118-4A80-B9D4-C31463AB9842", 1536, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARSILY ST", "MARSILY", "ST" ]
        ,
        [ 1537, "A22159CE-FEC8-43E4-A82F-654BACA04037", 1537, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARSTON AVE", "MARSTON", "AVE" ]
        ,
        [ 1538, "73B13EC9-355B-44E0-AA4F-64C1D0396791", 1538, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARTHA AVE", "MARTHA", "AVE" ]
        ,
        [ 1539, "F6CD1488-5B5C-476A-8C3F-1AFFED340606", 1539, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARTIN LUTHER KING JR DR", "MARTIN LUTHER KING JR", "DR" ]
        ,
        [ 1540, "924CD91F-36B0-4D6F-A3B1-A1A1A12B82F6", 1540, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARTINEZ ST", "MARTINEZ", "ST" ]
        ,
        [ 1541, "17D85951-01C8-4D00-804B-308114BAB367", 1541, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARVEL CT", "MARVEL", "CT" ]
        ,
        [ 1542, "557FAE72-F56C-4956-8AF6-9DCCEA4F03B0", 1542, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARVIEW WAY", "MARVIEW", "WAY" ]
        ,
        [ 1543, "14F5E472-A2AB-45B1-9D91-D4B31183DE12", 1543, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARY ST", "MARY", "ST" ]
        ,
        [ 1544, "739B11DC-2147-43EA-9BE8-C821D34C1823", 1544, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARY TERESA ST", "MARY TERESA", "ST" ]
        ,
        [ 1545, "87E5B3A7-4773-4682-8ECB-821F30876AD8", 1545, 1413041315, "403253", 1413041315, "403253", "{\n}", "MARYLAND ST", "MARYLAND", "ST" ]
        ,
        [ 1546, "5DF4B7AF-586A-4048-9B52-DF33F01CACB2", 1546, 1413041315, "403253", 1413041315, "403253", "{\n}", "MASON CT", "MASON", "CT" ]
        ,
        [ 1547, "F8982161-E567-43C5-A95A-6131AC883CD3", 1547, 1413041315, "403253", 1413041315, "403253", "{\n}", "MASON ST", "MASON", "ST" ]
        ,
        [ 1548, "957EB1E9-3E58-49F2-85E2-FC479D848CD3", 1548, 1413041315, "403253", 1413041315, "403253", "{\n}", "MASONIC AVE", "MASONIC", "AVE" ]
        ,
        [ 1549, "B881F7B9-C8D8-459E-B76B-0CE3F0379CB2", 1549, 1413041315, "403253", 1413041315, "403253", "{\n}", "MASSACHUSETTS ST", "MASSACHUSETTS", "ST" ]
        ,
        [ 1550, "C92C3793-0760-4DB7-876C-CE8E0600B325", 1550, 1413041315, "403253", 1413041315, "403253", "{\n}", "MASSASOIT ST", "MASSASOIT", "ST" ]
        ,
        [ 1551, "77720776-6A22-453C-BA3A-8A4B0BCC0BA0", 1551, 1413041315, "403253", 1413041315, "403253", "{\n}", "MATEO ST", "MATEO", "ST" ]
        ,
        [ 1552, "5D781CEA-207E-4B83-AA85-95BDBEB7A2DF", 1552, 1413041315, "403253", 1413041315, "403253", "{\n}", "MATTHEW CT", "MATTHEW", "CT" ]
        ,
        [ 1553, "A7B0D7DE-C26E-4D25-A2ED-F93221A3149A", 1553, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAULDIN ST", "MAULDIN", "ST" ]
        ,
        [ 1554, "5391FDF5-FB27-4637-B060-08A450B32240", 1554, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAXWELL CT", "MAXWELL", "CT" ]
        ,
        [ 1555, "31BD7205-DB0A-486A-8356-E700FA698A1A", 1555, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAYFAIR DR", "MAYFAIR", "DR" ]
        ,
        [ 1556, "95EC80CB-021E-4DD3-8DB7-37160F631FC5", 1556, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAYFLOWER ST", "MAYFLOWER", "ST" ]
        ,
        [ 1557, "245606E7-EAAE-4580-85D4-2BFBE38FBB79", 1557, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAYNARD ST", "MAYNARD", "ST" ]
        ,
        [ 1558, "1F265D98-05BB-4460-B813-8882B3B3E12A", 1558, 1413041315, "403253", 1413041315, "403253", "{\n}", "MAYWOOD DR", "MAYWOOD", "DR" ]
        ,
        [ 1559, "67C52134-6FF7-423D-8741-A841CA467178", 1559, 1413041315, "403253", 1413041315, "403253", "{\n}", "MCALLISTER ST", "MCALLISTER", "ST" ]
        ,
        [ 1560, "71A7E2B9-E22A-46CF-A42E-8CD013361E97", 1560, 1413041315, "403253", 1413041315, "403253", "{\n}", "MCCANN ST", "MCCANN", "ST" ]
        ,
        [ 1561, "2FAE98D9-C28D-4970-9B40-2A28FDEAD8D9", 1561, 1413041315, "403253", 1413041315, "403253", "{\n}", "MCCARTHY AVE", "MCCARTHY", "AVE" ]
        ,
        [ 1562, "E1839B37-1A5B-413A-A777-32BA79B9F1E7", 1562, 1413041315, "403253", 1413041315, "403253", "{\n}", "MCCOPPIN ST", "MCCOPPIN", "ST" ]
        ,
        [ 1563, "852F0170-2CB9-4D6E-B967-10FB3550E1B6", 1563, 1413041315, "403253", 1413041315, "403253", "{\n}", "MCCORMICK ST", "MCCORMICK", "ST" ]
        ,
        [ 1564, "24DE26D5-C581-4449-B179-8217024B5088", 1564, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCDONALD ST", "MCDONALD", "ST" ]
        ,
        [ 1565, "089A31EA-5881-4CD8-A50F-D92B378AE4D0", 1565, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCDOWELL AVE", "MCDOWELL", "AVE" ]
        ,
        [ 1566, "73425425-32CD-4325-B3D0-629E60F6E785", 1566, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCKINLEY AVE", "MCKINLEY", "AVE" ]
        ,
        [ 1567, "F2C3CA5F-F69B-4161-B3B6-EF3FFB935F88", 1567, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCKINNON AVE", "MCKINNON", "AVE" ]
        ,
        [ 1568, "A3031843-2EF3-4237-A122-5646731D3FC1", 1568, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCLAREN AVE", "MCLAREN", "AVE" ]
        ,
        [ 1569, "D9A06374-3C8C-4185-BFCF-A8A72AC45BF6", 1569, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCLAREN LODGE ACCESS RD", "MCLAREN LODGE ACCESS", "RD" ]
        ,
        [ 1570, "30F97F46-0010-483C-AC98-FAD0CB838394", 1570, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCLEA CT", "MCLEA", "CT" ]
        ,
        [ 1571, "70828A61-4196-4245-BF0F-E10911DFAA26", 1571, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCNAIR CT", "MCNAIR", "CT" ]
        ,
        [ 1572, "C105CA24-8939-4F39-8989-877ECAE76C89", 1572, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCRAE LN", "MCRAE", "LN" ]
        ,
        [ 1573, "B1F72F7D-CB0E-496F-9DCB-3E7647ADF633", 1573, 1413041316, "403253", 1413041316, "403253", "{\n}", "MCRAE ST", "MCRAE", "ST" ]
        ,
        [ 1574, "C0503CBD-9DAC-4D25-99AA-67EAA509AB2D", 1574, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEACHAM PL", "MEACHAM", "PL" ]
        ,
        [ 1575, "B82CE1D2-4F03-465C-B7EE-99BF4F5FC69F", 1575, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEADE AVE", "MEADE", "AVE" ]
        ,
        [ 1576, "54C7C00D-56ED-4204-8885-81E78504029C", 1576, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEADOWBROOK DR", "MEADOWBROOK", "DR" ]
        ,
        [ 1577, "F9A1217A-CFBB-4EA5-9AA5-2D550BF0875B", 1577, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEDA AVE", "MEDA", "AVE" ]
        ,
        [ 1578, "35803186-73F7-4386-B18C-3D2A0F825E2E", 1578, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEDAU PL", "MEDAU", "PL" ]
        ,
        [ 1579, "C837CA78-91CB-4E13-9345-A9041BAADD6E", 1579, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEDICAL CENTER WAY", "MEDICAL CENTER", "WAY" ]
        ,
        [ 1580, "BE09CC9A-A536-403F-8761-45546026982F", 1580, 1413041316, "403253", 1413041316, "403253", "{\n}", "MEGAN DR", "MEGAN", "DR" ]
        ,
        [ 1581, "9CFCC2D5-ACAC-4702-AB93-2262FDF9199B", 1581, 1413041316, "403253", 1413041316, "403253", "{\n}", "MELBA AVE", "MELBA", "AVE" ]
        ,
        [ 1582, "0BB2625C-637C-43DD-B05F-485546C40C66", 1582, 1413041316, "403253", 1413041316, "403253", "{\n}", "MELRA CT", "MELRA", "CT" ]
        ,
        [ 1583, "5EE89E66-5DDC-4B77-9385-FDF31C1DC945", 1583, 1413041316, "403253", 1413041316, "403253", "{\n}", "MELROSE AVE", "MELROSE", "AVE" ]
        ,
        [ 1584, "E363F121-7F20-45BD-861D-58217B96758B", 1584, 1413041316, "403253", 1413041316, "403253", "{\n}", "MENDELL ST", "MENDELL", "ST" ]
        ,
        [ 1585, "C3907F6D-3E0F-4907-B4AC-BA81B3A47B0F", 1585, 1413041316, "403253", 1413041316, "403253", "{\n}", "MENDOSA AVE", "MENDOSA", "AVE" ]
        ,
        [ 1586, "985CA855-21BE-482E-B5E9-9CF0DD311DD9", 1586, 1413041316, "403253", 1413041316, "403253", "{\n}", "MENOHER LN", "MENOHER", "LN" ]
        ,
        [ 1587, "9A044CEA-42CE-4A75-9F33-3B490FA988AE", 1587, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCATO CT", "MERCATO", "CT" ]
        ,
        [ 1588, "C110BE59-D08E-4790-8E64-5CAC43DEFF26", 1588, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCED AVE", "MERCED", "AVE" ]
        ,
        [ 1589, "4D79EEFD-F1E2-43F3-B499-F31EB1380BC0", 1589, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCEDES WAY", "MERCEDES", "WAY" ]
        ,
        [ 1590, "CA5F615B-5847-4097-9F83-76AFD21D9864", 1590, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCHANT RD", "MERCHANT", "RD" ]
        ,
        [ 1591, "DE66EE41-A412-481E-8D5F-BB40C168D96F", 1591, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCHANT ST", "MERCHANT", "ST" ]
        ,
        [ 1592, "879AE5FF-959A-45F5-BE9C-4304540FC5CC", 1592, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERCURY ST", "MERCURY", "ST" ]
        ,
        [ 1593, "8B6FC07C-231C-4886-99D2-28108F671D2F", 1593, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERLIN ST", "MERLIN", "ST" ]
        ,
        [ 1594, "CD446452-50FF-400B-B976-AEA0E177363E", 1594, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERRIAM LN", "MERRIAM", "LN" ]
        ,
        [ 1595, "737095F6-A6B7-4553-BF5B-961EEF6AAEAF", 1595, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERRIE WAY", "MERRIE", "WAY" ]
        ,
        [ 1596, "5B5B49B2-CB79-4227-A727-0EA5D6BA1D83", 1596, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERRILL ST", "MERRILL", "ST" ]
        ,
        [ 1597, "C28F204F-8CBA-4C67-807B-1FC115BD3AF4", 1597, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERRIMAC ST", "MERRIMAC", "ST" ]
        ,
        [ 1598, "89E05E4E-882D-4E02-BE10-39E2EA224B6F", 1598, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERRITT ST", "MERRITT", "ST" ]
        ,
        [ 1599, "7215AB19-38A3-44DC-9BCF-9EADCBBAAC5F", 1599, 1413041316, "403253", 1413041316, "403253", "{\n}", "MERSEY ST", "MERSEY", "ST" ]
        ,
        [ 1600, "8B70241A-E4EA-49ED-B06B-4706AF333AFD", 1600, 1413041316, "403253", 1413041316, "403253", "{\n}", "MESA AVE", "MESA", "AVE" ]
        ,
        [ 1601, "AB5CD345-4598-4377-8C86-0EF26D60CF63", 1601, 1413041316, "403253", 1413041316, "403253", "{\n}", "MESA ST", "MESA", "ST" ]
        ,
        [ 1602, "01B032A6-C867-4D90-8D54-8B395387B230", 1602, 1413041316, "403253", 1413041316, "403253", "{\n}", "METSON RD", "METSON", "RD" ]
        ,
        [ 1603, "7CF13747-D1B1-4E08-80FC-46F164364A4D", 1603, 1413041316, "403253", 1413041316, "403253", "{\n}", "MICHIGAN ST", "MICHIGAN", "ST" ]
        ,
        [ 1604, "054AAC67-9DB5-48B9-9DD9-77AD5BCDFFD1", 1604, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIDCREST WAY", "MIDCREST", "WAY" ]
        ,
        [ 1605, "6A97B893-7B23-45B2-A3D2-BD0C997DCB10", 1605, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIDDLE POINT RD", "MIDDLE POINT", "RD" ]
        ,
        [ 1606, "05552031-971A-4909-A6E9-71B011DF2AAF", 1606, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIDDLE WEST DR", "MIDDLE WEST", "DR" ]
        ,
        [ 1607, "09BACB06-34FB-4743-A09D-C5D997FB8608", 1607, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIDDLEFIELD DR", "MIDDLEFIELD", "DR" ]
        ,
        [ 1608, "38DAEE03-ACF8-40CE-BBDE-DF4B2FD88E80", 1608, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIDWAY ST", "MIDWAY", "ST" ]
        ,
        [ 1609, "10E2E414-18AC-4090-B370-679BE7B6C956", 1609, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIGUEL ST", "MIGUEL", "ST" ]
        ,
        [ 1610, "489BA514-34A6-43E3-A469-7AA5FAAD686B", 1610, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILAN TER", "MILAN", "TER" ]
        ,
        [ 1611, "691BADC0-7853-48DD-AE52-6472B97CDCF0", 1611, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILES CT", "MILES", "CT" ]
        ,
        [ 1612, "0FEE5A9F-3AC6-4D16-B600-1FD4796D84A2", 1612, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILES ST", "MILES", "ST" ]
        ,
        [ 1613, "66EF28C0-ACBF-45D6-97FD-A490FD68CAF9", 1613, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILEY ST", "MILEY", "ST" ]
        ,
        [ 1614, "A716C321-21AC-48AD-878C-58414070A2A5", 1614, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILL ST", "MILL", "ST" ]
        ,
        [ 1615, "7BD64932-6078-481D-B04C-CA7AB0BDB0F0", 1615, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILLER PL", "MILLER", "PL" ]
        ,
        [ 1616, "D294972E-2C31-4A85-8DB9-6166DC3CB423", 1616, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILLER RD", "MILLER", "RD" ]
        ,
        [ 1617, "B48FA4BF-9EE3-4241-98E9-2BB90C417355", 1617, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILLWRIGHT COTTAGE ACCESS RD", "MILLWRIGHT COTTAGE ACCESS", "RD" ]
        ,
        [ 1618, "4CC9CE68-A38F-4092-A5D8-FAC9F66A2A07", 1618, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILTON ST", "MILTON", "ST" ]
        ,
        [ 1619, "2BEF4D59-068F-4259-B405-62579F8F039B", 1619, 1413041316, "403253", 1413041316, "403253", "{\n}", "MILTON I ROSS ST", "MILTON I ROSS", "ST" ]
        ,
        [ 1620, "30A07E13-B5EF-4F38-A0B1-3869B9B74586", 1620, 1413041316, "403253", 1413041316, "403253", "{\n}", "MINERVA ST", "MINERVA", "ST" ]
        ,
        [ 1621, "10170C2D-CD35-49D0-8D1F-0E354FC69EDB", 1621, 1413041316, "403253", 1413041316, "403253", "{\n}", "MINNA ST", "MINNA", "ST" ]
        ,
        [ 1622, "D8EC61DC-DA54-41E2-BE10-EAD7E7A6BED1", 1622, 1413041316, "403253", 1413041316, "403253", "{\n}", "MINNESOTA ST", "MINNESOTA", "ST" ]
        ,
        [ 1623, "E923FD4B-7D2B-4C00-8FF7-E416E49B92CD", 1623, 1413041316, "403253", 1413041316, "403253", "{\n}", "MINT PLZ", "MINT", "PLZ" ]
        ,
        [ 1624, "4B69F689-63E6-4CBD-8073-BD08C3C9980D", 1624, 1413041316, "403253", 1413041316, "403253", "{\n}", "MINT ST", "MINT", "ST" ]
        ,
        [ 1625, "AB253FD9-FC32-4042-B5D2-E393D51C68F5", 1625, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIRABEL AVE", "MIRABEL", "AVE" ]
        ,
        [ 1626, "87872AF9-5FD1-4D32-A9CF-0331327A70D5", 1626, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIRALOMA DR", "MIRALOMA", "DR" ]
        ,
        [ 1627, "1FE23D19-3057-4B23-B4CC-D82AB7045733", 1627, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIRAMAR AVE", "MIRAMAR", "AVE" ]
        ,
        [ 1628, "28B4B264-DD84-4218-B263-50E6C5157576", 1628, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIRANDO WAY", "MIRANDO", "WAY" ]
        ,
        [ 1629, "326F1977-023B-4E5D-950E-050B3ED88776", 1629, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION ST", "MISSION", "ST" ]
        ,
        [ 1630, "5529FE52-BB3E-4C90-826B-B4022F0D92E4", 1630, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY BLVD NORTH", "MISSION BAY", "BLVD" ]
        ,
        [ 1631, "38506CF2-F1AC-48B8-BE74-608178192AD5", 1631, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY BLVD SOUTH", "MISSION BAY", "BLVD" ]
        ,
        [ 1632, "BBBC2813-8EEE-46EC-A73F-8BCE24942202", 1632, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY BLVD NORTH", "MISSION BAY", "BLVD NORTH" ]
        ,
        [ 1633, "F5987024-6BA9-4316-B349-BBDD4F682077", 1633, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY BLVD SOUTH", "MISSION BAY", "BLVD SOUTH" ]
        ,
        [ 1634, "CD68D06D-1F99-45AB-8EF7-E92C49B19408", 1634, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY CIR", "MISSION BAY", "CIR" ]
        ,
        [ 1635, "B0BA6936-2ACD-42C4-AC01-BA425FD852A1", 1635, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION BAY DR", "MISSION BAY", "DR" ]
        ,
        [ 1636, "3ABC5284-D781-45EF-8C72-525AC4ABE3E9", 1636, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSION ROCK ST", "MISSION ROCK", "ST" ]
        ,
        [ 1637, "067247C6-B848-4120-A10B-C7B191B47403", 1637, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSISSIPPI ST", "MISSISSIPPI", "ST" ]
        ,
        [ 1638, "73D7814A-33AE-4EEB-A318-51CBF5A6499B", 1638, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISSOURI ST", "MISSOURI", "ST" ]
        ,
        [ 1639, "0F67913C-E90D-4AB3-8AA3-D10FDFC1A66E", 1639, 1413041316, "403253", 1413041316, "403253", "{\n}", "MISTRAL ST", "MISTRAL", "ST" ]
        ,
        [ 1640, "0615BBBE-D751-4F24-8A04-AEAE3DBB4DFD", 1640, 1413041316, "403253", 1413041316, "403253", "{\n}", "MIZPAH ST", "MIZPAH", "ST" ]
        ,
        [ 1641, "3D1DEC6B-3E88-441D-801E-F24ACCDABA19", 1641, 1413041316, "403253", 1413041316, "403253", "{\n}", "MODOC AVE", "MODOC", "AVE" ]
        ,
        [ 1642, "D7036B6C-319C-45C8-B93D-83427F81B5A7", 1642, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOFFITT ST", "MOFFITT", "ST" ]
        ,
        [ 1643, "CE74CA31-3E3D-4C58-B952-9023ABE26F8E", 1643, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOJAVE ST", "MOJAVE", "ST" ]
        ,
        [ 1644, "F2A2EEEA-600D-476C-A83F-54687CBA24CE", 1644, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOLIMO DR", "MOLIMO", "DR" ]
        ,
        [ 1645, "DE4761BC-2DCC-4C2A-9778-FBF83F64D358", 1645, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONCADA WAY", "MONCADA", "WAY" ]
        ,
        [ 1646, "5813ADE1-22EB-4F10-9EB4-CB9D7EDCC7B6", 1646, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONETA CT", "MONETA", "CT" ]
        ,
        [ 1647, "449CED56-211A-4BC1-B6C3-D18C721E0AE0", 1647, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONETA WAY", "MONETA", "WAY" ]
        ,
        [ 1648, "9AE2A1D2-B673-4BDE-8392-B08E4E02B461", 1648, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONO ST", "MONO", "ST" ]
        ,
        [ 1649, "BF866E3E-45DE-42DC-9E0B-DD2BC39BBCBD", 1649, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTAGUE PL", "MONTAGUE", "PL" ]
        ,
        [ 1650, "3331EE52-1863-4453-8C0A-9B082FBE9DF2", 1650, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTALVO AVE", "MONTALVO", "AVE" ]
        ,
        [ 1651, "955A0D5D-75AD-4557-A193-390292D3075A", 1651, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTANA ST", "MONTANA", "ST" ]
        ,
        [ 1652, "ED75C7BC-2E13-48E8-9C2E-A12EC267502A", 1652, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTCALM ST", "MONTCALM", "ST" ]
        ,
        [ 1653, "9F07316F-D75C-4C0B-8AF7-86C622BB04F9", 1653, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTCLAIR TER", "MONTCLAIR", "TER" ]
        ,
        [ 1654, "31183169-2332-45AD-8CFB-5878B7BB1623", 1654, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTE VISTA DR", "MONTE VISTA", "DR" ]
        ,
        [ 1655, "A14AEF43-BAEF-4BBE-9ADC-9C5341C387B4", 1655, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTECITO AVE", "MONTECITO", "AVE" ]
        ,
        [ 1656, "9BB2D490-714F-4454-B197-DA705F4C1762", 1656, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTEREY BLVD", "MONTEREY", "BLVD" ]
        ,
        [ 1657, "E9B7B0D5-9647-4612-896A-04D03B75A326", 1657, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTEZUMA ST", "MONTEZUMA", "ST" ]
        ,
        [ 1658, "2205BAFE-CE4B-4EE5-B2B8-2469C1669FD6", 1658, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTGOMERY ST", "MONTGOMERY", "ST" ]
        ,
        [ 1659, "BBC82EE6-562B-4003-9E76-96E001B4F99E", 1659, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONTICELLO ST", "MONTICELLO", "ST" ]
        ,
        [ 1660, "52B29449-BE3D-440B-82B5-AB2032E9DC32", 1660, 1413041316, "403253", 1413041316, "403253", "{\n}", "MONUMENT WAY", "MONUMENT", "WAY" ]
        ,
        [ 1661, "A0A79519-1A24-4604-9883-CE541934717B", 1661, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOORE LN", "MOORE", "LN" ]
        ,
        [ 1662, "A1852AB4-D4D7-4CCB-8CA8-05869B16C59E", 1662, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOORE PL", "MOORE", "PL" ]
        ,
        [ 1663, "ADF52719-5D71-4631-AE7D-44F0ECBF37B3", 1663, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORAGA AVE", "MORAGA", "AVE" ]
        ,
        [ 1664, "40819A2F-A112-4A7C-89F6-AE47F8493AE0", 1664, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORAGA ST", "MORAGA", "ST" ]
        ,
        [ 1665, "8F0EC7DC-ABDA-42A7-B57D-34B7A24C8FBB", 1665, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORELAND ST", "MORELAND", "ST" ]
        ,
        [ 1666, "34CA0C8A-CA5A-45DA-8B75-53E35079C850", 1666, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORGAN ALY", "MORGAN", "ALY" ]
        ,
        [ 1667, "5194E498-26C5-4CB0-AFB9-B107BA136602", 1667, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORNINGSIDE DR", "MORNINGSIDE", "DR" ]
        ,
        [ 1668, "BDB48DAD-BD96-4583-961B-E1905E07F980", 1668, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORRELL PL", "MORRELL", "PL" ]
        ,
        [ 1669, "19ED7476-BB69-495A-B12D-402EBAA6946B", 1669, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORRELL ST", "MORRELL", "ST" ]
        ,
        [ 1670, "D962151F-0E62-4539-853D-6B586083C8CB", 1670, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORRIS ST", "MORRIS", "ST" ]
        ,
        [ 1671, "554D5EE0-D66F-4C16-ABBD-EF7AB620FD1B", 1671, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORSE ST", "MORSE", "ST" ]
        ,
        [ 1672, "0B06E127-3465-468F-81C3-6A2FBE55AB31", 1672, 1413041316, "403253", 1413041316, "403253", "{\n}", "MORTON ST", "MORTON", "ST" ]
        ,
        [ 1673, "D937E450-C798-4BC2-80BE-92B84D68E23F", 1673, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOSCOW ST", "MOSCOW", "ST" ]
        ,
        [ 1674, "28947421-3B69-4038-81F3-89A5F47DEE52", 1674, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOSS ST", "MOSS", "ST" ]
        ,
        [ 1675, "9E66B5E5-3352-41F7-8E8C-D34C826B1A83", 1675, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOULTON ST", "MOULTON", "ST" ]
        ,
        [ 1676, "B2AA08E0-5F65-41A4-BBA4-B73F13639D23", 1676, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOULTRIE ST", "MOULTRIE", "ST" ]
        ,
        [ 1677, "F52ED720-E3A2-4F2F-8DA3-26D89A4351F0", 1677, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOUNT LN", "MOUNT", "LN" ]
        ,
        [ 1678, "72A1B3C9-F2A6-4AE5-B907-3FEE67E647D7", 1678, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOUNT VERNON AVE", "MOUNT VERNON", "AVE" ]
        ,
        [ 1679, "878F3D01-16F4-498C-AA10-CCC5D548A5DA", 1679, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOUNTAIN SPRING AVE", "MOUNTAIN SPRING", "AVE" ]
        ,
        [ 1680, "1326DBFA-1CF4-445B-980B-6ACDE7401394", 1680, 1413041316, "403253", 1413041316, "403253", "{\n}", "MOUNTVIEW CT", "MOUNTVIEW", "CT" ]
        ,
        [ 1681, "C6309F08-FE4E-446E-BFB6-A94628D190E1", 1681, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUIR CT", "MUIR", "CT" ]
        ,
        [ 1682, "13D7606E-BF74-4C66-A936-9AC3108AE73B", 1682, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUIR LOOP", "MUIR", "LOOP" ]
        ,
        [ 1683, "D0E6E23C-1D05-4E11-97F8-789FF98B8B49", 1683, 1413041316, "403253", 1413041316, "403253", "{\n}", "MULFORD ALY", "MULFORD", "ALY" ]
        ,
        [ 1684, "7444455E-FE9D-4F83-B612-E649B1EF9582", 1684, 1413041316, "403253", 1413041316, "403253", "{\n}", "MULLEN AVE", "MULLEN", "AVE" ]
        ,
        [ 1685, "C40DDADF-4E0B-42E0-A9A5-5BBCBB4ABCC4", 1685, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUNICH ST", "MUNICH", "ST" ]
        ,
        [ 1686, "59494204-0383-4719-91D3-F67C499CA6A5", 1686, 1413041316, "403253", 1413041316, "403253", "{\n}", "MURRAY LN", "MURRAY", "LN" ]
        ,
        [ 1687, "32AEF0FD-FA46-4FFF-8883-5ED3E0AD2E99", 1687, 1413041316, "403253", 1413041316, "403253", "{\n}", "MURRAY ST", "MURRAY", "ST" ]
        ,
        [ 1688, "16CA15AA-6DDA-429A-9257-1AA299DFC58E", 1688, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUSEUM WAY", "MUSEUM", "WAY" ]
        ,
        [ 1689, "C369CEA6-04CB-445E-A4DD-EC5D750604DC", 1689, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUSIC CONCOURSE DR", "MUSIC CONCOURSE", "DR" ]
        ,
        [ 1690, "36C8C867-4461-44F8-B1B2-EA8A1C76DE1B", 1690, 1413041316, "403253", 1413041316, "403253", "{\n}", "MUSIC CONCOURSE ACCESS RD", "MUSIC CONCOURSE ACCESS", "RD" ]
        ,
        [ 1691, "D0862BA1-9098-4260-BEDD-9DDE44C5EC8F", 1691, 1413041316, "403253", 1413041316, "403253", "{\n}", "MYRA WAY", "MYRA", "WAY" ]
        ,
        [ 1692, "9A0226F5-FD65-4A9E-9B14-007ED2042FF0", 1692, 1413041316, "403253", 1413041316, "403253", "{\n}", "MYRTLE ST", "MYRTLE", "ST" ]
        ,
        [ 1693, "7723E293-4341-4FB2-8D5D-9664D83B9FE4", 1693, 1413041316, "403253", 1413041316, "403253", "{\n}", "NADELL CT", "NADELL", "CT" ]
        ,
        [ 1694, "D4B06E1D-97F2-4B49-BDF2-5F00F27C9ACA", 1694, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAGLEE AVE", "NAGLEE", "AVE" ]
        ,
        [ 1695, "7E1C71EE-C5A3-4CA0-AEAB-B4DECE4CE9A9", 1695, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAHUA AVE", "NAHUA", "AVE" ]
        ,
        [ 1696, "8FE9D187-3EC3-43E1-B361-F362B1B039C9", 1696, 1413041316, "403253", 1413041316, "403253", "{\n}", "NANCY PELOSI DR", "NANCY PELOSI", "DR" ]
        ,
        [ 1697, "DF631490-D299-4D65-B790-03D3313CC5B3", 1697, 1413041316, "403253", 1413041316, "403253", "{\n}", "NANTUCKET AVE", "NANTUCKET", "AVE" ]
        ,
        [ 1698, "B4581C9B-4623-4110-92DC-856499686D0E", 1698, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAPIER LN", "NAPIER", "LN" ]
        ,
        [ 1699, "31F29EEB-A2B8-4281-99FC-CC513EC8733F", 1699, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAPLES ST", "NAPLES", "ST" ]
        ,
        [ 1700, "108D252D-941F-4788-B14A-002FC40543CE", 1700, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAPOLEON ST", "NAPOLEON", "ST" ]
        ,
        [ 1701, "6A8590CE-9C3F-499F-B023-191EDADE57B7", 1701, 1413041316, "403253", 1413041316, "403253", "{\n}", "NATICK ST", "NATICK", "ST" ]
        ,
        [ 1702, "D0631E2C-C077-468B-BD90-A1E8845D2A76", 1702, 1413041316, "403253", 1413041316, "403253", "{\n}", "NATOMA ST", "NATOMA", "ST" ]
        ,
        [ 1703, "F0067513-8162-4EF9-A812-103FA7B67224", 1703, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAUMAN RD", "NAUMAN", "RD" ]
        ,
        [ 1704, "77294E19-F636-4723-BB02-051E7B6D956F", 1704, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAUTILUS DR", "NAUTILUS", "DR" ]
        ,
        [ 1705, "AAA4DFCD-9273-4A79-B4E4-ACEEB1C13B47", 1705, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAVAJO AVE", "NAVAJO", "AVE" ]
        ,
        [ 1706, "095EAAF9-5565-44A5-BAF8-7E52CA82F5F3", 1706, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAVY RD", "NAVY", "RD" ]
        ,
        [ 1707, "8D6D08B9-DE95-4731-815B-3F1A088485D0", 1707, 1413041316, "403253", 1413041316, "403253", "{\n}", "NAYLOR ST", "NAYLOR", "ST" ]
        ,
        [ 1708, "8841E3B0-F4F0-4D5E-BE5E-F146E7F8EE13", 1708, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEBRASKA ST", "NEBRASKA", "ST" ]
        ,
        [ 1709, "8923D555-071E-44B6-B483-C1B242CCC381", 1709, 1413041316, "403253", 1413041316, "403253", "{\n}", "NELLIE ST", "NELLIE", "ST" ]
        ,
        [ 1710, "05F79561-668E-459A-BA7F-E61761246CBF", 1710, 1413041316, "403253", 1413041316, "403253", "{\n}", "NELSON AVE", "NELSON", "AVE" ]
        ,
        [ 1711, "8632DDAD-DE2F-4C81-8EB2-6226CCB0BF45", 1711, 1413041316, "403253", 1413041316, "403253", "{\n}", "NELSON RISING LN", "NELSON RISING", "LN" ]
        ,
        [ 1712, "1DABFC10-E271-45B4-8259-A9DFB4AABEE4", 1712, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEPTUNE ST", "NEPTUNE", "ST" ]
        ,
        [ 1713, "07CD317A-5DF3-40B7-AA1A-15B8B8799DE8", 1713, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEVADA ST", "NEVADA", "ST" ]
        ,
        [ 1714, "F1816057-7D65-4DEF-81B0-70BCF09D073C", 1714, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEW MONTGOMERY ST", "NEW MONTGOMERY", "ST" ]
        ,
        [ 1715, "E4C735A6-5515-4462-8D63-1C4586FCEE0A", 1715, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWBURG ST", "NEWBURG", "ST" ]
        ,
        [ 1716, "EB4235E0-F182-476E-87DC-6B37597F4210", 1716, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWCOMB AVE", "NEWCOMB", "AVE" ]
        ,
        [ 1717, "D9A43770-C668-4B71-B05C-42B1AC51533F", 1717, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWELL ST", "NEWELL", "ST" ]
        ,
        [ 1718, "6922F15D-49FD-48E7-AD16-B6ABB0FCE2DD", 1718, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWHALL ST", "NEWHALL", "ST" ]
        ,
        [ 1719, "3799214A-BCC3-4E41-A832-9C51A3F3AA1C", 1719, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWMAN ST", "NEWMAN", "ST" ]
        ,
        [ 1720, "8067C4E5-8349-4A6C-8207-CE28C037CE74", 1720, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEWTON ST", "NEWTON", "ST" ]
        ,
        [ 1721, "A67C38F8-DD34-4B98-80AE-87F1FC2916E5", 1721, 1413041316, "403253", 1413041316, "403253", "{\n}", "NEY ST", "NEY", "ST" ]
        ,
        [ 1722, "F4CF3058-2965-4E56-BDC8-A93F7AF8F774", 1722, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIAGARA AVE", "NIAGARA", "AVE" ]
        ,
        [ 1723, "20B0C103-0EFC-4275-842B-72DFF7E34D69", 1723, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIANTIC AVE", "NIANTIC", "AVE" ]
        ,
        [ 1724, "398549CE-E5F1-4252-8869-D8FB88215BD2", 1724, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIBBI CT", "NIBBI", "CT" ]
        ,
        [ 1725, "A7614BDF-1371-4F26-BC6B-46B88155CE29", 1725, 1413041316, "403253", 1413041316, "403253", "{\n}", "NICHOLS WAY", "NICHOLS", "WAY" ]
        ,
        [ 1726, "CF7B69A0-D7FA-44C2-87C0-3D6FBE601111", 1726, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIDO AVE", "NIDO", "AVE" ]
        ,
        [ 1727, "5AE57ACE-0C7C-45AD-BADF-427EADB5C7A6", 1727, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIMITZ AVE", "NIMITZ", "AVE" ]
        ,
        [ 1728, "98719CA8-5EF6-43D8-AA2C-AA81A4F49C38", 1728, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIMITZ DR", "NIMITZ", "DR" ]
        ,
        [ 1729, "3C291565-919B-48A5-B108-D0DCB98B128C", 1729, 1413041316, "403253", 1413041316, "403253", "{\n}", "NIMITZ LN", "NIMITZ", "LN" ]
        ,
        [ 1730, "D396B733-0693-46AA-B561-61BAE926873B", 1730, 1413041316, "403253", 1413041316, "403253", "{\n}", "NOB HILL PL", "NOB HILL", "PL" ]
        ,
        [ 1731, "58228B5C-37E9-49D6-AC0E-CC53B5700F4E", 1731, 1413041316, "403253", 1413041316, "403253", "{\n}", "NOBLES ALY", "NOBLES", "ALY" ]
        ,
        [ 1732, "93F2BC9B-8FA4-446D-BF9D-3DA171A8DC9D", 1732, 1413041316, "403253", 1413041316, "403253", "{\n}", "NOE ST", "NOE", "ST" ]
        ,
        [ 1733, "3A2677EC-BB18-4D40-86B6-E52E3C6620EE", 1733, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORDHOFF ST", "NORDHOFF", "ST" ]
        ,
        [ 1734, "3A29A03C-BF31-4931-A28C-97E2764A8A24", 1734, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORFOLK ST", "NORFOLK", "ST" ]
        ,
        [ 1735, "9CB60145-A724-499E-8FD7-BF11E46C81FC", 1735, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORIEGA ST", "NORIEGA", "ST" ]
        ,
        [ 1736, "367541F6-20ED-4931-8E63-6C35187B200D", 1736, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORMANDIE TER", "NORMANDIE", "TER" ]
        ,
        [ 1737, "0D42598D-4F49-4950-9A97-F819B56AAC69", 1737, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH DR", "NORTH", "DR" ]
        ,
        [ 1738, "27A03152-CAAC-41E4-B2FC-95174C691BEB", 1738, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH 15TH AVE", "NORTH 15TH", "AVE" ]
        ,
        [ 1739, "8FD6E510-BA29-46EF-8013-88503EF62A1F", 1739, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH GATE RD", "NORTH GATE", "RD" ]
        ,
        [ 1740, "B3721E67-EBFB-432B-B04E-33CE19EB9A1E", 1740, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH HUGHES LN", "NORTH HUGHES", "LN" ]
        ,
        [ 1741, "D5CF17F6-955D-40CD-B853-542424BAF516", 1741, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH POINT ST", "NORTH POINT", "ST" ]
        ,
        [ 1742, "22C86198-3220-47CD-85D3-BC9C9780C6B0", 1742, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH VAN HORN LN", "NORTH VAN HORN", "LN" ]
        ,
        [ 1743, "BC2B5556-4C92-4786-ACE4-63382C044402", 1743, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTH VIEW CT", "NORTH VIEW", "CT" ]
        ,
        [ 1744, "25F7246A-F2D6-47E0-B74C-3126902F3A27", 1744, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTHGATE DR", "NORTHGATE", "DR" ]
        ,
        [ 1745, "45342EA1-FF15-4FEE-9BF7-854AD75B7C45", 1745, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTHPOINT DR", "NORTHPOINT", "DR" ]
        ,
        [ 1746, "F8961B12-2545-40FB-B6D7-D02DA7F67B29", 1746, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTHRIDGE RD", "NORTHRIDGE", "RD" ]
        ,
        [ 1747, "6BB7045A-A245-440F-91AD-C42EF25C8264", 1747, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTHWOOD DR", "NORTHWOOD", "DR" ]
        ,
        [ 1748, "DC3D1C14-8502-4B77-8FD5-8FF0F6651F39", 1748, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORTON ST", "NORTON", "ST" ]
        ,
        [ 1749, "6A4A59D5-3F40-4DE6-BA61-92940167DEF7", 1749, 1413041316, "403253", 1413041316, "403253", "{\n}", "NORWICH ST", "NORWICH", "ST" ]
        ,
        [ 1750, "07D60B85-8CAB-4D14-87ED-1FE2ABB90A7A", 1750, 1413041316, "403253", 1413041316, "403253", "{\n}", "NOTTINGHAM PL", "NOTTINGHAM", "PL" ]
        ,
        [ 1751, "C28C675D-1B75-4618-A061-E01CA36983E9", 1751, 1413041316, "403253", 1413041316, "403253", "{\n}", "NUEVA AVE", "NUEVA", "AVE" ]
        ,
        [ 1752, "14484015-ED0A-499C-918A-0CB7D739F316", 1752, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAK ST", "OAK", "ST" ]
        ,
        [ 1753, "DB636A60-CF7B-4880-BD39-256FB111C582", 1753, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAK ACCESS RD", "OAK ACCESS", "RD" ]
        ,
        [ 1754, "DA1D996C-E04B-4F86-B3FD-DFEE8B18A58F", 1754, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAK GROVE ST", "OAK GROVE", "ST" ]
        ,
        [ 1755, "9948F101-E77B-42E2-AC8A-13B50D935AF3", 1755, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAK PARK DR", "OAK PARK", "DR" ]
        ,
        [ 1756, "B099BF24-1F8C-4F35-B974-1527F6D704F5", 1756, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAKDALE AVE", "OAKDALE", "AVE" ]
        ,
        [ 1757, "EFB3B9EA-C281-4D8F-8B66-3CE05D40C9A8", 1757, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAKHURST LN", "OAKHURST", "LN" ]
        ,
        [ 1758, "8FBF24E3-2D19-47BE-866B-3B4BC068B87F", 1758, 1413041316, "403253", 1413041316, "403253", "{\n}", "OAKWOOD ST", "OAKWOOD", "ST" ]
        ,
        [ 1759, "F3BD594E-EE70-4E18-8569-5D6D784138A9", 1759, 1413041316, "403253", 1413041316, "403253", "{\n}", "OCEAN AVE", "OCEAN", "AVE" ]
        ,
        [ 1760, "9BA334CE-E6FC-4C86-8B02-0E76BFA0667C", 1760, 1413041316, "403253", 1413041316, "403253", "{\n}", "OCEANVIEW TER", "OCEANVIEW", "TER" ]
        ,
        [ 1761, "CFBBB0CA-4048-452F-BFA7-CF702089A620", 1761, 1413041316, "403253", 1413041316, "403253", "{\n}", "OCTAVIA ST", "OCTAVIA", "ST" ]
        ,
        [ 1762, "72CDA525-F40D-4209-A9A1-D2217355478B", 1762, 1413041316, "403253", 1413041316, "403253", "{\n}", "OFARRELL ST", "OFARRELL", "ST" ]
        ,
        [ 1763, "90974EE5-70C3-49FC-9DAE-FC6393C5679D", 1763, 1413041316, "403253", 1413041316, "403253", "{\n}", "OGDEN AVE", "OGDEN", "AVE" ]
        ,
        [ 1764, "C8789CCD-8022-4BAD-BF41-BF92DB5F815B", 1764, 1413041316, "403253", 1413041316, "403253", "{\n}", "OHLONE WAY", "OHLONE", "WAY" ]
        ,
        [ 1765, "84CD02C6-C8E3-4E77-A107-E47E66C6B37A", 1765, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLD CHINATOWN LN", "OLD CHINATOWN", "LN" ]
        ,
        [ 1766, "325A0F69-C1D7-46C7-90A2-C26C405068FC", 1766, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLD MASON ST", "OLD MASON", "ST" ]
        ,
        [ 1767, "3BE0FD06-C1AB-48E0-A5CF-3C0A9EAD66AA", 1767, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLIVE ST", "OLIVE", "ST" ]
        ,
        [ 1768, "C6502136-31E4-41B9-981E-5BE5D3889DF0", 1768, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLIVER ST", "OLIVER", "ST" ]
        ,
        [ 1769, "3A2A1B36-1A1B-4D14-AF97-105A7CF3AA39", 1769, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLMSTEAD ST", "OLMSTEAD", "ST" ]
        ,
        [ 1770, "5C9AF54F-2E2F-4314-A465-133E3628BAA0", 1770, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLNEY AVE", "OLNEY", "AVE" ]
        ,
        [ 1771, "3BF5DCC8-6147-4C3B-8445-0333C61EFD5A", 1771, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLORAN AVE", "OLORAN", "AVE" ]
        ,
        [ 1772, "41536040-B76F-4D07-8A51-4BAECF4B4040", 1772, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLYMPIA WAY", "OLYMPIA", "WAY" ]
        ,
        [ 1773, "EEA23257-CBB2-4933-BDCB-DAE837511EF6", 1773, 1413041316, "403253", 1413041316, "403253", "{\n}", "OLYMPIC COUNTRY CLUB RD", "OLYMPIC COUNTRY CLUB", "RD" ]
        ,
        [ 1774, "2F3CDB1D-780B-4031-BC89-0A41785620B2", 1774, 1413041316, "403253", 1413041316, "403253", "{\n}", "OMAR WAY", "OMAR", "WAY" ]
        ,
        [ 1775, "DDA74989-8461-4CE5-ADF8-13308E87A5F3", 1775, 1413041316, "403253", 1413041316, "403253", "{\n}", "ONEIDA AVE", "ONEIDA", "AVE" ]
        ,
        [ 1776, "B9786B94-7384-42AD-B61A-2D3BC4C2D086", 1776, 1413041316, "403253", 1413041316, "403253", "{\n}", "ONIQUE LN", "ONIQUE", "LN" ]
        ,
        [ 1777, "4ECEBA7C-F9A6-450F-8C4C-94FAB6F22063", 1777, 1413041316, "403253", 1413041316, "403253", "{\n}", "ONONDAGA AVE", "ONONDAGA", "AVE" ]
        ,
        [ 1778, "D235C6FB-00A6-4893-AFC5-A7CFC6BC260E", 1778, 1413041316, "403253", 1413041316, "403253", "{\n}", "OPAL PL", "OPAL", "PL" ]
        ,
        [ 1779, "B818CED5-1AB1-4C23-9403-4A20ACADBE37", 1779, 1413041316, "403253", 1413041316, "403253", "{\n}", "OPALO LN", "OPALO", "LN" ]
        ,
        [ 1780, "0E95FBC9-420E-400B-A719-E9C7CD694DBE", 1780, 1413041316, "403253", 1413041316, "403253", "{\n}", "OPHIR ALY", "OPHIR", "ALY" ]
        ,
        [ 1781, "3DF7E83B-D99E-465D-8A56-CCD12FBB084F", 1781, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORA WAY", "ORA", "WAY" ]
        ,
        [ 1782, "392B8C59-8535-4832-9138-D17CA2CF12F7", 1782, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORANGE ALY", "ORANGE", "ALY" ]
        ,
        [ 1783, "D4217FCB-374D-4854-B029-A29FEF107173", 1783, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORBEN PL", "ORBEN", "PL" ]
        ,
        [ 1784, "B69E0D61-BBBA-4E70-84A1-2DD8CD18DDBD", 1784, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORD CT", "ORD", "CT" ]
        ,
        [ 1785, "A2090F94-3B86-498A-88A2-1C3095713F3D", 1785, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORD ST", "ORD", "ST" ]
        ,
        [ 1786, "4B201DAE-F461-4C25-9E61-E3AC37697DAF", 1786, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORDWAY ST", "ORDWAY", "ST" ]
        ,
        [ 1787, "C5BC1AD2-C685-479D-A962-E37C2977ADFC", 1787, 1413041316, "403253", 1413041316, "403253", "{\n}", "OREILLY AVE", "OREILLY", "AVE" ]
        ,
        [ 1788, "1CF291EC-2C81-4F8F-B626-D449F475748C", 1788, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORIOLE WAY", "ORIOLE", "WAY" ]
        ,
        [ 1789, "26A19F82-0CB9-4946-B4A7-83EB2750A919", 1789, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORIZABA AVE", "ORIZABA", "AVE" ]
        ,
        [ 1790, "528F0861-C073-4C88-932F-554E4DBFAF87", 1790, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORSI CIR", "ORSI", "CIR" ]
        ,
        [ 1791, "75E9C4AE-B3B2-48EA-AF6F-2003BFFCF125", 1791, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORTEGA ST", "ORTEGA", "ST" ]
        ,
        [ 1792, "2BAC13EF-E9B7-4B5D-B210-D20FF24161F1", 1792, 1413041316, "403253", 1413041316, "403253", "{\n}", "ORTEGA WAY", "ORTEGA", "WAY" ]
        ,
        [ 1793, "1787224D-A1D4-40CA-9FC8-27BB96B1BB1B", 1793, 1413041316, "403253", 1413041316, "403253", "{\n}", "OSAGE ALY", "OSAGE", "ALY" ]
        ,
        [ 1794, "FCBB8165-288C-4FAA-B584-69FB09BBF9D4", 1794, 1413041316, "403253", 1413041316, "403253", "{\n}", "OSCAR ALY", "OSCAR", "ALY" ]
        ,
        [ 1795, "919DF56A-C961-4165-833E-AE08EA94EE0A", 1795, 1413041316, "403253", 1413041316, "403253", "{\n}", "OSCEOLA LN", "OSCEOLA", "LN" ]
        ,
        [ 1796, "19791838-6943-442D-9F38-3C5A4CECBDF9", 1796, 1413041316, "403253", 1413041316, "403253", "{\n}", "OSGOOD PL", "OSGOOD", "PL" ]
        ,
        [ 1797, "A34E25D0-4181-480D-8DA9-0BD7CBA919B0", 1797, 1413041316, "403253", 1413041316, "403253", "{\n}", "OSHAUGHNESSY BLVD", "OSHAUGHNESSY", "BLVD" ]
        ,
        [ 1798, "8040F492-82F4-48F8-8DD1-3831D9812BAD", 1798, 1413041316, "403253", 1413041316, "403253", "{\n}", "OTEGA AVE", "OTEGA", "AVE" ]
        ,
        [ 1799, "7567A8D0-ECCE-4A1B-B5F2-B835AFBB7A52", 1799, 1413041316, "403253", 1413041316, "403253", "{\n}", "OTIS ST", "OTIS", "ST" ]
        ,
        [ 1800, "69557AC1-5D93-4647-9F41-186742C8BC88", 1800, 1413041316, "403253", 1413041316, "403253", "{\n}", "OTSEGO AVE", "OTSEGO", "AVE" ]
        ,
        [ 1801, "66AA31A7-BE65-4389-A860-6990826C26E1", 1801, 1413041316, "403253", 1413041316, "403253", "{\n}", "OTTAWA AVE", "OTTAWA", "AVE" ]
        ,
        [ 1802, "B5A16B09-726D-4503-B460-F7420A43FF5A", 1802, 1413041316, "403253", 1413041316, "403253", "{\n}", "OTTER COVE TER", "OTTER COVE", "TER" ]
        ,
        [ 1803, "AC2DB983-228F-4B01-8D4E-F9C81A3F93C5", 1803, 1413041316, "403253", 1413041316, "403253", "{\n}", "OVERLOOK DR", "OVERLOOK", "DR" ]
        ,
        [ 1804, "160F0616-ECB9-4367-9C5A-55A16DB43EDC", 1804, 1413041316, "403253", 1413041316, "403253", "{\n}", "OWEN ST", "OWEN", "ST" ]
        ,
        [ 1805, "244B37BA-476B-4A78-A271-8FF789DA7733", 1805, 1413041316, "403253", 1413041316, "403253", "{\n}", "OWENS ST", "OWENS", "ST" ]
        ,
        [ 1806, "28475BC3-BDA8-4B34-BD59-F555F1A70BBC", 1806, 1413041316, "403253", 1413041316, "403253", "{\n}", "OXFORD ST", "OXFORD", "ST" ]
        ,
        [ 1807, "CAC3FF6E-AB8F-4E3D-8BED-D399A3A44B26", 1807, 1413041316, "403253", 1413041316, "403253", "{\n}", "OZBOURN CT", "OZBOURN", "CT" ]
        ,
        [ 1808, "5EA4B3DF-0E02-44A3-A3C5-D4076394381F", 1808, 1413041316, "403253", 1413041316, "403253", "{\n}", "PACHECO ST", "PACHECO", "ST" ]
        ,
        [ 1809, "C072C0AD-19F0-41D9-8B79-F903B499F491", 1809, 1413041316, "403253", 1413041316, "403253", "{\n}", "PACIFIC AVE", "PACIFIC", "AVE" ]
        ,
        [ 1810, "87E682E9-3F2B-443F-9D04-3C5CC60735EA", 1810, 1413041316, "403253", 1413041316, "403253", "{\n}", "PAGE ST", "PAGE", "ST" ]
        ,
        [ 1811, "64E81B91-E4AF-49D9-8248-986E7D7899FA", 1811, 1413041316, "403253", 1413041316, "403253", "{\n}", "PAGODA PL", "PAGODA", "PL" ]
        ,
        [ 1812, "585D08CA-3CEA-4DCC-9658-CA90C12F81BE", 1812, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALACE OF FINE ARTS", "PALACE OF FINE ARTS", null ]
        ,
        [ 1813, "E4CACCCE-A00A-4EAA-893E-4D18829039BD", 1813, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALM AVE", "PALM", "AVE" ]
        ,
        [ 1814, "3E6D1B92-C538-41FC-B679-7FDBA2DEF14E", 1814, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALMETTO AVE", "PALMETTO", "AVE" ]
        ,
        [ 1815, "71458C9B-1646-4CAF-8CD5-6ED129A7FD73", 1815, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALO ALTO AVE", "PALO ALTO", "AVE" ]
        ,
        [ 1816, "FF14DAD0-82C9-43E6-BA8B-3D0F3C7060C2", 1816, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALOMA AVE", "PALOMA", "AVE" ]
        ,
        [ 1817, "9F03E188-833C-4D81-9A0C-62BB7F3BCB68", 1817, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALOS PL", "PALOS", "PL" ]
        ,
        [ 1818, "61B1BFCF-75EB-4078-8C21-CA3797D71201", 1818, 1413041316, "403253", 1413041316, "403253", "{\n}", "PALOU AVE", "PALOU", "AVE" ]
        ,
        [ 1819, "212B1912-DA04-4F80-A64C-5E600259FCE3", 1819, 1413041316, "403253", 1413041316, "403253", "{\n}", "PANAMA ST", "PANAMA", "ST" ]
        ,
        [ 1820, "2AEBF71C-4BE2-49F4-B91F-29E03C32A116", 1820, 1413041316, "403253", 1413041316, "403253", "{\n}", "PANORAMA DR", "PANORAMA", "DR" ]
        ,
        [ 1821, "6730D252-1BB3-4F35-8024-4EA0AA1998AC", 1821, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARADISE AVE", "PARADISE", "AVE" ]
        ,
        [ 1822, "BCC22B82-0C78-469A-9FA7-D0FBAC06E79F", 1822, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARAISO PL", "PARAISO", "PL" ]
        ,
        [ 1823, "CAB0F1FC-FF81-4499-808C-5727E5C8390B", 1823, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARAMOUNT TER", "PARAMOUNT", "TER" ]
        ,
        [ 1824, "3EEEFC6D-C6DD-454C-AF4C-F24BC7B82174", 1824, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARIS ST", "PARIS", "ST" ]
        ,
        [ 1825, "393C19BE-E448-4A57-A8F4-44D948F1B3E6", 1825, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARK BLVD", "PARK", "BLVD" ]
        ,
        [ 1826, "95519DBF-AAFC-47AA-A714-AFAAAE954A72", 1826, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARK ST", "PARK", "ST" ]
        ,
        [ 1827, "F852D870-6A4C-49B8-B894-0C5C86ABB17E", 1827, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARK HILL AVE", "PARK HILL", "AVE" ]
        ,
        [ 1828, "1407CCA6-8E4E-46D6-AD01-071779B22CDA", 1828, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARK PRESIDIO BLVD", "PARK PRESIDIO", "BLVD" ]
        ,
        [ 1829, "F296D743-905E-45EA-8F63-B2955B1ECDB9", 1829, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARK PRESIDIO BYPASS DR", "PARK PRESIDIO BYPASS", "DR" ]
        ,
        [ 1830, "AD6F406F-9CDC-4F18-9553-07580CB3C25D", 1830, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARKER AVE", "PARKER", "AVE" ]
        ,
        [ 1831, "E2E70B73-7498-47A6-A3BE-19F4DD292BE6", 1831, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARKHURST ALY", "PARKHURST", "ALY" ]
        ,
        [ 1832, "F5F21837-BA4B-4BF4-9AEC-C0A3B1B0A029", 1832, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARKRIDGE DR", "PARKRIDGE", "DR" ]
        ,
        [ 1833, "4E88B8B1-8A96-4C3C-9265-E4D223D56BD0", 1833, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARNASSUS AVE", "PARNASSUS", "AVE" ]
        ,
        [ 1834, "DA906B98-BA13-40F1-A1BD-04283AE0B74B", 1834, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARQUE DR", "PARQUE", "DR" ]
        ,
        [ 1835, "762EC69E-4A40-4F62-B3E5-F7D7495A1E26", 1835, 1413041316, "403253", 1413041316, "403253", "{\n}", "PARSONS ST", "PARSONS", "ST" ]
        ,
        [ 1836, "316F54A5-9DF5-41CD-A7BA-FCB699622AB0", 1836, 1413041316, "403253", 1413041316, "403253", "{\n}", "PASADENA ST", "PASADENA", "ST" ]
        ,
        [ 1837, "56352034-0474-4ECB-B9DF-EEE38630B30C", 1837, 1413041316, "403253", 1413041316, "403253", "{\n}", "PATTEN RD", "PATTEN", "RD" ]
        ,
        [ 1838, "41ABCCDF-D4AE-44EB-A2F7-9B957F2BA025", 1838, 1413041316, "403253", 1413041316, "403253", "{\n}", "PATTERSON ST", "PATTERSON", "ST" ]
        ,
        [ 1839, "18DCECD9-8DF5-41F5-BBF5-E99D5FEF0891", 1839, 1413041316, "403253", 1413041316, "403253", "{\n}", "PATTON CT", "PATTON", "CT" ]
        ,
        [ 1840, "9B1CDA50-9165-42C2-B713-988A869029C0", 1840, 1413041316, "403253", 1413041316, "403253", "{\n}", "PATTON ST", "PATTON", "ST" ]
        ,
        [ 1841, "711C24D8-548C-49FB-9605-C729A628C12E", 1841, 1413041316, "403253", 1413041316, "403253", "{\n}", "PAUL AVE", "PAUL", "AVE" ]
        ,
        [ 1842, "99A4D097-D74E-481D-8C4F-024847087CC7", 1842, 1413041316, "403253", 1413041316, "403253", "{\n}", "PAULDING ST", "PAULDING", "ST" ]
        ,
        [ 1843, "E7E48034-7040-465D-9A74-7BC51E9B7EA7", 1843, 1413041316, "403253", 1413041316, "403253", "{\n}", "PAYSON ST", "PAYSON", "ST" ]
        ,
        [ 1844, "6BF3A399-A027-403B-AA50-17AD36ADA449", 1844, 1413041316, "403253", 1413041316, "403253", "{\n}", "PEABODY ST", "PEABODY", "ST" ]
        ,
        [ 1845, "40D7741B-195D-4AA8-8A5C-82618B264615", 1845, 1413041316, "403253", 1413041316, "403253", "{\n}", "PEARL ST", "PEARL", "ST" ]
        ,
        [ 1846, "A589F312-3FFB-449D-A2B9-F343591D0ECC", 1846, 1413041316, "403253", 1413041316, "403253", "{\n}", "PEEK LN", "PEEK", "LN" ]
        ,
        [ 1847, "22532F44-C534-4720-B76B-819FEB9BF14B", 1847, 1413041316, "403253", 1413041316, "403253", "{\n}", "PELICAN COVE TER", "PELICAN COVE", "TER" ]
        ,
        [ 1848, "0F78896A-02EB-44BC-ACC1-130313132636", 1848, 1413041316, "403253", 1413041316, "403253", "{\n}", "PELTON PL", "PELTON", "PL" ]
        ,
        [ 1849, "DC5CC5A4-984D-4986-BF6D-915AD1701475", 1849, 1413041316, "403253", 1413041316, "403253", "{\n}", "PEMBERTON PL", "PEMBERTON", "PL" ]
        ,
        [ 1850, "13A0C9A4-66DC-4EC4-A4A5-E0AAA0406229", 1850, 1413041316, "403253", 1413041316, "403253", "{\n}", "PENA ST", "PENA", "ST" ]
        ,
        [ 1851, "D038370F-61C8-41B2-8CEA-3FFE440A3416", 1851, 1413041316, "403253", 1413041316, "403253", "{\n}", "PENINSULA AVE", "PENINSULA", "AVE" ]
        ,
        [ 1852, "09BFDAA6-BE45-45C7-B7E5-4830E00C14AC", 1852, 1413041316, "403253", 1413041316, "403253", "{\n}", "PENNINGTON ST", "PENNINGTON", "ST" ]
        ,
        [ 1853, "1AC369F4-924B-46BA-9EDE-1A29AE792D3A", 1853, 1413041316, "403253", 1413041316, "403253", "{\n}", "PENNSYLVANIA AVE", "PENNSYLVANIA", "AVE" ]
        ,
        [ 1854, "3E5B2500-4B2B-4241-BCEA-621BF60E55D4", 1854, 1413041316, "403253", 1413041316, "403253", "{\n}", "PENNY LN", "PENNY", "LN" ]
        ,
        [ 1855, "A5302F96-CCB4-4346-9FE5-04711DF52C58", 1855, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERALTA AVE", "PERALTA", "AVE" ]
        ,
        [ 1856, "F7C91F98-52E9-4DD7-B230-0836D9C5CE1E", 1856, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERASTO AVE", "PERASTO", "AVE" ]
        ,
        [ 1857, "31195914-5658-4E49-81DF-D8E55DC76CDF", 1857, 1413041316, "403253", 1413041316, "403253", "{\n}", "PEREGO TER", "PEREGO", "TER" ]
        ,
        [ 1858, "DA1A8EE3-FD87-48E5-94CE-F7A0729CF26F", 1858, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERIMETER PATH", "PERIMETER", "PATH" ]
        ,
        [ 1859, "5EF1DCFE-39B5-47E9-999B-F75F28E357FC", 1859, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERINE PL", "PERINE", "PL" ]
        ,
        [ 1860, "9C694712-3762-4CE6-A6A1-C784FAD21EC1", 1860, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERRY ST", "PERRY", "ST" ]
        ,
        [ 1861, "8D2B677E-A718-430A-8A99-F209BE6CDF7E", 1861, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERSHING DR", "PERSHING", "DR" ]
        ,
        [ 1862, "85BBA7D5-0BFB-449B-9EFF-5B89D742B580", 1862, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERSIA AVE", "PERSIA", "AVE" ]
        ,
        [ 1863, "3BF5D9C8-8075-4F48-AF4C-A48C6CF09481", 1863, 1413041316, "403253", 1413041316, "403253", "{\n}", "PERU AVE", "PERU", "AVE" ]
        ,
        [ 1864, "AF2DE3C7-158E-4D66-A772-344FF36E25AE", 1864, 1413041316, "403253", 1413041316, "403253", "{\n}", "PETER YORKE WAY", "PETER YORKE", "WAY" ]
        ,
        [ 1865, "786A5F00-EE6F-45E3-A7E8-4FA73A47CAAA", 1865, 1413041316, "403253", 1413041316, "403253", "{\n}", "PETERS AVE", "PETERS", "AVE" ]
        ,
        [ 1866, "0BB8F541-EBCD-4256-A1DD-856788B84195", 1866, 1413041316, "403253", 1413041316, "403253", "{\n}", "PETRARCH PL", "PETRARCH", "PL" ]
        ,
        [ 1867, "DE0127E0-869B-4BD5-AEB0-7DF378F53388", 1867, 1413041316, "403253", 1413041316, "403253", "{\n}", "PFEIFFER ST", "PFEIFFER", "ST" ]
        ,
        [ 1868, "6A41EE21-4737-439D-9100-BA1A12BCEF51", 1868, 1413041316, "403253", 1413041316, "403253", "{\n}", "PHELAN AVE", "PHELAN", "AVE" ]
        ,
        [ 1869, "6AD44AB0-A5E2-45AC-A98A-57BE0FD204A1", 1869, 1413041316, "403253", 1413041316, "403253", "{\n}", "PHELPS ST", "PHELPS", "ST" ]
        ,
        [ 1870, "5252AC47-1907-4EF4-8A57-66F8B0E8F7BB", 1870, 1413041316, "403253", 1413041316, "403253", "{\n}", "PHOENIX TER", "PHOENIX", "TER" ]
        ,
        [ 1871, "5A8D38A2-61BE-4ACF-AC45-4E3B19D37272", 1871, 1413041316, "403253", 1413041316, "403253", "{\n}", "PICO AVE", "PICO", "AVE" ]
        ,
        [ 1872, "DD24EF58-40E7-484E-B0B0-7376851AC434", 1872, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIEDMONT ST", "PIEDMONT", "ST" ]
        ,
        [ 1873, "754A4863-2413-4F95-92F0-7A55D4F0C2E6", 1873, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIERCE ST", "PIERCE", "ST" ]
        ,
        [ 1874, "7636E3EA-05B9-405C-A4D5-AFDBBC330F6A", 1874, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIERPOINT LN", "PIERPOINT", "LN" ]
        ,
        [ 1875, "03E2AA83-8AAA-4F1F-8A99-42065ADAE31F", 1875, 1413041316, "403253", 1413041316, "403253", "{\n}", "PILGRIM AVE", "PILGRIM", "AVE" ]
        ,
        [ 1876, "71308318-09C3-4A81-AC91-E2010FE4F4C2", 1876, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINAR LN", "PINAR", "LN" ]
        ,
        [ 1877, "96010682-E696-45E9-9ECB-534C8B10EBEC", 1877, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINE ST", "PINE", "ST" ]
        ,
        [ 1878, "11E1B744-6198-42D9-84FC-40754D6CBF12", 1878, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINEHURST WAY", "PINEHURST", "WAY" ]
        ,
        [ 1879, "111F0BC4-94DD-4918-BC0A-753EF3A807A6", 1879, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINK ALY", "PINK", "ALY" ]
        ,
        [ 1880, "651E6D21-3629-4771-94F6-8730FF543226", 1880, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINO ALY", "PINO", "ALY" ]
        ,
        [ 1881, "B8E5AFCE-A3B9-43FA-9070-3F0FA7E83F72", 1881, 1413041316, "403253", 1413041316, "403253", "{\n}", "PINTO AVE", "PINTO", "AVE" ]
        ,
        [ 1882, "35CFBCB7-BACE-4A2C-BCC0-F64F3837AFEB", 1882, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIOCHE ST", "PIOCHE", "ST" ]
        ,
        [ 1883, "A01F17FF-EC6D-4AF3-BCC8-E88CD0EB3D32", 1883, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIPER LOOP", "PIPER", "LOOP" ]
        ,
        [ 1884, "9A2D11EE-F6FD-4AF1-AF87-198BECC381BE", 1884, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIXLEY ST", "PIXLEY", "ST" ]
        ,
        [ 1885, "77D7B20F-7CE1-4B8D-8DEE-962C58CE9FE2", 1885, 1413041316, "403253", 1413041316, "403253", "{\n}", "PIZARRO WAY", "PIZARRO", "WAY" ]
        ,
        [ 1886, "70544C09-0659-460A-BC28-0F7676676E28", 1886, 1413041316, "403253", 1413041316, "403253", "{\n}", "PLAZA ST", "PLAZA", "ST" ]
        ,
        [ 1887, "9AF712C0-7A39-4C02-B332-86F36C240C69", 1887, 1413041316, "403253", 1413041316, "403253", "{\n}", "PLEASANT ST", "PLEASANT", "ST" ]
        ,
        [ 1888, "597402AB-ECF8-4B26-AAAE-CC25319E749F", 1888, 1413041316, "403253", 1413041316, "403253", "{\n}", "PLUM ST", "PLUM", "ST" ]
        ,
        [ 1889, "0F7B7036-58DA-476F-9A4A-E690AB76253C", 1889, 1413041316, "403253", 1413041316, "403253", "{\n}", "PLYMOUTH AVE", "PLYMOUTH", "AVE" ]
        ,
        [ 1890, "C6E59437-3B37-4F82-9912-6DF27D2A5EB6", 1890, 1413041316, "403253", 1413041316, "403253", "{\n}", "POINT LOBOS AVE", "POINT LOBOS", "AVE" ]
        ,
        [ 1891, "B4668006-EF54-47B6-B7E7-D428A40AA872", 1891, 1413041316, "403253", 1413041316, "403253", "{\n}", "POLARIS WAY", "POLARIS", "WAY" ]
        ,
        [ 1892, "0735A1C9-A688-4BD4-BBA1-A5AF0E39042F", 1892, 1413041316, "403253", 1413041316, "403253", "{\n}", "POLK ST", "POLK", "ST" ]
        ,
        [ 1893, "8CBC6F86-5B4A-43C6-AFD4-6DB885A991FC", 1893, 1413041316, "403253", 1413041316, "403253", "{\n}", "POLLARD PL", "POLLARD", "PL" ]
        ,
        [ 1894, "20F6ED85-0215-4D2F-8104-AD127C678BAC", 1894, 1413041316, "403253", 1413041316, "403253", "{\n}", "POLLOCK ST", "POLLOCK", "ST" ]
        ,
        [ 1895, "CFEC6426-2A39-4AE9-9183-1F163174F686", 1895, 1413041316, "403253", 1413041316, "403253", "{\n}", "POMONA ST", "POMONA", "ST" ]
        ,
        [ 1896, "37C61A9C-285A-4861-B3DC-122CF202B86B", 1896, 1413041316, "403253", 1413041316, "403253", "{\n}", "POND ST", "POND", "ST" ]
        ,
        [ 1897, "6ABD0B08-D53F-47B2-8F10-48B4C6AD0615", 1897, 1413041316, "403253", 1413041316, "403253", "{\n}", "PONTIAC ST", "PONTIAC", "ST" ]
        ,
        [ 1898, "9BC9D099-94C4-473B-867A-BD59CDE50F25", 1898, 1413041316, "403253", 1413041316, "403253", "{\n}", "POPE CT", "POPE", "CT" ]
        ,
        [ 1899, "67961AC9-43B9-4308-BB09-8EE8B62682AD", 1899, 1413041316, "403253", 1413041316, "403253", "{\n}", "POPE RD", "POPE", "RD" ]
        ,
        [ 1900, "9C53B39A-9D6E-49AC-A809-0B4ED34B2C03", 1900, 1413041316, "403253", 1413041316, "403253", "{\n}", "POPE ST", "POPE", "ST" ]
        ,
        [ 1901, "EB65DB40-6601-4C0B-B198-E32E356691C9", 1901, 1413041316, "403253", 1413041316, "403253", "{\n}", "POPLAR ST", "POPLAR", "ST" ]
        ,
        [ 1902, "0B024C86-09B0-43AF-B6F7-76D6BA3C1B8C", 1902, 1413041316, "403253", 1413041316, "403253", "{\n}", "POPPY LN", "POPPY", "LN" ]
        ,
        [ 1903, "ADD6728E-3C4F-4A2F-BFFB-1F7342BB25ED", 1903, 1413041316, "403253", 1413041316, "403253", "{\n}", "PORTAL DR", "PORTAL", "DR" ]
        ,
        [ 1904, "418B3C0D-7941-4F4F-B68E-219EE5FC5B19", 1904, 1413041316, "403253", 1413041316, "403253", "{\n}", "PORTAL PATH", "PORTAL", "PATH" ]
        ,
        [ 1905, "41AAA5F9-0364-40EB-97E3-DB324F0CD0AB", 1905, 1413041316, "403253", 1413041316, "403253", "{\n}", "PORTER ST", "PORTER", "ST" ]
        ,
        [ 1906, "A5798A11-AE0F-4DDA-88E6-B9EF7F6C1578", 1906, 1413041316, "403253", 1413041316, "403253", "{\n}", "PORTOLA DR", "PORTOLA", "DR" ]
        ,
        [ 1907, "0883BFA2-6756-4986-B119-DCFADA3C3048", 1907, 1413041316, "403253", 1413041316, "403253", "{\n}", "PORTOLA ST", "PORTOLA", "ST" ]
        ,
        [ 1908, "44452B75-87BC-4970-AE7C-FB17C0B2AF61", 1908, 1413041316, "403253", 1413041316, "403253", "{\n}", "POST ST", "POST", "ST" ]
        ,
        [ 1909, "5FC504DC-B142-459D-BCDD-B5C6F0CC1A66", 1909, 1413041316, "403253", 1413041316, "403253", "{\n}", "POTOMAC ST", "POTOMAC", "ST" ]
        ,
        [ 1910, "3F270610-B6C4-43BF-B85A-569832B4BC97", 1910, 1413041316, "403253", 1413041316, "403253", "{\n}", "POTRERO AVE", "POTRERO", "AVE" ]
        ,
        [ 1911, "B435019E-D9D2-4E70-A60B-DF70C5114EC9", 1911, 1413041316, "403253", 1413041316, "403253", "{\n}", "POWELL ST", "POWELL", "ST" ]
        ,
        [ 1912, "EC8A637B-7B22-48B6-81C9-AEB7123329DE", 1912, 1413041316, "403253", 1413041316, "403253", "{\n}", "POWERS AVE", "POWERS", "AVE" ]
        ,
        [ 1913, "76B55B62-6EC3-4D03-844E-4C199D86DAF5", 1913, 1413041316, "403253", 1413041316, "403253", "{\n}", "POWHATTAN AVE", "POWHATTAN", "AVE" ]
        ,
        [ 1914, "1645C647-9F6B-4F90-94B4-2B5E41CD51CB", 1914, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRADO ST", "PRADO", "ST" ]
        ,
        [ 1915, "9B3C914A-C10B-405D-95A8-6EA8CCB49170", 1915, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRAGUE ST", "PRAGUE", "ST" ]
        ,
        [ 1916, "18F34147-C437-4080-9E88-38BC8CE7D458", 1916, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRATT PL", "PRATT", "PL" ]
        ,
        [ 1917, "E6C55159-3E78-40EF-97EC-4850010F9DC8", 1917, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRECITA AVE", "PRECITA", "AVE" ]
        ,
        [ 1918, "51BCD40B-4507-4150-BFD3-C5AAA4DE7116", 1918, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRENTISS ST", "PRENTISS", "ST" ]
        ,
        [ 1919, "29B66588-515C-4688-8547-FD46E7F0B47A", 1919, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRESCOTT CT", "PRESCOTT", "CT" ]
        ,
        [ 1920, "64D62D4E-0342-40D7-8A9B-7B7CF32FC258", 1920, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRESIDIO AVE", "PRESIDIO", "AVE" ]
        ,
        [ 1921, "B615C410-FB5B-46C5-8EA0-0B290F29DD7B", 1921, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRESIDIO BLVD", "PRESIDIO", "BLVD" ]
        ,
        [ 1922, "F06CDC28-5DFD-4C50-9941-7D499B558129", 1922, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRESIDIO TER", "PRESIDIO", "TER" ]
        ,
        [ 1923, "155A6294-C8EE-429D-A1FD-C8A8BE1178A0", 1923, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRETOR WAY", "PRETOR", "WAY" ]
        ,
        [ 1924, "87B3CBB4-7E60-4CD3-8D40-6722CFDF37B7", 1924, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRIEST ST", "PRIEST", "ST" ]
        ,
        [ 1925, "9E2FB10F-6047-4904-81C0-53C19CB1D236", 1925, 1413041316, "403253", 1413041316, "403253", "{\n}", "PRINCETON ST", "PRINCETON", "ST" ]
        ,
        [ 1926, "316590D0-379C-4B77-9F9C-C60EF91EF819", 1926, 1413041316, "403253", 1413041316, "403253", "{\n}", "PROGRESS ST", "PROGRESS", "ST" ]
        ,
        [ 1927, "C9EDE9F7-FB32-4546-97CE-938AEC235FC8", 1927, 1413041316, "403253", 1413041316, "403253", "{\n}", "PROSPECT AVE", "PROSPECT", "AVE" ]
        ,
        [ 1928, "845DEA34-0CD9-4372-9E7D-418BFF05DF93", 1928, 1413041316, "403253", 1413041316, "403253", "{\n}", "PROSPER ST", "PROSPER", "ST" ]
        ,
        [ 1929, "69B69DC8-1412-408F-839F-1964FF0E5DFC", 1929, 1413041316, "403253", 1413041316, "403253", "{\n}", "PUBLIC PARK", "PUBLIC", "PARK" ]
        ,
        [ 1930, "EBBEC078-3612-48DB-AB38-5ECC08544E17", 1930, 1413041316, "403253", 1413041316, "403253", "{\n}", "PUEBLO ST", "PUEBLO", "ST" ]
        ,
        [ 1931, "B5FEC7CA-4EE7-4CAE-BAB4-523C3D28F8E4", 1931, 1413041316, "403253", 1413041316, "403253", "{\n}", "PULASKI AVE", "PULASKI", "AVE" ]
        ,
        [ 1932, "F09B5A5C-4854-4D72-9194-05ECC3544E94", 1932, 1413041316, "403253", 1413041316, "403253", "{\n}", "PUTNAM ST", "PUTNAM", "ST" ]
        ,
        [ 1933, "C1DBF25B-F7C2-444B-B7FF-7276577AE07F", 1933, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUANE ST", "QUANE", "ST" ]
        ,
        [ 1934, "DC3BAF07-4907-47A4-9B69-202A347DCC2D", 1934, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUARRY RD", "QUARRY", "RD" ]
        ,
        [ 1935, "099B9235-F171-447D-8B9E-7C8FC94AFE34", 1935, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUARTZ WAY", "QUARTZ", "WAY" ]
        ,
        [ 1936, "C952EC60-A4E0-4F49-A4A9-0024D6FBF071", 1936, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUEBEC AVE", "QUEBEC", "AVE" ]
        ,
        [ 1937, "81BCA652-A9FE-40B4-B745-469314BCE2AE", 1937, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUESADA AVE", "QUESADA", "AVE" ]
        ,
        [ 1938, "42A98D03-5CA0-4677-8944-C9079A7B2B2A", 1938, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUICKSTEP LN", "QUICKSTEP", "LN" ]
        ,
        [ 1939, "AFDD573C-BBA4-4799-B863-E2EEB11AFDF2", 1939, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUINCY ST", "QUINCY", "ST" ]
        ,
        [ 1940, "6974E4C3-3966-44F2-AE25-4BFE07891782", 1940, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUINT ST", "QUINT", "ST" ]
        ,
        [ 1941, "884E4012-FF53-42C8-83A4-4520F9A99481", 1941, 1413041316, "403253", 1413041316, "403253", "{\n}", "QUINTARA ST", "QUINTARA", "ST" ]
        ,
        [ 1942, "C2D3E9A6-1759-4154-A60A-EF27D6B79390", 1942, 1413041316, "403253", 1413041316, "403253", "{\n}", "R ST", "R", "ST" ]
        ,
        [ 1943, "2BA359F5-21E2-487E-8AE6-7A2B22BDA889", 1943, 1413041316, "403253", 1413041316, "403253", "{\n}", "RACCOON DR", "RACCOON", "DR" ]
        ,
        [ 1944, "5A1332CD-8B3C-4C59-BD8C-A35493F396C7", 1944, 1413041316, "403253", 1413041316, "403253", "{\n}", "RACINE LN", "RACINE", "LN" ]
        ,
        [ 1945, "616ADEA9-DA4F-4856-8C69-52608C597F46", 1945, 1413041316, "403253", 1413041316, "403253", "{\n}", "RADIO TER", "RADIO", "TER" ]
        ,
        [ 1946, "C06EE7AD-FDF2-4F35-97A1-F659FC005A88", 1946, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAE AVE", "RAE", "AVE" ]
        ,
        [ 1947, "44ECA9D1-11D2-4FB4-9314-410277C31866", 1947, 1413041316, "403253", 1413041316, "403253", "{\n}", "RALEIGH ST", "RALEIGH", "ST" ]
        ,
        [ 1948, "CA249024-645F-4520-88BF-AB3E1907566F", 1948, 1413041316, "403253", 1413041316, "403253", "{\n}", "RALSTON AVE", "RALSTON", "AVE" ]
        ,
        [ 1949, "F0060659-FCB6-4E26-89A0-7A4DAECA481F", 1949, 1413041316, "403253", 1413041316, "403253", "{\n}", "RALSTON ST", "RALSTON", "ST" ]
        ,
        [ 1950, "653C5555-2353-4F55-AA4B-3533246FEF4A", 1950, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAMONA AVE", "RAMONA", "AVE" ]
        ,
        [ 1951, "8A8CE6C1-0121-4099-A1B2-2B76A9E014AA", 1951, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAMSEL CT", "RAMSEL", "CT" ]
        ,
        [ 1952, "1B8DED8B-8386-4C26-B5EE-ABAAEC1C05CB", 1952, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAMSELL ST", "RAMSELL", "ST" ]
        ,
        [ 1953, "241305A2-777D-4CC2-B48C-959404105801", 1953, 1413041316, "403253", 1413041316, "403253", "{\n}", "RANDALL ST", "RANDALL", "ST" ]
        ,
        [ 1954, "C2A3E086-6A5B-4475-A005-C7B09FF671A0", 1954, 1413041316, "403253", 1413041316, "403253", "{\n}", "RANDOLPH ST", "RANDOLPH", "ST" ]
        ,
        [ 1955, "CFE65AA1-A62B-497D-8918-0275DB09F42D", 1955, 1413041316, "403253", 1413041316, "403253", "{\n}", "RANKIN ST", "RANKIN", "ST" ]
        ,
        [ 1956, "98C71D4B-0E4C-4DCE-A62A-28F864927EAB", 1956, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAUSCH ST", "RAUSCH", "ST" ]
        ,
        [ 1957, "EAECD3B7-6D8E-46A6-A1BD-DAD711CB237D", 1957, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAVENWOOD DR", "RAVENWOOD", "DR" ]
        ,
        [ 1958, "524B3887-5297-4FF2-87DF-08F592EC0E08", 1958, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAWLES ST", "RAWLES", "ST" ]
        ,
        [ 1959, "121882CE-1DEC-41EB-9807-E8A9F60F4818", 1959, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAYBURN ST", "RAYBURN", "ST" ]
        ,
        [ 1960, "34DDCB68-3B01-4154-9DE2-2ABCFEC0C798", 1960, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAYCLIFF TER", "RAYCLIFF", "TER" ]
        ,
        [ 1961, "255E16A0-8CCF-440D-ABC7-9D48390681AF", 1961, 1413041316, "403253", 1413041316, "403253", "{\n}", "RAYMOND AVE", "RAYMOND", "AVE" ]
        ,
        [ 1962, "3E3DD79F-7E87-49F0-84E5-5B8085F86001", 1962, 1413041316, "403253", 1413041316, "403253", "{\n}", "REARDON RD", "REARDON", "RD" ]
        ,
        [ 1963, "06DF8159-A760-4CAE-AFA6-AE543B04FEBF", 1963, 1413041316, "403253", 1413041316, "403253", "{\n}", "REBECCA LN", "REBECCA", "LN" ]
        ,
        [ 1964, "15763699-9236-4ABA-B7A0-5BAD5E226848", 1964, 1413041316, "403253", 1413041316, "403253", "{\n}", "RECYCLE RD", "RECYCLE", "RD" ]
        ,
        [ 1965, "8CCD7284-2072-45C4-A03E-13D343A91E00", 1965, 1413041316, "403253", 1413041316, "403253", "{\n}", "RECYCLING CENTER ACCESS RD", "RECYCLING CENTER ACCESS", "RD" ]
        ,
        [ 1966, "156C6429-966E-4F4A-B45F-E815E1672EA6", 1966, 1413041316, "403253", 1413041316, "403253", "{\n}", "RED LEAF CT", "RED LEAF", "CT" ]
        ,
        [ 1967, "D0CD2101-4652-4407-9168-96452438D6B8", 1967, 1413041316, "403253", 1413041316, "403253", "{\n}", "RED ROCK WAY", "RED ROCK", "WAY" ]
        ,
        [ 1968, "1FEF656D-8BD3-4802-B2C2-036B1C283649", 1968, 1413041316, "403253", 1413041316, "403253", "{\n}", "REDDY ST", "REDDY", "ST" ]
        ,
        [ 1969, "5A0DAAFD-4B31-4521-9E02-DF9D9A7F33A4", 1969, 1413041316, "403253", 1413041316, "403253", "{\n}", "REDFIELD ALY", "REDFIELD", "ALY" ]
        ,
        [ 1970, "C42F46C9-F238-474A-8141-E81C9342EE8E", 1970, 1413041316, "403253", 1413041316, "403253", "{\n}", "REDONDO ST", "REDONDO", "ST" ]
        ,
        [ 1971, "D889846B-B109-44C8-BF21-ECDDB3235012", 1971, 1413041316, "403253", 1413041316, "403253", "{\n}", "REDWOOD ST", "REDWOOD", "ST" ]
        ,
        [ 1972, "59AF7D50-2ABE-441B-900E-A26F58318678", 1972, 1413041316, "403253", 1413041316, "403253", "{\n}", "REED ST", "REED", "ST" ]
        ,
        [ 1973, "DD3093D1-F83C-4ADC-A6CC-FCD2D54ACF73", 1973, 1413041316, "403253", 1413041316, "403253", "{\n}", "REEVES CT", "REEVES", "CT" ]
        ,
        [ 1974, "678F53E1-0B60-4236-B672-DF56177D2F05", 1974, 1413041316, "403253", 1413041316, "403253", "{\n}", "REGENT ST", "REGENT", "ST" ]
        ,
        [ 1975, "F930A973-CF1D-498D-BE5B-20FC0976D3DC", 1975, 1413041316, "403253", 1413041316, "403253", "{\n}", "RENO PL", "RENO", "PL" ]
        ,
        [ 1976, "DD80DB04-5F6E-4DAC-822A-CB6D2A3BF24D", 1976, 1413041316, "403253", 1413041316, "403253", "{\n}", "REPOSA WAY", "REPOSA", "WAY" ]
        ,
        [ 1977, "6BDDD636-9987-43B5-8279-C2AE00EA0B72", 1977, 1413041316, "403253", 1413041316, "403253", "{\n}", "RESERVOIR ST", "RESERVOIR", "ST" ]
        ,
        [ 1978, "1544321E-3D1B-4B9A-A405-F901CADD420B", 1978, 1413041316, "403253", 1413041316, "403253", "{\n}", "RESTANI STWY", "RESTANI", "STWY" ]
        ,
        [ 1979, "677F94BD-02EC-4DB3-94BA-CB33FC851722", 1979, 1413041316, "403253", 1413041316, "403253", "{\n}", "RESTANI WAY", "RESTANI", "WAY" ]
        ,
        [ 1980, "0BD9141E-AEE0-4454-B66B-FA11ECBBC727", 1980, 1413041316, "403253", 1413041316, "403253", "{\n}", "RETIRO WAY", "RETIRO", "WAY" ]
        ,
        [ 1981, "BFF9C471-DBAE-4D46-83B0-44C774527C8F", 1981, 1413041316, "403253", 1413041316, "403253", "{\n}", "REUEL CT", "REUEL", "CT" ]
        ,
        [ 1982, "C191A4AD-EAD9-4C8D-97A5-D52931DF2DD5", 1982, 1413041316, "403253", 1413041316, "403253", "{\n}", "REVERE AVE", "REVERE", "AVE" ]
        ,
        [ 1983, "2D8FC46F-AF32-4D12-8126-3C3AA73677A7", 1983, 1413041316, "403253", 1413041316, "403253", "{\n}", "REX AVE", "REX", "AVE" ]
        ,
        [ 1984, "5DEE8D4B-9AB0-4A97-BC6B-51406E7F8AAE", 1984, 1413041316, "403253", 1413041316, "403253", "{\n}", "REY ST", "REY", "ST" ]
        ,
        [ 1985, "E7F8181D-3BAF-48B4-B0DD-73896B05CBAB", 1985, 1413041316, "403253", 1413041316, "403253", "{\n}", "RHINE ST", "RHINE", "ST" ]
        ,
        [ 1986, "7C90F544-DD4D-414B-9BB5-78B5DE30F2EC", 1986, 1413041316, "403253", 1413041316, "403253", "{\n}", "RHODE ISLAND ST", "RHODE ISLAND", "ST" ]
        ,
        [ 1987, "67CB07CA-4B65-4CEC-AA01-96EF192FB7FA", 1987, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICE ST", "RICE", "ST" ]
        ,
        [ 1988, "FA65E8DD-CA73-46C6-A52F-C56585CAEC5D", 1988, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICHARD HENRY DANA PL", "RICHARD HENRY DANA", "PL" ]
        ,
        [ 1989, "4D59C7CD-96EA-4A7E-94FF-3D49D5316427", 1989, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICHARDS CIR", "RICHARDS", "CIR" ]
        ,
        [ 1990, "5528F15F-6498-4EEE-9711-C9E411CAEE25", 1990, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICHARDSON AVE", "RICHARDSON", "AVE" ]
        ,
        [ 1991, "D0B566A6-2EEA-4518-87F5-3B28565F5698", 1991, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICHLAND AVE", "RICHLAND", "AVE" ]
        ,
        [ 1992, "8B3AC826-7519-47D7-A84B-9F95A6EAAF3A", 1992, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICHTER AVE", "RICHTER", "AVE" ]
        ,
        [ 1993, "AB441E40-AA3C-4FED-881D-7E8F9F116429", 1993, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICKARD ST", "RICKARD", "ST" ]
        ,
        [ 1994, "C5C0E76C-86F9-4B2D-98C4-5BE9B6D8F440", 1994, 1413041316, "403253", 1413041316, "403253", "{\n}", "RICO WAY", "RICO", "WAY" ]
        ,
        [ 1995, "F28CEFB5-811F-43F7-AD4A-5C8320FA2498", 1995, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIDGE CT", "RIDGE", "CT" ]
        ,
        [ 1996, "9F56B27D-28C9-427B-9481-3EBB9FAF46A6", 1996, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIDGE LN", "RIDGE", "LN" ]
        ,
        [ 1997, "56215E8C-D69F-4FB7-8165-719F8D71A01A", 1997, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIDGEWOOD AVE", "RIDGEWOOD", "AVE" ]
        ,
        [ 1998, "D4EAF6DB-72FD-4BD9-B57B-CF49BD8B40B4", 1998, 1413041316, "403253", 1413041316, "403253", "{\n}", "RILEY AVE", "RILEY", "AVE" ]
        ,
        [ 1999, "048D877E-FD6D-47F4-A653-FC44C2A57D7C", 1999, 1413041316, "403253", 1413041316, "403253", "{\n}", "RINCON ST", "RINCON", "ST" ]
        ,
        [ 2000, "9BE7462C-CA77-4845-A6C5-6A05459E7D3F", 2000, 1413041316, "403253", 1413041316, "403253", "{\n}", "RINGOLD ST", "RINGOLD", "ST" ]
        ,
        [ 2001, "52BD86C3-2FA3-43B6-BC30-80A44EA73306", 2001, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIO CT", "RIO", "CT" ]
        ,
        [ 2002, "A8BA5FA5-CEF4-493B-A102-549702AF0539", 2002, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIO VERDE ST", "RIO VERDE", "ST" ]
        ,
        [ 2003, "C9CF5C88-6717-40D0-87CA-2C9DD440D75A", 2003, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIPLEY ST", "RIPLEY", "ST" ]
        ,
        [ 2004, "77F9E35D-3734-49EF-823D-F7617EDDC4C2", 2004, 1413041316, "403253", 1413041316, "403253", "{\n}", "RITCH ST", "RITCH", "ST" ]
        ,
        [ 2005, "7B2DDD1F-4FB6-49B1-9F4E-1015270A696E", 2005, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIVAS AVE", "RIVAS", "AVE" ]
        ,
        [ 2006, "5BB04CA3-7C8C-400C-8539-5ACA06A02070", 2006, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIVERA ST", "RIVERA", "ST" ]
        ,
        [ 2007, "69785E12-0750-4BC0-9929-04F22D85F877", 2007, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIVERTON DR", "RIVERTON", "DR" ]
        ,
        [ 2008, "0187AB4A-7695-4CBE-88EF-3FF73D7738C9", 2008, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIVOLI ST", "RIVOLI", "ST" ]
        ,
        [ 2009, "2AC40AFE-63D6-4B7D-9045-1AE770FF9FFF", 2009, 1413041316, "403253", 1413041316, "403253", "{\n}", "RIZAL ST", "RIZAL", "ST" ]
        ,
        [ 2010, "99EFBAFD-8A9F-4359-8C96-5CC83767D479", 2010, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROACH ST", "ROACH", "ST" ]
        ,
        [ 2011, "BD0BEFCB-3028-4940-8EEE-0361826CCAB5", 2011, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROANOKE ST", "ROANOKE", "ST" ]
        ,
        [ 2012, "88E0CD2B-90B0-409C-AEA2-2710CD0B6E68", 2012, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBBLEE AVE", "ROBBLEE", "AVE" ]
        ,
        [ 2013, "E2A40DA4-B0A2-4933-9015-BF6B2B31C0F7", 2013, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBERT C LEVY TUNL", "ROBERT C LEVY", "TUNL" ]
        ,
        [ 2014, "50E4E28C-D29F-4142-847F-42B171BD27FE", 2014, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBERT KIRK LN", "ROBERT KIRK", "LN" ]
        ,
        [ 2015, "CFDC5132-9C05-4E1D-B135-249BEB42F59B", 2015, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBINHOOD DR", "ROBINHOOD", "DR" ]
        ,
        [ 2016, "657A66CB-3D02-48DB-BD2F-F82179C58997", 2016, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBINSON DR", "ROBINSON", "DR" ]
        ,
        [ 2017, "BAFD3B7E-B0B7-46FB-A6F6-5E19FCAA37A8", 2017, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROBINSON ST", "ROBINSON", "ST" ]
        ,
        [ 2018, "7B6964A4-6578-4659-8F8A-D81D0C934482", 2018, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCK ALY", "ROCK", "ALY" ]
        ,
        [ 2019, "884B0619-9930-4274-AE46-68E9BB79DF17", 2019, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCKAWAY AVE", "ROCKAWAY", "AVE" ]
        ,
        [ 2020, "1A7FD1D5-1632-43D5-94FE-0EF550B5F71D", 2020, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCKDALE DR", "ROCKDALE", "DR" ]
        ,
        [ 2021, "4EBF6500-82ED-4EF4-87DD-782438399BD2", 2021, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCKLAND ST", "ROCKLAND", "ST" ]
        ,
        [ 2022, "89B6A965-2383-4224-9790-E608D3952E11", 2022, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCKRIDGE DR", "ROCKRIDGE", "DR" ]
        ,
        [ 2023, "092165B8-EB9D-499B-B2CD-3AFF1D4B4E6B", 2023, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROCKWOOD CT", "ROCKWOOD", "CT" ]
        ,
        [ 2024, "889EFD93-3AD7-4797-9D63-9D04F3EBAE7B", 2024, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROD RD", "ROD", "RD" ]
        ,
        [ 2025, "310AF9D5-3448-4B2A-B950-BFEB10CAD182", 2025, 1413041316, "403253", 1413041316, "403253", "{\n}", "RODGERS ST", "RODGERS", "ST" ]
        ,
        [ 2026, "B46524A0-30E6-40D7-9AC7-1F1E06A8951E", 2026, 1413041316, "403253", 1413041316, "403253", "{\n}", "RODRIGUEZ ST", "RODRIGUEZ", "ST" ]
        ,
        [ 2027, "0CF20712-CE67-447A-B661-9EDF87F9B600", 2027, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROEMER WAY", "ROEMER", "WAY" ]
        ,
        [ 2028, "406DECB0-DDE6-4E31-91EC-DCC66B7EC31F", 2028, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROLPH ST", "ROLPH", "ST" ]
        ,
        [ 2029, "6D3780B0-769B-43DB-95C1-5AC02F0D3BDB", 2029, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROMAIN ST", "ROMAIN", "ST" ]
        ,
        [ 2030, "FEFEF0A6-89D4-4986-AC1A-D93CB946F991", 2030, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROME ST", "ROME", "ST" ]
        ,
        [ 2031, "81E180A0-7A45-4599-89A8-FEBFE5DF1E3A", 2031, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROMOLO ST", "ROMOLO", "ST" ]
        ,
        [ 2032, "18823B8A-2D2F-4CF9-A06B-E9B420B26A9A", 2032, 1413041316, "403253", 1413041316, "403253", "{\n}", "RONDEL PL", "RONDEL", "PL" ]
        ,
        [ 2033, "3F3051BA-3535-40A6-942B-30CB9E41FCA7", 2033, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROOSEVELT WAY", "ROOSEVELT", "WAY" ]
        ,
        [ 2034, "A41C5A18-EC44-4E34-BEB5-42FCB750E0C6", 2034, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSA PARKS LN", "ROSA PARKS", "LN" ]
        ,
        [ 2035, "3EAB1EE2-2650-40DE-A2C2-16EBD7BC77E8", 2035, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSCOE ST", "ROSCOE", "ST" ]
        ,
        [ 2036, "7ECA5581-A7E6-41E6-89B7-40CECC10F798", 2036, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSE ST", "ROSE", "ST" ]
        ,
        [ 2037, "6851B2B4-B573-4D49-82A5-2176900187F1", 2037, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSELLA CT", "ROSELLA", "CT" ]
        ,
        [ 2038, "D10E9C08-4970-4066-B580-EFBD4CB7C7A5", 2038, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSELYN TER", "ROSELYN", "TER" ]
        ,
        [ 2039, "CBBCAB77-4EF1-4F98-ACCB-1599C5BFA6A2", 2039, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSEMARY CT", "ROSEMARY", "CT" ]
        ,
        [ 2040, "8A1094F5-2BD4-4D9A-83BC-5BF4E29248A6", 2040, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSEMONT PL", "ROSEMONT", "PL" ]
        ,
        [ 2041, "0A6FF402-6FFC-4BE1-AD9F-CCFCD7BB7FCF", 2041, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSENKRANZ ST", "ROSENKRANZ", "ST" ]
        ,
        [ 2042, "63BD7A97-F601-454C-A352-2153A3232FBD", 2042, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSEWOOD DR", "ROSEWOOD", "DR" ]
        ,
        [ 2043, "3438CA0E-85BE-4166-963A-8195055ECF98", 2043, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSIE LEE LN", "ROSIE LEE", "LN" ]
        ,
        [ 2044, "DB4A9EDC-0C6B-438F-88ED-30E367CB83E8", 2044, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSS ALY", "ROSS", "ALY" ]
        ,
        [ 2045, "C2794D1D-C526-4FC7-8326-C28E85D88F6D", 2045, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSSI AVE", "ROSSI", "AVE" ]
        ,
        [ 2046, "ABB8B8CF-9394-47FC-9F2A-EDD4639C0729", 2046, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROSSMOOR DR", "ROSSMOOR", "DR" ]
        ,
        [ 2047, "B82220B8-12F7-4AEA-AAF8-6885675CEC13", 2047, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROTTECK ST", "ROTTECK", "ST" ]
        ,
        [ 2048, "C3E04EDF-DD45-432A-AD8B-F69AB5E55D47", 2048, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROUSSEAU ST", "ROUSSEAU", "ST" ]
        ,
        [ 2049, "0DB194A9-F41F-47CD-8C46-C6D1AC9F1494", 2049, 1413041316, "403253", 1413041316, "403253", "{\n}", "ROYAL LN", "ROYAL", "LN" ]
        ,
        [ 2050, "4219C2CC-21FA-4892-80E0-B48C0498B30E", 2050, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUCKMAN AVE", "RUCKMAN", "AVE" ]
        ,
        [ 2051, "79AC3D37-7154-4AA2-8A6A-88EE9C93F455", 2051, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUDDEN AVE", "RUDDEN", "AVE" ]
        ,
        [ 2052, "688DF083-0FCA-4C5B-80FC-36F5C004DD24", 2052, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUGER ST", "RUGER", "ST" ]
        ,
        [ 2053, "FEC4C3F3-8721-4C00-B7C2-7AE88897E715", 2053, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUSS ST", "RUSS", "ST" ]
        ,
        [ 2054, "A737C75B-CC20-4904-BD75-2F677AF3E610", 2054, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUSSELL ST", "RUSSELL", "ST" ]
        ,
        [ 2055, "D106B50E-F9BA-47C6-8575-403229C18680", 2055, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUSSIA AVE", "RUSSIA", "AVE" ]
        ,
        [ 2056, "A5D5885B-9832-48F3-8E9D-EC12E689A3C4", 2056, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUSSIAN HILL PL", "RUSSIAN HILL", "PL" ]
        ,
        [ 2057, "5208373B-77BF-4B11-ABF6-E93E035E1A29", 2057, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUTH ST", "RUTH", "ST" ]
        ,
        [ 2058, "12B5466E-F3EA-4FB8-BFD9-C69E4152E1AE", 2058, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUTLAND ST", "RUTLAND", "ST" ]
        ,
        [ 2059, "D8064B78-3506-4434-A134-5CAED94E68E1", 2059, 1413041316, "403253", 1413041316, "403253", "{\n}", "RUTLEDGE ST", "RUTLEDGE", "ST" ]
        ,
        [ 2060, "9F7A761F-C14C-496E-8C4F-84918054E731", 2060, 1413041316, "403253", 1413041316, "403253", "{\n}", "SABIN PL", "SABIN", "PL" ]
        ,
        [ 2061, "836F7663-4DE8-4D6C-9649-6AA1C0E7A60E", 2061, 1413041316, "403253", 1413041316, "403253", "{\n}", "SACRAMENTO ST", "SACRAMENTO", "ST" ]
        ,
        [ 2062, "445EBD65-2829-42F6-8806-C83F65689754", 2062, 1413041316, "403253", 1413041316, "403253", "{\n}", "SADDLEBACK DR", "SADDLEBACK", "DR" ]
        ,
        [ 2063, "89661E4F-1AA3-45C5-AC4C-278B2AA3DAAE", 2063, 1413041316, "403253", 1413041316, "403253", "{\n}", "SADOWA ST", "SADOWA", "ST" ]
        ,
        [ 2064, "9B3DE5E6-4866-4A8C-92BF-5CAD079D59D1", 2064, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAFIRA LN", "SAFIRA", "LN" ]
        ,
        [ 2065, "4266D952-7959-4358-95BF-45223405DE96", 2065, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAGAMORE ST", "SAGAMORE", "ST" ]
        ,
        [ 2066, "1ACE4900-976A-485C-88DC-9084D3D3A3C3", 2066, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT CHARLES AVE", "SAINT CHARLES", "AVE" ]
        ,
        [ 2067, "6A518335-6FB0-473D-B928-93FC79B815D0", 2067, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT CROIX DR", "SAINT CROIX", "DR" ]
        ,
        [ 2068, "8C75AE64-920B-485E-9B59-CE9AF8154C78", 2068, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT ELMO WAY", "SAINT ELMO", "WAY" ]
        ,
        [ 2069, "A52B148D-D3CA-404B-B59C-5EEC989CF1FA", 2069, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT FRANCIS BLVD", "SAINT FRANCIS", "BLVD" ]
        ,
        [ 2070, "69F1B61C-19F5-440A-8BF0-BB7065A3B9CE", 2070, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT FRANCIS PL", "SAINT FRANCIS", "PL" ]
        ,
        [ 2071, "E82D4E85-1EFD-48CE-9B4C-CCABAF4964B0", 2071, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT GEORGE ALY", "SAINT GEORGE", "ALY" ]
        ,
        [ 2072, "3757F586-7BDD-4441-8D54-AE57CE7049F6", 2072, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT GERMAIN AVE", "SAINT GERMAIN", "AVE" ]
        ,
        [ 2073, "7CA690D9-468A-4C3B-8D7F-BF9F7611C104", 2073, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT JOSEPHS AVE", "SAINT JOSEPHS", "AVE" ]
        ,
        [ 2074, "CE4A670E-153E-4E29-871E-4E5330C46B41", 2074, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT LOUIS ALY", "SAINT LOUIS", "ALY" ]
        ,
        [ 2075, "44FB1D16-8BED-434A-B8E0-C9799E0C6C96", 2075, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAINT MARYS AVE", "SAINT MARYS", "AVE" ]
        ,
        [ 2076, "E6E964B9-6120-4913-95F3-335DD911191A", 2076, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAL ST", "SAL", "ST" ]
        ,
        [ 2077, "47F4C33C-D475-4A4B-BCBB-68DA3233314F", 2077, 1413041316, "403253", 1413041316, "403253", "{\n}", "SALA TER", "SALA", "TER" ]
        ,
        [ 2078, "B2D76A32-5F28-437D-BBCD-1782A2FEE142", 2078, 1413041316, "403253", 1413041316, "403253", "{\n}", "SALINAS AVE", "SALINAS", "AVE" ]
        ,
        [ 2079, "B8C904DF-DC82-401C-81A9-E36E2885DD44", 2079, 1413041316, "403253", 1413041316, "403253", "{\n}", "SALMON ST", "SALMON", "ST" ]
        ,
        [ 2080, "2DA29EBB-4A25-4315-8704-64E586536BED", 2080, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAMOSET ST", "SAMOSET", "ST" ]
        ,
        [ 2081, "4E20066D-3F61-4DC3-8FCD-7A6CA1122646", 2081, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAMPSON AVE", "SAMPSON", "AVE" ]
        ,
        [ 2082, "D6008351-4DF3-48C6-B21A-9CE2BFB9D94B", 2082, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN ALESO AVE", "SAN ALESO", "AVE" ]
        ,
        [ 2083, "885B00E3-B104-4C7C-960B-0F09979436EC", 2083, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN ANDREAS WAY", "SAN ANDREAS", "WAY" ]
        ,
        [ 2084, "90753C05-174F-498D-9D2E-E2EE1624FDCB", 2084, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN ANSELMO AVE", "SAN ANSELMO", "AVE" ]
        ,
        [ 2085, "45A3C414-5F83-4227-9B8D-1B653C87F2B1", 2085, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN ANTONIO PL", "SAN ANTONIO", "PL" ]
        ,
        [ 2086, "86A7B1FD-D47E-4128-884A-685ADCAC3538", 2086, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN BENITO WAY", "SAN BENITO", "WAY" ]
        ,
        [ 2087, "C676E907-BBF3-486A-B394-2E4E223DD7D8", 2087, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN BRUNO AVE", "SAN BRUNO", "AVE" ]
        ,
        [ 2088, "3C96FE09-ADF5-4A09-9027-AC290691646F", 2088, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN BRUNO AV OFF RAMP", "SAN BRUNO AV OFF", "RAMP" ]
        ,
        [ 2089, "8DA7A7EA-ED72-478F-B992-32DD5147218F", 2089, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN BRUNO AV ON RAMP", "SAN BRUNO AV ON", "RAMP" ]
        ,
        [ 2090, "F27C1A48-2290-4034-87A6-B5D5BF43B916", 2090, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN BUENAVENTURA WAY", "SAN BUENAVENTURA", "WAY" ]
        ,
        [ 2091, "73A99037-944D-4BFF-8F9A-3766E8F4AAB1", 2091, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN CARLOS ST", "SAN CARLOS", "ST" ]
        ,
        [ 2092, "C96A47FB-58E2-4FC6-A853-B44E0DB56646", 2092, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN DIEGO AVE", "SAN DIEGO", "AVE" ]
        ,
        [ 2093, "B408ECA5-F958-4ADA-8769-14E8CC6D9E7E", 2093, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN FELIPE AVE", "SAN FELIPE", "AVE" ]
        ,
        [ 2094, "042B79DD-FC31-4CF7-A3EA-31C045A9F598", 2094, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN FERNANDO WAY", "SAN FERNANDO", "WAY" ]
        ,
        [ 2095, "10DE52E1-1294-4ACB-B3FD-D50B54F449C2", 2095, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN GABRIEL AVE", "SAN GABRIEL", "AVE" ]
        ,
        [ 2096, "F1C0CC61-3B6E-4683-A70C-59932A87B98F", 2096, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN JACINTO WAY", "SAN JACINTO", "WAY" ]
        ,
        [ 2097, "3A1390F1-4471-4E24-A1F9-7753A71B6B93", 2097, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN JOSE AVE", "SAN JOSE", "AVE" ]
        ,
        [ 2098, "F6137ED2-493C-492A-98DC-16BB5512DEBA", 2098, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN JOSE AV OFF RAMP", "SAN JOSE AV OFF", "RAMP" ]
        ,
        [ 2099, "68FCC7D6-51AD-4448-9217-A445A5CDBBA1", 2099, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN JOSE AV ON RAMP", "SAN JOSE AV ON", "RAMP" ]
        ,
        [ 2100, "E30C0AF9-48C3-418E-8D6D-3E5DAFC2AF23", 2100, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN JUAN AVE", "SAN JUAN", "AVE" ]
        ,
        [ 2101, "FB6295F7-330B-4F47-8ADB-09EA2D3995AD", 2101, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN LEANDRO WAY", "SAN LEANDRO", "WAY" ]
        ,
        [ 2102, "A161ADA6-C664-4683-9E7A-F6AF67DB0241", 2102, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN LORENZO WAY", "SAN LORENZO", "WAY" ]
        ,
        [ 2103, "BE4A4BF4-0FB6-4592-8F4E-C777E4A7F2EA", 2103, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN LUIS AVE", "SAN LUIS", "AVE" ]
        ,
        [ 2104, "4EA7B752-AF8B-436C-A081-CFA1D6E7FEED", 2104, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN MARCOS AVE", "SAN MARCOS", "AVE" ]
        ,
        [ 2105, "871E062E-11B7-4008-835B-C188FE453D66", 2105, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN MIGUEL ST", "SAN MIGUEL", "ST" ]
        ,
        [ 2106, "CFDFA8D2-C7FF-4DA7-82CF-2468B97D7B23", 2106, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN PABLO AVE", "SAN PABLO", "AVE" ]
        ,
        [ 2107, "FE3E160B-9149-436F-9C28-4372E2E47B8B", 2107, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN RAFAEL WAY", "SAN RAFAEL", "WAY" ]
        ,
        [ 2108, "D63EC878-1DB3-4FC7-9A28-A161ED873C78", 2108, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAN RAMON WAY", "SAN RAMON", "WAY" ]
        ,
        [ 2109, "47737822-AC44-4CF2-A409-C8EF094482A4", 2109, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANCHES ST", "SANCHES", "ST" ]
        ,
        [ 2110, "12F749AB-0764-4E13-B7A7-8C8940B2BAB5", 2110, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANCHEZ ST", "SANCHEZ", "ST" ]
        ,
        [ 2111, "EC8027C2-4502-4848-A5AB-732563099C78", 2111, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANDPIPER COVE WAY", "SANDPIPER COVE", "WAY" ]
        ,
        [ 2112, "E041B009-A0B7-458C-8012-2A5BB05D8923", 2112, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANSOME ST", "SANSOME", "ST" ]
        ,
        [ 2113, "D00BE51B-B421-41C9-B709-C6D658EF4D96", 2113, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA ANA AVE", "SANTA ANA", "AVE" ]
        ,
        [ 2114, "B9AF52C8-3662-42A8-BA84-EBAE0281BC23", 2114, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA BARBARA AVE", "SANTA BARBARA", "AVE" ]
        ,
        [ 2115, "EBBE1202-9A6D-42CB-BE06-823AC06422CC", 2115, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA CLARA AVE", "SANTA CLARA", "AVE" ]
        ,
        [ 2116, "4BDA5FAB-C1AE-4687-A68B-9077933672AE", 2116, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA CRUZ AVE", "SANTA CRUZ", "AVE" ]
        ,
        [ 2117, "B4EF83D0-ADB8-4C70-ACA1-D988EA741256", 2117, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA FE AVE", "SANTA FE", "AVE" ]
        ,
        [ 2118, "2AF2F65D-249F-4E5D-9EEA-D8F40647EBAA", 2118, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA MARINA ST", "SANTA MARINA", "ST" ]
        ,
        [ 2119, "A1A50AFA-C96C-456A-86EA-D57109111767", 2119, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA MONICA WAY", "SANTA MONICA", "WAY" ]
        ,
        [ 2120, "A56211DA-341D-434A-AC13-77B921954618", 2120, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA PAULA AVE", "SANTA PAULA", "AVE" ]
        ,
        [ 2121, "43EFFF64-CA95-417A-823F-C8D1328AFBDE", 2121, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA RITA AVE", "SANTA RITA", "AVE" ]
        ,
        [ 2122, "C5AEF0A8-B45B-49A3-8E0D-6A61B46EEC55", 2122, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA ROSA AVE", "SANTA ROSA", "AVE" ]
        ,
        [ 2123, "1114CE3D-B21C-41B2-8968-A9C8118E0D5A", 2123, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA YNEZ AVE", "SANTA YNEZ", "AVE" ]
        ,
        [ 2124, "AE43864A-0655-4FA0-B0FA-7BC67998540A", 2124, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTA YSABEL AVE", "SANTA YSABEL", "AVE" ]
        ,
        [ 2125, "F2018A40-3274-447F-87BB-8E852318F6BB", 2125, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTIAGO ST", "SANTIAGO", "ST" ]
        ,
        [ 2126, "B55329DD-9117-4227-8E94-ECC46F2479C9", 2126, 1413041316, "403253", 1413041316, "403253", "{\n}", "SANTOS ST", "SANTOS", "ST" ]
        ,
        [ 2127, "E5CBE7E1-E5D4-4F6E-8D96-A8B6201ABB6F", 2127, 1413041316, "403253", 1413041316, "403253", "{\n}", "SARGENT ST", "SARGENT", "ST" ]
        ,
        [ 2128, "4FC59210-E96C-4C3A-AD1C-18ED770FA847", 2128, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAROYAN PL", "SAROYAN", "PL" ]
        ,
        [ 2129, "14190F7F-BE65-45B4-AEAE-27B3259876A7", 2129, 1413041316, "403253", 1413041316, "403253", "{\n}", "SATURN ST", "SATURN", "ST" ]
        ,
        [ 2130, "348F9A6B-D14F-4EA3-8259-2E05094BA539", 2130, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAUL ST", "SAUL", "ST" ]
        ,
        [ 2131, "F074BE70-232E-4C63-888C-488FC6A47EE9", 2131, 1413041316, "403253", 1413041316, "403253", "{\n}", "SAWYER ST", "SAWYER", "ST" ]
        ,
        [ 2132, "04AA5CD9-BF9A-4D7D-A3A6-5DF155211F24", 2132, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCENIC WAY", "SCENIC", "WAY" ]
        ,
        [ 2133, "26EE82AE-5544-44DE-A6A4-18A124E4AD2E", 2133, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCHOFIELD CT", "SCHOFIELD", "CT" ]
        ,
        [ 2134, "194CFB08-9B9C-4F9D-BCDF-9FA451FA980F", 2134, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCHOFIELD RD", "SCHOFIELD", "RD" ]
        ,
        [ 2135, "B8B1BDF1-C39E-49CE-993F-5CC7281A5BCD", 2135, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCHOOL ALY", "SCHOOL", "ALY" ]
        ,
        [ 2136, "4AF19065-5737-423E-9D2E-5678509359A2", 2136, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCHWERIN ST", "SCHWERIN", "ST" ]
        ,
        [ 2137, "13C4B3E4-920D-4A16-8A6C-917D1EF35993", 2137, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCIENCE CIR", "SCIENCE", "CIR" ]
        ,
        [ 2138, "27039521-81F5-43C7-BFA4-6BA916B8BED7", 2138, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCOTIA AVE", "SCOTIA", "AVE" ]
        ,
        [ 2139, "CAF66448-0A40-4A08-923F-1CDBA39D39B0", 2139, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCOTLAND ST", "SCOTLAND", "ST" ]
        ,
        [ 2140, "1F4F8F55-53BC-4E58-A6A9-2A703BE85461", 2140, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCOTT ALY", "SCOTT", "ALY" ]
        ,
        [ 2141, "E3B0F595-61CC-42C2-90D3-A1398EE75144", 2141, 1413041316, "403253", 1413041316, "403253", "{\n}", "SCOTT ST", "SCOTT", "ST" ]
        ,
        [ 2142, "F3DABA80-DD28-40F6-8A86-6509DA44AF6F", 2142, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEA VIEW TER", "SEA VIEW", "TER" ]
        ,
        [ 2143, "014D9620-E678-445D-972D-7F659030BAC8", 2143, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEACLIFF AVE", "SEACLIFF", "AVE" ]
        ,
        [ 2144, "0C862AAA-156E-4E90-B283-6A3D090267BD", 2144, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEAL COVE TER", "SEAL COVE", "TER" ]
        ,
        [ 2145, "C5625081-63E2-48D6-BD95-A0727654D889", 2145, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEAL ROCK DR", "SEAL ROCK", "DR" ]
        ,
        [ 2146, "E9221F90-99C1-4976-A6DD-EF02B6682361", 2146, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEARS ST", "SEARS", "ST" ]
        ,
        [ 2147, "A840C38E-672B-4F65-A2B6-ACB4CBB6E864", 2147, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEAWELL LN", "SEAWELL", "LN" ]
        ,
        [ 2148, "3425BB0E-8B38-4FBF-9B55-70A6F3AB3943", 2148, 1413041316, "403253", 1413041316, "403253", "{\n}", "SECOND DR", "SECOND", "DR" ]
        ,
        [ 2149, "F54F821F-9DC5-4989-B48D-73CFA90EE469", 2149, 1413041316, "403253", 1413041316, "403253", "{\n}", "SECURITY PACIFIC PL", "SECURITY PACIFIC", "PL" ]
        ,
        [ 2150, "13DB31DE-4F69-4EC6-A49A-CF3C8E300C7B", 2150, 1413041316, "403253", 1413041316, "403253", "{\n}", "SELBY ST", "SELBY", "ST" ]
        ,
        [ 2151, "05DAF1EF-DF6D-4645-B9D5-BCFA3E41F1D0", 2151, 1413041316, "403253", 1413041316, "403253", "{\n}", "SELMA WAY", "SELMA", "WAY" ]
        ,
        [ 2152, "E8D71B0A-18D4-49F4-8F44-0FF190E06FA9", 2152, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEMINOLE AVE", "SEMINOLE", "AVE" ]
        ,
        [ 2153, "C6DC5EC8-0CB4-492D-B7EF-C2F454F9D4DB", 2153, 1413041316, "403253", 1413041316, "403253", "{\n}", "SENECA AVE", "SENECA", "AVE" ]
        ,
        [ 2154, "4BD9FE1E-F2C3-4C06-86AF-C0B9F855A4FD", 2154, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEQUOIA WAY", "SEQUOIA", "WAY" ]
        ,
        [ 2155, "5541346A-3EEE-4BF4-885E-4114215902D5", 2155, 1413041316, "403253", 1413041316, "403253", "{\n}", "SERGEANT JOHN V YOUNG ST", "SERGEANT JOHN V YOUNG", "ST" ]
        ,
        [ 2156, "463B1873-D3BB-47A4-8827-680348C874DD", 2156, 1413041316, "403253", 1413041316, "403253", "{\n}", "SERRANO DR", "SERRANO", "DR" ]
        ,
        [ 2157, "15CA3074-FC30-44A4-9FC8-3DAF16902647", 2157, 1413041316, "403253", 1413041316, "403253", "{\n}", "SERVICE ST", "SERVICE", "ST" ]
        ,
        [ 2158, "4D807AD3-878A-4973-AA17-B63816662952", 2158, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEVERN ST", "SEVERN", "ST" ]
        ,
        [ 2159, "BDEDED66-8E61-4EA8-92DF-08711FBDBCB1", 2159, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEVILLE ST", "SEVILLE", "ST" ]
        ,
        [ 2160, "FE32F1A7-063C-4230-8366-6F862DD9AFA6", 2160, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEWARD ST", "SEWARD", "ST" ]
        ,
        [ 2161, "C2FF64F6-839E-4405-8BA7-2DB91BA4CBF6", 2161, 1413041316, "403253", 1413041316, "403253", "{\n}", "SEYMOUR ST", "SEYMOUR", "ST" ]
        ,
        [ 2162, "945387CF-6B9F-4775-8C57-E3C1B2928302", 2162, 1413041316, "403253", 1413041316, "403253", "{\n}", "SFGH ACCESS", "SFGH ACCESS", null ]
        ,
        [ 2163, "F9AC45D2-E5C6-4F28-A06D-D8F1117A2337", 2163, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAFTER AVE", "SHAFTER", "AVE" ]
        ,
        [ 2164, "8ACD611B-98FF-4001-9D53-D93A12DEA6E9", 2164, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAFTER CT", "SHAFTER", "CT" ]
        ,
        [ 2165, "7F8E9F40-FC1E-40D6-8FB6-62FD50D73E7A", 2165, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAFTER RD", "SHAFTER", "RD" ]
        ,
        [ 2166, "590C5E4B-E957-4E00-9CCC-429D9FF88949", 2166, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAKESPEARE ST", "SHAKESPEARE", "ST" ]
        ,
        [ 2167, "E1BF7ACB-E2BA-447D-9E22-B37642DF81E9", 2167, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHANNON ST", "SHANNON", "ST" ]
        ,
        [ 2168, "83CDC543-9A9E-4CC3-B74F-790BF6EEB0D6", 2168, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHARON ST", "SHARON", "ST" ]
        ,
        [ 2169, "A1B7EAA5-27C6-404A-B103-12F5AA8501D4", 2169, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHARP PL", "SHARP", "PL" ]
        ,
        [ 2170, "4A242CB6-A78F-4A55-9B2D-696D6D1329B3", 2170, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAW ALY", "SHAW", "ALY" ]
        ,
        [ 2171, "3C5E99A6-975B-43A8-81E8-E2FB21AD6EE3", 2171, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHAWNEE AVE", "SHAWNEE", "AVE" ]
        ,
        [ 2172, "323D46B6-17A1-4412-94C0-23F0112B27E2", 2172, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHELDON TER", "SHELDON", "TER" ]
        ,
        [ 2173, "FE1F7804-06F8-477E-B305-0BB7AD5919FD", 2173, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHEPHARD PL", "SHEPHARD", "PL" ]
        ,
        [ 2174, "1F0B9128-E215-4B1E-A29A-BA268C2B12BD", 2174, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHERIDAN AVE", "SHERIDAN", "AVE" ]
        ,
        [ 2175, "DCCBEB53-6AD7-4CFB-8FDE-4466B5AD9191", 2175, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHERIDAN ST", "SHERIDAN", "ST" ]
        ,
        [ 2176, "B91E2246-B1CB-46E0-BFC6-93F7E14AA658", 2176, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHERMAN RD", "SHERMAN", "RD" ]
        ,
        [ 2177, "8875EBED-0A24-4487-836A-80DFC7C00AFD", 2177, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHERMAN ST", "SHERMAN", "ST" ]
        ,
        [ 2178, "B3917BB6-4203-4E40-B2F6-9B36A9DC2269", 2178, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHERWOOD CT", "SHERWOOD", "CT" ]
        ,
        [ 2179, "7579528F-FB4B-4706-9774-7614FF61E4CE", 2179, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHIELDS ST", "SHIELDS", "ST" ]
        ,
        [ 2180, "C187CE55-5FF1-4331-A6C8-1681C3161F0D", 2180, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHIP ST", "SHIP", "ST" ]
        ,
        [ 2181, "2B5F9098-79F8-4585-B58B-86B42C9D71D0", 2181, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHIPLEY ST", "SHIPLEY", "ST" ]
        ,
        [ 2182, "DA5D4632-F096-4007-A645-498D71DC70C0", 2182, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHORE VIEW AVE", "SHORE VIEW", "AVE" ]
        ,
        [ 2183, "446497D2-D35F-41DB-9D26-6C7A6447030A", 2183, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHORT ST", "SHORT", "ST" ]
        ,
        [ 2184, "60519EFA-1E08-4C51-95DA-0B867A6D2D10", 2184, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHOTWELL ST", "SHOTWELL", "ST" ]
        ,
        [ 2185, "8D8FA60D-5F3F-4D77-9013-5927CA9AD278", 2185, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHOUP AVE", "SHOUP", "AVE" ]
        ,
        [ 2186, "6C6ECC2E-BE7C-4573-9844-AB5C8DB33311", 2186, 1413041316, "403253", 1413041316, "403253", "{\n}", "SHRADER ST", "SHRADER", "ST" ]
        ,
        [ 2187, "C9074F56-15D0-4923-B6F4-B0CA5457C8A0", 2187, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIBERT LN", "SIBERT", "LN" ]
        ,
        [ 2188, "4B0BF27B-FB46-45E8-A609-E2D4C64497FC", 2188, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIBERT LOOP", "SIBERT", "LOOP" ]
        ,
        [ 2189, "33619446-0888-42DE-8CE0-42E925BA4181", 2189, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIBLEY RD", "SIBLEY", "RD" ]
        ,
        [ 2190, "08D9DCB5-16F1-43F4-9965-043F21FEDFE7", 2190, 1413041316, "403253", 1413041316, "403253", "{\n}", "SICKLES AVE", "SICKLES", "AVE" ]
        ,
        [ 2191, "EB43C73D-9D8C-444D-869D-FDE3620785CD", 2191, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIERRA ST", "SIERRA", "ST" ]
        ,
        [ 2192, "6A67CF74-6653-477C-80F1-948836D81253", 2192, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIGNAL RD", "SIGNAL", "RD" ]
        ,
        [ 2193, "8E1DF0B3-1C18-4BFE-A836-68B346D08CB3", 2193, 1413041316, "403253", 1413041316, "403253", "{\n}", "SILLIMAN ST", "SILLIMAN", "ST" ]
        ,
        [ 2194, "4B7376F8-FBA2-4F5B-A55D-D6154F5C302E", 2194, 1413041316, "403253", 1413041316, "403253", "{\n}", "SILVER AVE", "SILVER", "AVE" ]
        ,
        [ 2195, "273D184D-2CD9-4E1A-ABF6-9010A3CD7932", 2195, 1413041316, "403253", 1413041316, "403253", "{\n}", "SILVERVIEW DR", "SILVERVIEW", "DR" ]
        ,
        [ 2196, "55A58B4D-B141-45F8-B097-8EFC1E74BB07", 2196, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIMONDS LOOP", "SIMONDS", "LOOP" ]
        ,
        [ 2197, "EFECBD8C-5204-4987-980F-73608FE054F7", 2197, 1413041316, "403253", 1413041316, "403253", "{\n}", "SIXTH ST", "SIXTH", "ST" ]
        ,
        [ 2198, "009E237C-0F1C-4097-AEE6-FD4833B379EA", 2198, 1413041316, "403253", 1413041316, "403253", "{\n}", "SKYLINE BLVD", "SKYLINE", "BLVD" ]
        ,
        [ 2199, "569D49AD-2C5D-4AB0-A52E-F2D8918BB529", 2199, 1413041316, "403253", 1413041316, "403253", "{\n}", "SKYVIEW WAY", "SKYVIEW", "WAY" ]
        ,
        [ 2200, "ACBA270A-F753-4C57-8442-B01E63175414", 2200, 1413041316, "403253", 1413041316, "403253", "{\n}", "SLOAN ALY", "SLOAN", "ALY" ]
        ,
        [ 2201, "237809B5-4E76-45DA-A93D-FAADD6224B01", 2201, 1413041316, "403253", 1413041316, "403253", "{\n}", "SLOAT BLVD", "SLOAT", "BLVD" ]
        ,
        [ 2202, "5329FD88-A6EE-497A-9F84-E755569ACB1E", 2202, 1413041316, "403253", 1413041316, "403253", "{\n}", "SMITH LN", "SMITH", "LN" ]
        ,
        [ 2203, "F2D9B8B0-C404-4D8F-950D-0942965E3FDC", 2203, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOLA AVE", "SOLA", "AVE" ]
        ,
        [ 2204, "934EC69B-C0B5-4EEC-B1BF-29D0C7D00C20", 2204, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOMERSET ST", "SOMERSET", "ST" ]
        ,
        [ 2205, "B1E25632-6979-47C6-A099-8EC975FBC03B", 2205, 1413041316, "403253", 1413041316, "403253", "{\n}", "SONOMA ST", "SONOMA", "ST" ]
        ,
        [ 2206, "D4EFFFFE-CA9D-4CB5-B951-0055342FEA2A", 2206, 1413041316, "403253", 1413041316, "403253", "{\n}", "SONORA LN", "SONORA", "LN" ]
        ,
        [ 2207, "B37CA71D-54E5-4AC2-9592-203CB27CB7A1", 2207, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOTELO AVE", "SOTELO", "AVE" ]
        ,
        [ 2208, "4B265FD8-3A8A-4507-9757-C4CE431B058F", 2208, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOULE LN", "SOULE", "LN" ]
        ,
        [ 2209, "E7C43628-71EC-4FB9-9E21-4CD4649CF266", 2209, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH DR", "SOUTH", "DR" ]
        ,
        [ 2210, "C3F89D67-E6E4-4C8F-A7BF-262F8B9A9B94", 2210, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH ST", "SOUTH", "ST" ]
        ,
        [ 2211, "F159CD7F-2C54-41BB-A000-89860038AA34", 2211, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH GATE RD", "SOUTH GATE", "RD" ]
        ,
        [ 2212, "1E81807A-7A41-419A-8268-0800C89CBEC6", 2212, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH HILL BLVD", "SOUTH HILL", "BLVD" ]
        ,
        [ 2213, "35CE74D1-C28B-4A6A-83BA-938DDF233929", 2213, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH HUGHES LN", "SOUTH HUGHES", "LN" ]
        ,
        [ 2214, "BFC5CE04-A421-4096-99EF-9F38BF8C4F31", 2214, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH PARK", "SOUTH PARK", null ]
        ,
        [ 2215, "58116376-72F4-4464-9DF6-018A56F470BC", 2215, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH VAN HORN LN", "SOUTH VAN HORN", "LN" ]
        ,
        [ 2216, "11D1A375-639F-4B95-86D2-53FC33DA7413", 2216, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTH VAN NESS AVE", "SOUTH VAN NESS", "AVE" ]
        ,
        [ 2217, "7F7BFB07-88A1-45DB-B0FC-A6C7D35ADF58", 2217, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTHARD PL", "SOUTHARD", "PL" ]
        ,
        [ 2218, "87664437-462D-4A98-A2D4-0DD3A2494E3E", 2218, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTHERN HEIGHTS AVE", "SOUTHERN HEIGHTS", "AVE" ]
        ,
        [ 2219, "7C1A072D-AB30-4D10-AE3D-6245B828B9D0", 2219, 1413041316, "403253", 1413041316, "403253", "{\n}", "SOUTHWOOD DR", "SOUTHWOOD", "DR" ]
        ,
        [ 2220, "AFF251F6-686E-4BCC-874A-87F329A2EF71", 2220, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPARROW ST", "SPARROW", "ST" ]
        ,
        [ 2221, "8C2207C1-F136-4D5D-A29A-AA7EDC7D9F49", 2221, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPARTA ST", "SPARTA", "ST" ]
        ,
        [ 2222, "281E3111-3A87-4E82-86B2-221EA004FDF6", 2222, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPEAR AVE", "SPEAR", "AVE" ]
        ,
        [ 2223, "FAA6CAD6-9003-4EBC-958B-B173FBA31187", 2223, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPEAR ST", "SPEAR", "ST" ]
        ,
        [ 2224, "CD97EF4B-B896-43CF-84AA-53448210E446", 2224, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPENCER ST", "SPENCER", "ST" ]
        ,
        [ 2225, "E67ECB3F-8AD2-48C4-97EB-C84504BE9272", 2225, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPOFFORD ST", "SPOFFORD", "ST" ]
        ,
        [ 2226, "503ADABB-6DDC-4066-B1F7-52BAD2BCD9E0", 2226, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPRECKELS LAKE DR", "SPRECKELS LAKE", "DR" ]
        ,
        [ 2227, "F1ED9DF3-1B49-4F49-A461-8F4E963369A2", 2227, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPRING ST", "SPRING", "ST" ]
        ,
        [ 2228, "B4164C2B-8314-4637-BBCD-C426A868B96A", 2228, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPRINGFIELD DR", "SPRINGFIELD", "DR" ]
        ,
        [ 2229, "9EBB47A1-8B12-4E7B-B205-E3B01AEA0E15", 2229, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPROULE LN", "SPROULE", "LN" ]
        ,
        [ 2230, "5A87C081-FD0A-4FDD-A7E7-4F866F92537B", 2230, 1413041316, "403253", 1413041316, "403253", "{\n}", "SPRUCE ST", "SPRUCE", "ST" ]
        ,
        [ 2231, "FE049C3C-3956-4762-8C28-4800DAEF6E33", 2231, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANDISH AVE", "STANDISH", "AVE" ]
        ,
        [ 2232, "733EB74A-5C31-46F9-96BE-C1108FB5E660", 2232, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANFORD ST", "STANFORD", "ST" ]
        ,
        [ 2233, "49724074-23D7-4F21-8D50-DCC3237FF8D0", 2233, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANFORD HEIGHTS AVE", "STANFORD HEIGHTS", "AVE" ]
        ,
        [ 2234, "057F83CC-E5F4-46A1-9376-35C46036B5AA", 2234, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANLEY ST", "STANLEY", "ST" ]
        ,
        [ 2235, "942690B1-F3DE-4A36-A885-BAF2B02697ED", 2235, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANTON ST", "STANTON", "ST" ]
        ,
        [ 2236, "F4349FD2-FE4A-4A1A-AF4D-C6E26F087990", 2236, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANYAN BLVD", "STANYAN", "BLVD" ]
        ,
        [ 2237, "87FFC77D-1447-4B83-BA40-E049A62CE8F1", 2237, 1413041316, "403253", 1413041316, "403253", "{\n}", "STANYAN ST", "STANYAN", "ST" ]
        ,
        [ 2238, "60DF2045-1495-40D8-9A7A-FCE58B56C667", 2238, 1413041316, "403253", 1413041316, "403253", "{\n}", "STAPLES AVE", "STAPLES", "AVE" ]
        ,
        [ 2239, "C037251D-F4B2-46C8-B267-47700BC414AA", 2239, 1413041316, "403253", 1413041316, "403253", "{\n}", "STARK ST", "STARK", "ST" ]
        ,
        [ 2240, "278A58CB-5C0C-44EE-85C6-4729B30522BB", 2240, 1413041316, "403253", 1413041316, "403253", "{\n}", "STARR KING WAY", "STARR KING", "WAY" ]
        ,
        [ 2241, "20CFE765-7114-4EA8-A2BB-BB9AFEAD14ED", 2241, 1413041316, "403253", 1413041316, "403253", "{\n}", "STARVIEW WAY", "STARVIEW", "WAY" ]
        ,
        [ 2242, "A423CA10-8A14-46A8-AF17-CFA0B5058131", 2242, 1413041316, "403253", 1413041316, "403253", "{\n}", "STATE DR", "STATE", "DR" ]
        ,
        [ 2243, "CC200399-7A15-4E46-96D4-5D7FBC3630C9", 2243, 1413041316, "403253", 1413041316, "403253", "{\n}", "STATES ST", "STATES", "ST" ]
        ,
        [ 2244, "ACA45E97-9D1D-4FFD-B405-1604D27997F5", 2244, 1413041316, "403253", 1413041316, "403253", "{\n}", "STEINER ST", "STEINER", "ST" ]
        ,
        [ 2245, "6520C8ED-B5B3-4385-A593-D8FE35FA3BB3", 2245, 1413041316, "403253", 1413041316, "403253", "{\n}", "STERLING ST", "STERLING", "ST" ]
        ,
        [ 2246, "98A8A4F3-F571-454A-8F90-FB76CB73BCF1", 2246, 1413041316, "403253", 1413041316, "403253", "{\n}", "STERN GROVE CT", "STERN GROVE", "CT" ]
        ,
        [ 2247, "BD1DC6A7-17EE-4EE9-AE81-2681160D0BDC", 2247, 1413041316, "403253", 1413041316, "403253", "{\n}", "STERNBERG RD", "STERNBERG", "RD" ]
        ,
        [ 2248, "361D7F37-FE2D-437A-AC6B-0ACCDA4BFCFF", 2248, 1413041316, "403253", 1413041316, "403253", "{\n}", "STEUART ST", "STEUART", "ST" ]
        ,
        [ 2249, "5C96DD9C-D8D0-4E6B-BCFF-9E0661BAA9BD", 2249, 1413041316, "403253", 1413041316, "403253", "{\n}", "STEUBEN ST", "STEUBEN", "ST" ]
        ,
        [ 2250, "C50DD01B-35F9-43F0-AD7A-02DEF33DE8B2", 2250, 1413041316, "403253", 1413041316, "403253", "{\n}", "STEVELOE PL", "STEVELOE", "PL" ]
        ,
        [ 2251, "97E3E9D6-0A16-4245-8D26-1C94CFE74BF6", 2251, 1413041316, "403253", 1413041316, "403253", "{\n}", "STEVENSON ST", "STEVENSON", "ST" ]
        ,
        [ 2252, "45DE3A5C-D12D-4FEA-AB94-B494E0943BE6", 2252, 1413041316, "403253", 1413041316, "403253", "{\n}", "STILL ST", "STILL", "ST" ]
        ,
        [ 2253, "854A7DAF-84DD-4F29-B5DB-6902806021A7", 2253, 1413041316, "403253", 1413041316, "403253", "{\n}", "STILLINGS AVE", "STILLINGS", "AVE" ]
        ,
        [ 2254, "BFECD1D2-DB0C-40E1-B96E-5EC1573257CD", 2254, 1413041316, "403253", 1413041316, "403253", "{\n}", "STILLMAN ST", "STILLMAN", "ST" ]
        ,
        [ 2255, "76820FF6-5CD2-4358-A2BE-7288994EDFA1", 2255, 1413041316, "403253", 1413041316, "403253", "{\n}", "STILWELL RD", "STILWELL", "RD" ]
        ,
        [ 2256, "56E23276-CDCF-461A-ABC4-1B46F49674E0", 2256, 1413041316, "403253", 1413041316, "403253", "{\n}", "STOCKTON ST", "STOCKTON", "ST" ]
        ,
        [ 2257, "DC1EA462-C6CE-4B46-B112-2EA314D842F6", 2257, 1413041316, "403253", 1413041316, "403253", "{\n}", "STOCKTON TUNL", "STOCKTON", "TUNL" ]
        ,
        [ 2258, "2930D75F-C59A-40A7-98DC-0DB93A77A8ED", 2258, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONE ST", "STONE", "ST" ]
        ,
        [ 2259, "3D98F799-23D2-4C83-99C2-F99D8E06FC62", 2259, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONECREST DR", "STONECREST", "DR" ]
        ,
        [ 2260, "55A643B1-1265-49A6-BD17-EA56C027AA71", 2260, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONEMAN ST", "STONEMAN", "ST" ]
        ,
        [ 2261, "44896BC2-3BB8-47EE-8EBE-86E71D2DBB87", 2261, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONERIDGE LN", "STONERIDGE", "LN" ]
        ,
        [ 2262, "6526CE97-0988-43FE-A708-2F4E1104443D", 2262, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONEYBROOK AVE", "STONEYBROOK", "AVE" ]
        ,
        [ 2263, "994D5409-0A20-446F-843E-163EDBA27F7D", 2263, 1413041316, "403253", 1413041316, "403253", "{\n}", "STONEYFORD AVE", "STONEYFORD", "AVE" ]
        ,
        [ 2264, "AC5FA317-E19A-4451-A5CA-5C6807C2F29D", 2264, 1413041316, "403253", 1413041316, "403253", "{\n}", "STOREY AVE", "STOREY", "AVE" ]
        ,
        [ 2265, "FA86F4CF-99A7-4949-9812-04B87BC4FC7C", 2265, 1413041316, "403253", 1413041316, "403253", "{\n}", "STORRIE ST", "STORRIE", "ST" ]
        ,
        [ 2266, "AD864BB0-39B1-4E7D-B1C9-7E88CA21F867", 2266, 1413041316, "403253", 1413041316, "403253", "{\n}", "STOW LAKE DR", "STOW LAKE", "DR" ]
        ,
        [ 2267, "51DFB265-819C-4E3E-A963-C90BF8B941AD", 2267, 1413041316, "403253", 1413041316, "403253", "{\n}", "STRATFORD DR", "STRATFORD", "DR" ]
        ,
        [ 2268, "71B27965-ED57-4836-AE99-2E6F486CDF60", 2268, 1413041316, "403253", 1413041316, "403253", "{\n}", "STRIPED BASS ST", "STRIPED BASS", "ST" ]
        ,
        [ 2269, "2608B3FE-95F6-43BD-893D-AF46F71A0CAE", 2269, 1413041316, "403253", 1413041316, "403253", "{\n}", "STURGEON ST", "STURGEON", "ST" ]
        ,
        [ 2270, "76CFB95A-F756-45F8-AF7E-18E3D48CF84B", 2270, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUMMIT ST", "SUMMIT", "ST" ]
        ,
        [ 2271, "34CEB39A-EFD0-4978-B4DE-CB4B3383C595", 2271, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUMMIT WAY", "SUMMIT", "WAY" ]
        ,
        [ 2272, "11578288-24E4-48EC-AF58-6251A9A08710", 2272, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUMNER AVE", "SUMNER", "AVE" ]
        ,
        [ 2273, "354AF13B-C568-4ECF-B7A2-ADE5B0C3DBDB", 2273, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUMNER ST", "SUMNER", "ST" ]
        ,
        [ 2274, "0FD6C3F3-CA3A-459A-815B-A5CBEE0CE41F", 2274, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNBEAM LN", "SUNBEAM", "LN" ]
        ,
        [ 2275, "17E463F4-11AA-4A66-84D6-1B1D4CF32E2A", 2275, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNGLOW LN", "SUNGLOW", "LN" ]
        ,
        [ 2276, "FDCA5767-1A58-4B51-BD3A-60C19A7F62BB", 2276, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNNYDALE AVE", "SUNNYDALE", "AVE" ]
        ,
        [ 2277, "45DB4203-B243-4966-A811-06FCD1B6C166", 2277, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNNYSIDE TER", "SUNNYSIDE", "TER" ]
        ,
        [ 2278, "50D75C75-B702-44CF-8A41-3C7ACD306C76", 2278, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNRISE WAY", "SUNRISE", "WAY" ]
        ,
        [ 2279, "43C84016-CD16-4F97-8655-FA914BF696F9", 2279, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNSET BLVD", "SUNSET", "BLVD" ]
        ,
        [ 2280, "412C7ECE-D22A-4347-9461-20A648B468CD", 2280, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNSET BLVD OFF RAMP", "SUNSET BLVD OFF", "RAMP" ]
        ,
        [ 2281, "487C2DBE-D02F-44CF-B9AA-D308DCA0F837", 2281, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNSET BLVD ON RAMP", "SUNSET BLVD ON", "RAMP" ]
        ,
        [ 2282, "85C37ADA-A0DB-4584-B837-7E3D06BE208D", 2282, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUNVIEW DR", "SUNVIEW", "DR" ]
        ,
        [ 2283, "C686931A-0250-4DA0-9530-C81C0EB5825B", 2283, 1413041316, "403253", 1413041316, "403253", "{\n}", "SURREY ST", "SURREY", "ST" ]
        ,
        [ 2284, "A2D6B8DD-53B7-4DD7-B075-477F5A827E80", 2284, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUSSEX ST", "SUSSEX", "ST" ]
        ,
        [ 2285, "8772F761-40EB-4DD9-B499-0DF180D95A3A", 2285, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUTRO HEIGHTS AVE", "SUTRO HEIGHTS", "AVE" ]
        ,
        [ 2286, "59C70408-3262-47C8-8A35-9E3F3B1730F8", 2286, 1413041316, "403253", 1413041316, "403253", "{\n}", "SUTTER ST", "SUTTER", "ST" ]
        ,
        [ 2287, "083EA486-1897-4274-B755-731A0437A568", 2287, 1413041316, "403253", 1413041316, "403253", "{\n}", "SWEENY ST", "SWEENY", "ST" ]
        ,
        [ 2288, "A14BD9C2-3D65-413C-8FAF-401894DD1E08", 2288, 1413041316, "403253", 1413041316, "403253", "{\n}", "SWISS AVE", "SWISS", "AVE" ]
        ,
        [ 2289, "829660DD-D3E8-4127-812F-69D68FB1B08C", 2289, 1413041316, "403253", 1413041316, "403253", "{\n}", "SYCAMORE ST", "SYCAMORE", "ST" ]
        ,
        [ 2290, "2D03D93F-10A0-457E-A77D-C527235B9F85", 2290, 1413041316, "403253", 1413041316, "403253", "{\n}", "SYDNEY WAY", "SYDNEY", "WAY" ]
        ,
        [ 2291, "FCDB74A6-1A08-44F7-8740-378966621F87", 2291, 1413041316, "403253", 1413041316, "403253", "{\n}", "SYLVAN DR", "SYLVAN", "DR" ]
        ,
        [ 2292, "6B0A5C70-5A4E-41AF-9B90-C7C102076703", 2292, 1413041316, "403253", 1413041316, "403253", "{\n}", "TABER PL", "TABER", "PL" ]
        ,
        [ 2293, "68EB2108-B6E1-499E-9088-87267C206FE8", 2293, 1413041316, "403253", 1413041316, "403253", "{\n}", "TACOMA ST", "TACOMA", "ST" ]
        ,
        [ 2294, "E3DF28B6-454C-4812-9354-56031C721777", 2294, 1413041316, "403253", 1413041316, "403253", "{\n}", "TALBERT CT", "TALBERT", "CT" ]
        ,
        [ 2295, "842AEA37-562F-44B9-A50F-4D3A50E4CC47", 2295, 1413041316, "403253", 1413041316, "403253", "{\n}", "TALBERT ST", "TALBERT", "ST" ]
        ,
        [ 2296, "C86A374E-8823-4441-8DA1-99B2695224DC", 2296, 1413041316, "403253", 1413041316, "403253", "{\n}", "TAMALPAIS TER", "TAMALPAIS", "TER" ]
        ,
        [ 2297, "AC7215B8-BBA5-40F2-9045-E18CCB907872", 2297, 1413041316, "403253", 1413041316, "403253", "{\n}", "TAMPA LN", "TAMPA", "LN" ]
        ,
        [ 2298, "12C7B5B1-AF7F-438C-9C3B-ECF6F5177733", 2298, 1413041316, "403253", 1413041316, "403253", "{\n}", "TANDANG SORA", "TANDANG SORA", null ]
        ,
        [ 2299, "103DEF60-34DA-4C01-B78D-742DA36E70CD", 2299, 1413041316, "403253", 1413041316, "403253", "{\n}", "TAPIA DR", "TAPIA", "DR" ]
        ,
        [ 2300, "FFE0E8C1-BC06-4BD2-9E7D-E22DB7BF702A", 2300, 1413041316, "403253", 1413041316, "403253", "{\n}", "TARA ST", "TARA", "ST" ]
        ,
        [ 2301, "AD06C581-19A8-4E3E-A264-3046C0830DB1", 2301, 1413041316, "403253", 1413041316, "403253", "{\n}", "TARAVAL ST", "TARAVAL", "ST" ]
        ,
        [ 2302, "F2535F2B-F648-40DD-8DF2-E409C76BD733", 2302, 1413041316, "403253", 1413041316, "403253", "{\n}", "TAYLOR RD", "TAYLOR", "RD" ]
        ,
        [ 2303, "3096E2C7-ECEE-43E6-AE77-1B4820609C5E", 2303, 1413041316, "403253", 1413041316, "403253", "{\n}", "TAYLOR ST", "TAYLOR", "ST" ]
        ,
        [ 2304, "A19E6B9F-7797-463C-9B38-6BF201287D40", 2304, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEDDY AVE", "TEDDY", "AVE" ]
        ,
        [ 2305, "4C4E84A6-1F4A-4FA8-B358-1908FAB53AEA", 2305, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEHAMA ST", "TEHAMA", "ST" ]
        ,
        [ 2306, "4608E0DF-F2ED-4DEC-895A-A27CAE57FABB", 2306, 1413041316, "403253", 1413041316, "403253", "{\n}", "TELEGRAPH PL", "TELEGRAPH", "PL" ]
        ,
        [ 2307, "A6431023-68B3-4E7E-ABE4-01DCAE3377C0", 2307, 1413041316, "403253", 1413041316, "403253", "{\n}", "TELEGRAPH HILL BLVD", "TELEGRAPH HILL", "BLVD" ]
        ,
        [ 2308, "3C9251A8-FC57-4E6E-A849-B969CBC6FB14", 2308, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEMESCAL TER", "TEMESCAL", "TER" ]
        ,
        [ 2309, "5706C58B-D4C5-4C6F-968D-E3748BE1209F", 2309, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEMPLE ST", "TEMPLE", "ST" ]
        ,
        [ 2310, "66909F46-407B-4912-B3F2-A4AA2269EF64", 2310, 1413041316, "403253", 1413041316, "403253", "{\n}", "TENNESSEE ST", "TENNESSEE", "ST" ]
        ,
        [ 2311, "87331CBE-F207-4953-B066-948460BDFC4C", 2311, 1413041316, "403253", 1413041316, "403253", "{\n}", "TENNY PL", "TENNY", "PL" ]
        ,
        [ 2312, "60955178-6F0E-4157-9EB3-241406F032E2", 2312, 1413041316, "403253", 1413041316, "403253", "{\n}", "TERESITA BLVD", "TERESITA", "BLVD" ]
        ,
        [ 2313, "114D1AF8-427C-4DDB-A95F-31730B8A9C2A", 2313, 1413041316, "403253", 1413041316, "403253", "{\n}", "TERRA VISTA AVE", "TERRA VISTA", "AVE" ]
        ,
        [ 2314, "F6E4B0E3-99FE-41C1-BD01-B3F57DB05A94", 2314, 1413041316, "403253", 1413041316, "403253", "{\n}", "TERRACE DR", "TERRACE", "DR" ]
        ,
        [ 2315, "B902FDB5-E5BD-4BA9-A0D5-CBE3AD3C7AD0", 2315, 1413041316, "403253", 1413041316, "403253", "{\n}", "TERRACE WALK", "TERRACE", "WALK" ]
        ,
        [ 2316, "681B36A4-7EE1-4255-80F9-64303B507FEF", 2316, 1413041316, "403253", 1413041316, "403253", "{\n}", "TERRY A FRANCOIS BLVD", "TERRY A FRANCOIS", "BLVD" ]
        ,
        [ 2317, "64069B66-F289-40E6-9B7D-D0119B1A0F89", 2317, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEVIS ST", "TEVIS", "ST" ]
        ,
        [ 2318, "45E1D179-BFAA-45C1-9158-99D36EAFBE96", 2318, 1413041316, "403253", 1413041316, "403253", "{\n}", "TEXAS ST", "TEXAS", "ST" ]
        ,
        [ 2319, "CEB0C2AD-4091-40D1-B0CD-743F57A81C6B", 2319, 1413041316, "403253", 1413041316, "403253", "{\n}", "THE EMBARCADERO", "THE EMBARCADERO", null ]
        ,
        [ 2320, "BCD39A1A-BA2D-47CE-86F8-05A36CA91748", 2320, 1413041316, "403253", 1413041316, "403253", "{\n}", "THERESA ST", "THERESA", "ST" ]
        ,
        [ 2321, "60CC5AAA-A489-4BE4-8F40-9A4326D1535E", 2321, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOMAS AVE", "THOMAS", "AVE" ]
        ,
        [ 2322, "2C3D6321-A853-4C30-8092-DEB05C44F308", 2322, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOMAS CT", "THOMAS", "CT" ]
        ,
        [ 2323, "2651C0C5-A2EB-4449-B37D-1C873F0A19DB", 2323, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOMAS MELLON CIR", "THOMAS MELLON", "CIR" ]
        ,
        [ 2324, "63D07129-CAC2-44C2-8311-D06F86512621", 2324, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOMAS MELLON DR", "THOMAS MELLON", "DR" ]
        ,
        [ 2325, "5A1F275B-0651-43AE-9BE1-8BD171AED275", 2325, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOMAS MORE WAY", "THOMAS MORE", "WAY" ]
        ,
        [ 2326, "013A1A50-0591-4158-B033-C56CA1E6D204", 2326, 1413041316, "403253", 1413041316, "403253", "{\n}", "THOR AVE", "THOR", "AVE" ]
        ,
        [ 2327, "DA48B0C0-6631-416C-9311-E972582D81FA", 2327, 1413041316, "403253", 1413041316, "403253", "{\n}", "THORNBURG RD", "THORNBURG", "RD" ]
        ,
        [ 2328, "7027719B-3569-4B21-B552-3065F2C1F73A", 2328, 1413041316, "403253", 1413041316, "403253", "{\n}", "THORNE WAY", "THORNE", "WAY" ]
        ,
        [ 2329, "D9C3C224-CD69-4528-8AFA-1A966806E3DD", 2329, 1413041316, "403253", 1413041316, "403253", "{\n}", "THORNTON AVE", "THORNTON", "AVE" ]
        ,
        [ 2330, "6ADBBE6D-09B5-4271-878E-DE020EC20835", 2330, 1413041316, "403253", 1413041316, "403253", "{\n}", "THORP LN", "THORP", "LN" ]
        ,
        [ 2331, "8A8C331A-286B-407C-BE19-9F064B08633B", 2331, 1413041316, "403253", 1413041316, "403253", "{\n}", "THRIFT ST", "THRIFT", "ST" ]
        ,
        [ 2332, "82F45528-EE16-4A7F-A755-2F1FA62D9BF9", 2332, 1413041316, "403253", 1413041316, "403253", "{\n}", "TIFFANY AVE", "TIFFANY", "AVE" ]
        ,
        [ 2333, "4D5D81CA-22FF-47B6-A04C-505969BE91FB", 2333, 1413041316, "403253", 1413041316, "403253", "{\n}", "TILLMAN PL", "TILLMAN", "PL" ]
        ,
        [ 2334, "79C72F6F-3973-4F51-AB1E-88672D13FFE8", 2334, 1413041316, "403253", 1413041316, "403253", "{\n}", "TIMOTHY PFLUEGER PL", "TIMOTHY PFLUEGER", "PL" ]
        ,
        [ 2335, "292C5011-E0CA-4774-B8BB-2826F7B1D128", 2335, 1413041316, "403253", 1413041316, "403253", "{\n}", "TINGLEY ST", "TINGLEY", "ST" ]
        ,
        [ 2336, "76A30386-0D90-49B6-9E96-9AC0DFA5F341", 2336, 1413041316, "403253", 1413041316, "403253", "{\n}", "TIOGA AVE", "TIOGA", "AVE" ]
        ,
        [ 2337, "00032694-22A3-4629-9405-E0B64A80CA48", 2337, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOCOLOMA AVE", "TOCOLOMA", "AVE" ]
        ,
        [ 2338, "7D0C1C45-731F-4094-AE17-CD42D99CEF21", 2338, 1413041316, "403253", 1413041316, "403253", "{\n}", "TODD ST", "TODD", "ST" ]
        ,
        [ 2339, "5C07ED7C-1A59-4689-BBC8-83D9C3E5CA38", 2339, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOLAND ST", "TOLAND", "ST" ]
        ,
        [ 2340, "28306C35-9F14-4677-A659-DCB44D06D5F2", 2340, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOLEDO WAY", "TOLEDO", "WAY" ]
        ,
        [ 2341, "81ABF7A8-BE63-4D31-B003-F4E9F70E2D20", 2341, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOLL PLAZA TUNNEL", "TOLL PLAZA TUNNEL", null ]
        ,
        [ 2342, "6723C058-6E7D-420A-BE4F-E4FC34E13F85", 2342, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOMASO CT", "TOMASO", "CT" ]
        ,
        [ 2343, "DC78CDD0-BC0D-400B-82BA-7B828269216A", 2343, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOMPKINS AVE", "TOMPKINS", "AVE" ]
        ,
        [ 2344, "7047D269-4889-4804-8AE7-5C2A38527C5D", 2344, 1413041316, "403253", 1413041316, "403253", "{\n}", "TONQUIN ST", "TONQUIN", "ST" ]
        ,
        [ 2345, "2503784E-1C5D-4CAB-B26C-F99C70967D35", 2345, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOPAZ WAY", "TOPAZ", "WAY" ]
        ,
        [ 2346, "BB7BEEBC-BA1A-44B4-A404-FBEA887B3228", 2346, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOPEKA AVE", "TOPEKA", "AVE" ]
        ,
        [ 2347, "2E862E81-4EE8-478D-AD82-99650AE49271", 2347, 1413041316, "403253", 1413041316, "403253", "{\n}", "TORNEY AVE", "TORNEY", "AVE" ]
        ,
        [ 2348, "2417E850-5D0A-4387-875A-B4E61FE40893", 2348, 1413041316, "403253", 1413041316, "403253", "{\n}", "TORRENS CT", "TORRENS", "CT" ]
        ,
        [ 2349, "79C553D2-3F2B-408E-87B3-85E5AF90507C", 2349, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOUCHARD ST", "TOUCHARD", "ST" ]
        ,
        [ 2350, "CD391089-FA78-4F4B-B440-3FD27973A388", 2350, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOWERSIDE AVE", "TOWERSIDE", "AVE" ]
        ,
        [ 2351, "97C57D16-B88A-47EF-90D4-0B874E0090F1", 2351, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOWNSEND ST", "TOWNSEND", "ST" ]
        ,
        [ 2352, "09DA3FE7-9CE7-40BA-8F3E-E5565CE38059", 2352, 1413041316, "403253", 1413041316, "403253", "{\n}", "TOYON LN", "TOYON", "LN" ]
        ,
        [ 2353, "92050566-E120-49E3-8B9A-EB1A0A3A493E", 2353, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRADER VIC ALY", "TRADER VIC", "ALY" ]
        ,
        [ 2354, "6BB4D632-7A74-4DE9-9353-57762D9E60CD", 2354, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRAINOR ST", "TRAINOR", "ST" ]
        ,
        [ 2355, "FFC65D2C-5BF1-4BE6-9138-8B8A5C0819F1", 2355, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRANSBAY HUMP", "TRANSBAY HUMP", null ]
        ,
        [ 2356, "9D2B4134-396B-4323-89DD-16234468D494", 2356, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRANSBAY LOOP", "TRANSBAY LOOP", null ]
        ,
        [ 2357, "1B4AACC1-C72C-445F-BEE1-4450B8EA6E92", 2357, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRANSVERSE DR", "TRANSVERSE", "DR" ]
        ,
        [ 2358, "5D73513A-E0BA-4720-ACDB-1D727B202781", 2358, 1413041316, "403253", 1413041316, "403253", "{\n}", "TREASURE ISLAND RD", "TREASURE ISLAND", "RD" ]
        ,
        [ 2359, "8FB41B02-501B-4552-9780-3086A93961D8", 2359, 1413041316, "403253", 1413041316, "403253", "{\n}", "TREASURY PL", "TREASURY", "PL" ]
        ,
        [ 2360, "C47C0D61-B208-46D7-9FE1-174E2518CA22", 2360, 1413041316, "403253", 1413041316, "403253", "{\n}", "TREAT AVE", "TREAT", "AVE" ]
        ,
        [ 2361, "BC322B97-AE7B-4634-984D-452660F0A23B", 2361, 1413041316, "403253", 1413041316, "403253", "{\n}", "TREAT LN", "TREAT", "LN" ]
        ,
        [ 2362, "73E95402-9B59-4A0C-82D3-9E03E005DBBA", 2362, 1413041316, "403253", 1413041316, "403253", "{\n}", "TREAT WAY", "TREAT", "WAY" ]
        ,
        [ 2363, "1136268D-BFD4-4D4A-A2D9-C9E947641175", 2363, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRENTON ST", "TRENTON", "ST" ]
        ,
        [ 2364, "61C5C3D9-6646-400A-9484-6211C2050BA8", 2364, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRINITY ST", "TRINITY", "ST" ]
        ,
        [ 2365, "ECF44723-EF13-4440-8E2C-BE6F6B99BAAB", 2365, 1413041316, "403253", 1413041316, "403253", "{\n}", "TROY ALY", "TROY", "ALY" ]
        ,
        [ 2366, "6E81CA74-C1A5-4CAD-91EE-8BBC9E1F2542", 2366, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRUBY ST", "TRUBY", "ST" ]
        ,
        [ 2367, "6F54D5F5-62E8-47F9-8914-3BA7F2986F58", 2367, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRUETT ST", "TRUETT", "ST" ]
        ,
        [ 2368, "3588FEA5-AEAE-4D0C-92B7-790EB7EA6D9F", 2368, 1413041316, "403253", 1413041316, "403253", "{\n}", "TRUMBULL ST", "TRUMBULL", "ST" ]
        ,
        [ 2369, "AD55F97D-4443-4BE3-B4B9-A92CCA823490", 2369, 1413041316, "403253", 1413041316, "403253", "{\n}", "TUBBS ST", "TUBBS", "ST" ]
        ,
        [ 2370, "8805C751-9E2E-464B-A850-D86835C820CC", 2370, 1413041316, "403253", 1413041316, "403253", "{\n}", "TUCKER AVE", "TUCKER", "AVE" ]
        ,
        [ 2371, "AE77C51E-9F98-4BE4-80EB-692572F66C44", 2371, 1413041316, "403253", 1413041316, "403253", "{\n}", "TULANE ST", "TULANE", "ST" ]
        ,
        [ 2372, "5BB8B80E-BBC5-49B9-9265-1498475ABDA7", 2372, 1413041316, "403253", 1413041316, "403253", "{\n}", "TULARE ST", "TULARE", "ST" ]
        ,
        [ 2373, "730CC85B-08CD-4329-850C-1B9AA84FB237", 2373, 1413041316, "403253", 1413041316, "403253", "{\n}", "TULIP ALY", "TULIP", "ALY" ]
        ,
        [ 2374, "42EC233E-EBDC-4914-B138-55237059C5F9", 2374, 1413041316, "403253", 1413041316, "403253", "{\n}", "TUNNEL AVE", "TUNNEL", "AVE" ]
        ,
        [ 2375, "7280AA4F-76DB-4A56-A94E-B5267BB76EE0", 2375, 1413041316, "403253", 1413041316, "403253", "{\n}", "TURK BLVD", "TURK", "BLVD" ]
        ,
        [ 2376, "C6704BD2-C101-4BA8-BC34-BB605979C9D7", 2376, 1413041316, "403253", 1413041316, "403253", "{\n}", "TURK ST", "TURK", "ST" ]
        ,
        [ 2377, "D88C1192-12BB-47A2-8872-CB38CE05DF0B", 2377, 1413041316, "403253", 1413041316, "403253", "{\n}", "TURK MURPHY LN", "TURK MURPHY", "LN" ]
        ,
        [ 2378, "0D5C1479-B268-41DE-8CCA-CB69E1D57584", 2378, 1413041316, "403253", 1413041316, "403253", "{\n}", "TURNER TER", "TURNER", "TER" ]
        ,
        [ 2379, "18392DFE-DCF5-42C7-ACAC-B5B00BB47739", 2379, 1413041316, "403253", 1413041316, "403253", "{\n}", "TURQUOISE WAY", "TURQUOISE", "WAY" ]
        ,
        [ 2380, "9ECE0B82-7930-4166-BE0F-E4ADB6F153A9", 2380, 1413041316, "403253", 1413041316, "403253", "{\n}", "TUSCANY ALY", "TUSCANY", "ALY" ]
        ,
        [ 2381, "F146BA2B-7CCB-430E-8880-DA9E4D5F630E", 2381, 1413041316, "403253", 1413041316, "403253", "{\n}", "TWIN PEAKS BLVD", "TWIN PEAKS", "BLVD" ]
        ,
        [ 2382, "4240885D-3AA0-42B6-8701-9B268C077063", 2382, 1413041316, "403253", 1413041316, "403253", "{\n}", "ULLOA ST", "ULLOA", "ST" ]
        ,
        [ 2383, "D9A58F34-3009-4922-A659-F2A8DD6F7C3F", 2383, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNDERWOOD AVE", "UNDERWOOD", "AVE" ]
        ,
        [ 2384, "E0D8BE6C-9ED3-4D53-AF26-863D4E746493", 2384, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNION ST", "UNION", "ST" ]
        ,
        [ 2385, "A9DDECBA-6A53-49FA-B476-530F7E8CAA86", 2385, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNITED NATIONS PLZ", "UNITED NATIONS", "PLZ" ]
        ,
        [ 2386, "E5DFAA50-51FA-4D45-BB0E-E5C84DF2CB3D", 2386, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNIVERSITY ST", "UNIVERSITY", "ST" ]
        ,
        [ 2387, "BE7EAEB0-9C3F-4625-8DCC-2E0C88063F9C", 2387, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 009", "UNNAMED 009", null ]
        ,
        [ 2388, "2C47C1C8-9632-4011-9DB8-4ED0A104ED87", 2388, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 010", "UNNAMED 010", null ]
        ,
        [ 2389, "E760EBD2-66B3-4221-858F-496C2346396E", 2389, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 011", "UNNAMED 011", null ]
        ,
        [ 2390, "C4C0D12E-90BA-4A09-9254-36937E1E0F1E", 2390, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 012", "UNNAMED 012", null ]
        ,
        [ 2391, "51F118FD-706F-4264-A877-B55E7CC5D377", 2391, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 014", "UNNAMED 014", null ]
        ,
        [ 2392, "CA212CFD-0B0C-460B-A0B5-DA9DF95426D0", 2392, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 017", "UNNAMED 017", null ]
        ,
        [ 2393, "3CD63F8F-52DE-42CB-966D-B46425DD362C", 2393, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 018", "UNNAMED 018", null ]
        ,
        [ 2394, "52B93DF0-27C0-4859-AE5F-4B420044550D", 2394, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 021", "UNNAMED 021", null ]
        ,
        [ 2395, "A2114D62-16D2-4318-A12E-64B5433C57D2", 2395, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 024", "UNNAMED 024", null ]
        ,
        [ 2396, "ECD725EF-3B88-4502-BD7E-B33025C1AFFD", 2396, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 025", "UNNAMED 025", null ]
        ,
        [ 2397, "F86C6549-BC99-49C9-8B81-1F92EB1CA5D8", 2397, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 026", "UNNAMED 026", null ]
        ,
        [ 2398, "45855C11-B700-44A4-9992-BEA6E87CFEF9", 2398, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 027", "UNNAMED 027", null ]
        ,
        [ 2399, "865545E5-14D4-46BF-A09E-51A0C77F1A3D", 2399, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 030", "UNNAMED 030", null ]
        ,
        [ 2400, "27246BA3-DAB0-4874-80EC-E8D343BC940D", 2400, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 031", "UNNAMED 031", null ]
        ,
        [ 2401, "4DF188FC-B280-41BC-BFEB-66899598DF8D", 2401, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 032", "UNNAMED 032", null ]
        ,
        [ 2402, "7D1372A9-20C3-4185-94B0-499E9C841281", 2402, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 033", "UNNAMED 033", null ]
        ,
        [ 2403, "FDDFD821-52A4-45DF-84B6-9FFC742504F7", 2403, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 034", "UNNAMED 034", null ]
        ,
        [ 2404, "D60ED8DD-8F00-4395-ACDD-2281A81B0F10", 2404, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 035", "UNNAMED 035", null ]
        ,
        [ 2405, "8A27F431-C2EB-404D-B4BF-B18014F3CE1E", 2405, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 036", "UNNAMED 036", null ]
        ,
        [ 2406, "534B23D3-CF35-4E8C-ABAD-4C940CB82CDA", 2406, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 037", "UNNAMED 037", null ]
        ,
        [ 2407, "A3F1E50D-2CBD-4464-8A1F-0D015D1E311B", 2407, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 038", "UNNAMED 038", null ]
        ,
        [ 2408, "B704E265-D6FB-4BC2-9997-E1C34E257936", 2408, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 039", "UNNAMED 039", null ]
        ,
        [ 2409, "01E37758-5AE0-409A-A090-FAB4E65F56F4", 2409, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 040", "UNNAMED 040", null ]
        ,
        [ 2410, "F3E94E8A-DCF4-4AC1-8187-326D87DC5CCF", 2410, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 041", "UNNAMED 041", null ]
        ,
        [ 2411, "2D85D39E-1E03-47E1-9395-F7D3382C89DD", 2411, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 042", "UNNAMED 042", null ]
        ,
        [ 2412, "00953C71-0F3A-4C5F-A308-3DDA2CEDCEE0", 2412, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 043", "UNNAMED 043", null ]
        ,
        [ 2413, "1AD8A444-7573-4911-9B67-9A8724AC5FF0", 2413, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 044", "UNNAMED 044", null ]
        ,
        [ 2414, "634003F7-2E6E-4C84-BCE1-5CA5D0FF5C7D", 2414, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 051", "UNNAMED 051", null ]
        ,
        [ 2415, "612B13B2-663E-40CA-957A-96C34E43DEA1", 2415, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 052", "UNNAMED 052", null ]
        ,
        [ 2416, "DA757DA4-1364-47D4-A798-7054908D95DA", 2416, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 053", "UNNAMED 053", null ]
        ,
        [ 2417, "E72494FA-1FB1-4687-BC14-97E8B7DD7E74", 2417, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 064", "UNNAMED 064", null ]
        ,
        [ 2418, "6F4F6DCB-5772-474A-94E4-85CBCD40F4DB", 2418, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 065", "UNNAMED 065", null ]
        ,
        [ 2419, "FEE8CCAA-DA65-42D3-B6A1-A1D04CF5F844", 2419, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 068", "UNNAMED 068", null ]
        ,
        [ 2420, "1EDBBE0D-EAED-4D86-98B9-B72F5CA01565", 2420, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 069", "UNNAMED 069", null ]
        ,
        [ 2421, "7CD4B0D2-8BE6-464D-A558-A6551CC2FF6F", 2421, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 070", "UNNAMED 070", null ]
        ,
        [ 2422, "EEC46ABE-1A75-4CE5-A282-178B560CA00D", 2422, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 071", "UNNAMED 071", null ]
        ,
        [ 2423, "1CAC6EB6-69D7-44D6-AD09-5B9C14117299", 2423, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 075", "UNNAMED 075", null ]
        ,
        [ 2424, "25893D18-1960-4D7A-B24C-06CE5B0F9FC2", 2424, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 077", "UNNAMED 077", null ]
        ,
        [ 2425, "D5FC082A-6743-43D2-964D-3E452DF0F0FB", 2425, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 078", "UNNAMED 078", null ]
        ,
        [ 2426, "EB29DAB3-A433-401B-AB50-BBF95C1E67B9", 2426, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 080", "UNNAMED 080", null ]
        ,
        [ 2427, "88AA36DC-AA4F-4FDB-947C-8E9DA151D661", 2427, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 083", "UNNAMED 083", null ]
        ,
        [ 2428, "9D4E3F21-5BEB-4C04-A777-FE4CF410B956", 2428, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 084", "UNNAMED 084", null ]
        ,
        [ 2429, "D69727F3-CF19-43FB-A797-090D817752E1", 2429, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 087", "UNNAMED 087", null ]
        ,
        [ 2430, "04449120-A9FF-4BC7-BF03-B22D6F188C84", 2430, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 088", "UNNAMED 088", null ]
        ,
        [ 2431, "CE044816-82D8-4344-B327-AFE11CCFCC7E", 2431, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 090", "UNNAMED 090", null ]
        ,
        [ 2432, "88C4D93B-3C28-4E10-A285-F5DD0B606E3E", 2432, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 095", "UNNAMED 095", null ]
        ,
        [ 2433, "BF090EAC-C90F-465C-B46A-35FC132A8026", 2433, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 096", "UNNAMED 096", null ]
        ,
        [ 2434, "1AB24D2E-8443-433A-9E44-720C54063201", 2434, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 097", "UNNAMED 097", null ]
        ,
        [ 2435, "BFF486E2-C868-43B1-BFD2-6276B983138B", 2435, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 098", "UNNAMED 098", null ]
        ,
        [ 2436, "B6B2DDA5-38E7-4DF7-8443-5E97F16D3C69", 2436, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 099", "UNNAMED 099", null ]
        ,
        [ 2437, "620D6C14-68AA-47B1-9E58-9D6EA42F5D4B", 2437, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 100", "UNNAMED 100", null ]
        ,
        [ 2438, "50A726C7-C90B-41A2-807D-08D8D29443C8", 2438, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 101", "UNNAMED 101", null ]
        ,
        [ 2439, "A0D0F60C-2DE3-4EF5-B7F5-ACEAE359E999", 2439, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 105", "UNNAMED 105", null ]
        ,
        [ 2440, "337602DB-7F4E-4F26-86A4-ED7BA5C23FCC", 2440, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 106", "UNNAMED 106", null ]
        ,
        [ 2441, "C1B3502D-9EE1-4E0F-BD90-274AE455ADB2", 2441, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 107", "UNNAMED 107", null ]
        ,
        [ 2442, "043A0241-A0E2-4976-B115-707DB30F6121", 2442, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 108", "UNNAMED 108", null ]
        ,
        [ 2443, "3E89A061-8994-49A2-BDD2-6BF3903EF01B", 2443, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 112", "UNNAMED 112", null ]
        ,
        [ 2444, "1261A783-FD79-4223-8182-0BB4FC8CF16D", 2444, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 113", "UNNAMED 113", null ]
        ,
        [ 2445, "615E602B-041E-401F-A6CE-27506A8CFAA6", 2445, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 115", "UNNAMED 115", null ]
        ,
        [ 2446, "B849AD30-944E-444A-82C1-A4275F286EBC", 2446, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 117", "UNNAMED 117", null ]
        ,
        [ 2447, "02AEAA7F-6CB7-4408-B16C-5FB83D6D2455", 2447, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 119", "UNNAMED 119", null ]
        ,
        [ 2448, "FFCAB182-6C54-4BB6-9360-8E3ED6A32FCD", 2448, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 120", "UNNAMED 120", null ]
        ,
        [ 2449, "A938F8EF-976F-4392-94E6-A46A6945B1F4", 2449, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 124", "UNNAMED 124", null ]
        ,
        [ 2450, "08D3868F-7DF5-4D4F-9FC2-A7335AF2B98B", 2450, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 128", "UNNAMED 128", null ]
        ,
        [ 2451, "F6379689-AEE6-4424-84C7-511A45CEE5DC", 2451, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 129", "UNNAMED 129", null ]
        ,
        [ 2452, "186661CB-2D48-4EE0-8CC0-E17D796E6E35", 2452, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 139", "UNNAMED 139", null ]
        ,
        [ 2453, "965D14F9-8E6F-458A-A062-C320CD5A3D27", 2453, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 142", "UNNAMED 142", null ]
        ,
        [ 2454, "A3443EA4-D7C1-4155-90AC-B323849BC34F", 2454, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 144", "UNNAMED 144", null ]
        ,
        [ 2455, "24BA79D8-B1D0-4A81-A721-640B81A818C1", 2455, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 145", "UNNAMED 145", null ]
        ,
        [ 2456, "4BAFCC66-0F87-4BF0-853F-DAE8F058B6E7", 2456, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 146", "UNNAMED 146", null ]
        ,
        [ 2457, "A36C01DF-78CE-4DAE-AF6C-4A81314F8FE4", 2457, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 148", "UNNAMED 148", null ]
        ,
        [ 2458, "4FB12F45-4DBD-419A-90A4-2AA1F5E835D3", 2458, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 150", "UNNAMED 150", null ]
        ,
        [ 2459, "E9FD366A-A000-4201-BA78-30BA2965D416", 2459, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 151", "UNNAMED 151", null ]
        ,
        [ 2460, "AEFE4255-4469-471D-8102-C28D277E0A9B", 2460, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 152", "UNNAMED 152", null ]
        ,
        [ 2461, "DE3DEC0A-A77A-42A2-B8F2-514A9CB61686", 2461, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 153", "UNNAMED 153", null ]
        ,
        [ 2462, "B6AF2150-A361-47F6-AFE9-5D8AAE00F998", 2462, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 161", "UNNAMED 161", null ]
        ,
        [ 2463, "88B996E3-7F4F-4577-8C1D-1117D2AC2781", 2463, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 163", "UNNAMED 163", null ]
        ,
        [ 2464, "E9B157D3-75BA-4352-86FC-94E758D9CECB", 2464, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 165", "UNNAMED 165", null ]
        ,
        [ 2465, "6043C139-5FDA-4697-A8DB-F645EA860F99", 2465, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 185", "UNNAMED 185", null ]
        ,
        [ 2466, "C23A4225-CCCA-4A87-BB5D-A25E567B9E41", 2466, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 186", "UNNAMED 186", null ]
        ,
        [ 2467, "1D85FEE5-36F7-4F5C-BFEA-C311688A2240", 2467, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 187", "UNNAMED 187", null ]
        ,
        [ 2468, "234AB895-65DD-4A56-9027-52A83C2CF962", 2468, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 188", "UNNAMED 188", null ]
        ,
        [ 2469, "E7B5C191-AB03-48FC-B340-EBD4778F4CCB", 2469, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 190", "UNNAMED 190", " " ]
        ,
        [ 2470, "D8A2BE38-632B-4BDD-84F9-9C8D0B911DC6", 2470, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 191", "UNNAMED 191", " " ]
        ,
        [ 2471, "53263C84-899B-4882-B3BD-0CDD3B465794", 2471, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 192", "UNNAMED 192", " " ]
        ,
        [ 2472, "7C98A43A-9901-4833-9142-155A6C103DD4", 2472, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 193", "UNNAMED 193", " " ]
        ,
        [ 2473, "90152A54-E78F-4031-A014-3604AD11E3D9", 2473, 1413041316, "403253", 1413041316, "403253", "{\n}", "UNNAMED 2", "UNNAMED 2", null ]
        ,
        [ 2474, "52982B2D-014D-4230-92E7-D9342387707C", 2474, 1413041316, "403253", 1413041316, "403253", "{\n}", "UPLAND DR", "UPLAND", "DR" ]
        ,
        [ 2475, "8C31F287-2470-4A0E-B43D-6A8F1C6BBB5F", 2475, 1413041316, "403253", 1413041316, "403253", "{\n}", "UPPER TER", "UPPER", "TER" ]
        ,
        [ 2476, "986DCF22-AF76-45FF-8447-235FF09E6186", 2476, 1413041316, "403253", 1413041316, "403253", "{\n}", "UPPER SERVICE RD", "UPPER SERVICE", "RD" ]
        ,
        [ 2477, "15000832-68A5-4504-A821-54881DF46983", 2477, 1413041316, "403253", 1413041316, "403253", "{\n}", "UPTON AVE", "UPTON", "AVE" ]
        ,
        [ 2478, "01C2766A-CDA4-435E-8325-83DEF4EE2DA8", 2478, 1413041316, "403253", 1413041316, "403253", "{\n}", "UPTON ST", "UPTON", "ST" ]
        ,
        [ 2479, "C3335482-6404-4481-9B02-E7021935FFA8", 2479, 1413041316, "403253", 1413041316, "403253", "{\n}", "URANUS TER", "URANUS", "TER" ]
        ,
        [ 2480, "1B94514F-2E7D-4B5C-9C13-A4BA56988CA4", 2480, 1413041316, "403253", 1413041316, "403253", "{\n}", "URBANO DR", "URBANO", "DR" ]
        ,
        [ 2481, "BCA1C948-F1E6-44D1-AD93-3F8026750A1C", 2481, 1413041316, "403253", 1413041316, "403253", "{\n}", "UTAH ST", "UTAH", "ST" ]
        ,
        [ 2482, "056652C3-41D8-44DE-AF0D-BF662AAA550B", 2482, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALDEZ AVE", "VALDEZ", "AVE" ]
        ,
        [ 2483, "0745B4B7-4891-45A8-9D81-39B59EBEBC90", 2483, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALE AVE", "VALE", "AVE" ]
        ,
        [ 2484, "90C123BE-DB5D-40E4-8AEB-9AD8EEE3E870", 2484, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALENCIA ST", "VALENCIA", "ST" ]
        ,
        [ 2485, "9619453C-AA70-401D-B8CE-6073453CE760", 2485, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALERTON CT", "VALERTON", "CT" ]
        ,
        [ 2486, "21E9C321-927C-41B6-8AF2-4EC7EC42A254", 2486, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALLEJO ST", "VALLEJO", "ST" ]
        ,
        [ 2487, "8DFBF624-4D67-4E4C-A553-F61C1CA28B5E", 2487, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALLETTA CT", "VALLETTA", "CT" ]
        ,
        [ 2488, "4649CA3D-AE82-4305-8991-6971D61FCE5D", 2488, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALLEY ST", "VALLEY", "ST" ]
        ,
        [ 2489, "C2805241-B209-4D63-9A08-31395BC49CCF", 2489, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALMAR TER", "VALMAR", "TER" ]
        ,
        [ 2490, "58B6C153-8451-4E34-A354-A3E5ECC0B742", 2490, 1413041316, "403253", 1413041316, "403253", "{\n}", "VALPARAISO ST", "VALPARAISO", "ST" ]
        ,
        [ 2491, "72C6B968-AFD6-4DA2-AD11-0AEDE5329BDE", 2491, 1413041316, "403253", 1413041316, "403253", "{\n}", "VAN BUREN ST", "VAN BUREN", "ST" ]
        ,
        [ 2492, "89D60BBC-46D9-4560-B8D8-0A790B12929A", 2492, 1413041316, "403253", 1413041316, "403253", "{\n}", "VAN DYKE AVE", "VAN DYKE", "AVE" ]
        ,
        [ 2493, "A79B859B-9A9A-438E-8D61-FD215A17D28C", 2493, 1413041316, "403253", 1413041316, "403253", "{\n}", "VAN KEUREN AVE", "VAN KEUREN", "AVE" ]
        ,
        [ 2494, "9F52ED13-7E7E-40F4-B26E-602C321DFF9C", 2494, 1413041316, "403253", 1413041316, "403253", "{\n}", "VAN NESS AVE", "VAN NESS", "AVE" ]
        ,
        [ 2495, "62295BCF-7C19-4DC3-AB1F-54A457DA6D22", 2495, 1413041316, "403253", 1413041316, "403253", "{\n}", "VANDEWATER ST", "VANDEWATER", "ST" ]
        ,
        [ 2496, "48EDF603-0C7F-4A1B-AA75-607128799976", 2496, 1413041316, "403253", 1413041316, "403253", "{\n}", "VARA ST", "VARA", "ST" ]
        ,
        [ 2497, "4D8D85A4-FABB-4B5A-829F-D4607958568E", 2497, 1413041316, "403253", 1413041316, "403253", "{\n}", "VARELA AVE", "VARELA", "AVE" ]
        ,
        [ 2498, "F67BA6AD-7FB4-42C6-A550-6545696BFD16", 2498, 1413041316, "403253", 1413041316, "403253", "{\n}", "VARENNES ST", "VARENNES", "ST" ]
        ,
        [ 2499, "59319FD1-49AB-4580-AABB-53AE4612C65B", 2499, 1413041316, "403253", 1413041316, "403253", "{\n}", "VARNEY PL", "VARNEY", "PL" ]
        ,
        [ 2500, "D489C935-6472-4C9D-91B7-8299EDFABD20", 2500, 1413041316, "403253", 1413041316, "403253", "{\n}", "VASQUEZ AVE", "VASQUEZ", "AVE" ]
        ,
        [ 2501, "2FB99D8F-607B-41ED-9098-340B3E0DEE63", 2501, 1413041316, "403253", 1413041316, "403253", "{\n}", "VASSAR PL", "VASSAR", "PL" ]
        ,
        [ 2502, "F905D769-8267-4257-9839-A05DA73B915D", 2502, 1413041316, "403253", 1413041316, "403253", "{\n}", "VEGA ST", "VEGA", "ST" ]
        ,
        [ 2503, "A7F13FA2-CEA8-4F89-A55E-55D47A8EF1E3", 2503, 1413041316, "403253", 1413041316, "403253", "{\n}", "VELASCO AVE", "VELASCO", "AVE" ]
        ,
        [ 2504, "28D20B75-8440-42D9-8EF4-CDF25EAC5640", 2504, 1413041316, "403253", 1413041316, "403253", "{\n}", "VENARD ALY", "VENARD", "ALY" ]
        ,
        [ 2505, "7C47F2EF-01D2-46BB-8745-5F94756B51FA", 2505, 1413041316, "403253", 1413041316, "403253", "{\n}", "VENTURA AVE", "VENTURA", "AVE" ]
        ,
        [ 2506, "0D66B9C3-694A-4D15-9BAC-2F4B90E5D367", 2506, 1413041316, "403253", 1413041316, "403253", "{\n}", "VENUS ST", "VENUS", "ST" ]
        ,
        [ 2507, "A80B9E27-A4C3-48F9-916C-0932F190FB48", 2507, 1413041316, "403253", 1413041316, "403253", "{\n}", "VER MEHR PL", "VER MEHR", "PL" ]
        ,
        [ 2508, "20E032CF-DD67-4287-A63D-95775F342B62", 2508, 1413041316, "403253", 1413041316, "403253", "{\n}", "VERDI PL", "VERDI", "PL" ]
        ,
        [ 2509, "8DEC4C59-39EF-4B09-AB69-350AC4DF7B9F", 2509, 1413041316, "403253", 1413041316, "403253", "{\n}", "VERDUN WAY", "VERDUN", "WAY" ]
        ,
        [ 2510, "F9E306B1-0BD2-47B9-8962-8E504DD5C08E", 2510, 1413041316, "403253", 1413041316, "403253", "{\n}", "VERMONT ST", "VERMONT", "ST" ]
        ,
        [ 2511, "07164B5D-F415-44C1-925F-4B23AB8B2350", 2511, 1413041316, "403253", 1413041316, "403253", "{\n}", "VERNA ST", "VERNA", "ST" ]
        ,
        [ 2512, "BBA4031B-DAF6-4FCF-B16C-68E287878F6E", 2512, 1413041316, "403253", 1413041316, "403253", "{\n}", "VERNON ST", "VERNON", "ST" ]
        ,
        [ 2513, "0AE2B8E0-8B64-4849-8F7E-402CBED72D22", 2513, 1413041316, "403253", 1413041316, "403253", "{\n}", "VESTA ST", "VESTA", "ST" ]
        ,
        [ 2514, "BE871F7D-36C5-41B4-8D0E-3C00BF1CD82C", 2514, 1413041316, "403253", 1413041316, "403253", "{\n}", "VETERANS DR", "VETERANS", "DR" ]
        ,
        [ 2515, "68053593-4C0B-4C31-991F-1A8C1A470C88", 2515, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIA BUFANO", "VIA BUFANO", null ]
        ,
        [ 2516, "580C8B94-11D5-495F-A9CB-8BD2341FA34D", 2516, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIA FERLINGHETTI", "VIA FERLINGHETTI", null ]
        ,
        [ 2517, "E8949C01-2FB2-4B92-B558-D4C04CB553A2", 2517, 1413041316, "403253", 1413041316, "403253", "{\n}", "VICENTE ST", "VICENTE", "ST" ]
        ,
        [ 2518, "DE8C9E7B-9A50-4B02-904C-58F8DADC2CB8", 2518, 1413041316, "403253", 1413041316, "403253", "{\n}", "VICKSBURG ST", "VICKSBURG", "ST" ]
        ,
        [ 2519, "12ABEEBD-8DF1-4208-8AAD-237F21F7A263", 2519, 1413041316, "403253", 1413041316, "403253", "{\n}", "VICTORIA ST", "VICTORIA", "ST" ]
        ,
        [ 2520, "6B66561B-DE88-4D3C-87EA-B21C1C3B98CB", 2520, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIDAL DR", "VIDAL", "DR" ]
        ,
        [ 2521, "5E41D89E-760A-4565-94C7-03371D0EC844", 2521, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIENNA ST", "VIENNA", "ST" ]
        ,
        [ 2522, "1AD661D1-6543-41A3-B089-1D15109AF9DD", 2522, 1413041316, "403253", 1413041316, "403253", "{\n}", "VILLA TER", "VILLA", "TER" ]
        ,
        [ 2523, "C7FC4598-D142-488A-9795-0EA8B8255A34", 2523, 1413041316, "403253", 1413041316, "403253", "{\n}", "VINE TER", "VINE", "TER" ]
        ,
        [ 2524, "F0422DF3-CE38-435A-ADCA-41962017750E", 2524, 1413041316, "403253", 1413041316, "403253", "{\n}", "VINTON CT", "VINTON", "CT" ]
        ,
        [ 2525, "10AD52B9-50EC-4510-8F3D-C9628F1828CC", 2525, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIRGIL ST", "VIRGIL", "ST" ]
        ,
        [ 2526, "654EB529-A7DE-4445-8855-DA1D41E4E8C7", 2526, 1413041316, "403253", 1413041316, "403253", "{\n}", "VIRGINIA AVE", "VIRGINIA", "AVE" ]
        ,
        [ 2527, "405A2EF5-2633-4C69-981D-BF57D1B92482", 2527, 1413041316, "403253", 1413041316, "403253", "{\n}", "VISITACION AVE", "VISITACION", "AVE" ]
        ,
        [ 2528, "E089C3EE-4808-4F61-B478-E02B7C6369CB", 2528, 1413041316, "403253", 1413041316, "403253", "{\n}", "VISTA CT", "VISTA", "CT" ]
        ,
        [ 2529, "372D5ED2-2986-4C95-BD8C-BB2CBBD059A8", 2529, 1413041316, "403253", 1413041316, "403253", "{\n}", "VISTA LN", "VISTA", "LN" ]
        ,
        [ 2530, "C563DC5A-9C87-44BA-ADF4-11E953923B79", 2530, 1413041316, "403253", 1413041316, "403253", "{\n}", "VISTA VERDE CT", "VISTA VERDE", "CT" ]
        ,
        [ 2531, "28E63BA2-1367-4268-9F38-A443F631D90E", 2531, 1413041316, "403253", 1413041316, "403253", "{\n}", "VISTA VIEW CT", "VISTA VIEW", "CT" ]
        ,
        [ 2532, "5B18A422-2B52-48AC-A943-6C9BA007A013", 2532, 1413041316, "403253", 1413041316, "403253", "{\n}", "VON SCHMIDT ST", "VON SCHMIDT", "ST" ]
        ,
        [ 2533, "73D8EC11-6D43-4CB2-B6AF-78BFBFF3CB3E", 2533, 1413041316, "403253", 1413041316, "403253", "{\n}", "VULCAN STWY", "VULCAN", "STWY" ]
        ,
        [ 2534, "141CFC52-6A26-43DB-9DD5-6A3103AA3C03", 2534, 1413041316, "403253", 1413041316, "403253", "{\n}", "WABASH TER", "WABASH", "TER" ]
        ,
        [ 2535, "0FF5751A-279D-428D-A1B1-15B6BC557C4D", 2535, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAGNER ALY", "WAGNER", "ALY" ]
        ,
        [ 2536, "465AC5D5-8B55-47D9-951F-C73B9C212A7D", 2536, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAITHMAN WAY", "WAITHMAN", "WAY" ]
        ,
        [ 2537, "961554BC-3D9C-4305-875D-32063648B7D0", 2537, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALBRIDGE ST", "WALBRIDGE", "ST" ]
        ,
        [ 2538, "DEB8D623-DCA6-4FBA-B150-DA45804A31ED", 2538, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALDO ALY", "WALDO", "ALY" ]
        ,
        [ 2539, "C07E74F4-1518-4956-834C-976E7FF56FA4", 2539, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALKER CT", "WALKER", "CT" ]
        ,
        [ 2540, "6A381F2F-E785-4025-BF75-F2CED7BDACE0", 2540, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALKWAY", "WALKWAY", null ]
        ,
        [ 2541, "E5F86CB9-044C-4FBE-B8A8-FD02E1648A9F", 2541, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALL PL", "WALL", "PL" ]
        ,
        [ 2542, "F7E6E961-6D62-4C47-9865-5CC0D8B64F8D", 2542, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALLACE AVE", "WALLACE", "AVE" ]
        ,
        [ 2543, "B0EB3A3C-9361-428D-955C-072CC0EBDEAE", 2543, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALLEN ST", "WALLEN", "ST" ]
        ,
        [ 2544, "CBEB5DF8-0074-463B-824D-D8143AF59906", 2544, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALLER ST", "WALLER", "ST" ]
        ,
        [ 2545, "E0356C29-8575-4030-9093-83A5FDC29457", 2545, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALNUT ST", "WALNUT", "ST" ]
        ,
        [ 2546, "768119D8-A526-4F91-9757-659E9F060727", 2546, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALTER ST", "WALTER", "ST" ]
        ,
        [ 2547, "F088E0C5-9222-4F1D-99D6-608DF32D64D2", 2547, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALTER U LUM PL", "WALTER U LUM", "PL" ]
        ,
        [ 2548, "DA4F2088-31F1-415B-AE90-8BFDA3DA1D6F", 2548, 1413041316, "403253", 1413041316, "403253", "{\n}", "WALTHAM ST", "WALTHAM", "ST" ]
        ,
        [ 2549, "EDB15B54-35F4-4E25-B4FB-FC5FFE29F957", 2549, 1413041316, "403253", 1413041316, "403253", "{\n}", "WANDA ST", "WANDA", "ST" ]
        ,
        [ 2550, "5C38080D-DF60-491B-8637-41A217A07B0A", 2550, 1413041316, "403253", 1413041316, "403253", "{\n}", "WARD ST", "WARD", "ST" ]
        ,
        [ 2551, "9594E5A8-481C-47FD-A58B-A3A55EB6951A", 2551, 1413041316, "403253", 1413041316, "403253", "{\n}", "WARE ST", "WARE", "ST" ]
        ,
        [ 2552, "EFA03FFA-AD42-4494-9F46-3A4724865F53", 2552, 1413041316, "403253", 1413041316, "403253", "{\n}", "WARNER PL", "WARNER", "PL" ]
        ,
        [ 2553, "C8551D48-8BE6-4F24-BC95-8E97198035C3", 2553, 1413041316, "403253", 1413041316, "403253", "{\n}", "WARREN DR", "WARREN", "DR" ]
        ,
        [ 2554, "DEFC44E2-A39E-40B6-872B-DF5B395B32AD", 2554, 1413041316, "403253", 1413041316, "403253", "{\n}", "WASHBURN ST", "WASHBURN", "ST" ]
        ,
        [ 2555, "8F71792E-D870-48DA-BABB-E2C0FEB4640C", 2555, 1413041316, "403253", 1413041316, "403253", "{\n}", "WASHINGTON BLVD", "WASHINGTON", "BLVD" ]
        ,
        [ 2556, "B746AF73-6FDC-4362-BB8E-7FB43F37374C", 2556, 1413041316, "403253", 1413041316, "403253", "{\n}", "WASHINGTON ST", "WASHINGTON", "ST" ]
        ,
        [ 2557, "3F798F9B-C9EA-4440-8B3E-EAD8A604F5D4", 2557, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATCHMAN WAY", "WATCHMAN", "WAY" ]
        ,
        [ 2558, "06C77A1F-C5C4-4EC7-B49E-AFC5F30AC592", 2558, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATER ST", "WATER", "ST" ]
        ,
        [ 2559, "928FD272-1D80-4BED-AA83-AEAC2ADC96F1", 2559, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATERLOO ST", "WATERLOO", "ST" ]
        ,
        [ 2560, "B7580DDA-1D88-4C4B-8C29-9F49CE4A6B70", 2560, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATERVILLE ST", "WATERVILLE", "ST" ]
        ,
        [ 2561, "F0C09CF6-32B8-4BE5-92F6-5637D89A2884", 2561, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATT AVE", "WATT", "AVE" ]
        ,
        [ 2562, "E5787657-9FF3-4518-83EC-B8C07327E49C", 2562, 1413041316, "403253", 1413041316, "403253", "{\n}", "WATTSON PL", "WATTSON", "PL" ]
        ,
        [ 2563, "A5277CFE-DBC4-4FFD-A305-BB6332FC4891", 2563, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAVERLY PL", "WAVERLY", "PL" ]
        ,
        [ 2564, "2801E6DD-381C-492C-BEFA-A7C18F5069E5", 2564, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAWONA ST", "WAWONA", "ST" ]
        ,
        [ 2565, "F9BD32B4-90D8-4D60-BE93-932E4619C6FB", 2565, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAYLAND ST", "WAYLAND", "ST" ]
        ,
        [ 2566, "6CEDD2F0-557A-418C-ABEF-FF662424E63B", 2566, 1413041316, "403253", 1413041316, "403253", "{\n}", "WAYNE PL", "WAYNE", "PL" ]
        ,
        [ 2567, "07B368E5-9BE9-4FA3-97C8-EB50D9E81995", 2567, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEBB PL", "WEBB", "PL" ]
        ,
        [ 2568, "33FF9756-D882-4637-B81C-F948A67FC84C", 2568, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEBSTER ST", "WEBSTER", "ST" ]
        ,
        [ 2569, "F9C43C0F-C613-4176-8480-6DB9C2B1BCA1", 2569, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEDEMEYER ST", "WEDEMEYER", "ST" ]
        ,
        [ 2570, "10460D27-8E84-4F85-BDBD-6607A5FCBA9C", 2570, 1413041316, "403253", 1413041316, "403253", "{\n}", "WELDON ST", "WELDON", "ST" ]
        ,
        [ 2571, "9538AE6E-C1E2-4549-A6E5-8B231F99A4BC", 2571, 1413041316, "403253", 1413041316, "403253", "{\n}", "WELSH ST", "WELSH", "ST" ]
        ,
        [ 2572, "5F856BCE-E275-4856-89AF-D04FF29A1218", 2572, 1413041316, "403253", 1413041316, "403253", "{\n}", "WENTWORTH PL", "WENTWORTH", "PL" ]
        ,
        [ 2573, "C8752747-0E0D-47AA-A275-A2A50DEA299A", 2573, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST", "WEST", null ]
        ,
        [ 2574, "F8354163-DC5E-4CA3-B005-720C430627F2", 2574, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST RD", "WEST", "RD" ]
        ,
        [ 2575, "844D7D11-BB03-43E1-A8DC-6EEB498ABA15", 2575, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST BROADWAY", "WEST BROADWAY", null ]
        ,
        [ 2576, "B0967388-F557-4418-85C5-DA72BDAF2B89", 2576, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST CLAY ST", "WEST CLAY", "ST" ]
        ,
        [ 2577, "C6C17DE1-9D8F-4BA3-8FAB-DD258DD01954", 2577, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST CRYSTAL COVE TER", "WEST CRYSTAL COVE", "TER" ]
        ,
        [ 2578, "83E31C0A-4E69-4815-9243-2502DB4E6D80", 2578, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST HALLECK ST", "WEST HALLECK", "ST" ]
        ,
        [ 2579, "F4D451D1-B78B-4EF0-AB70-C81C880761A9", 2579, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST PACIFIC AVE", "WEST PACIFIC", "AVE" ]
        ,
        [ 2580, "072F69E3-BFF9-401E-B823-5D0DAEABC7A7", 2580, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST POINT RD", "WEST POINT", "RD" ]
        ,
        [ 2581, "DB30FDAC-4A8A-4343-A285-AEC4B05CA770", 2581, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST PORTAL AVE", "WEST PORTAL", "AVE" ]
        ,
        [ 2582, "E72E1FBD-6C59-41CF-A1BF-8167E87AD7E9", 2582, 1413041316, "403253", 1413041316, "403253", "{\n}", "WEST VIEW AVE", "WEST VIEW", "AVE" ]
        ,
        [ 2583, "DF0874C8-D64C-4331-B23A-8165692CC1AB", 2583, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTBROOK CT", "WESTBROOK", "CT" ]
        ,
        [ 2584, "4456E74A-2C8B-425F-9940-2D329754DA8C", 2584, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTERN SHORE LN", "WESTERN SHORE", "LN" ]
        ,
        [ 2585, "2CE59E07-0FEC-4098-ABCD-A3D4EAABD1AD", 2585, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTGATE DR", "WESTGATE", "DR" ]
        ,
        [ 2586, "14324978-8F7C-4C74-A071-83144541302D", 2586, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTMOORLAND DR", "WESTMOORLAND", "DR" ]
        ,
        [ 2587, "011DEECC-81E3-4530-99FF-F31FE87CF2A5", 2587, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTON CT", "WESTON", "CT" ]
        ,
        [ 2588, "D1836DB9-CA50-4E29-822E-4FCAF361FF23", 2588, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTSIDE DR", "WESTSIDE", "DR" ]
        ,
        [ 2589, "8D56FCDA-394E-48B5-A672-23B271BEEA29", 2589, 1413041316, "403253", 1413041316, "403253", "{\n}", "WESTWOOD DR", "WESTWOOD", "DR" ]
        ,
        [ 2590, "DA60DFA3-F727-4A58-B8CD-8D88BA6E65E6", 2590, 1413041316, "403253", 1413041316, "403253", "{\n}", "WETMORE ST", "WETMORE", "ST" ]
        ,
        [ 2591, "0A9688F5-B8AE-4861-B8CD-2DF06E6F25FB", 2591, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHEAT ST", "WHEAT", "ST" ]
        ,
        [ 2592, "C496A4A8-9369-4215-80E4-7DFCC17B701D", 2592, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHEELER AVE", "WHEELER", "AVE" ]
        ,
        [ 2593, "53FE8276-C395-4041-94EE-762DD1B58C36", 2593, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHIPPLE AVE", "WHIPPLE", "AVE" ]
        ,
        [ 2594, "D33E31C2-8607-444F-956F-636F5C8EE159", 2594, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITE ST", "WHITE", "ST" ]
        ,
        [ 2595, "67A6AD0C-3727-46FC-867C-0E7A133FE744", 2595, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITECLIFF WAY", "WHITECLIFF", "WAY" ]
        ,
        [ 2596, "3A873E7D-CDE2-4885-9BCB-6137AD64CA5F", 2596, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITFIELD CT", "WHITFIELD", "CT" ]
        ,
        [ 2597, "F4D6D0DF-020C-4E65-BAAC-072D4E33E0D1", 2597, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITING ST", "WHITING", "ST" ]
        ,
        [ 2598, "86C531E5-170A-4C46-9852-E3C5F12274C7", 2598, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITING WAY", "WHITING", "WAY" ]
        ,
        [ 2599, "4A9A925A-A805-40FC-A88A-70A399967811", 2599, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITNEY ST", "WHITNEY", "ST" ]
        ,
        [ 2600, "B745FD88-7BDB-4C42-9CE4-62CE39A51EAE", 2600, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITNEY YOUNG CIR", "WHITNEY YOUNG", "CIR" ]
        ,
        [ 2601, "095C0B69-9720-493F-85BB-83224FB0BADD", 2601, 1413041316, "403253", 1413041316, "403253", "{\n}", "WHITTIER ST", "WHITTIER", "ST" ]
        ,
        [ 2602, "6BACB318-7F63-4494-B3FA-D8BD4B9A3CE5", 2602, 1413041316, "403253", 1413041316, "403253", "{\n}", "WIESE ST", "WIESE", "ST" ]
        ,
        [ 2603, "10016E36-8F65-4BBD-8911-4975E26E2EE4", 2603, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILDE AVE", "WILDE", "AVE" ]
        ,
        [ 2604, "8810E3DD-701E-4815-9BB1-0B5EEA3079AD", 2604, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILDER ST", "WILDER", "ST" ]
        ,
        [ 2605, "96197396-7CA0-4723-A90F-EB2748310C52", 2605, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILDWOOD WAY", "WILDWOOD", "WAY" ]
        ,
        [ 2606, "6CAECA66-96C4-4D8A-820D-CA4BD605807E", 2606, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLARD ST", "WILLARD", "ST" ]
        ,
        [ 2607, "0716E74B-0576-471E-8AB3-F9E6EFC8D2F0", 2607, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLARD ST NORTH", "WILLARD", "ST" ]
        ,
        [ 2608, "7EC62BF3-2A80-436E-8C04-39C2B1AA7F28", 2608, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLIAMS AVE", "WILLIAMS", "AVE" ]
        ,
        [ 2609, "1E814944-008F-4F9D-9EF0-95740CD0058C", 2609, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLIAR AVE", "WILLIAR", "AVE" ]
        ,
        [ 2610, "FC98BC24-8D90-4735-8032-196024EF4477", 2610, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLIE B KENNEDY DR", "WILLIE B KENNEDY", "DR" ]
        ,
        [ 2611, "1E979BD1-BC53-4FA7-B2DF-D2B5A209D00B", 2611, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLOW ST", "WILLOW", "ST" ]
        ,
        [ 2612, "1BA96EBA-5721-43C8-9D33-2BA09C6DC08B", 2612, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILLS ST", "WILLS", "ST" ]
        ,
        [ 2613, "BE862599-8ECC-4D0F-BE82-3B8810CB14BB", 2613, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILMOT ST", "WILMOT", "ST" ]
        ,
        [ 2614, "CEE2888B-9923-4F7D-BA3F-08188A677492", 2614, 1413041316, "403253", 1413041316, "403253", "{\n}", "WILSON ST", "WILSON", "ST" ]
        ,
        [ 2615, "4C3F5C04-7D62-40BB-BAF9-5BF40F477C83", 2615, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINDING WAY", "WINDING", "WAY" ]
        ,
        [ 2616, "221D54F7-6401-4C99-A569-8A94F89AFE5C", 2616, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINDSOR PL", "WINDSOR", "PL" ]
        ,
        [ 2617, "F8DA3885-5FAF-494F-B47D-3FEFB1663E6D", 2617, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINFIELD ST", "WINFIELD", "ST" ]
        ,
        [ 2618, "A5E647CC-A7B4-444D-811D-29C4E63A3643", 2618, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINN WAY", "WINN", "WAY" ]
        ,
        [ 2619, "9F9145D1-5306-4CDE-B491-6B6653169F59", 2619, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINSTON DR", "WINSTON", "DR" ]
        ,
        [ 2620, "3B0EB7F1-1E7F-4565-9058-CBF9FD3E72EA", 2620, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINTER PL", "WINTER", "PL" ]
        ,
        [ 2621, "B4483230-B210-44AC-8C0E-AF8D3688FC17", 2621, 1413041316, "403253", 1413041316, "403253", "{\n}", "WINTHROP ST", "WINTHROP", "ST" ]
        ,
        [ 2622, "A2C68175-2C42-4CFD-A90B-B535052CD759", 2622, 1413041316, "403253", 1413041316, "403253", "{\n}", "WISCONSIN ST", "WISCONSIN", "ST" ]
        ,
        [ 2623, "157DA38B-461E-4A7E-B216-979E4108143B", 2623, 1413041316, "403253", 1413041316, "403253", "{\n}", "WISSER CT", "WISSER", "CT" ]
        ,
        [ 2624, "9BC97627-11B9-4C33-B4F1-63784F2DE5E0", 2624, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOOD ST", "WOOD", "ST" ]
        ,
        [ 2625, "13206197-6E9F-4B32-8BBD-16C883E94ABE", 2625, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOODACRE DR", "WOODACRE", "DR" ]
        ,
        [ 2626, "2F76A577-A164-45ED-8702-2E45AC2FA56B", 2626, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOODHAVEN CT", "WOODHAVEN", "CT" ]
        ,
        [ 2627, "F3059CCE-BD78-4661-861F-70FC6A05C603", 2627, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOODLAND AVE", "WOODLAND", "AVE" ]
        ,
        [ 2628, "2E952E68-CFB8-4E44-BE3D-DCA1980C8AAB", 2628, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOODSIDE AVE", "WOODSIDE", "AVE" ]
        ,
        [ 2629, "BB54E80C-47E9-439F-AEB3-CE2E83101BE5", 2629, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOODWARD ST", "WOODWARD", "ST" ]
        ,
        [ 2630, "316F057B-09BF-49B1-9C65-4A2D93311785", 2630, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOOL CT", "WOOL", "CT" ]
        ,
        [ 2631, "A526FD77-44B7-40FA-8EAC-25226E62A9AC", 2631, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOOL ST", "WOOL", "ST" ]
        ,
        [ 2632, "9914B1A8-DBD0-42B5-9874-7D8B8C539B46", 2632, 1413041316, "403253", 1413041316, "403253", "{\n}", "WOOLSEY ST", "WOOLSEY", "ST" ]
        ,
        [ 2633, "08D59476-F47A-4751-BD71-0BA1A6426AB2", 2633, 1413041316, "403253", 1413041316, "403253", "{\n}", "WORCESTER AVE", "WORCESTER", "AVE" ]
        ,
        [ 2634, "FB9271CC-0403-4F62-A909-EB53B0E00095", 2634, 1413041316, "403253", 1413041316, "403253", "{\n}", "WORDEN ST", "WORDEN", "ST" ]
        ,
        [ 2635, "8EA983D5-DB58-45C9-B4B4-8DD1A7853A3B", 2635, 1413041316, "403253", 1413041316, "403253", "{\n}", "WORTH ST", "WORTH", "ST" ]
        ,
        [ 2636, "1DD2D720-DAE1-4C56-96A6-D5AC4CA492A7", 2636, 1413041316, "403253", 1413041316, "403253", "{\n}", "WRIGHT CT", "WRIGHT", "CT" ]
        ,
        [ 2637, "EEEA291E-1BF1-4283-99A0-3BA8BDC1996C", 2637, 1413041316, "403253", 1413041316, "403253", "{\n}", "WRIGHT LOOP", "WRIGHT", "LOOP" ]
        ,
        [ 2638, "4D695914-EC89-4270-BBAF-AE748A2AEB03", 2638, 1413041316, "403253", 1413041316, "403253", "{\n}", "WRIGHT ST", "WRIGHT", "ST" ]
        ,
        [ 2639, "C5937ACA-9B3F-4E5C-9345-0043F09EC13F", 2639, 1413041316, "403253", 1413041316, "403253", "{\n}", "WYMAN AVE", "WYMAN", "AVE" ]
        ,
        [ 2640, "2533C8F0-9B4B-4191-83B4-8E4F399BF1B4", 2640, 1413041316, "403253", 1413041316, "403253", "{\n}", "WYTON LN", "WYTON", "LN" ]
        ,
        [ 2641, "2296482D-4C30-491C-9B22-B9108BA42FD5", 2641, 1413041316, "403253", 1413041316, "403253", "{\n}", "YACHT RD", "YACHT", "RD" ]
        ,
        [ 2642, "94F679FD-0366-458A-AFBE-B9A93886EF33", 2642, 1413041316, "403253", 1413041316, "403253", "{\n}", "YALE ST", "YALE", "ST" ]
        ,
        [ 2643, "12286CC9-209D-4542-BDA6-3D570D146BEF", 2643, 1413041316, "403253", 1413041316, "403253", "{\n}", "YELLOW CAB ACCESS ROAD", "YELLOW CAB ACCESS ROAD", null ]
        ,
        [ 2644, "30B744EF-E581-4D74-A991-C571DCB92779", 2644, 1413041316, "403253", 1413041316, "403253", "{\n}", "YERBA BUENA AVE", "YERBA BUENA", "AVE" ]
        ,
        [ 2645, "D2A0A686-B6FA-4BB3-87D4-275FCD8D284C", 2645, 1413041316, "403253", 1413041316, "403253", "{\n}", "YERBA BUENA DR", "YERBA BUENA", "DR" ]
        ,
        [ 2646, "E44EFD82-34C7-41C8-9E09-0828075F965B", 2646, 1413041316, "403253", 1413041316, "403253", "{\n}", "YERBA BUENA LN", "YERBA BUENA", "LN" ]
        ,
        [ 2647, "4A02EC30-4594-481C-A63C-FA77F38BEC35", 2647, 1413041316, "403253", 1413041316, "403253", "{\n}", "YERBA BUENA RD", "YERBA BUENA", "RD" ]
        ,
        [ 2648, "411658F9-C883-4726-8945-D1DA0B1DC372", 2648, 1413041316, "403253", 1413041316, "403253", "{\n}", "YORBA ST", "YORBA", "ST" ]
        ,
        [ 2649, "2F0E0028-6C64-4B26-BC05-E593A91C9C13", 2649, 1413041316, "403253", 1413041316, "403253", "{\n}", "YORK ST", "YORK", "ST" ]
        ,
        [ 2650, "9897A2EE-658A-4F95-A17A-4D9BE794B8CF", 2650, 1413041316, "403253", 1413041316, "403253", "{\n}", "YOSEMITE AVE", "YOSEMITE", "AVE" ]
        ,
        [ 2651, "41F188F4-E3A2-40AB-B6D5-A4877CB3E8AA", 2651, 1413041316, "403253", 1413041316, "403253", "{\n}", "YOUNG CT", "YOUNG", "CT" ]
        ,
        [ 2652, "38B2F364-78E5-4F25-8929-F83D2F8A7DB3", 2652, 1413041316, "403253", 1413041316, "403253", "{\n}", "YOUNG ST", "YOUNG", "ST" ]
        ,
        [ 2653, "17073872-D0C2-4CE4-B46C-9E87ED4D5FFE", 2653, 1413041316, "403253", 1413041316, "403253", "{\n}", "YUKON ST", "YUKON", "ST" ]
        ,
        [ 2654, "B3F31B78-2722-4975-9107-3AE0BA676E6B", 2654, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZAMPA LN", "ZAMPA", "LN" ]
        ,
        [ 2655, "D8A8DF07-B12B-40D6-A510-5F353BAC5A78", 2655, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZANOWITZ AVE", "ZANOWITZ", "AVE" ]
        ,
        [ 2656, "25BBE680-D5EB-4A02-9855-F6B362220F66", 2656, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZANOWITZ ST", "ZANOWITZ", "ST" ]
        ,
        [ 2657, "8F05BDD3-E8D3-4ADF-BD0B-3CD547DA2B1E", 2657, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZENO PL", "ZENO", "PL" ]
        ,
        [ 2658, "B3CD5F4E-B395-4960-B1EB-03E447AC6DD5", 2658, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZIRCON PL", "ZIRCON", "PL" ]
        ,
        [ 2659, "53D2066B-8125-4F8A-9A96-5DA066CFB5DE", 2659, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZOE ST", "ZOE", "ST" ]
        ,
        [ 2660, "E732B234-D2E0-48BB-81BF-CDD122467B97", 2660, 1413041316, "403253", 1413041316, "403253", "{\n}", "ZOO RD", "ZOO", "RD" ]
    ];

var names =
    [
        "Marjory Lorenzo  ",
        "Warren Winslett  ",
        "Giovanna Galindez  ",
        "Magdalena Kamm  ",
        "Carrol Underwood  ",
        "Kareen Mccurdy  ",
        "Alina Curl  ",
        "Karol Bigler  ",
        "Adelaide Densmore  ",
        "Vada Forster  ",
        "Eve Miera  ",
        "Ward Paul  ",
        "Glenna Tavernia  ",
        "Penelope Guilliams  ",
        "Aleida Asbill  ",
        "Cathi Enlow  ",
        "Kasey Negus  ",
        "Vena Vieyra  ",
        "Jarrod Whetsel  ",
        "Lena Macko  ",
        "Allyn Buchannon  ",
        "Le Spurr  ",
        "Lesley Peters  ",
        "Charmaine Claunch  ",
        "Fletcher Zarate  ",
        "Tiana Mijangos  ",
        "Hailey Novotny  ",
        "Marica Schmoll  ",
        "Palma Feng  ",
        "Delores Sack  ",
        "Verna Altieri  ",
        "Delsie Vizcaino  ",
        "Les Nobriga  ",
        "Ofelia Jameson  ",
        "Ignacio Poindexter  ",
        "Cristopher Kropf  ",
        "Odette Schauer  ",
        "Krysten Scheidt  ",
        "Lino Dunne  ",
        "Derick Borja  ",
        "Sarina Waddell  ",
        "Jaimie Mcmillen  ",
        "Sharlene Vitti  ",
        "Jerold Spindler  ",
        "Osvaldo Simkins  ",
        "April Denson  ",
        "Sonya Askew  ",
        "Clark Katz  ",
        "Vanesa Ericksen  ",
        "Cleta Latham  "


    ];

var realAddress = [
    {
        addr1:"3526 Geary Blvd",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94118"
    },
    {
        addr1:"1515 Waller St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94117"
    },
    {
        addr1:"1323 Fulton St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94117"
    },
    {
        addr1:"2875 Van Ness Ave",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94109"
    },
    {
        addr1:"244 Townsend St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94107"
    },
    {
        addr1:"1420 Castro St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94114"
    },
    {
        addr1:"50 Post St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94104"
    },
    {
        addr1:"2030 Ocean Ave",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94127"
    },
    {
        addr1:"101 California St",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94111"
    },
    {
        addr1:"51 Leland Ave",
        addr2:"",
        city:"San Francisco, CA",
        state:"CA",
        zip:"94134"
    }
]

/**
 * Return n random digits.
 * @param n
 * @returns {number}
 */
function r_digits(n) {
    var ret = '';
    for (var i = 0; i < n; i++) {
        ret += Math.floor(Math.random() * 10);
    }
    return ret;
}

function getRand(arr) {
    var r = Math.floor(Math.random() * arr.length);

    return arr[r];
}

function getPhone() {
    return "(" + r_digits(3) + ") " + r_digits(3) + "-" + r_digits(4);
}

function getFurniture() {
    var title = getRand(furniture);
    var rp = Math.random() * 5 + 1;
    photo_url = [];

    for (var i = 0; i < rp; i++) {
        var photo = getRand(mock.images);
        photo_url.push("http://farm" + photo.farm +
            ".static.flickr.com/" + photo.server + "/" +
            photo.id + "_" + photo.secret + "_");
    }


    return {
        itemId: Math.random(),
        itemTitle: title,
        itemDesc: getRand(adjectives) + " " + getRand(colors) + " " + title,
        contact: getContact(),
        address: getRand(realAddress),// getAddress(),
        images: photo_url
    };
}

function getContact() {
    var name = getRand(names);
    return {
        name: name,
        phone: getPhone(),
        email: name.split(" ")[0] + r_digits(3) + "@gmail.com"
    }
}

function getAddress() {
    return {
        addr1: Math.floor(Math.random() * 9999) + " " + getRand(streetNames)[8],
        addr2: Math.random() > .7 ? "APT " + Math.floor(Math.random() * 9999) : false,
        city: "San Francisco",
        state: "CA",
        zip: "95134"
    };
}


function addMockItems(n) {
    for (var i = 0; i < n; i++) {
        var f = getFurniture();
        dust.render("item", f, function(address){
            return function (err, text) {
                var newItem = $(text);
                newItem.on('routeQueue',setToRoute);
                newItem.on('requestQueue',setToRequest);
                newItem.find('button.toRoute').click(function(item){return function(){item.appendTo("#routes").trigger('routeQueue')}}(newItem));
                newItem.find('button.toRequest').click(function(item){return function(){item.prependTo("#requests").trigger('requestQueue')}}(newItem));

                $("#requests").append(newItem);

                geoCode(newItem,address)
            }
        }(f.address));

    };
}