export class DestinoViaje {
    private selected: boolean;
    public servicios: string[];

    constructor(public nombre: string,public url: string, public votes: number = 0){ 
        this.servicios = ['desayuno','spa','almuerzo','gym'];
    }
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected= s;
    }
    VoteUp(){
        this.votes++;
    }
    VoteDown(){
        this.votes--;
    }

}
