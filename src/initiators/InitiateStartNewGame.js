import StartNewGame from '../actions/StartNewGame';

/**
 * Works as a simple controller, executed upon successfull route match to web request. These controllers map query/form
 * parameters and trigger the relevant Flux event. This makes the Flux action unaware of the HTTP stack, keeping them clean.
 * @param context
 * @param route
 * @returns {*|Promise}
 * @constructor
 */
export default function InitiateStartNewGame(context, route) {
    return context.executeAction(StartNewGame, {route});
}
