export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private size: number;
    private list: Array<T>;

    constructor(size:number) {
        this.length = 0;
        this.capacity = size;
        this.size = size;
        this.list = Array<T>(this.capacity);
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if(idx > this.length) return;
        if(this.length === this.capacity){
            this.list = this.list.concat(new Array<T>(this.size));
            this.capacity+=this.size;
        }
        for(let i = this.length; i>idx; --i){
            this.list[i] = this.list[i - 1];
        }
        this.length ++;
        this.list[idx] = item;
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    remove(item: T): T | undefined {
        for(let i = 0; i< this.length; ++i){
            if(this.list[i] === item) return this.removeAt(i);
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if(idx < this.length){
            return this.list[idx];
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if(idx < this.length){
            const returnVal = this.list[idx];
            for(let i = idx+1; i<this.length; ++i){
                this.list[i-1] = this.list[i]
            }
            this.length--;
            return returnVal;
        }
        return undefined;
    }
}