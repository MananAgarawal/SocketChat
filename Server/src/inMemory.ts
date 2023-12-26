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

    initroom(roomId : string ){
        this.store.set(roomId, {
            roomId,
            chats : [],
        })
    }

    addchat(roomId: string, limit: number, offset : number){
        const room = this.store.get(roomId);
        if(!room){
            return [];
        }
        return room.chats.slice(0,limit)
    }

    upvote(room : string, chatid: string){

    }

}