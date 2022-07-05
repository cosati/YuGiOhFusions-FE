export interface Card {
    id: number,
    cardName: string, 
    atk: number, 
    def: number, 
    level: number,
    cardType: string,
    monsterType: string,
    cost: number;
    addedToHand: number;
}