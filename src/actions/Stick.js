import Actions from '../constants/Actions';
import Deck from '../models/Deck';
import Hand from '../models/Hand';

export default function Stick(context) {
    return new Promise((resolve, reject) => {

        context.dispatch(Actions.PLAYER_STICK, {

        });

        resolve();

    });
}
