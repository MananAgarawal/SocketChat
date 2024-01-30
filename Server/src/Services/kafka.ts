import { Kafka , Producer } from 'kafkajs';
import fs from 'fs'
import path from 'path'

const kafka = new Kafka({
    brokers : ["kafka-f8b0616-maverickmanan-a4e5.a.aivencloud.com:25909"],
    ssl : {
        ca : [fs.readFileSync(path.resolve("./ca.pem"), "utf-8")]
    },
    sasl : {
        username : "avnadmin",
        password : "AVNS_6p3iXM_jPLISqTWfzk3",
        mechanism : "plain"
    }
})

let producer : null | Producer = null;


export async function CreateProducer(){
    if(producer) return producer;

    const _producer = kafka.producer()
    await _producer.connect()
    producer = _producer
    return producer;
}

interface ChatMessage {
    MsgId: string;
    ActualMessage: string;
    SendedBy: string;
    Timestamp: string;
}

export async function ProduceMessages(chatid : string , msg : ChatMessage){
    // Convert the object to a JSON string
    const jsonString = JSON.stringify(msg);
    // Convert the JSON string to a Buffer
    const bufferValue = Buffer.from(jsonString);

    const producer = await CreateProducer();
    producer.send({
        messages : [{ key : chatid , value : bufferValue}],
        topic : "MESSAGES"
    })
    return true;
}


export default kafka;
