export default function two_crystal_balls(breaks: boolean[]): number {
    const jump_amount = Math.floor(Math.sqrt(breaks.length));
    let i = jump_amount;

    for(; i < breaks.length; i+=jump_amount){
        if(breaks[i]) break;
    }

    let j = i - jump_amount;
    //for(; j < Math.min(i, breaks.length); j++){
    for(; j < i && j < breaks.length; j++){
        if(breaks[j]) return j;
    }
    return -1;
}