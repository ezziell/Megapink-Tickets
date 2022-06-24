import { createMachine } from "xstate/lib/Machine";
import { assign } from "xstate";

const reset = assign({
    buyers: (_, event) => event.buyers = [],
    selectedSeat: (_, event) => event.selectedSeat = "",
  });
  

const bookingMachine = createMachine({
    id: "Compra tickets",
    initial: "initial",
    context: {
        buyers: [],
        selectedSeat: '',
    },
    states: {
        initial: {
            on: {
                START: {
                    target: "search",
                    actions: 'imprimirInicio'
                },
            },
        },
        search: {
            on: {
                CONTINUE: {
                    target: 'buyers',
                    actions: assign({
                        selectedSeat: (context, event) => event.selectedSeat
                    })
                },
                CANCEL: {
                    target: "initial",
                    actions: reset
                }
            },
        },
        buyers: {
            on: {
                DONE: {
                    target: 'tickets',
                    cond: 'moreThanOneBuyer'
                },
                CANCEL: {
                    target: "initial",
                    actions: reset
                },
                BACK: "search",
                ADD: {
                    target: 'buyers',
                    actions: assign(
                        (context, event) => context.buyers.push(event.newBuyer)
                    )
                }
            },
        },
        tickets: {
            on: {
                FINISH: "initial",
                actions: reset
            },
            CANCEL: {
                target: "initial",
                actions: reset
            },
            BACK: "buyers",
        },
    },
   },
    {
        actions: {
         cleanContext: assign({
            selectedSeat: "",
            buyers: [],
         }),
        },
        guards: {
            moreThanOneBuyer: (context) => {
                return context.buyers.length > 0
            }
        },
     }
     );

export default bookingMachine;