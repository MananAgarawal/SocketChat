import { Store, Chat } from "store/store";

export interface Room{
    roomId: string;
    chats : Chat[];

}

export class InMemoryStore implements Store {

    private store : Map<string, Room>;

    constructor(){
        this.store = new Map<string, Room>()
    }

    initroom(room: string, limit: number, offset : number){

    }

    addchat(room: string, limit: number, offset : number){

    }

    upvote(room : string, chatid: string){

    }

}