
type userId = string;

 export interface Chat {
    name: string;
    userid: userId;
    message : string;
    upvotes : userId[]; // who has upvoted what 
}

export abstract class Store {

    constructor(){

    }

    initroom(roomId : string){

    }

    addchat(room: string, limit: number, offset : number){

    }

    upvote(room : string, chatid: string){

    }

}
