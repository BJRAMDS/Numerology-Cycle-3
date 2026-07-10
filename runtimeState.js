/*
    Codex Convergence
    Runtime State Store
    Version 0.1.0
*/


export const runtimeState = {

    version: "0.1.0",

    status: "ACTIVE",

    phase: "onUpdate",

    theme: "day",

    calculations: {},

    events: []

};





export function updateRuntimeState(
    key,
    value
){

    runtimeState[key] = value;

    return runtimeState;

}





export function recordRuntimeEvent(
    message,
    payload = {}
){

    const event = {

        timestamp:
            new Date().toLocaleTimeString(),

        message,

        payload

    };


    runtimeState.events.push(event);


    return event;

}





export function getRuntimeState(){

    return runtimeState;

}
