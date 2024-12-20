export function getRandomWord() {
    const CATWORDS = [
        "purr", "meow", "whiskers", "claws", "fur", "tail", "ears", "paws", "eyes", "nose",
        "pads", "muzzle", "whiskerpad", "coat", "tabby", "calico", "tuxedo", "siamese", "persian", "mainecoon",
        "ragdoll", "bengal", "sphinx", "abyssinian", "domestic", "kitty", "kitten", "catnip", "litter", "scratch",
        "grooming", "pounce", "jump", "stretch", "nap", "cuddle", "knead",
        "hiss", "growl", "prowl", "hunt", "chase", "leap", "stalk", "sleep", "climb",
        "curl", "clean", "hairball", "play", "bat", "swipe", "bite", "clawing", "laser", "ball",
        "feathers", "string", "toy", "collar", "bell", "bowl", "dish", "milk", "tuna", "salmon",
        "treats", "nibble", "lap", "feline",  "litterbox", "yarn", "mouse",
        "fish", "sofa", "bed", "basket", "window", "sunbeam", "curiosity", "mischief",
        "agility", "grace", "quiet", "independent", "loyal", "companion"
    ];

    const randomIndex = Math.floor(Math.random() * CATWORDS.length);
    return CATWORDS[randomIndex];
}

export function getFarewellText() {
    const TEXTS = [
        "Paws and Reflect...",
        "Un-Fur-tunate, Try Again!",
        "Purr-haps Next Time!",
        "Not Quite The Purr-fect Move.",
        "A Whisker Away From Success!",
        "One Life Scratched Off... Careful Now!",
        "Fur-Real? That Was Close!",
        "Meow-mentarily Off Target!",
        "Not Every Pounce Is A Success.",
        "Your Purr-sistence Will Pay Off!",
        "A Purr-suasive Miss! Onward!",
        "Meow-velous Effort, But Not Quite!",
        "Oops, That Was Claw-fully Close!"
    ]

    const randomIndex = Math.floor(Math.random() * TEXTS.length);
    return TEXTS[randomIndex];
}