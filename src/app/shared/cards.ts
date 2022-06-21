export interface Card {
    cardId: number,
    cardName: string, 
    atk: number, 
    def: number, 
    level: number,
    cardType: string,
    monsterType: string,
    cost: number;
    addedToHand: number;
}

export const cards = [
    {
        cardId: 1,
        cardName: "Blue-eyes White Dragon",
        atk: 3000,
        def: 2500,
        level: 8,
        cardType: "Monster",
        monsterType: "Dragon",
        cost: 999999,
        addedToHand: 0
    },
    {
        cardId: 2,
        cardName: "Mystical Elf",
        atk: 800,
        def: 2000,
        level: 4,
        cardType: "Monster",
        monsterType: "Spellcaster",
        cost: 160,
        addedToHand: 0        
    },
    {
        cardId: 3,
        cardName: "Hitotsu-me Giant",
        atk: 1200,
        def: 1000,
        level: 4,
        cardType: "Monster",
        monsterType: "Beast-Warrior",
        cost: 70,
        addedToHand: 0
    },
    {
        cardId: 4,
        cardName: "Baby Dragon",
        atk: 1200,
        def: 700,
        level: 3,
        cardType: "Monster",
        monsterType: "Dragon",
        cost: 999999,
        addedToHand: 0
    }
];